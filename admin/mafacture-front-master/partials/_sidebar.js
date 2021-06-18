const sidebar = /*html*/ `<nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          
		 <router-link
  to="/Client"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
>
  <li
    :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']"
  >
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >Client</a>
  </li>
</router-link>
		
		 <router-link
  to="/Facture"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
>
  <li
    :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']"
  >
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >Facture</a>
  </li>
</router-link>
		
		 <router-link
  to="/Lignefacture"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
>
  <li
    :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']"
  >
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >Lignefacture</a>
  </li>
</router-link>
		
		 <router-link
  to="/Notification"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
>
  <li
    :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']"
  >
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >Notification</a>
  </li>
</router-link>
		
		 <router-link
  to="/Notification_has_prestataire"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
>
  <li
    :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']"
  >
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >Notification_has_prestataire</a>
  </li>
</router-link>
		
		 <router-link
  to="/Prestataire"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
>
  <li
    :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']"
  >
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >Prestataire</a>
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
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >Service</a>
  </li>
</router-link>
		
		 <router-link
  to="/Token"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
>
  <li
    :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']"
  >
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >Token</a>
  </li>
</router-link>
		
		 <router-link
  to="/User"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
  custom
>
  <li
    :class="[isActive && 'active', isExactActive && 'active' , 'nav-item']"
  >
    <a :class="[isActive && 'text-white', isExactActive && 'text-white' , 'nav-link']" :href="href" >User</a>
  </li>
</router-link>
		
        </ul>
      </nav>`
    	export var SideBar = Vue.extend({

				template: sidebar
			})
			// register
			Vue.component('sidebar-component', SideBar)

