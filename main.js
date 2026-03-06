import { createApp, ref } from './resources/javascript/vue.js'

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
    <div class="p-3 flex justify-center"> 
      <span> Yes, this is my portfolio website! It's now in development. Come back in some months! </span>
    </div>
  `,
  setup() {

    const urlMap = ref()
  
    return {
      urlMap
    }
  },
  mounted () {
    this.urlMap = window.location.href
    window.history.replaceState({ page: 1 }, "Main", this.urlMap + !this.urlMap.endsWith("#main")?'#main':'');
  }
})

app.component('Sidebar', Sidebar)
app.component('MyName', MyName)

app.mount('#app')