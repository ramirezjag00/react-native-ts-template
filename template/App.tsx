import { SafeAreaView, StyleSheet, Text } from 'react-native'

import { COLORS, CONTAINERS } from './src/constants/themes'

import packageJSON from './package.json'

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        React Native Template Typescript - RN {packageJSON.dependencies['react-native']}
      </Text>
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
