export default defineEventHandler(async(event)=>{
  const body=await readBody(event);
  const apiResponse=await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`
    },
    body:JSON.stringify({
      model:"gpt-3.5-turbo",
      messages:[{role:"user",content:body.message}],
    }),
  });
  const data=await apiResponse.json();
  return{reply:data.choices[0].message.content};
});



/*import {OpenAI} from "openai";
export default defineEventHandler(async(event)=>{
  const body=await readBody(event);
  const client=new OpenAI({apiKey:document.querySelector("#apiKey").value});
  alert("CL: "+client);
  const completion=await client.chat.completions.create({
    model:"gpt-4o",
    messages:body.messages,
  });
  return completion.choices[0].message;
});


import OpenAI from "openai";
alert("AK: "+document.querySelector("#apiKey").value);
const openai=new OpenAI({
  //apiKey:apiKey.value
  apiKey:document.querySelector("#apiKey").value
});
const response=openai.responses.create({
  model:"gpt-5-nano",
  input:"write a haiku",
  store:true,
});
response.then((result)=>console.log(result.output_text));
*/
