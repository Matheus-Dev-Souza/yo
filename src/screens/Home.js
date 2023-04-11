import React from "react";
import { View, Linking } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  return (
    <> 
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 10,
          borderRadius: 100,
          backgroundColor: '#FDF8F5',
        }}
      >
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Bem Vindo!  a Zulu seu Assistente.
            </Text>

             {/*
            <Button
              style={{ marginTop: 10 }}
              text="Diario"
              status="info"
              onPress={() => Linking.openURL("https://rapi-ui.kikiding.space/")}
            />  
            */}
            <Button
              status="danger300"
              text="Contato"
              onPress={() => {
                navigation.navigate("Contato");
              }}
              style={{
                marginTop: 10,
              }}
            />
          
            <Button
              status="danger300"
              text="Consulta"
              onPress={() => {
                navigation.navigate("Consulta");
              }}
                style={{
                marginTop: 10,
              }}
            />
       
            <Button
                status="danger300"
                text="Diario"
                onPress={() => {
                navigation.navigate("Diario");
              }}
                style={{
                marginTop: 10,
              }}
            />
       <Button
            status="danger300"
            text="Chat"
            onPress={() => {
            navigation.navigate("Chat");
        }}
            style={{
            marginTop: 10,
        }} 

        />
         <Button
              status="danger300"
              text="Mood"
              onPress={() => {
                navigation.navigate("Mood");
              }}
              style={{
                marginTop: 10,
                backgroundColor:'#C0817C',
              }}
            />  
      
            <Button
              status="black"
              text="Logout"
              onPress={() => {
                signOut(auth);
              }}
              style={{
                marginTop: 10,
              }}
            />
          
     {/*
      <Button
              text={isDarkmode ? "Light Mode" : "Dark Mode"}
              status={isDarkmode ? "success" : "gray"}
              onPress={() => {
                if (isDarkmode) {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
              style={{
                marginTop: 10,
              }}
            /> 
   */}
          </SectionContent>
        </Section>
      </View>
    </Layout>
    </>
  );
}
