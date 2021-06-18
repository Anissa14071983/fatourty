		import {UserComponent} from './components/user/js/index.js'
		import {WelcomeComponent} from './components/welcome/js/index.js'
		//import {InscriptionComponent} from './components/inscription/js/index.js'
		import {NavBar} from './partials/_navbar.js'
		import {SettingsPanel} from './partials/_settings-panel.js'
		import {Footer} from './partials/_footer.js'
		import {SideBar} from './partials/_sidebar.js'

const API_URI = "http://localhost/mafacture/back/web/"
const CDN_URI = ""
	Vue.mixin({
			data: function() {
				return {
					api_url: API_URI,
					cdn_uri : CDN_URI
			}
		}
	})
	const app = new Vue({
		el: '#app'
	})
