import {Facture} from '../../../enteties/facture.js'
import {Client} from '../../../enteties/client.js'
import {create} from '../html/_create.js'


export var createc = Vue.extend({
	data: function () {
		return {
			prop: new Facture(),
			client: new Client(),
			cins: [],
			}
	},
	methods: {
		create : async function(){
					//onsole.log(this.prop.totalfacture)
          this.prop.create().then((resp) => {
						console.log(resp)
						$('.modal').modal('hide')
       })

		 },
			 getCin : async function(){
						 this.cins = await new Client().getall();
			 }
	},
	created : function () {
		this.getCin();
	},

	template: create
})
// register
Vue.component('create-facture-component', createc)
