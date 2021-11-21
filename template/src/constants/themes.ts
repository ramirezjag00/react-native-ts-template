import { StyleSheet } from 'react-native'

import type {
  ColorsInterface,
  ThemesInterface,
  StyleSheetInterface,
} from '@customtypes/themes'

const COLORS: ColorsInterface = {
  wildSand: '#f7f7f7',
  mineShaft: '#202020',
}

const CONTAINERS: StyleSheetInterface = StyleSheet.create({
  centerCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

const THEMES: ThemesInterface = {
  COLORS,
  CONTAINERS,
}

export { COLORS, CONTAINERS, THEMES }
