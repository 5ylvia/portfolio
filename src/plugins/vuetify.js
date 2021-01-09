import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#939597',
        secondary: '#818a91',
        anchor: '#F5DF4D',
      },
    },
  },
})

export default vuetify