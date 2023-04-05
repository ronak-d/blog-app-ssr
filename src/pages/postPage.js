import React from "react";

const PostPage = ({ dis }) => {
  return (
    <>
      <div className="my-6 mx-3">
        <div className=" drop-shadow-2xl lg:flex rounded justify-around sm:w-4/5 container p-2 border-2 border-sky-500">
          <div className="border-solid sm:w-20 my-1">{`@`}</div>
          {/* <div className="flex-wrap my-1">{blog.title}</div> */}
          <div className="flex-wrap my-1">{dis}</div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
