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
onMounted(()=>{
  //setTimeout(function(){
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
  <hd />
</template>
