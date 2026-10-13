<script setup lang="ts">
const {data:page}=await useAsyncData('index',()=>queryContent('/').findOne());
useSeoMeta({titleTemplate:'',title:page.value.title,ogTitle:page.value.title,description:page.value.description,ogDescription:page.value.description});

const fetchU=async(query)=>{
  const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=h1`);
  const data=await response.json(); //alert("RESPy: "+JSON.stringify(data));
  const h1=data.result.h1[0]; document.getElementById("tr").innerText=h1; prompt.value=h1; //prompt.value=document.getElementById("tr").innerText;
  return data.results;
};
const fetchImgU=async(query)=>{
  const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=img&attr=src`);
  //const response=await fetch(`${encodeURIComponent(query)}`);
  //const response=await fetch(`/api/ws?url=${encodeURIComponent(query)}`);
  const data=await response.json(); //xx alert("RESPx: "+JSON.stringify(data));
  const im=data.result; document.getElementById("ee").src=im;
  return data.results;
};



onMounted(()=>{
  //const pho=document.querySelector("#pho"); const pho2=document.querySelector("#pho2");
  //fetchPh(prompt).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small});});
});
</script>

<template>
  <ULandingHero v-if="page.hero" v-bind="page.hero">
    <span class="g"><span id="et"></span><img id="ee" class="ff" src="https://pinfluents.com/_BCK/4/im/cl.png" width="60" height="60"><span id="ei"></span><span id="z"></span>
      <input id="prompt" v-model="prompt" style="border:2px solid red;"><input id="pho" v-model="pho" style="border:2px solid blue;">
      <input id="pho2" v-model="pho2" style="border:2px solid purple;"><span id="response" v-if="response">{{response}}</span>
    </span>
    <template #title><MDC :value="page.hero.title" /></template><MDC :value="page.hero.code" class="prose prose-primary dark:prose-invert mx-auto" />
  </ULandingHero>
  <ULandingSection :title="page.features.title" :links="page.features.links"><UPageGrid><ULandingCard v-for="(item,index) of page.features.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
  <ULandingSection :title="page.sections.title" :links="page.sections.links"><UPageGrid><ULandingCard v-for="(item,index) of page.sections.items" :key="index" v-bind="item" /><Slider2 /></UPageGrid></ULandingSection>
  <ULandingSection :title="page.mid.title" :links="page.mid.links"><UPageGrid><ULandingCard v-for="(item,index) of page.mid.items" :key="index" v-bind="item" /><Stripe /></UPageGrid></ULandingSection>
  <ULandingSection :title="page.bottom.title" :links="page.bottom.links"><UPageGrid><ULandingCard v-for="(item,index) of page.bottom.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
  <ULandingSection :title="page.lower.title" :links="page.lower.links"><UPageGrid><ULandingCard v-for="(item,index) of page.lower.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
</template>

<script lang="ts">
export default{
  data(){return{prompt:"",response:null}},
  mounted(){
    //this.send()
  },
  methods:{
    async send(){
      const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#prompt").value})});
      const data=await response.json(); this.response=data.reply; alert("RES01: "+JSON.stringify(data)); //alert("RES01a: "+this.response); //console.log(data.message.content);
      document.querySelector("#h1n").innerText=this.response;
    },
    async send2(){
      const response=await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=OOBNDpH2xNShX6T9wWV_-9py3NtxfpGT2zMcashaO_o`);
      const data=await response.json(); alert("RES1P: "+JSON.stringify(data));
      return data.results;
    },
  },
}
</script>
