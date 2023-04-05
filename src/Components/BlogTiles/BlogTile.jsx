import Link from "next/link";
import React from "react";

const BlogTile = ({ data }) => {
  console.log(data);

  return data.map((blog, index) => {
    return (
      <div className="my-6 mx-3">
        <Link href={`/singleBlog/${blog.it}`}>
          <div className="shadow-lg lg:flex rounded justify-between sm:w-4/5 container p-2 ">
            <div className="border-solid sm:w-20 my-1 font-medium">
              {index + 1}
            </div>
            <div className="flex-wrap my-1 font-medium">{blog.title}</div>
            <div className="flex-wrap my-1 font-medium">{`-ronak`}</div>
            {/* <button className="flex-wrap my-1 primary font-medium">Edit</button> */}
          </div>
        </Link>
      </div>
    );
  });
};

export default BlogTile;
