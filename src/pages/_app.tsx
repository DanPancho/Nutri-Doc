import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const storedUID =
      typeof window !== "undefined" && window.localStorage.getItem("UDEN");
    if (router.pathname !== "/") {
      if (storedUID === null) {
        router.push("/");
      }
    } else {
      if (storedUID !== null) {
        router.push("/home");
      }
    }
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>Nutri-Doc</title>
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/nutridoc-4ee6b.appspot.com/o/NutriDoc.png?alt=media&token=3020a8bf-650b-4a94-b81b-49c68899137b"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
