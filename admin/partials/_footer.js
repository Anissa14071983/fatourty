export class Footer extends HTMLElement {
	 connectedCallback () {
		this.innerHTML = `<footer class="footer">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2021.  Premium <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap admin template</a> from BootstrapDash. All rights reserved.</span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i class="ti-heart text-danger ml-1"></i></span>
          </div>
        </footer>`
      }
      }
      customElements.define('footer-component', Footer)
      export class MySpinner extends HTMLElement {
      	 connectedCallback () {
      		this.innerHTML = `<div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>`
      	}
      }

      export class MyError extends HTMLElement {
      	 connectedCallback () {
      		this.innerHTML = `<div class="alert alert-danger" role="alert">
        Une Erreur S'est Produite, Veuillez Réessayer Plus Tard ou contactez l'administrateur du système!
      </div>`
      	}
      }


      customElements.define('spinner-component', MySpinner);
      customElements.define('error-component', MyError);
