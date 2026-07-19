<script setup lang="ts">
const {data:page}=await useAsyncData('index',()=>queryContent('/').findOne())
useSeoMeta({titleTemplate:'',title:page.value.title,ogTitle:page.value.title,description:page.value.description,ogDescription:page.value.description})

import {ref,onMounted} from "vue"; import ColorThief from "colorthief"; import {converter,differenceEuclidean,formatHex,nearest} from "culori";
const imageUrl=ref(""); const proxyUrl=ref(""); const palette=ref([]); const backgroundImage=ref(""); const toLCH=converter("lch"); const isLoading=ref(false);

const generatePalette=async()=>{

  imageUrl.value=document.getElementById("ee").src;
  alert("IU1: "+imageUrl.value);

  isLoading.value=true; proxyUrl.value=`/api/proxy?url=${encodeURIComponent(imageUrl.value)}`;
  //alert("PU1: "+proxyUrl.value);
  const img=new Image(); img.crossOrigin="Anonymous"; img.src=proxyUrl.value;
  //alert("PU2: "+proxyUrl.value);

  img.onload=()=>{const colorThief=new ColorThief(); let colors=colorThief.getPalette(img).map((c)=>toLCH({r:c[0]/255,g:c[1]/255,b:c[2]/255,mode:"rgb"}));
    const palettesz=discoverPalettes(colors); document.getElementById("z").innerHTML=`<span class="content"></span>`;
    var i=0; for(const type of Object.keys(palettesz)){
      const paletteWrapper=document.createElement("span"); paletteWrapper.classList.add("palette-colors"); document.querySelector(".content").appendChild(paletteWrapper);
      paletteWrapper.innerHTML=palettesz[type].colors.reduce((html,color)=>{i++; html+=`<span id="dv${i}" style="background:${formatHex(color)}"></span>`;return html},"");
    }
    const scientificColors=discoverPalettes(colors); palette.value=Object.keys(scientificColors).map((type)=>({type,colors:scientificColors[type].colors.map((color)=>({hex:formatHex(color)}))}));
    backgroundImage.value=`url('${imageUrl.value}')`; isLoading.value=false
  };
  /*-r0*/
  //document.body.style.backgroundColor=document.querySelector("#dv7").style.backgroundColor;
  img.onerror=()=>{console.error("Failed to Load"); isLoading.value=false}
};
function createScientificPalettes(baseColor){const targetHueSteps={analogous:[0,30,60],triadic:[0,120,240],tetradic:[0,90,180,270],complementary:[0,180],splitComplementary:[0,150,210]}; const palettes={}; for(const type of Object.keys(targetHueSteps)){palettes[type]=targetHueSteps[type].map((step)=>({mode:"lch",l:baseColor.l,c:baseColor.c,h:(baseColor.h+step)%360}))} return palettes}
function discoverPalettes(colors){const palettes={}; for(const color of colors){const targetPalettes=createScientificPalettes(color); for(const paletteType of Object.keys(targetPalettes)){const palette=[]; for(const targetColor of targetPalettes[paletteType]){const availableColors=colors.filter((c)=>!palette.some((existing)=>isColorEqual(c,existing))); const match=nearest(availableColors,differenceEuclidean("lch"))(targetColor)[0]; palette.push(match)} palettes[paletteType]={colors:palette}}} return palettes}
function isColorEqual(c1,c2){return c1.h===c2.h&&c1.l===c2.l&&c1.c===c2.c}




const fetchPh=async(query)=>{
  const response=await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=OOBNDpH2xNShX6T9wWV_-9py3NtxfpGT2zMcashaO_o`);
  const data=await response.json(); //alert("RES1P: "+JSON.stringify(data));
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
    alert(2);
    generatePalette();
  },1800);

  //setTimeout(function(){
    const sc1=document.createElement('script'); sc1.src='https://pinfluents.com/_BCK/4/inc/zo/gl.js';
    const sc2=document.createElement('script'); sc2.src='https://pinfluents.com/_BCK/4/inc/zo/sl2.js';
    //document.head.appendChild(sc1); document.head.appendChild(sc2);
    const prompt=document.querySelector("#prompt").value; //alert("PR1: "+prompt);
    const pr2=document.querySelector("#pr2").value; //alert("PR2: "+pr2);
    const pr3=document.querySelector("#pr3").value; //alert("PR3: "+pr3);
    const pr4=document.querySelector("#pr4").value; //alert("PR4: "+pr4);
    const pr5=document.querySelector("#pr5").value; //alert("PR5: "+pr5);
    //fetchPh(prompt).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});
    //fetchGetty(prompt).then(image=>{pho2.value=image.display_sizes[0].uri});
  //},7800)
});
</script>

<template>
  <ULandingHero v-if="page.hero" v-bind="page.hero">
    <input id="t" v-model="t"><!--h1>Title</h1><h2>Subtitle</h2-->
    <span class="g">
      <span id="z"><ColorThief /></span><input id="prompt" v-model="prompt"><input id="pho" v-model="pho"><input id="pho2" v-model="pho2">
      <input id="pr2" v-model="pr2"><br><input id="pr3" v-model="pr3"><br><input id="pr4" v-model="pr4"><br><input id="pr5" v-model="pr5">
      <span id="response" v-if="response">{{response}}</span>
    </span>
    <template #title><MDC :value="page.hero.title" /></template><MDC :value="page.hero.code" class="prose prose-primary dark:prose-invert mx-auto" />
  </ULandingHero>
  <ULandingSection :title="page.features.title" :links="page.features.links"><UPageGrid><ULandingCard v-for="(item,index) of page.features.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
  <ULandingSection :title="page.sections.title" :links="page.sections.links"><UPageGrid><ULandingCard v-for="(item,index) of page.sections.items" :key="index" v-bind="item" /><Slider2 /></UPageGrid></ULandingSection>
  <ULandingSection :title="page.mid.title" :links="page.mid.links"><UPageGrid><ULandingCard v-for="(item,index) of page.mid.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
  <ULandingSection :title="page.bottom.title" :links="page.bottom.links"><UPageGrid><ULandingCard v-for="(item,index) of page.bottom.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
  <ULandingSection :title="page.lower.title" :links="page.lower.links"><UPageGrid><ULandingCard v-for="(item,index) of page.lower.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
  <ULandingSection :title="page.lower.title" :links="page.lower.links"><UPageGrid><ULandingCard v-for="(item,index) of page.lower.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
  <ULandingSection :title="page.lower.title" :links="page.lower.links"><UPageGrid><ULandingCard v-for="(item,index) of page.lower.items" :key="index" v-bind="item" /></UPageGrid></ULandingSection>
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
