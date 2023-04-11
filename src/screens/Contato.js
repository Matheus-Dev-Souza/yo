import React, { useState, useEffect  }from "react";
import { 
    StyleSheet, 
    View, 
    FlatList, 
    TouchableOpacity, 
    Modal, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Image,
    textInput,
    StatusBar,
    ScrollView,
    Alert
} from 'react-native';
import { Icon } from "react-native-elements";
import  axios  from "axios";
import {
  Layout, 
  TopNav, 
  Text, 
  themeColor, 
  useTheme, 
  TextInput, 
  Button, 
} from "react-native-rapi-ui";

import { initializeApp, getApps } from "firebase/app";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  {/* const [text, setText] = React.useState(''); */}
  const [patrimony, setPatrimony] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  

  function handleNewOrder() {
    setIsLoading(true);
  }

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', false);
    axios.get('https://randomuser.me/api/?results=150').then(({ data }) => {
      setUsers(data.results);
    });
  }, []);

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

<View>
 <View style={{ flex: 1, paddingTop: 40 }}>
      <View style={styles.container}>
        <View style={styles.searchView}>
          <View style={styles.inputView}>
            <TextInput
              defaultValue={searchText}
              style={styles.input}
              placeholder='Search'
              textContentType='name'
              onChangeText={(text) => {
                setSearchText(text);
                if (text === '') {
                  return setFilteredUsers([]);
                }
                const filtered_users = users.filter((user) =>
                  user.name.first.toLowerCase().startsWith(text.toLowerCase())
                );
                setFilteredUsers(filtered_users);
              }}
              returnKeyType='search'
            />
            {searchText.length === 0 ? (
              <TouchableOpacity>
                <Icon name='search' size={24} color='#333' />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setSearchText('');
                  setFilteredUsers([]);
                }}
              >
                <Icon name='cancel' size={24} color='#333' />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {filteredUsers.length > 0 ? (
          <ScrollView>
            {filteredUsers.map((user) => (
              <TouchableOpacity
                style={styles.userCard}
                onPress={() => {
                  Alert.alert(
                    `${user.name.first} ${user.name.last}`,
                    `You can call me at ${user.phone}`
                  );
                }}
              >
                <Image
                  style={styles.userImage}
                  source={{ uri: user.picture?.large }}
                />
                <View style={styles.userCardRight}>
                  <Text
                    style={{ fontSize: 18, fontWeight: '500' }}
                  >{`${user.name.first} ${user.name.last}`}</Text>
                  <Text>{`${user?.phone}`}</Text>
                </View>
              </TouchableOpacity>
            ))}
            <View style={{ height: 50 }}></View>
          </ScrollView>
        ) : searchText.length > 0 ? (
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxText}>No user found</Text>
          </View>
        ) : (
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxText}>Search for users</Text>
          </View>
        )}
      </View>
    </View>
</View>
    </Layout>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 12,
      paddingTop: 10,
    },
    searchView: {
      display: 'flex',
      flexDirection: 'row',
    },
    inputView: {
      flex: 1,
      height: 40,
      backgroundColor: '#dfe4ea',
      paddingHorizontal: 10,
      borderRadius: 6,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      height: 40,
      fontSize: 18,
    },
    userCard: {
      backgroundColor: '#fafafa',
      paddingVertical: 6,
      paddingHorizontal: 6,
      borderRadius: 10,
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    userImage: {
      width: 40,
      height: 40,
      borderRadius: 100,
    },
    userCardRight: {
      paddingHorizontal: 10,
    },
    messageBox: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    messageBoxText: {
      fontSize: 20,
      fontWeight: '500',
    },
  });
