import {Client} from '../../../enteties/client.js'
import {create} from '../html/_create.js'

export var createc = Vue.extend({
	data: function () {
		return {
			prop: new Client()
			}
	},
	methods: {
		create : async function(){
          this.prop.create().then((resp) => {
						setTimeout( () => $(".modal").modal('hide'), 500 )
       })
		}
	},
	template: create
})
// register
Vue.component('create-client-component', createc)
