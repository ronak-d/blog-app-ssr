import "@/styles/globals.css";
import Navbar from "../Components/Navbar/Navbar";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
