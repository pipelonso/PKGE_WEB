import { createApp } from './resources/javascript/vue.js'

import Counter from './components/Counter.js'
import Card from './components/Card.js'

const app = createApp({
  template: `
    <div>
      <h1>Vue 3 + Composition API 😼</h1>
      <Card title="Mi tarjeta bonita">
        <Counter />
      </Card>
    </div>
  `
})

app.component('Counter', Counter)
app.component('Card', Card)

app.mount('#app')