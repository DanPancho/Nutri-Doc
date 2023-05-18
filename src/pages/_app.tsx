import AuthContext from "@/contexts/authContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [email, setEmail] = useState("");
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
    <AuthContext.Provider value={{ email, setEmail }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
