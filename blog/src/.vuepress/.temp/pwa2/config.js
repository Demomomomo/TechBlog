import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "C:/Users/Demo/Desktop/temptmpDemoBlog-main/DemoBlog/blog/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "C:/Users/Demo/Desktop/temptmpDemoBlog-main/DemoBlog/blog/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
