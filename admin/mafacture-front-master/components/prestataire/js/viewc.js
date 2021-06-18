import {Prestataire} from '../../../enteties/prestataire.js'
import {view} from '../html/_view.js'


export var viewc = Vue.extend({
	props: ['prop'],
	template: view
})
// register
Vue.component('view-prestataire-component', viewc)