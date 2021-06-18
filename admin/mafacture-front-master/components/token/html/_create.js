export const create = /*html*/ 
	`
	<div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-hidden="true">
		  <div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<h5 class="modal-title">Token</h5>
				<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
			  </div>
			  <form v-on:submit.prevent="create()">
				  <div class="modal-body">
					<div class="row">
					  <div class="col-lg-6" v-for="(item , i) in prop.fields">
						<div class="mb-3">
						  <label class="form-label">{{prop.labels[i]}}</label>
						  <input type="text" class="form-control" v-model="prop[item]">
						</div>
					  </div>
					</div>
				  </div>
				  <div class="modal-footer">
					<a href="#" class="btn btn-link link-secondary" data-dismiss="modal">
					  Fermer
					</a>
					<button type="submit" class="btn btn-success ml-auto">
					  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
					  Enregistrer
					</button>
				  </div>
				</form>
			</div>
		  </div>
		</div>
	`