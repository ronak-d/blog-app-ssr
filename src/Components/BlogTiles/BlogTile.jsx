import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const BlogTile = ({ data }) => {
  console.log("data", data);

  const [newdata, setNewdata] = useState([]);

  async function handleDelete(id) {
    console.log(id);
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setNewdata(data.filter((e) => e.id !== data.id));
    console.log(newdata);
  }
  // if (newdata.legth > 0) {
  return data.map((blog, index) => {
    return (
      <div className="my-6 mx-3">
        <div className="shadow-md lg:flex rounded justify-between sm:w-4/5 container p-2 ">
          <Link href={`/singleBlog/${blog.id}`}>
            <div className="lg:flex">
              <div className="border-solid sm:w-20 my-1 font-medium">
                {index + 1}
              </div>
              <div className="flex-wrap my-1 font-medium">{blog.title}</div>
            </div>
          </Link>
          <div className="my-1 font-medium">
            <button className="px-3 shadow-md">Edit</button>
            <button
              onClick={(e) => {
                handleDelete(blog.id);
              }}
              className="px-3 mx-2 shadow-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  });
  // }
};

export default BlogTile;
