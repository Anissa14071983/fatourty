import {User} from '../../../enteties/user.js'
import {del} from '../html/_delete.js'


export var deletec = Vue.extend({
	props: ['prop'],
	methods: {
		del : async function(){
				this.prop.delete().then((resp) => {
				})
				.catch((err) => {
					console.error(err);
			});
		}
	},
  template: del 
})
// register
Vue.component('del-user-component', deletec)