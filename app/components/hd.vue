<template>
  <input id="t" v-model="t">
  <span class="g">
    <span id="z"><ColorThief /></span><input id="prompt" v-model="prompt"><input id="pho" v-model="pho"><input id="pho2" v-model="pho2">
    <input id="pr2" v-model="pr2"><br><input id="pr3" v-model="pr3"><br><input id="pr4" v-model="pr4"><br><input id="pr5" v-model="pr5">
    <span id="response" v-if="response">{{response}}</span>
  </span>
  <header>
  <ul>
    <li1 />
  </ul>
  </header>
</template>
