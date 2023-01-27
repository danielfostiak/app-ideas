import { use, useState } from "react";

export default function CreateIdea({ handleSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  return (
    <main>
      <div className="">
        <div className=" mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className="h-screen bg-foreground shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-foreground px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="My awesome app"
                      />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Short description of your app"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Content
                  </label>
                  <div className="mt-1">
                    <textarea
                      onChange={(e) => setContent(e.target.value)}
                      id="description"
                      name="description"
                      rows={10}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Include here your app's details. What do you want to make? What problems does it solve? Who are you looking for to help you make it?"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(title, description, content);
                  }}
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
