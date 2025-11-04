import OpenAI from "openai";
const openai=new OpenAI({
  apiKey: "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",
});
const response=openai.responses.create({
  model:"gpt-5-nano",
  input:"write a haiku",
  store:true,
});
response.then((result)=>console.log(result.output_text));
