import {OpenAI} from "openai";
export default defineEventHandler(async(event)=>{
  const body=await readBody(event);
  const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});
  const completion=await client.chat.completions.create({
    model:"gpt-4o",
    messages:body.messages,
  });
  return completion.choices[0].message;
});



/*import OpenAI from "openai";
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
