import { AppRegistry } from "react-native";
import App from "./src/screens/Root";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
