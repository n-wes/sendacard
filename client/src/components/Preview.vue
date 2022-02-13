<template>
  <div>
    <q-card class="my-card">
      <q-img
        src="../assets/bouquet.jpg"
        class='letter-img'
      >
        <div class="front-message absolute-center">
          <div class="text-h6">To Receipient</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn flat>Open Letter</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
    name: 'Preview',
}
</script>

<style scoped>
.my-card {
    height: 50rem;
    width: 37.5rem;
}

.letter-img{
    height: 100%;
    width: 100%;
}
</style>