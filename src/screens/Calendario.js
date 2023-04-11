import React, { useState }from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, 
  Modal, TouchableWithoutFeedback, Keyboard, Image, ScrollView, } from 'react-native';
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
        <TopNav 
            backgroundColor={isDarkmode ? themeColor.warning300 : "#FA8072" }
            middleContent=" Calendario" 
            leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.black}
          />
        }
        leftAction={() => navigation.goBack()}
      />

    </Layout>
    </>
  );
}

