import {NavBar} from './partials/_navbar.js'
import {SettingsPanel} from './partials/_settings-panel.js'
import {Footer , MySpinner ,MyError } from './partials/_footer.js'
import {SideBar} from './partials/_sidebar.js'

		import {ClientComponent} from './components/client/js/index.js'
		
		import {FactureComponent} from './components/facture/js/index.js'
		
		import {LignefactureComponent} from './components/lignefacture/js/index.js'
		
		import {NotificationComponent} from './components/notification/js/index.js'
		
		import {Notification_has_prestataireComponent} from './components/notification_has_prestataire/js/index.js'
		
		import {PrestataireComponent} from './components/prestataire/js/index.js'
		
		import {ServiceComponent} from './components/service/js/index.js'
		
		import {TokenComponent} from './components/token/js/index.js'
		
		import {UserComponent} from './components/user/js/index.js'
		
	
const API_URI = "https://zirios.herokuapp.com/web/"
//const API_URI = "http://localhost/bac/web/"

const CDN_URI = ""

	Vue.component('v-select', VueSelect.VueSelect);
	Vue.use(VueTables.ServerTable);
	Vue.mixin({
			data: function() {
				return {
					api_url: API_URI,
					cdn_uri : CDN_URI
			}
		}
	})
	const routes = [
    
			{ path: '/Client' , component: ClientComponent , meta: {
      title: 'Client'
     
    }},
		
			{ path: '/Facture' , component: FactureComponent , meta: {
      title: 'Facture'
     
    }},
		
			{ path: '/Lignefacture' , component: LignefactureComponent , meta: {
      title: 'Lignefacture'
     
    }},
		
			{ path: '/Notification' , component: NotificationComponent , meta: {
      title: 'Notification'
     
    }},
		
			{ path: '/Notification_has_prestataire' , component: Notification_has_prestataireComponent , meta: {
      title: 'Notification_has_prestataire'
     
    }},
		
			{ path: '/Prestataire' , component: PrestataireComponent , meta: {
      title: 'Prestataire'
     
    }},
		
			{ path: '/Service' , component: ServiceComponent , meta: {
      title: 'Service'
     
    }},
		
			{ path: '/Token' , component: TokenComponent , meta: {
      title: 'Token'
     
    }},
		
			{ path: '/User' , component: UserComponent , meta: {
      title: 'User'
     
    }},
		
]
const router = new VueRouter({
  routes // short for `routes: routes`
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')