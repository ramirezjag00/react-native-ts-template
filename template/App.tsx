import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React Native TS Boilerplate</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: '#202020',
  },
})

export default App
