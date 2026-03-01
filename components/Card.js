export default {
  name: 'Card',

  props: {
    title: String
  },

  template: `
    <div style="border:1px solid #ccc; padding:1rem; border-radius:8px;">
      <h2>{{ title }}</h2>
      <slot></slot>
    </div>
  `
}