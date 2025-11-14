<script setup lang="ts">
import type {NavItem} from '@nuxt/content'
const navigation=inject<NavItem[]>('navigation',[])
const {header}=useAppConfig()
</script>

<template>
  <!--UHeader>
    <template #logo>
      <template v-if="header?.logo?.dark||header?.logo?.light"><UColorModeImage v-bind="{ class:'h-6 w-auto',...header?.logo }" /></template>
      <template v-else><img id="ee" src="https://pinfluents.com/_BCK/4/im/bp.png" width="60" height="60"></template>
    </template>
    <template #panel><UNavigationTree :links="mapContentNavigation(navigation)" /></template>
  </UHeader-->

<UHeader>
<template>
  <div>
    <div>

      <div>
        <div></div>
      </div>

      <div>
        <div>
          <ul>
            <li><a>Learn</a>
              <ul>
                <li><a href="#">Practice</a></li>
                <li><a href="#">Product</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  </div>
</div>
</template>
</UHeader>
</template>
