import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { pdfjs } from "react-pdf";

import { useSession } from "@modules/auth/hooks";

import { Header, Navigation } from "@modules/core/components";

import styles from "./ProtectedLayout.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ProtectedLayout = (): JSX.Element => {
  useSession(1000);
  return (
    <main className={styles.mainContainer}>
      <Header />
      <section className={styles.pageContent}>
        <Outlet />
      </section>
      <Navigation />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </main>
  );
};

export default ProtectedLayout;
