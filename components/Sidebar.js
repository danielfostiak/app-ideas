import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Sidebar({
  ideas,
  userData,
  toggleCreating,
  setCreating,
}) {
  const { username } = useContext(UserContext);

  return (
    <aside className="w-64 shadow-xl float-left" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto min-h-screen bg-background dark:bg-gray-800">
        {userData.username === username ? (
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center  p-2 text-base font-normal text-background bg-green rounded-lg dark:text-white hover:bg-darkergreen dark:hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 6v12m6-6H6" />
                </svg>

                <button
                  onClick={() => {
                    toggleCreating();
                  }}
                  className="ml-3  font-medium"
                >
                  Create new idea
                </button>
              </a>
            </li>
          </ul>
        ) : null}

        <ul
          className={`pt-4  space-y-2  dark:border-gray-700 ${
            username === userData.username
              ? "mt-4 border-t border-gray-200"
              : ""
          }`}
        >
          <div className="flex items-center">
            <span className="flex items-center m-auto p-2 text-base capitalize text-foreground transition duration-75 text-center mx-auto rounded-lg bg-comment font-medium ml-4">
              {userData.username}'s ideas
            </span>
          </div>

          {ideas.map((idea, index) => (
            <li key={index}>
              <a className="flex items-center p-2 text-base text-foreground transition duration-75 rounded-lg hover:bg-comment dark:hover:bg-gray-700 dark:text-white group">
                <button
                  onClick={() => {
                    setCreating(false);
                  }}
                  className="ml-4 font-medium"
                >
                  {idea.title}
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
