import { createApp } from "../../resources/javascript/vue.js";

import Sidebar from "../../components/Sidebar.js";

const app = createApp({
  template: `
    <div class="p-2">
      <Sidebar />
    </div>
   `
});

app.component("Sidebar", Sidebar);
app.mount("#app");