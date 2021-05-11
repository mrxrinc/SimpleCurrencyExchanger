import React from "react";
import { createIconSetFromFontello } from "react-native-vector-icons";
import fontelloConfig from "utils/fontIconConfig.json";

const FontIcon = createIconSetFromFontello(fontelloConfig);

const Icon = (props: any) => {
  return <FontIcon {...props} />;
};

export default Icon;
