import React from "react";
import { useRouter } from "next/router";
import PostPage from "../postPage";
import axios from "axios";

const SingleBlogView = () => {
  const router = useRouter();
  const id = router.query.SingleBlogView;
  console.log(id);

  return <>{<PostPage id={id} />}</>;
};

export default SingleBlogView;
