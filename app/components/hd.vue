<script setup lang="ts">
import type {NavItem} from '@nuxt/content'
const navigation=inject<NavItem[]>('navigation',[])
const {header}=useAppConfig()
</script>

<template>
  <div class="container">
    <div class="provider-header--container">
      <div class="provider-header__menu">
      <div class="menu-provider-menu-container">
          <template #panel><UNavigationTree :links="mapContentNavigation(navigation)" /></template>
          <!--ul class="provider_menu list-unstyled">
            <li class="menu-item menu-item-has-children">
              <a>L</a>
              <ul class="sub-menu">
                <li class="menu-item"><a>P</a></li>
                <li class="menu-item"><a>P</a></li>
                <li class="menu-item"><a>P</a></li>
              </ul>
            </li>
          </ul-->
      </div>
      </div>
      <!--div class="provider-menu__toogle">
        <span class="toogle-item"></span>
        <span class="toogle-item"></span>
        <span class="toogle-item"></span>
      </div-->
    </div>
  </div>
</template>
