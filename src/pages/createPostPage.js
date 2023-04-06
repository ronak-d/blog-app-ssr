import React, { useState } from "react";
import uuid from "uuid";

const CreatePostPage = () => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    userId: "6",
  });

  function handleBlog(e) {
    let key = e.target.name;
    let value = e.target.value;

    setBlog({ ...blog, [key]: value });
  }
  console.log(blog);

  // making an post req for blogs
  function handleSubmitBlog(e) {
    e.preventDefault();

    console.log("check");
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "POST",
      body: JSON.stringify({ blog }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <div className="flex items-center justify-center m-3 p-1">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Title
            </label>
            <input
              class="shadow appearance-none border border-sky-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="title"
              onChange={handleBlog}
              type="text"
              placeholder="..."
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="description"
            >
              Description
            </label>
            <input
              class="shadow appearance-none border border-sky-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              onChange={handleBlog}
              type="text"
              placeholder="..."
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmitBlog}
            >
              Submit Blog
            </button>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2023 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default CreatePostPage;
