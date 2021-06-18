import {Facture} from '../../../enteties/facture.js'
import {create} from '../html/_create.js'


export var createc = Vue.extend({
	data: function () {
		return {
			prop: new Facture()
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
Vue.component('create-facture-component', createc)