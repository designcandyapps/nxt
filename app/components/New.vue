<template>
<div class="flex flex-col lg:grid gap-8 relative lg:grid-cols-10 lg:gap-8 overflow-hidden p-1">

  <div class="col-span-8 flex items-center animate-top">
    <div class="relative w-full flex items-center h-4">
      <btns />
    </div>
  </div>

<div class="col-span-3 row-span-8 gap-6 flex flex-col justify-between animate-left">
  <div class="w-full pointer-events-auto bg-white dark:bg-gray-900 rounded-lg shadow ring-1 ring-gray-200 dark:ring-gray-800" role="status">
    <not1 />
  </div>
  <div class="relative space-y-2 w-full">
    <btns1 />
    <div class="relative w-full">
      <fm1 /><fm2 />
    </div>
  </div>
  <pul />
</div>

<div class="col-span-7 row-span-6 animate-bottom">
  <div class="rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900">
    <div>
      <div class="relative overflow-x-auto">
        <tbl />
      </div>
    </div>
  </div>
</div>

</div>
</template>
