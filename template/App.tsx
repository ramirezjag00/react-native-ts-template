import { SafeAreaView, StyleSheet, Text } from 'react-native'

import { COLORS, CONTAINERS } from '@themes'

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React Native TS Boilerplate</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    ...CONTAINERS?.centerCenter,
    backgroundColor: COLORS?.wildSand,
  },
  title: {
    color: COLORS?.mineShaft,
    fontSize: 40,
    textAlign: 'center',
  },
})

export default App
