import React from "react";
import Header from "./Header";

type Props = {};

export default function Container({}: Props) {
  return (
    <main className="container">
      <Header />
    </main>
  );
}
