<template><div v-if="image"><img id="i" :src="image"></div></template>
<script>
export default{
  mounted(){setTimeout(()=>{this.generateImage()},7800)},
  setup(){
    const prompt=ref(""); const image=ref("");
    const generateImage=async()=>{image.value="";
      const response=await fetch("https://api.openai.com/v1/images/generations",{
        method:"POST",headers:{"Content-Type":"application/json",
        Authorization:`Bearer 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`
      },
      body:JSON.stringify({prompt:document.querySelector("#prompt").value,n:1,size:"256x256"})});
      const data=await response.json(); alert("RES2Ab: "+JSON.stringify(data));
      if(data&&data.data&&data.data.length>0){image.value=data.data[0].url;
      document.querySelector("#v").firstChild.style.backgroundImage="url("+image.value+")";}
    }
    return{prompt,image,generateImage};
  },
}
</script>
