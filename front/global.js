import {NavBar} from './partials/_navbar.js'
import {SettingsPanel} from './partials/_settings-panel.js'
import {Footer} from './partials/_footer.js'
import {SideBar} from './partials/_sidebar.js'

import {ClientComponent} from './components/client/js/index.js'

import {FactureComponent} from './components/facture/js/index.js'

//import {InscriptionComponent} from './components/inscription/js/index.js'

import {NotificationComponent} from './components/notification/js/index.js'

import {Notification_has_prestataireComponent} from './components/notification_has_prestataire/js/index.js'

import {PrestataireComponent} from './components/prestataire/js/index.js'

import {ServiceComponent} from './components/service/js/index.js'

import {TokenComponent} from './components/token/js/index.js'

import {UserComponent} from './components/user/js/index.js'

import {WelcomeComponent} from './components/welcome/js/index.js'


const API_URI = "http://localhost/mafacture/back/web/"

const CDN_URI = ""

	Vue.component('v-select', VueSelect.VueSelect);
	Vue.use(VueTables.ServerTable);
	Vue.use(VueRouter);
	Vue.mixin({
			data: function() {
				return {
					api_url: API_URI,
					cdn_uri : CDN_URI
			}
		}
	});
	const routes = [

	{ path: '/' , component: WelcomeComponent , meta: {
	  title: 'Welcome'

	}},
	{ path: '/Home' , component: WelcomeComponent , meta: {
		title: 'Welcome'

	}},
	{ path: '/Client' , component: ClientComponent , meta: {
    title: 'Client'

    }},

		{ path: '/Facture' , component: FactureComponent , meta: {
      title: 'Facture'

    }},

	//	{ path: '/Inscription' , component: InscriptionComponent , meta: {
    //  title: 'Inscription'

    //}},

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
	routes: routes,
	mode: 'hash'
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
