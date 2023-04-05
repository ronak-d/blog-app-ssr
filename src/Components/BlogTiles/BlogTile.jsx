import Link from "next/link";
import React from "react";

const BlogTile = ({ data }) => {
  console.log(data);

  return data.map((blog, index) => {
    return (
      <div className="my-6 mx-3">
        <Link href={`/singleBlog/${blog.id}`}>
          <div className=" drop-shadow-2xl lg:flex rounded justify-between sm:w-4/5 container p-2 border-2 border-sky-500">
            <div className="border-solid sm:w-20 my-1">{index + 1}</div>
            <div className="flex-wrap my-1">{blog.title}</div>
            <div className=" flex-wrap my-1">{blog.date}</div>
          </div>
        </Link>
      </div>
    );
  });
};

export default BlogTile;
