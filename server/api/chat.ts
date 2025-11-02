import {OpenAI} from "openai"
export default defineEventHandler(async(event)=>{
  const body=await readBody(event)
  const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY})
  const completion=await client.chat.completions.create({
    model:"gpt-5",
    messages:body.messages,
  })
  return completion.choices[0].message
})
