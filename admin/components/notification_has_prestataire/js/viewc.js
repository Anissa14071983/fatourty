import {Notification_has_prestataire} from '../../../enteties/notification_has_prestataire.js'
import {view} from '../html/_view.js'


export var viewc = Vue.extend({
	props: ['prop'],
	template: view
})
// register
Vue.component('view-notification_has_prestataire-component', viewc)