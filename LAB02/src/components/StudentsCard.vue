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

<style scoped>
.students-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.students-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.student-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin: 10px 0 10px 0;
}

</style>