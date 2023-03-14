import React from "react";
import { featureData } from "../data/featureData";
import Feature from "./Feature";

const FeatureIndex = () => {
  return (
    <>
      {featureData.map((item, index) => {
        return (
          <Feature
            key={index}
            header={item.header}
            subHead={item.subHead}
            image={item.image}
            video={item.video}
          />
        );
      })}
    </>
  );
};

export default FeatureIndex;
