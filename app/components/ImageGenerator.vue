<template><div v-if="image"><img id="i" :src="image"></div></template>
<script>
export default{
  mounted(){setTimeout(()=>{this.generateImage()},300)},
  setup(){const prompt=ref(""); const image=ref("");
    const generateImage=async()=>{image.value="";
      const response=await fetch("https://api.openai.com/v1/images/generations",{
        method:"POST",headers:{"Content-Type":"application/json",
        Authorization:`Bearer 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`
      },
      body:JSON.stringify({prompt:document.querySelector("#prompt").value,n:1,size:"256x256"})});
      const data=await response.json(); alert("RES2A: "+JSON.stringify(data));
      if(data&&data.data&&data.data.length>0){image.value=data.data[0].url;
      document.querySelector("#v").firstChild.style.backgroundImage="url("+image.value+")";}
    }
    return{prompt,image,generateImage};
  },
}
</script>
