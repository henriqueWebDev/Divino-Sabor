<template>
  <q-page padding>
    <q-toolbar id="toolbar" class="text-center flex align-center full-width">
      <q-btn class="q-ma-sm" @click="changeSeletorCategory(String('burger'))"><q-img src="../assets/burger-icon.png" style="width: 30px; height: 30px;"/></q-btn>
      <q-btn class="q-ma-sm" @click="changeSeletorCategory(String('hot-dog'))"><q-img src="../assets/hot-dog-icon.png" style="width: 30px; height: 30px;"/></q-btn>
    </q-toolbar>
    <q-page class="fit">
      
    </q-page>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import collectProductsFromRepository from '../../../backend/scripts/collectProductsFromRepository'
export default defineComponent({
  name: 'HomePage',
  data() {
    return {
      categorySelector: "burger",
      productList: []
    }
  },
  methods: {
    changeSeletorCategory(type: string) {
      this.categorySelector = type
      console.log(this.categorySelector)
    }
  },
})
</script>

<style>
  @media (max-width: 600px) {
    #toolbar {
      justify-content: center;
    }
  }
</style>