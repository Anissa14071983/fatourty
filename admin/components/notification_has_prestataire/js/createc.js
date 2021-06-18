import {Notification_has_prestataire} from '../../../enteties/notification_has_prestataire.js'
import {create} from '../html/_create.js'


export var createc = Vue.extend({
	data: function () {
		return {
			prop: new Notification_has_prestataire()
			}
	},
	methods: {
		create : async function(){
          this.prop.create().then((resp) => {
       })
		}
	},
	template: create
})
// register
Vue.component('create-notification_has_prestataire-component', createc)