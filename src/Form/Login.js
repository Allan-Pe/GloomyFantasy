import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const inscription = useCallback(() => {
    if (username.length !== 0 && pwd.length >= 3) {
      Alert.alert("Bonjour " + username + " , votre mot de passe est " + pwd);
    }
  }, [username, pwd]);

  return (
    <View style={styles.body}>
      <View style={styles.containerText}>
        <Text style={styles.text}>Gloomy Fantasy</Text>
      </View>

      <View style={styles.container}>
        <View>
          <View style={styles.containerTextInput}>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder={"Username"}
              style={styles.textInput}
            />
            <TextInput
              value={pwd}
              onChangeText={setPwd}
              placeholder={"Password"}
              secureTextEntry={true}
              style={styles.textInput}
            />
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.text2}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.other}>
            <Text style={styles.text2}>Connect with</Text>
            <View style={styles.logo}>
              <TouchableOpacity style={styles.googleLogo}>
                <Text style={styles.textLogo}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.facebookLogo}>
                <Text style={styles.textLogo}>Facebook</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.text2}>Forgot Password ?</Text>
            <Text style={styles.text2}>Already have an account ?</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#A97141",
  },
  btnLogin: {
    marginTop: 10,
    justifyContent: "center",
    height: 40,
    width: "90%",
    backgroundColor: "#CFA17A",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    borderRadius: 5,
  },
  container: {
    flex: 2,
    width: "90%",
  },
  containerText: {
    flex: 1.3,
    justifyContent: "center",
  },
  containerTextInput: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  facebookLogo: {
    backgroundColor: "blue",
    borderRadius: 5,
    justifyContent: "center",
    padding: 7,
  },
  googleLogo: {
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
    padding: 7,
  },
  logo: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  other: {
    marginTop: 50,
    height: 150,
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 45,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  text2: {
    textAlign: "center",
    color: "white",
  },
  textInput: {
    height: 40,
    width: "90%",
    margin: "5%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "grey",
    backgroundColor: "#CFA17A",
  },
  textLogo: {
    color: "white",
    fontWeight: "bold",
  },
});
export default RegisterForm;
