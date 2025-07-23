<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event} from '@/types'
import { useRoute, useRouter } from 'vue-router';

const props = defineProps<{
    event: Event
    id: String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {event} = toRefs(props)
const router = useRouter()
const register = () => {
    // If the registration API call sucessful
    // Push back to the event details view
    router.push({ name: 'event-detail-view'})
}
</script>

<template>
    <p>Register event here</p>
    <button @click="register">Register</button>
</template>