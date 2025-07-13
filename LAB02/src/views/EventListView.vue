<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import type { Event } from '@/types'
import {ref, onMounted} from 'vue'
import axios from 'axios';

const events = ref<Event[]>()

onMounted(() => {
  axios
    .get('https://my-json-server.typicode.com/Hufxfx/331-db/events')
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error('There wan an error', error)
    })
})
</script>

<template>
  <h1>Events for Good</h1>
    <!-- new element -->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>