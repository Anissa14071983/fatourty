export const view = /*html*/ `
	<div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-hidden="true">
		  <div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<h5 class="modal-title">user</h5>
				<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
			  </div>
				  <div v-if="prop" class="modal-body">
					<div class="row">
					  <div class="col-lg-6" v-for="(item ,i) in prop.fields">
						<div class="mb-3">
						  <label class="form-label">{{prop.labels[i]}}</label>
						  <span>{{prop[item]}}</span>
						</div>
					  </div>
					</div>
				  </div>
				  <div class="modal-footer">
					<a href="#" class="btn btn-link link-secondary" data-dismiss="modal">
					  Fermer
					</a>
				  </div>
			</div>
		  </div>
		</div>`
