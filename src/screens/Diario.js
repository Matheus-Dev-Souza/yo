import React, { useState }from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, 
  Modal, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import {
  Layout,TopNav,Text,themeColor,useTheme,TextInput,Button, 
} from "react-native-rapi-ui";

import { initializeApp, getApps } from "firebase/app";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  {/* const [text, setText] = React.useState(''); */}
  const [patrimony, setPatrimony] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  

  function handleNewOrder() {
    setIsLoading(true);
  }

  return (
    <>  
    <Layout >
        <TopNav middleContent="Diary" leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.black}
          />
        }
        leftAction={() => navigation.goBack()}
      />



<View style={{
                marginTop: 150,
                padding: 10,
               // backgroundColor:'#00FFFF',
                borderRadius:6.
              }}>

                  <Text  style={{ color:"blue", fontSize: 25, fontWeight:"600",}}>
                     Você Consegui Fazer as coisas Hoje? 
                  </Text>
      <TextInput
          onChangeText={setPatrimony}
          placeholder="Tell us about your day..."
          placeholderTextColor="#5D737E"
        />
 
        <Button
          style={{
                marginTop: 10,
              }}
              text="Save"
              isLoading={isLoading} onPress={handleNewOrder}
              >
        </Button>
</View>

<View style={{
                marginTop: 150,
                padding: 10,
               // backgroundColor:'#00FFFF',
                borderRadius:6.
              }}>

                  <Text  style={{ color:"blue", fontSize: 25, fontWeight:"600",}}>
                     Você Consegui Fazer as coisas Hoje? 
                  </Text>
      <TextInput
          onChangeText={setPatrimony}
          placeholder="Tell us about your day..."
          placeholderTextColor="#5D737E"
        />
 
        <Button
          style={{
                marginTop: 10,
              }}
              text="Save"
              isLoading={isLoading} onPress={handleNewOrder}
              >
        </Button>
</View>



    </Layout>
    </>
  );
}

