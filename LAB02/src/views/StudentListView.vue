<script setup lang="ts">
import StudentsCard from '@/components/StudentsCard.vue';
import type { Student } from '@/types'
import {ref, onMounted} from 'vue'
import StudentsService from '@/services/StudentsService';

const students = ref<Student[]>([])

onMounted(() => {
  StudentsService.getEvents()
    .then((response) => {
        
      students.value = response.data
    })
    .catch((error) => {
      console.error('There was an error', error)
    })
})

</script>

<template>
  <h1>Students List</h1>
    <!-- new element -->
  <div class="students">
    <StudentsCard v-for="student in students" :key="student.id" :student="student"/>
  </div>
</template>

<style scoped>
.students {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>