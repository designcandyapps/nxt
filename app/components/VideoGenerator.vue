<template><div v-if="video"><video id="video" autoplay><source :src="video"></video></div></template>
<script>
export default{
  mounted(){setTimeout(()=>{this.generateVideo()},1600)},
  setup(){
    const prompt=ref(""); const video=ref("");
    const generateVideo=async()=>{video.value="";
      const response=await fetch("https://api.openai.com/v1/images/edit",{
        method:"POST",headers:{"Content-Type":"application/json",
        Authorization:`Bearer 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`
      },
      body:JSON.stringify({prompt:document.querySelector("#prompt").value,n:1,size:"256x256"})});
      const data=await response.json();
      alert("RES2: "+JSON.stringify(data));
      if(data&&data.data&&data.data.length>0){video.value=data.data[0].url;
      document.querySelector("#v").firstChild.src=video.value}
    }
    return{prompt,video,generateVideo};
  },
}
</script>
