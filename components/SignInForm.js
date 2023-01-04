import { LockClosedIcon } from "@heroicons/react/20/solid";
import GoogleButton from "react-google-button";
import { useState } from "react";

export default function SignInForm({
  googleClick,
  toggleSignIn,
  signInWithEmail,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmail(email, password);
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/logo.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-background">
              Sign in to your account
            </h2>
            <div className="text-sm text-center mt-4">
              <a
                onClick={toggleSignIn}
                className="font-medium text-purple hover:text-darkerpurple"
              >
                New here? Create and account.
              </a>
            </div>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange focus:outline-none focus:ring-orange sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple focus:outline-none focus:ring-purple sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue focus:ring-blue"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm font-medium text-blue"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a className="font-medium text-red hover:text-darkerred">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-green py-2 px-4 text-sm font-medium text-background hover:bg-darkergreen focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
            <div className="flex flex-col items-center">
              <span className="divider font-medium text-center font text-background">
                Or continue with
              </span>
              <GoogleButton className="mt-4" onClick={googleClick} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
