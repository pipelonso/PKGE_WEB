import { createApp } from './resources/javascript/vue.js'

import Counter from './components/Counter.js'
import Card from './components/Card.js'
import Sidebar from './components/Sidebar.js'

const app = createApp({
  template: `
    <div class="p-2">
      <Sidebar />
    </div>
  `
})

app.component('Counter', Counter)
app.component('Card', Card)
app.component('Sidebar', Sidebar)

app.mount('#app')