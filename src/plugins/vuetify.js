import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const vuetify = new Vuetify({
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