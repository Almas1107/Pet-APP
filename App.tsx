import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Dogs, Cats, DogPage, CatPage } from "./screens";
import { CatIcon, DogIcon } from "./icons";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DogPage" component={Dogs}></Stack.Screen>
      <Stack.Screen name="DogInner" component={DogPage}></Stack.Screen>
    </Stack.Navigator>
  );
};
const HomeStack2 = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CatPage" component={Cats}></Stack.Screen>
      <Stack.Screen name="CatInner" component={CatPage}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: "#ececec",
          headerShown: false,
          tabBarItemStyle: { marginBottom: -20 },
        }}
      >
        <Tab.Screen
          name="Dogs"
          component={HomeStack}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => <DogIcon size={40} />,
          }}
        />
        <Tab.Screen
          name="Cats"
          component={HomeStack2}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => <CatIcon size={40} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
