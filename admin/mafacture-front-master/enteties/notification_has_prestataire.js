export class Notification_has_prestataire {

    
			 notification_idnotification
			 
			 prestataire_idprestataire
			 
			 dateenvoie
			 
			 nombrenotification
			 
			 notification_has_prestatairecol
			 
	
    primary = "prestataire_idprestataire"
	
    fields = ["notification_idnotification", "prestataire_idprestataire", "dateenvoie", "nombrenotification", "notification_has_prestatairecol", ]
	
    labels = ["notification_idnotification", "prestataire_idprestataire", "dateenvoie", "nombrenotification", "notification_has_prestatairecol", ]
	
	columns = ["notification_idnotification", "prestataire_idprestataire", "dateenvoie", "nombrenotification", "notification_has_prestatairecol",  , 'Actions']
	
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

		const encoded = encodeURI(API_URI+'notification_has_prestataires?query='+JSON.stringify(x)+'&limit=5');
		const resp = await axios.get(encoded)
		return resp.data.data;
	}


    async getall(){

       const resp = await  axios.get(API_URI+'notification_has_prestataires')
       let g  =  resp.data.map(x => new this.constructor(x))
       return g;
    }
	
    async getone(){
		
       let p = this.primary
       const resp = await  axios.get(API_URI+'notification_has_prestataire?id='+this[p])
       let g  =  new this.constructor(resp.data)
       return g;
    }

    async edit(){
		delete this.primary;
		delete this.fields;
		const resp =  await  axios({

					url: API_URI+"notification_has_prestataire",

					method: "PATCH",

					data: JSON.stringify(this),



		})
        return resp.data;
    }
	 
    async delete(){

		const resp =  await  axios({

					url: API_URI+"notification_has_prestataire",

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

					url: API_URI+"notification_has_prestataire",

					method: "POST",

					data: JSON.stringify(this),



		})
        return resp.data;
    }

}
