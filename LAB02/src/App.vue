<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia';
import { SpeedInsights } from "@vercel/speed-insights/vue"

const messageStore = useMessageStore();
const { message } = storeToRefs(messageStore);

</script>

<template>
  <!-- <SpeedInsights /> -->
  <div class="text-center font-sans text-gray-700 antialias">
    <header>
      <div  class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <h1>Deploy with Vercel</h1>
      <div class="wrapper">
        <nav class="py-6">
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{name: 'event-list-view', query: {page:1 , size: 2}}">Event</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{name: 'student-list-view'}">Students</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{name: 'about'}">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

