export class Client {

       id_client = "0"

			cin_client

			 nom_client

			 prenom_client

			 adresse_client

			 email_client

       matricule_fiscale //si le client est une société

       tel_client

       fax_client

    primary = "id_client"

    fields = ["cin_client", "matricule_fiscal", "nom_client", "prenom_client", "adresse_client", "email_client","tel_client", "fax_client"]
    /*   au niveau de boutton ajout */
    labels = ["CIN client", "Matricule fiscale", " Nom Client", "Prénom client", "Adresse client", "Email client", "Tel client", "Fax client"]
		/* tableau  de la page principal*/
  	columns = ["cin_client","nom_client", "prenom_client", 'Actions']

    constructor (data) {
		 if(data){
			var keys = Object.keys(data);
			keys.forEach(x => {

				if( this.hasOwnProperty(x)){
					this[x] = data[x]
				}
			})
		}
    }

	async search(x){

		const encoded = encodeURI(API_URI+'clients?query='+JSON.stringify(x)+'&limit=5');
		const resp = await axios.get(encoded)
		return resp.data.data;
	}


    async getall(){

       const resp = await  axios.get(API_URI+'clients')
       let g  =  resp.data.map(x => new this.constructor(x))
       return g;
    }

    async getone(){

       let p = this.primary
       const resp = await  axios.get(API_URI+'client?id='+this[p])
       let g  =  new this.constructor(resp.data)
       return g;
    }

    async edit(){
		delete this.primary;
		delete this.fields;
		const resp =  await  axios({

					url: API_URI+"client",

					method: "PATCH",

					data: JSON.stringify(this),

		})
        return resp.data;
    }

    async delete(){

		const resp =  await  axios({

					url: API_URI+"client",

					method: "DELETE",

					data: JSON.stringify(this),

		})
        return resp.data;
    }

    async create(){

		delete this[this.primary];
		delete this.primary;
		delete this.fields;
		const resp =  await  axios({

					url: API_URI+"client",

					method: "POST",

					data: JSON.stringify(this),

		})
        return resp.data;
    }
}
