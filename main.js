import { createApp } from './resources/javascript/vue.js'

import Sidebar from './components/Sidebar.js'
import MyName from './components/Partials/Main/MyName.js'

const app = createApp({
  template: `
    <div class="p-2">
      <Sidebar />
      <div class="p-3"> 
        <MyName />
      </div>
    </div>
  `
})

app.component('Sidebar', Sidebar)
app.component('MyName', MyName)

app.mount('#app')