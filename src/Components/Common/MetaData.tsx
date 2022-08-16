import React from "react";
import { Helmet } from "react-helmet";
const MetaData = (header: any) => {
  return (
    <Helmet>
      <title>{header.title}</title>
    </Helmet>
  );
};

export default MetaData;
