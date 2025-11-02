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
