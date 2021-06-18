import {Notification} from '../../../enteties/notification.js'
import {view} from '../html/_view.js'


export var viewc = Vue.extend({
	props: ['prop'],
	template: view
})
// register
Vue.component('view-notification-component', viewc)