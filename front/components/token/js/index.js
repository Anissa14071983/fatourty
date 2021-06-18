import {Token} from '../../../enteties/token.js'
import {all} from '../html/_index.js'
import {createc} from './createc.js'
import {editc} from './editc.js'
import {deletec} from './deletec.js'
import {viewc} from './viewc.js'

export var TokenComponent = Vue.extend({
	data: function () {
		return {
			prop: new Token(),
			options: {
					texts: {
						filter: "Filtre:",
						count:  "Affichage de {from} à {to} des {count} Tokens|{count} articles|un seul token",
						limit: 'Tokens Par Page',
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
          this.prop = await new Token(a).getone()
        }
	},
	template: all
})
// register
Vue.component('token-component', TokenComponent)