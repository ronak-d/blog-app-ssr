import React from "react";
import { useRouter } from "next/router";
import PostPage from "../PostPage";

const SingleBlogView = ({ data }) => {
  console.log(data);

  const router = useRouter();
  const id = router.query.SingleBlogView;
  console.log(id);

  return (
    <>
      <div className="my-6 mx-3">
        <div className="shadow-md sm:w-4/5 container">
          {/* title */}
          <div className="shadow-md lg:flex rounded justify-between  p-2">
            <div className="border-solid sm:w-20 my-1 font-medium">
              {data.id}
            </div>
            <div className="flex-wrap my-1 font-medium">
              Title: {data.title}
            </div>
            <div className="my-1 font-medium">
              <button className="px-3 shadow-md">Edit</button>
              <button className="px-3 mx-2 shadow-md">Delete</button>
            </div>
          </div>
          {/* body */}
          <div className="flex-wrap my-1 font-medium container p-2">
            Description: {data.body}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogView;

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        SingleBlogView: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.SingleBlogView;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
