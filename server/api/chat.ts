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
