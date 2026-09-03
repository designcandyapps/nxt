<script setup lang="ts">
const {data:page}=await useAsyncData('index',()=>queryContent('/').findOne());
useSeoMeta({titleTemplate:'',title:page.value.title,ogTitle:page.value.title,description:page.value.description,ogDescription:page.value.description});
//import {ref,onMounted} from "vue"; const proxyUrl=ref(""); const pr2=document.querySelector("#pr2");
/*const genTktlr=async()=>{
  alert(5);
  const proxyUrl=ref("");
  proxyUrl.value=`/api/proxy?url=${encodeURIComponent(document.querySelector("#pr2").value)}`; //pr2.value
  alert("PRX: "+proxyUrl.value);
};*/
const fetchPh=async(query)=>{
  const response=await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=OOBNDpH2xNShX6T9wWV_-9py3NtxfpGT2zMcashaO_o`);
  const data=await response.json(); //alert("RES1P: "+JSON.stringify(data));
  return data.results;
};
async function fetchGetty(query){
  try{
    const response=await fetch(`https://api.gettyimages.com/v3/search/images?phrase=${encodeURIComponent(query)}&page_size=1`,{method:"GET",headers:{"Api-Key":"ep3mq3jxr4u99m7hy3gzzp3g"}});
    if(!response.ok){throw new Error(`Error1:${response.statusText}`)}
    const data=await response.json(); //alert("RES2P: "+JSON.stringify(data));
    if(data.images&&data.images.length>0){const image=data.images[0];console.log("Im:",image);return image}else{console.log("No ims");return null}
  }catch(error){console.error("Error2:",error)}
}


//`/api/ws?url=${encodeURIComponent(uUrl.value)}`

import {ref,onMounted} from "vue"; const uUrl=ref(""); const pUrl=ref("");
const fetchU=async(query)=>{
  const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}`);
  //const response=await fetch(`/api/ws?url=${encodeURIComponent(query)}&selector=h1`); //&selector=h1
  const data=await response.json(); alert("RES1Pz: "+JSON.stringify(data));
  return data.results;
};
  
/*addEventListener('fetch',event=>{event.respondWith(handleRequest(event.request))});
async function handleRequest(request){
  alert(6);
}*/






  
onMounted(()=>{
  //setTimeout(function(){
    //const pr="cars";
    //document.getElementById("prompt").value=document.getElementById("tr").innerText;
    //const pr:string=new URLSearchParams(location.search).get("pr")??document.getElementById("prompt").value;
    //pr=pr&&pr!="Innovation for the energy of today and tomorrow"?pr:document.getElementById("prompt").value;
    //alert("PR: "+pr);

    const pr:string=new URLSearchParams(location.search).get("pr")??"design"; //pr=pr&&pr!=""?pr:document.getElementById("prompt").value;
    //const pr2:string=new URLSearchParams(location.search).get("pr2")??"gn";
    document.getElementById("tr").innerText=pr; document.getElementById("prompt").value=document.getElementById("tr").innerText;
    //alert("PROMPT: "+document.querySelector("#prompt").value);
    //alert("PRP: "+document.getElementById("tr").innerText);

    //document.getElementById("tr").innerText="design";
    const prompt=document.querySelector("#prompt").value; //alert("PROMPT2: "+prompt);
    //const prompt=document.getElementById("h1").innerText; //alert("PROMPT2: "+prompt);
    const pr2=document.querySelector("#pr2").value; //alert("PR2: "+pr2);
    const pr3=document.querySelector("#pr3").value; //alert("PR3: "+pr3);
    const pr4=document.querySelector("#pr4").value; //alert("PR4: "+pr4);
    const pr5=document.querySelector("#pr5").value; //alert("PR5: "+pr5);

  setTimeout(function(){
    //const pho=document.querySelector("#pho"); const pho2=document.querySelector("#pho2");
    //STAR--fetchPh(prompt).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small}); /*alert("PH: "+pho.value)*/});
    //fetchGetty(prp).then(image=>{pho2.value=image.display_sizes[0].uri});
    //genTktlr();


    
    //handleRequest("pinfluents.com");
    //uUrl.value=document.getElementById("ee").src; alert("IU1z: "+uUrl.value);


    //https://web.scraper.workers.dev?url=pinfluents.com&selector=h1
    
    uUrl.value="pinfluents.com"; pUrl.value=`https://web.scraper.workers.dev?url=${encodeURIComponent(uUrl.value)}`;
    //uUrl.value="pinfluents.com"; pUrl.value=`/api/ws?url=${encodeURIComponent(uUrl.value)}`; //img.src=pUrl.value; alert("PU2z: "+pUrl.value);
    fetchU(pUrl.value); //.then();
    //fetchU("pinfluents.com");
    
  },5800);
});
</script>

<template>
  <ULandingHero v-if="page.hero" v-bind="page.hero">
    <span class="g"><input id="t" v-model="t">
    <span id="z"><ColorThief /></span><input id="prompt" v-model="prompt"><input id="pho" v-model="pho"><input id="pho2" v-model="pho2">
      <input id="pr2" v-model="pr2"><br><input id="pr3" v-model="pr3"><br><input id="pr4" v-model="pr4"><br><input id="pr5" v-model="pr5">
      <span id="response" v-if="response">{{response}}</span>
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
  data(){return{prompt:"",prp:"",response:null}},
  mounted(){
    //setTimeout(()=>{
      this.send()
    //},7800);
    //setTimeout(()=>{this.send2()},8800);
  },
  methods:{
    async send(){
      const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#prompt").value})});
      const data=await response.json(); this.response=data.reply; //alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response); //console.log(data.message.content);
      //alert("T1: "+document.querySelector("#tr").innerText);
      document.querySelector("#h1n").innerText=this.response;
      //document.querySelector("#tr").innerText="sdesign";
    },
    async send2(){
      const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr2").value})});
      const data=await response.json(); this.response=data.reply; //alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response);
      //alert("S: "+document.querySelector(".slick-slide"));
      document.querySelector(".slick-slide>div>div>div>div").innerText=this.response;
    },
    async send3(){
      const response=await fetch("https://api.tickettailor.com/v1/events/:2036131",{
        headers:{
          Accept:"application/json",
          Authorization:"Basic "+Buffer.from("sk_14995_133548_95cbe0f619ded70f2d57a144acefffc5:").toString("base64")},
        });
        const data=await response.json();
        alert("Test1");
        //alert("RES1P: "+JSON.stringify(data));
        return data;
    },
    async send4(){
      const response=await fetch("/api/tt",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr2").value})});
      const data=await response.json();
      alert("Test2");
      this.response=data.reply; alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response);
    },
    async send5(){
      const response=await fetch("/api/ws",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#prompt").value})});
      const data=await response.json();
      alert("Test3");
      this.response=data.reply; alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response);
    },


    
  },
}
</script>
