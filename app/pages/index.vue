<script setup lang="ts">
const {data:page}=await useAsyncData('index',()=>queryContent('/').findOne());
useSeoMeta({titleTemplate:'',title:page.value.title,ogTitle:page.value.title,description:page.value.description,ogDescription:page.value.description});
import {ref,onMounted} from "vue"; import {converter,differenceEuclidean,formatHex,nearest} from "culori";
//const prompt=ref(""); const pr=ref(""); const pr2=ref(""); const uUrl=ref(""); const pUrl=ref(""); //const proxyUrl=ref("");
//const prompt=document.querySelector("#prompt"); const pr=document.querySelector("#pr"); const pr2=document.querySelector("#pr2");
//const pr=ref(""); const pr2=ref("");
const uUrl=ref(""); const pUrl=ref(""); const zUrl=ref("");
const imageUrl=ref(""); const proxyUrl=ref(""); const palette=ref([]); const backgroundImage=ref(""); const toLCH=converter("lch"); const isLoading=ref(false);
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
  //-------document.getElementById("prompt").value=document.getElementById("tr").innerText;
  //const prompt=document.querySelector("#prompt").value; //const pr2=document.querySelector("#pr2").value; //alert("PROMPT: "+prompt); alert("PR2: "+pr2);

  //prompt.value=h1;
  //const prompt=document.getElementById("prompt").value;
  return data.results;
};



  
const generatePalette=async()=>{alert(9);
  //prompt.value=document.querySelector("#prompt").value;
  //<<prompt.value=document.getElementById("tr").innerText; alert("PR99: "+prompt.value);
  //pr.value=document.querySelector("#pr").value; pr2.value=document.querySelector("#pr2").value;
  uUrl.value=document.getElementById("sp").innerText;
  pUrl.value=`https://web.scraper.workers.dev?url=${encodeURIComponent(uUrl.value)}&selector=h1`;
  //pUrl.value=`/api/ws?url=${encodeURIComponent(uUrl.value)}`;
  alert("pUrl: "+pUrl.value);
  fetchU(uUrl.value);

  imageUrl.value=document.getElementById("ee").src; alert("IU1: "+imageUrl.value);
  isLoading.value=true; proxyUrl.value=`/api/proxy?url=${encodeURIComponent(imageUrl.value)}`;



  const img=new Image(); img.crossOrigin="Anonymous"; img.src=proxyUrl.value; //alert("PU2: "+proxyUrl.value);
  img.onload=()=>{const colorThief=new ColorThief(); let colors=colorThief.getPalette(img).map((c)=>toLCH({r:c[0]/255,g:c[1]/255,b:c[2]/255,mode:"rgb"}));
    const palettesz=discoverPalettes(colors); document.getElementById("z").innerHTML=`<span class="content"></span>`;
    var i=0; for(const type of Object.keys(palettesz)){
      const paletteWrapper=document.createElement("span"); paletteWrapper.classList.add("palette-colors"); document.querySelector(".content").appendChild(paletteWrapper);
      paletteWrapper.innerHTML=palettesz[type].colors.reduce((html,color)=>{i++; html+=`<span id="dv${i}" style="background:${formatHex(color)}"></span>`;return html},"");
    }//alert("Z: "+document.getElementById("z").innerHTML);
    const scientificColors=discoverPalettes(colors); palette.value=Object.keys(scientificColors).map((type)=>({type,colors:scientificColors[type].colors.map((color)=>({hex:formatHex(color)}))}));
    backgroundImage.value=`url('${imageUrl.value}')`; isLoading.value=false;
    const r0=document.querySelector("#dv7").style.backgroundColor; alert("G2: "+r0);
    const r2=document.querySelector("#dv8").style.backgroundColor;
    const r3=document.querySelector("#dv10").style.backgroundColor;
    document.body.style.backgroundColor=r0;
  };
  img.onerror=()=>{console.error("Failed to Load"); isLoading.value=false}
};
function createScientificPalettes(baseColor){const targetHueSteps={analogous:[0,30,60],triadic:[0,120,240],tetradic:[0,90,180,270],complementary:[0,180],splitComplementary:[0,150,210]}; const palettes={}; for(const type of Object.keys(targetHueSteps)){palettes[type]=targetHueSteps[type].map((step)=>({mode:"lch",l:baseColor.l,c:baseColor.c,h:(baseColor.h+step)%360}))} return palettes}
function discoverPalettes(colors){const palettes={}; for(const color of colors){const targetPalettes=createScientificPalettes(color); for(const paletteType of Object.keys(targetPalettes)){const palette=[]; for(const targetColor of targetPalettes[paletteType]){const availableColors=colors.filter((c)=>!palette.some((existing)=>isColorEqual(c,existing))); const match=nearest(availableColors,differenceEuclidean("lch"))(targetColor)[0]; palette.push(match)} palettes[paletteType]={colors:palette}}} return palettes}
function isColorEqual(c1,c2){return c1.h===c2.h&&c1.l===c2.l&&c1.c===c2.c}

onMounted(()=>{alert(8);
  const prompt=document.querySelector("#prompt").value;
  alert("PR97: "+prompt);
  alert("PRO: "+document.querySelector("#prompt").value);
  setTimeout(function(){
    generatePalette();
  },1800);
});
</script>

<template>
  <ULandingHero v-if="page.hero" v-bind="page.hero">
    <span class="g"><span id="z"><!--ColorThief /--></span><!--Url /-->
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
  data(){return{prompt:"",response:null}},
  mounted(){
    //setTimeout(function(){
      this.send()
    //},2300);
  },
  methods:{
    async send(){
      const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#prompt").value})});
      const data=await response.json(); this.response=data.reply; alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response); //console.log(data.message.content);
      //document.querySelector("#h1n").innerText=this.response;
    },
    async sendX(){
      const response=await fetch("/api/ws",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#prompt").value})});
      const data=await response.json(); this.response=data.reply; alert("RES00a: "+JSON.stringify(data)); alert("RES01a: "+this.response); //console.log(data.message.content);
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
