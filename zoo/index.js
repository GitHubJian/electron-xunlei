import components from './components/index.js'
import './css/reset.css'

const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
