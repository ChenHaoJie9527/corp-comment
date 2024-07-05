import React from "react";
import Header from "./Header";

type Props = {};

export default function Container({}: Props) {
  return (
    <div className="container">
      <Header />
      <FeedbackList />
    </div>
  );
}
