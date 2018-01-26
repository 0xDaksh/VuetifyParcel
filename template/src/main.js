import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
{{#router}}
import router from './router'
{{/router}}

Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
});
