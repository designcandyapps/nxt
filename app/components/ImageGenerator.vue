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
