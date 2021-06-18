export const del = /*html*/
`
<div class="modal fade"  id="delModal" tabindex="-1" role="dialog" aria-hidden="true">
		  <div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<h5 class="modal-title">Supprimer Facture</h5>
				<button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true">×</span></button>
			  </div>
				  <div v-if="prop" class="modal-body">
					<div class="row">
					<div class="col-lg-5 m-2" >
					 <div class="mb-3">
					 <label class="form-label">Total Facture</label>
					 <input disabled type="number" class="form-control" v-model="prop.totalfacture">
						</div>
					</div>

					<div class="col-lg-5 m-2" >
					 <div class="mb-3">
					 <label class="form-label">Date Facture</label>
					 <input  disabled type="date" class="form-control" v-model="prop.datefacture">
						</div>
				 </div>

				 <div class="col-lg-5 m-2" >
					<div class="mb-3">
					<label class="form-label">Client</label>
					<input  disabled type="number" class="form-control" v-model="prop.totalfacture">
					 </div>
				</div>
						<div class="col-lg-5 m-2" >
						 <div class="mb-3">
						 <label class="form-label">Etat Facture</label>
						 <input disabled type="number" class="form-control" v-model="prop.etatfacture">
							</div>
						</div>

				  </div>
				  <div class="modal-footer">
					<a href="#" class="btn btn-link link-secondary" data-dismiss="modal">
					  Fermer
					</a>
						  	<button type="button" class="btn btn-danger" @click="del()">Supprimer</button>
					</div>
			</div>
		  </div>
			</div>
		</div>
`
