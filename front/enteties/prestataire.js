export class Prestataire {


			 id_prestataire="0"

			 nomprestataires

			 prenomprestataire

			 adresseprestaire

			 emailprestatire

			 spécialitéprestataire


    primary = "id_prestataire"

    fields = ["id_prestataire","nomprestataire", "prenomprestataire", "adresseprestaire", "emailprestataire","spécialitéprestataire" ]

	  labels = ["id_prestataire","nomprestataires ", "prenom prestataire", "adresseprestaire", "emailprestataire","spécialitéprestataire" ]

		columns = ["id_prestataire","nomprestataires ", "prenom prestataire", "adresseprestaire", "emailprestataire","spécialitéprestataire" ]


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

	async search(x){

		const encoded = encodeURI(API_URI+'prestataires?query='+JSON.stringify(x)+'&limit=5');
		const resp = await axios.get(encoded)
		return resp.data.data;
	}


    async getall(){

       const resp = await  axios.get(API_URI+'prestataires')
       let g  =  resp.data.map(x => new this.constructor(x))
       return g;
    }

    async getone(){

       let p = this.primary
       const resp = await  axios.get(API_URI+'prestataire?id='+this[p])
       let g  =  new this.constructor(resp.data)
       return g;
    }

    async edit(){
		delete this.primary;
		delete this.fields;
		const resp =  await  axios({

					url: API_URI+"prestataire",

					method: "PATCH",

					data: JSON.stringify(this),



		})
        return resp.data;
    }

    async delete(){

		const resp =  await  axios({

					url: API_URI+"prestataire",

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

					url: API_URI+"prestataire",

					method: "POST",

					data: JSON.stringify(this),



		})
        return resp.data;
    }


}
