import React from "react";
import { useRouter } from "next/router";
import PostPage from "../postPage";

const SingleBlogView = () => {
  const router = useRouter();
  const id = router.query.SingleBlogView;

  console.log(id);

  return <>{<PostPage id={id} />}</>;
};

export default SingleBlogView;

// making the specific paths static
// export async function getStaticPaths() {
//   const res = await axios.get("");
//   const data = res.data;

//   const paths = data.results.map((currentPokem) => {
//     return {
//       // need to give compulsary dynamic route name.
//       params: {
//         PokemonName: currentPokem.name,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false, // can also be true or 'blocking'
//   };
// }

// // helping to receive data via inbuilt context.
// // export async function getStaticProps(context) {
// //   const name = context.params.PokemonName;
// //   const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
// //   const data = res.data;

// //   return {
// //     props: {
// //       SinglepokemonData: data,
// //     },
// //   };
// // }
