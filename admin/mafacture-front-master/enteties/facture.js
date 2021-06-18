export class Facture {

    
			 id_facture
			 
			 totalfacture
			 
			 datefacture
			 
			 client_id_client
			 
			 etatfacture
			 
	
    primary = "id_facture"
	
    fields = ["id_facture", "totalfacture", "datefacture", "client_id_client", "etatfacture", ]
	
    labels = ["id_facture", "totalfacture", "datefacture", "client_id_client", "etatfacture", ]
	
	columns = ["id_facture", "totalfacture", "datefacture", "client_id_client", "etatfacture",  , 'Actions']
	
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

		const encoded = encodeURI(API_URI+'factures?query='+JSON.stringify(x)+'&limit=5');
		const resp = await axios.get(encoded)
		return resp.data.data;
	}


    async getall(){

       const resp = await  axios.get(API_URI+'factures')
       let g  =  resp.data.map(x => new this.constructor(x))
       return g;
    }
	
    async getone(){
		
       let p = this.primary
       const resp = await  axios.get(API_URI+'facture?id='+this[p])
       let g  =  new this.constructor(resp.data)
       return g;
    }

    async edit(){
		delete this.primary;
		delete this.fields;
		const resp =  await  axios({

					url: API_URI+"facture",

					method: "PATCH",

					data: JSON.stringify(this),



		})
        return resp.data;
    }
	 
    async delete(){

		const resp =  await  axios({

					url: API_URI+"facture",

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

					url: API_URI+"facture",

					method: "POST",

					data: JSON.stringify(this),



		})
        return resp.data;
    }

}
