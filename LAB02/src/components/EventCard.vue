<script setup lang="ts">

import {type Event} from '@/types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink class="event-link" :to="{ name: 'event-detail-view', params: { id: event.id.toString() } }">
    <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-105 hover:shadow-sp">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
      <div class="categories-organizer">
        <span>{{ event.category }}</span>
        <br>
        <span>{{ event.organizer }}</span>
      </div>
    </div>
  </RouterLink>
</template>


