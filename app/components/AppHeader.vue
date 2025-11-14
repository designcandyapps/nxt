<script setup lang="ts">
import type {NavItem} from '@nuxt/content'
const navigation=inject<NavItem[]>('navigation',[])
const {header}=useAppConfig()
</script>

<template>


<UHeader>
<template>
  <div>
    <div>

      <div>
        <div></div>
      </div>

      <div>
        <div>
          <ul>
            <li><a>Learn</a>
              <ul>
                <li><a href="#">Practice</a></li>
                <li><a href="#">Product</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  </div>
</div>
</template>
</UHeader>

</template>
