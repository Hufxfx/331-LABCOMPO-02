<script setup lang="ts">
import type {Student} from '@/types'

defineProps<{
    student: Student
}>()
</script>

<template>
  <div class="event-class">
    <div class="students-card">
      <h2>ID: {{ student.studentId }}</h2>
      <h3>{{ student.name }} {{ student.surname }}</h3>
      <span>
        <strong>GPA:</strong> 
        {{ student.gpa }}</span> 
      <br>
      <img :src="student.image" class="student-img">
      <br>
      <span>Pen Amount: {{ student.penAmount }}</span>
      <br>
      <span>{{ student.description }}</span>
      <br>
      <span></span>
    </div>
  </div>
</template>
