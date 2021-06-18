import {Prestataire} from '../../../enteties/prestataire.js'
import {create} from '../html/_create.js'


export var createc = Vue.extend({
	data: function () {
		return {
			prop: new Prestataire()
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
Vue.component('create-prestataire-component', createc)
