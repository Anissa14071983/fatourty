import {User} from '../../../enteties/user.js'
import {create} from '../html/_create.js'


export var createc = Vue.extend({
	data: function () {
		return {
			prop: new User()
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
Vue.component('create-user-component', createc)