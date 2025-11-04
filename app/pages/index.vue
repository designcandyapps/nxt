<script setup lang="ts">
const {data:page}=await useAsyncData('index',()=>queryContent('/').findOne())
useSeoMeta({titleTemplate:'',title:page.value.title,ogTitle:page.value.title,description:page.value.description,ogDescription:page.value.description})
const fetchPh=async(query)=>{
  const response=await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=OOBNDpH2xNShX6T9wWV_-9py3NtxfpGT2zMcashaO_o`);
  const data=await response.json(); alert("RES1P: "+JSON.stringify(data));
  return data.results;
};
async function fetchGetty(query){
  try{
    const response=await fetch(`https://api.gettyimages.com/v3/search/images?phrase=${encodeURIComponent(query)}&page_size=1`,{method:"GET",headers:{"Api-Key":"ep3mq3jxr4u99m7hy3gzzp3g"}});
    if(!response.ok){throw new Error(`Error1:${response.statusText}`)}
    const data=await response.json(); alert("RES2P: "+JSON.stringify(data));
    if(data.images&&data.images.length>0){const image=data.images[0];console.log("Im:",image);return image}else{console.log("No ims");return null}
  }catch(error){console.error("Error2:",error)}
}
onMounted(()=>{
  setTimeout(function(){
    //const prompt=document.querySelector("#prompt").value; alert("PR1: "+prompt);
    //fetchPh(prompt).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});
    //fetchGetty(prompt).then(image=>{pho2.value=image.display_sizes[0].uri});
  },5800)
});
</script>

<template>
  <div>
    <ULandingHero v-if="page.hero" v-bind="page.hero">
      <div id="tz" style="position:absolute; z-index:40; top:50px; left:1px; border:3px solid black;">sa</div>
      <div class="g">
        <div id="z"><ColorThief /></div><input id="prompt" v-model="prompt" style="border:3px solid blue;">
        <input id="pho" v-model="pho" style="border:3px solid green;">
        <input id="pho2" v-model="pho2" style="border:3px solid orange;">
        <input id="apiKey" v-model="apiKey" style="border:3px solid navy;">
        <div id="response" v-if="response" style="border:3px solid yellow;">{{response}}</div><ImageGenerator />
      </div>
      <template #title><MDC :value="page.hero.title" /></template><MDC :value="page.hero.code" class="prose prose-primary dark:prose-invert mx-auto" />
    </ULandingHero>
    <ULandingSection :title="page.features.title" :links="page.features.links"><UPageGrid><ULandingCard v-for="(item,index) of page.features.items" :key="index" v-bind="item" /><Slider /></UPageGrid></ULandingSection>
    <ULandingSection :title="page.sections.title" :links="page.sections.links"><UPageGrid><ULandingCard v-for="(item,index) of page.sections.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
    <ULandingSection :title="page.mid.title" :links="page.mid.links"><UPageGrid><ULandingCard v-for="(item,index) of page.mid.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
    <ULandingSection :title="page.bottom.title" :links="page.bottom.links"><UPageGrid><ULandingCard v-for="(item,index) of page.bottom.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
    <ULandingSection :title="page.lower.title" :links="page.lower.links"><UPageGrid><ULandingCard v-for="(item,index) of page.lower.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
  </div>
</template>

<script lang="ts">
export default{
  data(){return{prompt:"",response:null}},
  //mounted(){setTimeout(()=>{this.send()},9800)},
  methods:{
    async send(){
      const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#prompt").value})});
      const data=await response.json(); this.response=data.reply; alert("RES00: "+JSON.stringify(data)); //alert("RES01: "+this.response);
      document.querySelector("#tz").innerText=this.response;
    },
  },
}
</script>
