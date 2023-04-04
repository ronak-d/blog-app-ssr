import React from "react";
import { useRouter } from "next/router";
import PostPage from "../postPage";

const SingleBlogView = () => {
  const router = useRouter();
  const dis = router.query.SingleBlogView;
  console.log(router.query);
  return (
    <>
      <PostPage dis={dis} />
    </>
  );
};

export default SingleBlogView;
