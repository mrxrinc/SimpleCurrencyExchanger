import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { width } from "utils/common";

const CountryDetailSkeleton = () => (
  <ContentLoader
    speed={1}
    width={600}
    height={500}
    viewBox="0 0 600 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <Rect x={width / 2 - 75} y="20" rx="7" ry="7" width="150" height="95" />
    <Rect x={width / 2 - 120} y="135" rx="7" ry="7" width="240" height="25" />
    <Rect x={width / 2 - 50} y="170" rx="7" ry="7" width="100" height="15" />
    <Rect x={20} y="220" rx="7" ry="7" width="150" height="20" />
    <Rect x={20} y="250" rx="7" ry="7" width="140" height="20" />
    <Rect x={20} y="280" rx="7" ry="7" width="110" height="20" />
  </ContentLoader>
);

export default CountryDetailSkeleton;
