export class Token {

    
			 idTOKEN
			 
			 value
			 
			 created
			 
			 expireat
			 
			 USER_idUSER
			 
	
    primary = "idTOKEN"
	
    fields = ["idTOKEN", "value", "created", "expireat", "USER_idUSER", ]
	
    labels = ["idTOKEN", "value", "created", "expireat", "USER_idUSER", ]
	
	columns = ["idTOKEN", "value", "created", "expireat", "USER_idUSER",  , 'Actions']
	
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

		const encoded = encodeURI(API_URI+'tokens?query='+JSON.stringify(x)+'&limit=5');
		const resp = await axios.get(encoded)
		return resp.data.data;
	}


    async getall(){

       const resp = await  axios.get(API_URI+'tokens')
       let g  =  resp.data.map(x => new this.constructor(x))
       return g;
    }
	
    async getone(){
		
       let p = this.primary
       const resp = await  axios.get(API_URI+'token?id='+this[p])
       let g  =  new this.constructor(resp.data)
       return g;
    }

    async edit(){
		delete this.primary;
		delete this.fields;
		const resp =  await  axios({

					url: API_URI+"token",

					method: "PATCH",

					data: JSON.stringify(this),



		})
        return resp.data;
    }
	 
    async delete(){

		const resp =  await  axios({

					url: API_URI+"token",

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

					url: API_URI+"token",

					method: "POST",

					data: JSON.stringify(this),



		})
        return resp.data;
    }

}
