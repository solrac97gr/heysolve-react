import React from "react";
import TecnicansList from "../components/TecnicanList";
import { Filterheader } from "../components/Filterheader";

export const Tecnicans = () => {
  return (
    <>
      <Filterheader />
      <TecnicansList />
    </>
  );
};
