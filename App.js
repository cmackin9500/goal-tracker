import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homeStack";

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
