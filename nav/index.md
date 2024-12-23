---
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './data'
import NavLayout from '../.vitepress/components/NavLayout.vue'
</script>

<NavLayout>
# 前端导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />
</NavLayout>

