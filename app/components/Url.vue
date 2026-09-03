<script setup>
import {ref,onMounted} from "vue";
const uUrl=ref("");
const pUrl=ref("");
const bImage=ref("");
//const isLoading=ref(false);

const genPal=async()=>{
  alert(3);
  uUrl.value=document.getElementById("ee").src; alert("IU1z: "+uUrl.value);
  isLoading.value=true; pUrl.value=`/api/proxy?url=${encodeURIComponent(uUrl.value)}`;
  const img=new Image(); img.crossOrigin="Anonymous"; img.src=pUrl.value; //alert("PU2z: "+pUrl.value);

  /*img.onload=()=>{
    const colorThief=new ColorThief();
    let colors=colorThief.getPalette(img).map((c)=>toLCH({r:c[0]/255,g:c[1]/255,b:c[2]/255,mode:"rgb"}));
    const palettesz=discoverPalettes(colors); document.getElementById("z").innerHTML=`<span class="content"></span>`;
    var i=0; for(const type of Object.keys(palettesz)){
      const paletteWrapper=document.createElement("span"); paletteWrapper.classList.add("palette-colors"); document.querySelector(".content").appendChild(paletteWrapper);
      paletteWrapper.innerHTML=palettesz[type].colors.reduce((html,color)=>{i++; html+=`<span id="dv${i}" style="background:${formatHex(color)}"></span>`;return html},"");
    }
    const scientificColors=discoverPalettes(colors); palette.value=Object.keys(scientificColors).map((type)=>({type,colors:scientificColors[type].colors.map((color)=>({hex:formatHex(color)}))}));
    bImage.value=`url('${uUrl.value}')`;
    isLoading.value=false;
  };
  img.onerror=()=>{console.error("Faile"); isLoading.value=false}*/
};
onMounted(()=>{
  alert(2);
  setTimeout(function(){
    genPal();
  },1800);
});
</script>
