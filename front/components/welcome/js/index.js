import {all} from '../html/_index.js'
import {User} from '../../../enteties/user.js'


export var WelcomeComponent = Vue.extend({
	data: function () {
		return {
			prop: new User(),
			options: {
					texts: {
						filter: "Filtre:",
						count:  "Affichage de {from} à {to} des {count} Users|{count} articles|un seul utilisateur",
						limit: 'Utilisateurs Par Page',
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
		login : async function(){
					this.prop.login().then((resp) => {
						window.location.href = "./"
					//window.location.href("/")
			 }).catch(function (error) {
    // handle error
		alert("mot de passe ou nom d'utilisateur incorrecte")
    console.log(error);
  })
		 }
	},
	template: all
})
// register
Vue.component('welcome-component', WelcomeComponent)
