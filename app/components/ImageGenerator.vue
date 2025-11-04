<template><div v-if="image"><img id="i" :src="image"></div></template>
<script>
export default{
  mounted(){setTimeout(()=>{this.generateImage()},7800)},
  setup(){
    const prompt=ref(""); const image=ref("");
    const generateImage=async()=>{image.value="";
      const response=await fetch("https://api.openai.com/v1/responses",{
        method:"POST",
        headers:{"Content-Type":"application/json",
  "Authorization":`Bearer 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`
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
