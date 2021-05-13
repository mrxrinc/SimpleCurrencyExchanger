import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";

const CountriesListSkeleton = () => (
  <ContentLoader
    speed={1}
    width={600}
    height={500}
    viewBox="0 0 600 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <Rect x="20" y="20" rx="7" ry="7" width="40" height="25" />
    <Rect x="70" y="20" rx="7" ry="7" width="260" height="25" />

    <Rect x="20" y="80" rx="7" ry="7" width="40" height="25" />
    <Rect x="70" y="80" rx="7" ry="7" width="260" height="25" />

    <Rect x="20" y="140" rx="7" ry="7" width="40" height="25" />
    <Rect x="70" y="140" rx="7" ry="7" width="260" height="25" />

    <Rect x="20" y="200" rx="7" ry="7" width="40" height="25" />
    <Rect x="70" y="200" rx="7" ry="7" width="260" height="25" />

    <Rect x="20" y="260" rx="7" ry="7" width="40" height="25" />
    <Rect x="70" y="260" rx="7" ry="7" width="260" height="25" />

    <Rect x="20" y="320" rx="7" ry="7" width="40" height="25" />
    <Rect x="70" y="320" rx="7" ry="7" width="260" height="25" />

    <Rect x="20" y="380" rx="7" ry="7" width="40" height="25" />
    <Rect x="70" y="380" rx="7" ry="7" width="260" height="25" />

    <Rect x="20" y="440" rx="7" ry="7" width="40" height="25" />
    <Rect x="70" y="440" rx="7" ry="7" width="260" height="25" />

    <Rect x="20" y="500" rx="7" ry="7" width="40" height="25" />
    <Rect x="70" y="500" rx="7" ry="7" width="260" height="25" />
  </ContentLoader>
);

export default CountriesListSkeleton;
