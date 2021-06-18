export const view = /*html*/ `
<div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Détail Facture</h5>
					<button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true">×</span></button>
 				</div>
				<div v-if="prop" class="modal-body">
					<div class="row">
					<div class="col-lg-6">
						<div class="mb-3">
							<label class="form-label">Client</label>
							<input  disabled type="number" class="form-control" v-model="prop.client_id_client"/>
					 </div>
					</div>
					<div class="col-lg-6">
						<div class="mb-3">
							<label class="form-label">Date Facture</label>
							<input disabled type="date" class="form-control" v-model="prop.datefacture"/>
							</div>
					</div>
						<div class="col-lg-6">
					 		<div class="mb-3">
					 			<label class="form-label">Total Facture</label>
					 			<input disabled type="number" class="form-control" v-model="prop.totalfacture"/>
					 		</div>
						</div>
						<div class="col-lg-6">
							<div class="mb-3">
								<label class="form-label">État Facture</label>
								<input disabled type="text" class="form-control" v-model="prop.etatfacture">
							</div>
						</div>
				</div>
			</div>
			<div class="modal-footer">
				<div>
					<button type="button" class="btn btn-sm btn-success" onclick="window.print()">Imprimer</button>
					<button type="button" @click="envoyer()" class="btn btn-success ml-auto">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
						Envoyer
					</button>
					<a href="#" class="btn btn-link link-secondary" data-dismiss="modal">
					  Fermer
					</a>
				</div>
			</div>
	 </div>
</div>
</div>
`
