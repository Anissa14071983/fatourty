export class Client {

    
			 id_client
			 
			 CIN_client
			 
			 Nom_client
			 
			 Prenom_client
			 
			 Adresse_client
			 
			 Email_client
			 
	
    primary = "id_client"
	
    fields = ["id_client", "CIN_client", "Nom_client", "Prenom_client", "Adresse_client", "Email_client", ]
	
    labels = ["id_client", "CIN_client", "Nom_client", "Prenom_client", "Adresse_client", "Email_client", ]
	
	columns = ["id_client", "CIN_client", "Nom_client", "Prenom_client", "Adresse_client", "Email_client",  , 'Actions']
	
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
