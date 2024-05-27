import { Footer } from "./Footer";
import { Header } from "./Header";
import React from "react";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />

      {/* main section */}
      <main className="main">{children}</main>

      <Footer />
    </>
  );
};
