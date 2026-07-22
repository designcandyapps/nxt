<script setup lang="ts">
const {data:page}=await useAsyncData('index',()=>queryContent('/').findOne())
useSeoMeta({titleTemplate:'',title:page.value.title,ogTitle:page.value.title,description:page.value.description,ogDescription:page.value.description})
</script>

<template>
  <ULandingHero v-if="page.hero" v-bind="page.hero">
    <template #title><MDC :value="page.hero.title" /></template><MDC :value="page.hero.code" class="prose prose-primary dark:prose-invert mx-auto" />
  </ULandingHero>
  <ULandingSection :title="page.features.title" :links="page.features.links"><UPageGrid><ULandingCard v-for="(item,index) of page.features.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
  <ULandingSection :title="page.sections.title" :links="page.sections.links"><UPageGrid><ULandingCard v-for="(item,index) of page.sections.items" :key="index" v-bind="item" /><Slider2 /></UPageGrid></ULandingSection>
  <ULandingSection :title="page.mid.title" :links="page.mid.links"><UPageGrid><ULandingCard v-for="(item,index) of page.mid.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
  <ULandingSection :title="page.bottom.title" :links="page.bottom.links"><UPageGrid><ULandingCard v-for="(item,index) of page.bottom.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
  <ULandingSection :title="page.lower.title" :links="page.lower.links"><UPageGrid><ULandingCard v-for="(item,index) of page.lower.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
</template>

<script lang="ts">
export default{
  data(){return{prompt:"",response:null}},
  mounted(){
    //setTimeout(()=>{this.send()},7800);
    //setTimeout(()=>{this.send2()},8800);
  },
  methods:{
    async send(){
      const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#prompt").value})});
      const data=await response.json(); this.response=data.reply; //alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response); //console.log(data.message.content);
      //alert("T: "+document.querySelector("#t"));
      document.querySelector("#t").innerText=this.response;
      //document.querySelector("#t").value=this.response;
    },
    async send2(){
      const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr2").value})});
      const data=await response.json(); this.response=data.reply; //alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response);
      //alert("S: "+document.querySelector(".slick-slide"));
      document.querySelector(".slick-slide>div>div>div>div").innerText=this.response;
    },
  },
}
</script>
