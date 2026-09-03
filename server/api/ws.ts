export default defineEventHandler(async(event)=>{
  const query=getQuery(event); const uUrl=query.url as string;
  //alert('uURL:'+uUrl);
  if(!uUrl){return new Response("Inval",{status:400})}
  try{const response=await fetch(uUrl,{headers:{"User-Agent":"Mozilla/5.0"}});
  //if(!response.ok){return new Response("Error",{status:500})}
  const contentType=response.headers.get("Content-Type");
  //if(!contentType||!contentType.startsWith("image/")){return new Response("Not Img",{status:400})}
  return new Response(await response.arrayBuffer(),{headers:{"Content-Type":contentType,"Access-Control-Allow-Origin":"*","Cache-Control":"no-cache"}})}
  //catch(error){
    //return new Response("Server Error",{status:500})
  //}
});
