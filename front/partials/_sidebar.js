const sidebar = /*html*/ `<nav class="sidebar sidebar-offcanvas" id="sidebar">
  <ul class="nav">
  <router-link
  to="/Home"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
  >
  <li :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']">
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >
      <i class="icon-grid menu-icon"></i>
      <span class="menu-title">Tableau de bord</span>
    </a>
  </li>
  </router-link>
<router-link
  to="/Client"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
>
  <li :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']">
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >
    <i class="icon-head menu-icon"></i>
    <span class="menu-title">Mes Clients</span>
    </a>
  </li>
</router-link>

	<router-link
  to="/Facture"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
>
  <li :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']">
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >
    <i class="icon-paper menu-icon"></i>
    <span class="menu-title">Mes Factures</span>
    </a>
  </li>
</router-link>

 <router-link
  to="/Service"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
>
  <li
    :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']"
  >
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >
    <i class="icon-layout menu-icon"></i>
    <span class="menu-title">Services</span>
    </a>
  </li>
</router-link>

</ul>
</nav>`


    	export var SideBar = Vue.extend({

				template: sidebar
			})
			// register
			Vue.component('sidebar-component', SideBar)
