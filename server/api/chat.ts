export default defineEventHandler(async(event)=>{
  const body=await readBody(event);
  const apiResponse=await fetch("https://api.openai.com/v1/responses",{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer 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`
    },
    body:JSON.stringify({
      model: "gpt-5-nano",
      messages: [{role:"user",content:body.message}],
    }),
  });
  const data=await apiResponse.json();
  return{reply:data.choices[0].message.content};
});
