import { ref, computed } from '../resources/javascript/vue.js'

export default {
  name: 'Counter',

  setup() {
    const count = ref(0)

    const double = computed(() => count.value * 2)

    function increment() {
      count.value++
    }

    return {
      count,
      double,
      increment
    }
  },

  template: `
    <div>
      <button @click="increment">
        Contador: {{ count }}
      </button>
      <p>Doble: {{ double }}</p>
    </div>
  `
}