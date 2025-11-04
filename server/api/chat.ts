import OpenAI from "openai";
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
