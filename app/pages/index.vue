<script setup lang="ts">
const {data:page}=await useAsyncData('index',()=>queryContent('/').findOne());
useSeoMeta({titleTemplate:'',title:page.value.title,ogTitle:page.value.title,description:page.value.description,ogDescription:page.value.description});
//import {ref,onMounted} from "vue";
//const prompt=ref(""); const pr=ref(""); const pr2=ref(""); const uUrl=ref(""); const pUrl=ref(""); //const proxyUrl=ref("");
//const prompt=document.querySelector("#prompt"); const pr=document.querySelector("#pr"); const pr2=document.querySelector("#pr2");
/*const genTktlr=async()=>{//alert(5);
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
const fetchU=async(query)=>{
  const response=await fetch(`https://web.scraper.workers.dev?url=${encodeURIComponent(query)}&selector=h1`);
  //const response=await fetch(`/api/ws?url=${encodeURIComponent(query)}`);
  const data=await response.json(); alert("RESPz: "+JSON.stringify(data));
  const h1=data.result.h1[0];

  //document.querySelector("#prompt").value=h1;
  document.getElementById("tr").innerText=h1;
  document.getElementById("prompt").value=document.getElementById("tr").innerText;
  //const prompt=document.querySelector("#prompt").value; //const pr2=document.querySelector("#pr2").value; //alert("PROMPT: "+prompt); alert("PR2: "+pr2);
  //alert("PRO: "+document.querySelector("#prompt").value);
  return data.results;
};
onMounted(()=>{
  //setTimeout(function(){
    //document.getElementById("prompt").value=document.getElementById("tr").innerText;
    //const prompt=document.querySelector("#prompt").value; alert("PROMPT: "+prompt);
    //const pr:string=new URLSearchParams(location.search).get("u")??"wordpress.com"; //document.querySelector("#tr").innerText;

    var pr=new URLSearchParams(location.search).get("u"); //u=!u||u=="null"?$("#pr2").val():u;
    alert("PR: "+u);
  
    //const pr=document.querySelector("#pr").value; alert("PR: "+pr);
    //const pr2=document.querySelector("#pr2"); pr2=pr2&&pr2!=""?pr2.value; alert("PR2: "+pr2); //alert(document.querySelector("#sp"));
    //<<const pho=document.querySelector("#pho"); const pho2=document.querySelector("#pho2");
    //fetchPh(pr).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small}); /*alert("PH: "+pho.value)*/});
    //fetchGetty(pr).then(image=>{pho2.value=image.display_sizes[0].uri});


    //uUrl.value="pinfluents.com"; pUrl.value=`https://web.scraper.workers.dev?url=${encodeURIComponent(uUrl.value)}&selector=h1`;
    //pUrl.value=`/api/ws?url=${encodeURIComponent(uUrl.value)}`;
    //fetchU(uUrl.value); //.then();

    //fetchU(pr);
    //document.getElementById("tr").innerText=h1;
    document.getElementById("prompt").value=document.getElementById("tr").innerText;
    const prompt=document.querySelector("#prompt").value; //alert("PROMPT: "+prompt);
//},5800);
});
</script>

<template>
  <ULandingHero v-if="page.hero" v-bind="page.hero">
    <span class="g"><span id="z"><ColorThief /></span><!--Url /-->
      <input id="prompt" v-model="prompt" style="border:2px solid red;"><input id="pr" v-model="pr" style="border:2px solid pink;"><input id="pr2" v-model="pr2" style="border:2px solid blue;"><input id="t" v-model="t" style="border:2px solid green;">
      <input id="pho" v-model="pho"><input id="pho2" v-model="pho2"><span id="response" v-if="response">{{response}}</span>
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
  data(){return{prompt:"",pr2:"",prp:"",pro:"",response:null}},
  mounted(){
    //setTimeout(function(){
      this.send()
    //},5800);
  },
  methods:{
    async send(){
      const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#prompt").value})});
      const data=await response.json(); this.response=data.reply; alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response); //console.log(data.message.content);
      document.querySelector("#h1n").innerText=this.response;
    },
    async sendX(){
      const response=await fetch("/api/ws",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#t").value})});
      const data=await response.json(); this.response=data.reply; alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response); //console.log(data.message.content);
    },





    
    async send2(){
      const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr2").value})});
      const data=await response.json(); this.response=data.reply; //alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response);
      //alert("S: "+document.querySelector(".slick-slide"));
      document.querySelector(".slick-slide>div>div>div>div").innerText=this.response;
    },
    async send3(){
      const response=await fetch("https://api.tickettailor.com/v1/events/:2036131",{
        headers:{Accept:"application/json",Authorization:"Basic "+Buffer.from("sk_14995_133548_95cbe0f619ded70f2d57a144acefffc5:").toString("base64")}});
        const data=await response.json(); //alert("RES1P: "+JSON.stringify(data));
        return data;
    },
    async send4(){
      const response=await fetch("/api/tt",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr2").value})});
      const data=await response.json(); //alert("RES2P: "+JSON.stringify(data));
      this.response=data.reply; //alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response);
    },
    async send5(){
      alert(uUrl);
      const response=await fetch("/api/ws",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:uUrl})});
      const data=await response.json(); //alert("RES3P: "+JSON.stringify(data));
      this.response=data.reply; //alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response);
    },
  },
}
</script>
