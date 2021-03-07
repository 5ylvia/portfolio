import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1264,
      lg: 1904,
    },
    scrollBarWidth: 24,
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#939597',
        secondary: '#e0e0e0',
        accent: '#f5df4d',
      },
    },
  },
})

export default vuetify