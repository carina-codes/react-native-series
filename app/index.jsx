import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

import icedCoffeeImg from "@/assets/images/iced-coffee.png"

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode='cover' 
        style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href="/menu" style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              View Menu
            </Text>
          </Pressable>
        </Link>

        <Link href="/contact" style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Contact Us
            </Text>
          </Pressable>
        </Link>

      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1, 
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,.5)',
    marginBottom: 100,
  },
  link: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    padding: 4,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  button: {
    height: 60,
    width: 150,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,.75)',
    padding: 6,
    justifyContent: 'center',
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    padding: 4,
  }
})