import React, { useState }from "react";
import { StyleSheet, 
  View, 
  TouchableOpacity, 
  Image, 
  TextInput,
  Touchable,
  ScrollView,
} from 'react-native';
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,

} from "react-native-rapi-ui";

import { initializeApp, getApps } from "firebase/app";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  const [text, setText] = React.useState(''); 
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
            middleContent=" Doutor Profile" 
            leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
          />
        }
        leftAction={() => navigation.goBack()}
      />

<View style={{
                marginTop: 20,
                padding: 30,
              }}>
            
      <TextInput
      style={{ backgroundColor: '#DDDDDD', padding: 10, marginTop: 10, borderRadiu: 10, }}// css
          onChangeText={setPatrimony}
          placeholder="Nome Completo"
          placeholderTextColor="#5D737E"
        />
		  <TextInput 
      style={{ backgroundColor: '#DDDDDD', padding: 10, marginTop: 10, borderRadiu: 10, }}// css
          onChangeText={setPatrimony}
          placeholder="Telefone"
          placeholderTextColor="#5D737E"
        />
		  <TextInput
      style={{ backgroundColor: '#DDDDDD', padding: 10, marginTop: 10, borderRadiu: 10, }}// css
          onChangeText={setPatrimony}
          placeholder="CRP"
          placeholderTextColor="#5D737E"
        />
		  <TextInput
      style={{ backgroundColor: '#DDDDDD', padding: 10, marginTop: 10, borderRadiu: 10, }}// css
          onChangeText={setPatrimony}
          placeholder="Data de Nascimento"
          placeholderTextColor="#5D737E"
        />
		  <TextInput
      style={{ backgroundColor: '#DDDDDD', padding: 10, marginTop: 10, borderRadiu: 10, }}// css
          onChangeText={setPatrimony}
          placeholder="E-mail"
          placeholderTextColor="#5D737E"
        />
   		<TextInput
      style={{ backgroundColor: '#DDDDDD', padding: 10, marginTop: 10, borderRadiu: 10, }}// css
          onChangeText={setPatrimony}
          placeholder="CPF"
          placeholderTextColor="#5D737E"
        />
		  <TextInput
      style={{ backgroundColor: '#DDDDDD', padding: 10, marginTop: 10, borderRadiu: 10, }}// css
          onChangeText={setPatrimony}
          placeholder="CPEscola/Clinica F"
          placeholderTextColor="#5D737E"
        />
		<TextInput style={{ backgroundColor: '#DDDDDD', padding: 10, marginTop: 10, borderRadiu: 20, }} // css
          onChangeText={setPatrimony}
          placeholder="Tipo de Pessoa"
          placeholderTextColor="#5D737E"
			/> 
    <TouchableOpacity style={{ 
      alignItems:"center", 
      backgroundColor: "#FA8072", 
      padding: 10, 
      borderRadius: 10, 
      marginTop: 10, 
      }}>
              
              <Text> Salvar </Text>

    </TouchableOpacity>

</View>
    </Layout>

    </>
  );
}

