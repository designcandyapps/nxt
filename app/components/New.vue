<template>
<div class="flex flex-col lg:grid gap-8 relative lg:grid-cols-10 lg:gap-8 overflow-hidden p-1">

  <div class="col-span-8 flex items-center animate-top">

    <div class="relative w-full flex items-center h-4">
      <inp1 />
    </div>

  </div>


  <div class="col-span-2 row-span-2 flex items-center animate-right">
  <div class="space-y-1">

    <div class="relative flex items-start">
      <inp2 />
    </div>
    <div class="relative flex items-start">
      <inp3 />
    </div>
    <div class="relative flex items-start">
      <inp4 />
    </div>

  </div>
  </div>


  <div class="col-span-2 animate-left z-10">

    <div data-headlessui-state="" class="relative inline-flex text-left rtl:text-right">
      <btn1 />
    </div>

  </div>


  <div class="col-span-6 flex flex-wrap items-center justify-between gap-1 animate-bottom">

    <div class="inline-flex flex-row-reverse justify-end">
      <spn />
    </div>
    <div class="flex items-center -space-x-px">
ss
    </div>

  </div>

</div>
</template>
