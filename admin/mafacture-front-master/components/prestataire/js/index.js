import {Prestataire} from '../../../enteties/prestataire.js'
import {all} from '../html/_index.js'
import {createc} from './createc.js'
import {editc} from './editc.js'
import {deletec} from './deletec.js'
import {viewc} from './viewc.js'

export var PrestataireComponent = Vue.extend({
	data: function () {
		return {
			prop: new Prestataire(),
			options: {
					texts: {
						filter: "Filtre:",
						count:  "Affichage de {from} à {to} des {count} Prestataires|{count} articles|un seul prestataire",
						limit: 'Prestataires Par Page',
						filterBy: "",
					},
					headings: {
						
					},
					filterByColumn:true,
					perPageValues: [10, 25, 50, 100],
					debounce : 500
				}
			}
	},
	methods: {
		view: async function(a) {
          this.prop = await new Prestataire(a).getone()
        }
	},
	template: all
})
// register
Vue.component('prestataire-component', PrestataireComponent)