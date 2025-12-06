<script setup lang="ts">
import type {NavItem} from '@nuxt/content'
const navigation=inject<NavItem[]>('navigation',[])
const {header}=useAppConfig()
</script>

<template>

    <img id="ee" src="https://pinfluents.com/_BCK/4/im/dc.png" width="60" height="60">
    <hd />

</template>
