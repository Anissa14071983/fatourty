export const view = /*html*/ `
	<div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-hidden="true">
		  <div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title">Fiche Client</h5>
		       	<button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true">×</span></button>
		      </div>
					<div class="modal-body">
						<form v-on:submit.prevent="create()">
								<div class="row">

									 <div class="col-lg-6">
											<div class="mb-3">
												<label class="form-label">Prénom client</label>
												<input readonly type="text" class="form-control" v-model="prop.prenom_client" required/>
											</div>
									</div>

									<div class="col-lg-6">
											 <div class="mb-3">
												 <label class="form-label">Nom client</label>
												 <input readonly type="text" class="form-control" v-model="prop.nom_client" required/>
											</div>
									</div>

								  <div class="col-lg-6">
										 <div class="mb-3">
											 <label class="form-label">Email client</label>
											 <input disabled type="email" class="form-control" v-model="prop.email_client" required/>
											</div>
										</div>


									<div class="col-lg-6">
											<div class="mb-3">
												 <label class="form-label">Adresse client</label>
												 <input readonly type="text" class="form-control" v-model="prop.adresse_client"/>
									 		</div>
									</div>

									<div class="col-lg-6">
								 		<div class="mb-3">
									 			<label class="form-label"> Numéro de téléphone</label>
									 			<input readonly type="number" class="form-control" v-model="prop.tel_client"/>
										</div>
									</div>

									<div class="col-lg-6">
										 <div class="mb-3">
											 <label class="form-label">CIN Client</label>
											 <input readonly type="number" class="form-control" v-model="prop.cin_client"/>
										 </div>
									</div>

									<div class="col-lg-6">
									 <div class="mb-3">
										 <label class="form-label">Fax</label>
										 <input readonly type="number" class="form-control" v-model="prop.fax_client"/>
										</div>
									</div>

									<div class="col-lg-6">
										<div class="mb-3">
											<label class="form-label">Identifiant fiscale</label>
											<input readonly type="number" class="form-control" v-model="prop.matricule_fiscale"/>
										</div>
									</div>

			  		</div>
							  <div class="modal-footer">
								<a href="#" class="btn btn-link link-secondary" data-dismiss="modal">
								  Fermer
								</a>
								<button type="button" class="btn btn-sm btn-success" onclick="window.print()">Imprimer</button>
							</div>
					</form>
				</div>
			</div>
		</div>
</div>`
