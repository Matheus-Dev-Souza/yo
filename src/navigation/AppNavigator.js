import React, { useContext } from "react";
import { initializeApp, getApps } from "firebase/app";
import "firebase/storage"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// componets
import { useTheme, themeColor } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";
import Task from "../components/utils/Task";
import Button from "../components/utils/Button";
//Screens
import Home from "../screens/Home";
import SecondScreen from "../screens/Consulta";
import Contato from "../screens/Contato"; 

import About from "../screens/About";
import Profile from "../screens/Profile";
import Calendario from "../screens/Calendario";
import Relatorio from "../screens/Relatorio";
import Loading from "../screens/utils/Loading";
// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";
import { AuthContext } from "../provider/AuthProvider";
import Consulta from "../screens/Consulta";
import Diario from "../screens/Diario";
import Mood from "../screens/Mood";
import Chat from "../screens/Chat";


// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: "AIzaSyDILMAX5DEPAVzBH8LxTxbudNgtbt1zxEA",
  authDomain: "loginaut-15518.firebaseapp.com",
  projectId: "loginaut-15518",
  storageBucket: "loginaut-15518.appspot.com",
  messagingSenderId: "370820787726",
  appId: "1:370820787726:web:a88a5dee50f3878487565f",
  measurementId: "G-B33VN2DNJC"
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const AuthStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="Consulta" component={Consulta} />
      <MainStack.Screen name="Diario" component={Diario} />
      <MainStack.Screen name="Chat" component={Chat} />
      <MainStack.Screen name="Mood" component={Mood} /> 
      <MainStack.Screen name="Contato" component={Contato} />

    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.black : "#000000",
          backgroundColor: isDarkmode ? themeColor.black : "#FA8072", // tab laranja em baixo 
        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"md-home"} />
          ),
        }}
      />

<Tabs.Screen
        
        name="Relatório"
        component={Relatorio}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Relatório" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"ios-albums"} />
          ),
        }}
      />

<Tabs.Screen
        name="Calendario"
        component={Calendario}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Calendario" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"md-calendar"} />
          ),
        }}
      />


<Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Profile" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"person"} />
          ),
        }}
      />

    </Tabs.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
