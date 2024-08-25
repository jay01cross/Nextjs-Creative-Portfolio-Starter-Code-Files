"use client";

import React from "react";
import useScreenSize from "./hooks/useScreenSize";

const Responsive = ({ children }) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default Responsive;
