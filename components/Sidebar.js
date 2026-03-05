import { computed, ref } from '../resources/javascript/vue.js'
import SidebarButton from './Buttons/SidebarButton.js'
import BaseRouter from '../Routes/BaseRouter.js'

export default {
    
    name: 'Sidebar',
    setup() {
      return {

      }
    },
  
    
  components: {
    SidebarButton
  },
  methods: { 
    defineRoute(id) {
      return new BaseRouter().findRoute(id)
    }
  },  
  template: `
    <div class="flex justify-center">
        <div class="sticky flex justify-items-start gap-2 bg-white shadow-lg p-3 rounded-md">
            <SidebarButton :url="defineRoute('main')" text="Home"/>
            <SidebarButton :url="defineRoute('about')" text="About"/>
            <SidebarButton :url="defineRoute('contact')" text="Contact"/>       
        </div>
    </div>
  `

}