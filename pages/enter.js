import { auth, firestore, googleAuthProvider } from "../lib/firebase";
import { UserContext } from "../lib/context";
import { useEffect, useState, useCallback, useContext } from "react";
import SignInForm from "../components/SignInForm";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";

export default function Enter(props) {
  const { user, username } = useContext(UserContext);
  const router = useRouter();

  if (user && username) {
    router.push({
      pathname: "/",
    });
  }

  return <main>{user ? !username ? <UsernameForm /> : null : <SignIn />}</main>;
}

function SignIn() {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      alert(error.message);
    }
  };

  return <SignInForm googleClick={signInWithGoogle} />;
}

function UsernameForm() {
  const [formValue, setFormValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, username } = useContext(UserContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    const userDoc = firestore.doc(`users/${user.uid}`);
    const usernameDoc = firestore.doc(`usernames/${formValue}`);

    const batch = firestore.batch();
    batch.set(userDoc, {
      username: formValue,
      photoURL: user.photoURL,
      displayName: user.displayName,
    });
    batch.set(usernameDoc, { uid: user.uid });

    try {
      await batch.commit();
    } catch (error) {
      alert(error.message);
    }
  };

  const onChange = (e) => {
    const val = e.target.value.toLowerCase();
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    // Only set form value if length is < 3 OR it passes regex
    if (val.length < 3) {
      setFormValue(val);
      setLoading(false);
      setIsValid(false);
    }

    if (re.test(val)) {
      setFormValue(val);
      setLoading(true);
      setIsValid(false);
    }
  };

  useEffect(() => {
    checkUsername(formValue);
  }, [formValue]);

  const checkUsername = useCallback(
    debounce(async (username) => {
      if (username.length >= 3) {
        const ref = firestore.doc(`usernames/${username}`);
        const { exists } = await ref.get();
        setIsValid(!exists);
        setLoading(false);
      }
    }, 500)
  );

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Choose your username
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="text" className="sr-only">
                  Username
                </label>
                <input
                  onChange={onChange}
                  autoComplete="off"
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="text-center justify-center">
              <UsernameMessage
                username={formValue}
                isValid={isValid}
                loading={loading}
              />
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={onSubmit}
                disabled={!isValid}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function UsernameMessage({ username, isValid, loading }) {
  if (loading) {
    return <span className="text-center">Checking...</span>;
  } else if (isValid) {
    return <span className="text-center">{username} is available!</span>;
  } else if (username && !isValid) {
    return <span className="text-center">That username is taken!</span>;
  } else {
    return <span></span>;
  }
}
