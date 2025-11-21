<script setup lang="ts">
import type {NavItem} from '@nuxt/content'
const navigation=inject<NavItem[]>('navigation',[])
const {header}=useAppConfig()
</script>

<template>
  <UHeader>
    <img id="ee" src="https://pinfluents.com/_BCK/4/im/cl.png" width="60" height="60">
    <template #panel><hd /></template>
  </UHeader>
</template>
