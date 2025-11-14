<script setup lang="ts">
import type {NavItem} from '@nuxt/content'
const navigation=inject<NavItem[]>('navigation',[])
const {header}=useAppConfig()
</script>

<template>
  <UHeader>
    <template #logo>
      <template v-if="header?.logo?.dark||header?.logo?.light"><UColorModeImage v-bind="{ class:'h-6 w-auto',...header?.logo }" /></template>
      <template v-else><img id="ee" src="https://pinfluents.com/_BCK/4/im/bp.png" width="60" height="60"></template>
    </template>
    <template #panel><UNavigationTree :links="mapContentNavigation(navigation)" /></template>
  </UHeader>
