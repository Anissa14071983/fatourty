export class Lignefacture {

    
			 idlignefacture
			 
			 facture_clients_id_client
			 
			 prestataire_idprestataire
			 
			 service_idservice
			 
	
    primary = "idlignefacture"
	
    fields = ["idlignefacture", "facture_clients_id_client", "prestataire_idprestataire", "service_idservice", ]
	
    labels = ["idlignefacture", "facture_clients_id_client", "prestataire_idprestataire", "service_idservice", ]
	
	columns = ["idlignefacture", "facture_clients_id_client", "prestataire_idprestataire", "service_idservice",  , 'Actions']
	
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

		const encoded = encodeURI(API_URI+'lignefactures?query='+JSON.stringify(x)+'&limit=5');
		const resp = await axios.get(encoded)
		return resp.data.data;
	}


    async getall(){

       const resp = await  axios.get(API_URI+'lignefactures')
       let g  =  resp.data.map(x => new this.constructor(x))
       return g;
    }
	
    async getone(){
		
       let p = this.primary
       const resp = await  axios.get(API_URI+'lignefacture?id='+this[p])
       let g  =  new this.constructor(resp.data)
       return g;
    }

    async edit(){
		delete this.primary;
		delete this.fields;
		const resp =  await  axios({

					url: API_URI+"lignefacture",

					method: "PATCH",

					data: JSON.stringify(this),



		})
        return resp.data;
    }
	 
    async delete(){

		const resp =  await  axios({

					url: API_URI+"lignefacture",

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

					url: API_URI+"lignefacture",

					method: "POST",

					data: JSON.stringify(this),



		})
        return resp.data;
    }

}
