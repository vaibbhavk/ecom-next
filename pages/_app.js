import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { motion, useScroll, useTransform } from "framer-motion";

function MyApp({ Component, pageProps }) {
  let { scrollYProgress } = useScroll();
  let width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <StateContext>
      <motion.div style={{ width }} className="page-progress"></motion.div>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
