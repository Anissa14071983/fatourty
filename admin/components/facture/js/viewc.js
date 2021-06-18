import {Facture} from '../../../enteties/facture.js'
import {view} from '../html/_view.js'


export var viewc = Vue.extend({
	props: ['prop'],
	template: view
})
// register
Vue.component('view-facture-component', viewc)