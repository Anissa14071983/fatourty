export const all = /*html*/ `
	<div>
		<div class="card-description d-flex">
				<h4 class="card-title">Tokens</h4>
                <div class="col-auto ml-auto d-print-none">
                    <div class="btn-list">
                        <a href="#" class="btn btn-primary d-none d-sm-inline-block" data-toggle="modal" data-target="#createModal">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        Nouveau Token
                        </a>
                    </div>
                </div>
        </div>
		<div class="table-responsive">
		<v-server-table ref="table" :url="api_url+'tokens'" :columns="prop.columns"  :options="options">
			<div class="btn-list flex-nowrap" slot="Actions" slot-scope="{row}">
				<button type="button" class="btn btn-sm btn-white" data-toggle="modal" data-target="#viewModal" @click="view(row)">Consulter</button>
				<button type="button" class="btn  btn-sm btn-primary" data-toggle="modal" data-target="#editModal" @click="view(row)">Modifier</button>
				<button type="button" class="btn btn-sm btn-danger"  data-toggle="modal" data-target="#delModal" @click="view(row)">Supprimer</button>
			</div>
		</v-server-table>
		</div>
		<create-token-component ></create-token-component>
		<view-token-component :prop="prop"></view-token-component>
		<edit-token-component :prop="prop"></edit-token-component>
		<del-token-component :prop="prop"></del-token-component>
	</div>`