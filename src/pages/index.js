import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  // console.log(data);
  return (
    <>
      <h1 className="border-solid border-2 border-sky-500">hello</h1>
    </>
  );
}

// this runs on every build time - it is used when we need pre-fetched data.
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const options = {
//     method: "GET",
//     url: "https://crypto-news16.p.rapidapi.com/news/top/10",
//     headers: {
//       "X-RapidAPI-Key": "b038d947admsh5d40e69154679f1p14c275jsn8bf445dca1c9",
//       "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
//     },
//   };
//   const res = await axios.request(options);
//   const data = res.data;

//   // By returning { props: { data } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       data,
//     },
//   };
// }
