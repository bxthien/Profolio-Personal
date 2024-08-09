/* eslint-disable @typescript-eslint/ban-types */
import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex justify-center">
        <div
          className="container flex w-full flex-col"
          style={{ minHeight: "calc(100vh - 526px)" }}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
