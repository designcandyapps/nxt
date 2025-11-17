export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio'
  ],
  hooks: {
    'components:extend':(components)=>{
      const globals=components.filter(c=>['UButton','UIcon'].includes(c.pascalName))
      globals.forEach(c=>c.global=true)
    }
  },
  app: {head:{
    link:[
      //{rel:'stylesheet',href:'https://pinfluents.com/_BCK/4/inc/zo/ap.css'},
      {rel:'stylesheet',href:'https://pinfluents.com/_BCK/4/inc/ct.css'},
    ],
    script:[
      {src:'https://pinfluents.com/_BCK/4/zd18/inc/jq.js'},
      //{src:'https://pinfluents.com/_BCK/4/jq3.7.js'},
      {src:'https://pinfluents.com/_BCK/4/inc/sl.js'},
      {src:'https://pinfluents.com/_BCK/4/inc/ct.js'},

      /*
      {src:'https://pinfluents.com/_BCK/4/inc/zo/bs.js'},
      {src:'https://pinfluents.com/_BCK/4/inc/zo/sl.js'},
      {src:'https://pinfluents.com/_BCK/4/inc/zo/ap.js'},
      {src:'https://pinfluents.com/_BCK/4/inc/zo/re.js'},
      {src:'https://pinfluents.com/_BCK/4/inc/zo/sw.js'},
      */

      {src:'https://pinfluents.com/_BCK/4/jqP9.js'},
      //{src:'https://js.stripe.com/v3/'},
      //{src:'https://pinfluents.com/_BCK/4/inc/str/utils.js'},
      //{src:'https://pinfluents.com/_BCK/4/inc/str/index.js'},
    ],
  }},
  colorMode: {preference:'light'},
  nitro: {prerender:{routes:['/'],crawlLinks:true}},
  routeRules: {'/api/search.json':{prerender:true}},
  devtools: {enabled:true},
  typescript: {strict:false},
  future: {compatibilityVersion:4},
  eslint: {config:{stylistic:{commaDangle:'never',braceStyle:'1tbs'}}
  },
  compatibilityDate:'2024-07-11'
})
