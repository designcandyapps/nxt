export default defineEventHandler(async(event)=>{
  const body=await readBody(event);
  const apiResponse=await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer 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`
    },
    body:JSON.stringify({
      model:"gpt-3.5-turbo",
      messages:[{role:"user",content:body.message}],
    }),
  });
  const data=await apiResponse.json();
  return{reply:data.choices[0].message.content};
});
