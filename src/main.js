import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import icon from './components/icon.vue'
import * as common from "./utils/common.js"
import * as platform from '@/utils/platform'

import LottieVuePlayer from "@lottiefiles/vue-lottie-player";
Vue.use(LottieVuePlayer);

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBarcode,faAt ,faPhone, faCommentSms, faCode, faPenNib, faFaceSmile,
  faHeart,faFaceFrown,faFaceMeh} from '@fortawesome/free-solid-svg-icons'/* import font awesome icon component */
import { faLine, faVuejs, faNodeJs, faCss3, faGitAlt } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faBarcode,faAt, faLine, faPhone, faCommentSms, faCode, faPenNib, 
  faVuejs, faNodeJs, faCss3, faGitAlt,faHeart, faFaceSmile,faFaceMeh,faFaceFrown)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

import VCalendar from 'v-calendar';
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});
Vue.component('calendar', Calendar)
Vue.component('date-picker', DatePicker)

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import Vuelidate from "vuelidate";
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";

const messages = {
  required: "Field {attribute} is required",
  email: "Field {attribute} is not a proper email address",
  title: "Field {attribute} is not a proper email address"
};

Vue.use(Vuelidate);
Vue.config.productionTip = false;
Vue.use(VuelidateErrorExtractor, {
  messages,
  template: templates.singleErrorExtractor.foundation6,
  attributes: {
    name: 'Name',
    email: 'Email',
    title: 'Title'
  }
});


Vue.component('icon', icon)
Vue.prototype.common = common
Vue.prototype.$bus = new Vue();
Vue.prototype.platform = platform
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
