<script setup>
import {ref,onMounted} from "vue"; import ColorThief from "colorthief"; import {converter,differenceEuclidean,formatHex,nearest} from "culori";
const imageUrl=ref(""); const proxyUrl=ref(""); const palette=ref([]); const backgroundImage=ref(""); const toLCH=converter("lch"); const isLoading=ref(false);

const generatePalette=async()=>{
  $('<img id="ee" class="zz" src="https://pinfluents.com/_BCK/4/im/dc.png" width="60" height="60">').insertBefore("ul:eq(0)");
  imageUrl.value=document.getElementById("ee").src;
  //alert("IU1: "+imageUrl.value);

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
    /*R0-D7*/

    const scientificColors=discoverPalettes(colors); palette.value=Object.keys(scientificColors).map((type)=>({type,colors:scientificColors[type].colors.map((color)=>({hex:formatHex(color)}))}));
    backgroundImage.value=`url('${imageUrl.value}')`; isLoading.value=false
  };
  alert("Z: "+document.getElementById("z").innerHTML); document.body.style.backgroundColor=document.querySelector("#dv7").style.backgroundColor;
  img.onerror=()=>{console.error("Failed to Load"); isLoading.value=false}
};
function createScientificPalettes(baseColor){const targetHueSteps={analogous:[0,30,60],triadic:[0,120,240],tetradic:[0,90,180,270],complementary:[0,180],splitComplementary:[0,150,210]}; const palettes={}; for(const type of Object.keys(targetHueSteps)){palettes[type]=targetHueSteps[type].map((step)=>({mode:"lch",l:baseColor.l,c:baseColor.c,h:(baseColor.h+step)%360}))} return palettes}
function discoverPalettes(colors){const palettes={}; for(const color of colors){const targetPalettes=createScientificPalettes(color); for(const paletteType of Object.keys(targetPalettes)){const palette=[]; for(const targetColor of targetPalettes[paletteType]){const availableColors=colors.filter((c)=>!palette.some((existing)=>isColorEqual(c,existing))); const match=nearest(availableColors,differenceEuclidean("lch"))(targetColor)[0]; palette.push(match)} palettes[paletteType]={colors:palette}}} return palettes}
function isColorEqual(c1,c2){return c1.h===c2.h&&c1.l===c2.l&&c1.c===c2.c}

function mobileOnlySlider($slidername,$dots,$arrows,$breakpoint){
  var slider=$($slidername); //alert("Tzy: "+slider.html());
  var settings={mobileFirst:true,dots:$dots,arrows:$arrows,responsive:[{breakpoint:$breakpoint,settings:"unslick"}]};slider.slick(settings);
  $(window).on("resize",function(){
    if($(window).width()>$breakpoint)return;
    if(!slider.hasClass("slick-initialized"))return slider.slick(settings);
  });
}
onMounted(()=>{
  window.onload=function(){
    setTimeout(function(){
      /*var r0=document.querySelector("#dv7").style.backgroundColor; r0=r0&&r0=="rgb(0, 0, 0)"?"#0c152d":r0;
      alert("aD7: "+document.querySelector("#dv7")); alert("R0: "+r0);
      var r1="rgba("+r0.replace("rgb(","").replace(")","")+",.1)"; var r1a="rgba(255,255,255,1)";
      var r2=document.querySelector("#dv8").style.backgroundColor;
      var r3=document.querySelector("#dv10").style.backgroundColor;

      //r2=r2&&r2=="rgb(0, 0, 0)"?"#0c152d":"#0c152d";
      r3="rgba("+r2.replace("rgb(","").replace(")","")+",.75)";
      var r4="rgba("+r2.replace("rgb(","").replace(")","")+",.85)";
      var r5="rgba("+r3.replace("rgb(","").replace(")","")+",.9)";*/
      generatePalette();
      mobileOnlySlider(".ey",true,false,767);
    },8800);
  }
});
</script>
