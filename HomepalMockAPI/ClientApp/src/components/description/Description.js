import React from "react";
import { About } from "./unit/About";
import { Introduction } from "./unit/Introduction";

export const Description = ({ tag }) => {
  const components = {
    "introduction": Introduction,
    "about-the-api": About,
  };
  const TagName = components[tag];
  return <TagName />;
};
