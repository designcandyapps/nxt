<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'
definePageMeta({ layout:'docs' })
const route=useRoute()
const { toc,seo }=useAppConfig()
const { data:page }=await useAsyncData(route.path,()=>queryContent(route.path).findOne())
if(!page.value){
  throw createError({ statusCode:404,statusMessage:'Page not found',fatal:true })
}
const { data:surround }=await useAsyncData(`${route.path}-surround`,()=>queryContent()
  .where({ _extension:'md',navigation:{ $ne:false } })
  .only(['title','description','_path'])
  .findSurround(withoutTrailingSlash(route.path))
)
useSeoMeta({
  title:page.value.title,
  ogTitle:`${page.value.title}-${seo?.siteName}`,
  description:page.value.description,
  ogDescription:page.value.description
})
defineOgImageComponent('Docs')
const headline=computed(()=>findPageHeadline(page.value))
const links=computed(()=>[toc?.bottom?.edit&&{
  icon:'i-heroicons-pencil-square',
  label:'Edit this',
  to:`${toc.bottom.edit}/${page?.value?._file}`
},...(toc?.bottom?.links||[])].filter(Boolean))
</script>

<template>
  <UPage>
<UPageHeader :title="page.title" :description="page.description" :links="page.links" :headline="headline" />
    <UPageBody prose>
      <ContentRenderer v-if="page.body" :value="page" />
      <hr v-if="surround?.length">
      <UContentSurround :surround="surround" />
    </UPageBody>
    <template v-if="page.toc !== false" #right>
<UContentToc :title="toc?.title" :links="page.body?.toc?.links">
        <template v-if="toc?.bottom" #bottom>
          <div class="hidden lg:block space-y-6" :class="{ '!mt-6': page.body?.toc?.links?.length }">
            <UDivider v-if="page.body?.toc?.links?.length" type="dashed" />
<UPageLinks :title="toc.bottom.title" :links="links" />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
