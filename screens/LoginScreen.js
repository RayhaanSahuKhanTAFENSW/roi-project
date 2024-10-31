import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <View style={styles.button}>
      <Button 
        style={styles.button}
        title='Go to Sign Up'
        onPress={() => {
          props.navigation.navigate('SignUp')
        }}
      />
      </View>
      <View style={styles.button}>
      <Button 
        style={styles.button}
        title='Go to Error'
        onPress={() => {
          props.navigation.navigate('Error')
        }}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    margin: 10,
  }
});