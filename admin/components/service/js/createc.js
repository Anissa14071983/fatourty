import {Service} from '../../../enteties/service.js'
import {create} from '../html/_create.js'


export var createc = Vue.extend({
	data: function () {
		return {
			prop: new Service()
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
Vue.component('create-service-component', createc)