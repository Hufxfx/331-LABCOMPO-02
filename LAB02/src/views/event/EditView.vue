<script setup lang="ts">
import {toRefs} from 'vue'
import { type Event} from '@/types'
import { useMessageStore } from '@/stores/message';
import { useRouter } from 'vue-router';
const router = useRouter()
const store = useMessageStore()


const props = defineProps<{
    event: Event
    id: String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const editEvent = () => {
    router.push({
        name: 'event-detail-view',
    })
    store.updateMessage('You are successfully edited for ' + props.event.title)
    setTimeout(() => {
        store.resetMessage()
    }, 3000)
    router.push({
        name: 'event-detail-view',
        params: {id: props.event.id}
    })
}
</script>

<template>
    <p>Edit event here</p>
    <button @click="editEvent">Edit</button>
</template>