import {Service} from '../../../enteties/service.js'
import {edit} from '../html/_edit.js'


export var editc = Vue.extend({
	props: ['prop'],
	methods: {
		 edit: async function() {
           this.prop.edit().then((resp) => {
    			})
				.catch((err) => {
					console.error(err);
				});
        }
	},
  template: edit
})
// register
Vue.component('edit-service-component', editc)