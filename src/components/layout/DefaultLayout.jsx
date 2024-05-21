import { Footer } from "./Footer";
import { Header } from "./Header";
import React from "react";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="main">{children}</main>

      <Footer />
    </>
  );
};
