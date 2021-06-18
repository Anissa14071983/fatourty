export class User {


			 idUSER

			 email

			 created

			 password

			 firstname

			 lastname

			 phone

			 address

			 role


    primary = "idUSER"

    fields = ["idUSER", "email", "created", "password", "firstname", "lastname", "phone", "address", "role", ]

    labels = [ "Nom", "Prenom","email", "Date", "Mot de Passe","Tel", "Addresse", "Spécialité", ]

		columns = [ "firstname", "lastname", "email", "created", "password","phone", "address", "role",'Actions']

    constructor (data) {
		 if(data){
			var keys = Object.keys(data);
			keys.forEach( x => {

				if( this.hasOwnProperty(x)){
					this[x] = data[x]
				}
			})
		}
    }


    async create(){

		delete this[this.primary];
		delete this.primary;
		delete this.fields;
		const resp =  await  axios({

					url: API_URI+"user",

					method: "POST",

					data: JSON.stringify(this),



		})
        return resp.data;
    }
 async login(){
		delete this[this.primary];
		delete this.primary;
	delete this.fields;
	delete this.columns;
	delete this.labels;

const resp =  await  axios({

		url: API_URI+"login",

	method: "POST",

	data: JSON.stringify(this),



	})
		return resp.data;
	}

}
