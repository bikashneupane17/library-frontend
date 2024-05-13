import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="main">{children}</main>

      <Footer />
    </>
  );
};
