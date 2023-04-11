import React from "react";
import { themeColor, useTheme } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default (props) => {
  const { isDarkmode } = useTheme();
  const [pass, setPass] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <Ionicons
      name={props.icon}
      style={{ marginBottom: -7 }}
      size={24}
      color={
        props.focused
          ? isDarkmode
            ? themeColor.black
            : themeColor.primary
          : "black"
      }
    />
  );
};
