export const all = /*html*/ `
<div class="main-panel">
		<div class="content-wrapper">
          <div class="row">
							<div class="card">
							<div class="card-header">
						    	<h4 class="card-title">Mes Clients</h4>
						  </div>
							<div class="card-body">
									<div class="card-description d-flex">
														<div class="col-auto ml-auto d-print-none">
																<div class="btn-list">
																		<a href="#" class="btn btn-primary d-none d-sm-inline-block" data-toggle="modal" data-target="#createModal">
																		<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
																		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
																		<line x1="12" y1="5" x2="12" y2="19"></line>
																		<line x1="5" y1="12" x2="19" y2="12"></line></svg>
																		Nouveau client
																		</a>
																</div>
														</div>
										</div>
										<div class="table-responsive">
											<v-server-table ref="table" :url="api_url+'clients'" :columns="prop.columns"  :options="options">
												<div class="btn-list flex-nowrap" slot="Actions" slot-scope="{row}">
													<button type="button" class="btn btn-sm btn-success" data-toggle="modal" data-target="#viewModal" @click="view(row)">Consulter</button>
													<button type="button" class="btn  btn-sm btn-primary" data-toggle="modal" data-target="#editModal" @click="view(row)">Modifier</button>
													<button type="button" class="btn btn-sm btn-danger"  data-toggle="modal" data-target="#delModal" @click="view(row)">Supprimer</button>
												</div>
											</v-server-table>
										</div>
									</div>
								</div>
						</div>
				</div>
				<create-client-component ></create-client-component>
				<view-client-component :prop="prop"></view-client-component>
				<edit-client-component :prop="prop"></edit-client-component>
				<del-client-component :prop="prop"></del-client-component>
		</div>

	`
