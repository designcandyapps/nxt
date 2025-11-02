/*export default defineEventHandler(async(event)=>{
  const body=await readBody(event);
  const apiResponse=await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      Authorization:`Bearer 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`
    },
    body:JSON.stringify({
      model:"gpt-5",
      messages:[{role:"user",content:body.message}],
    }),
  });
  const data=await apiResponse.json();
  return{reply:data.choices[0].message.content};
});*/



/*import OpenAI from "openai";
const client = new OpenAI({apiKey: process.env.OPENAI_API_KEY,
});
const main = async () => {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: "Hello OpenAI!" }],
  });
  alert(response.choices[0].message.content);
};
main();*/

import {OpenAI} from "openai"
export default defineEventHandler(async(event)=>{
  const body=await readBody(event)
  const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY})
  const completion=await client.chat.completions.create({
    model:"gpt-4o",
    messages:body.messages,
  })
  return completion.choices[0].message
})
