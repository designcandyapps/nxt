<script setup lang="ts">
import type {NavItem} from '@nuxt/content'
const navigation=inject<NavItem[]>('navigation',[])
const {header}=useAppConfig()

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
import {ref,onMounted} from "vue"; import ColorThief from "colorthief"; import {converter,differenceEuclidean,formatHex,nearest} from "culori";
const imageUrl=ref(""); const proxyUrl=ref(""); const palette=ref([]); const backgroundImage=ref(""); const toLCH=converter("lch"); const isLoading=ref(false);

const generatePalette=async()=>{
  alert(1);
  //alert(document.getElementById("ee").src);
  imageUrl.value=document.getElementById("ee").src;
  alert("IU1: "+imageUrl.value);

  isLoading.value=true; proxyUrl.value=`/api/proxy?url=${encodeURIComponent(imageUrl.value)}`;
  //alert("PU1: "+proxyUrl.value);
  const img=new Image(); img.crossOrigin="Anonymous"; img.src=proxyUrl.value;
  alert("PU2: "+proxyUrl.value);

  img.onload=()=>{const colorThief=new ColorThief(); let colors=colorThief.getPalette(img).map((c)=>toLCH({r:c[0]/255,g:c[1]/255,b:c[2]/255,mode:"rgb"}));
    const palettesz=discoverPalettes(colors); document.getElementById("z").innerHTML=`<span class="content"></span>`;
    var i=0; for(const type of Object.keys(palettesz)){
      const paletteWrapper=document.createElement("span"); paletteWrapper.classList.add("palette-colors"); document.querySelector(".content").appendChild(paletteWrapper);
      paletteWrapper.innerHTML=palettesz[type].colors.reduce((html,color)=>{i++; html+=`<span id="dv${i}" style="background:${formatHex(color)}"></span>`;return html},"");
    }
    const scientificColors=discoverPalettes(colors); palette.value=Object.keys(scientificColors).map((type)=>({type,colors:scientificColors[type].colors.map((color)=>({hex:formatHex(color)}))}));
    backgroundImage.value=`url('${imageUrl.value}')`; isLoading.value=false
    const r0=document.getElementById("dv7").style.backgroundColor; alert("G: "+r0);
  };
  //document.body.style.backgroundColor=document.querySelector("#dv7").style.backgroundColor;
  img.onerror=()=>{console.error("Failed to Load"); isLoading.value=false}
};
function createScientificPalettes(baseColor){const targetHueSteps={analogous:[0,30,60],triadic:[0,120,240],tetradic:[0,90,180,270],complementary:[0,180],splitComplementary:[0,150,210]}; const palettes={}; for(const type of Object.keys(targetHueSteps)){palettes[type]=targetHueSteps[type].map((step)=>({mode:"lch",l:baseColor.l,c:baseColor.c,h:(baseColor.h+step)%360}))} return palettes}
function discoverPalettes(colors){const palettes={}; for(const color of colors){const targetPalettes=createScientificPalettes(color); for(const paletteType of Object.keys(targetPalettes)){const palette=[]; for(const targetColor of targetPalettes[paletteType]){const availableColors=colors.filter((c)=>!palette.some((existing)=>isColorEqual(c,existing))); const match=nearest(availableColors,differenceEuclidean("lch"))(targetColor)[0]; palette.push(match)} palettes[paletteType]={colors:palette}}} return palettes}
function isColorEqual(c1,c2){return c1.h===c2.h&&c1.l===c2.l&&c1.c===c2.c}
onMounted(()=>{
    const prompt=document.querySelector("#prompt").value; //alert("PR1: "+prompt);
    const pr2=document.querySelector("#pr2").value; //alert("PR2: "+pr2);
    const pr3=document.querySelector("#pr3").value; //alert("PR3: "+pr3);
    const pr4=document.querySelector("#pr4").value; //alert("PR4: "+pr4);
    const pr5=document.querySelector("#pr5").value; //alert("PR5: "+pr5);
    //fetchPh(prompt).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});
    //fetchGetty(prompt).then(image=>{pho2.value=image.display_sizes[0].uri});
  window.onload=function(){
    alert(0);
    setTimeout(function(){
      generatePalette();
    },1800);
  }
});
</script>

<template>
  <hd />
</template>
