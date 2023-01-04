export default function Sidebar() {
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto min-h-screen bg-background dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-foreground rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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

              <span className="ml-3 font-medium">Create new idea</span>
            </a>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-foreground transition duration-75 rounded-lg hover:bg-comment dark:hover:bg-gray-700 dark:text-white group"
            >
              <span className="ml-4 font-medium">Idea 1</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-foreground transition duration-75 rounded-lg hover:bg-comment dark:hover:bg-gray-700 dark:text-white group"
            >
              <span className="ml-4 font-medium">Idea 2</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-foreground transition duration-75 rounded-lg hover:bg-comment dark:hover:bg-gray-700 dark:text-white group"
            >
              <span className="ml-4 font-medium">Idea 3</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
