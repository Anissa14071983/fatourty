import {Token} from '../../../enteties/token.js'
import {create} from '../html/_create.js'


export var createc = Vue.extend({
	data: function () {
		return {
			prop: new Token()
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
Vue.component('create-token-component', createc)