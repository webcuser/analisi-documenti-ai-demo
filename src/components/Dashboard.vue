<template>
  <div class="p-6 bg-white rounded-lg shadow">
    <h2 class="text-2xl font-semibold mb-4">Dashboard</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-blue-500 text-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-medium">Documents Processed</h3>
        <p class="text-3xl">{{ documentsProcessed }}</p>
      </div>
      <div class="bg-green-500 text-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-medium">Daily Uploads</h3>
        <p class="text-3xl">{{ dailyUploads }}</p>
      </div>
      <div class="bg-yellow-500 text-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-medium">Average Processing Time</h3>
        <p class="text-3xl">{{ averageProcessingTime }} mins</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documentsProcessed: 1200,
      dailyUploads: 75,
      averageProcessingTime: 3.5,
    };
  },
};
</script>

<style scoped>
.bg-blue-500 {
  background-color: #4299E1;
}
.bg-green-500 {
  background-color: #48BB78;
}
.bg-yellow-500 {
  background-color: #ECC94B;
}
</style>
