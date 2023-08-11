<template>
  <q-item id="product" class="bg-orange-12 full-height q-my-sm q-pa-none flex">
    <q-item><q-img :src="productData.image" class="flex self-center" style="width: 120px; height: 120px;"/></q-item>
    <q-item id="data-products" class="full-width">
      <q-item class="full-width flex column align-around justify-around text-white">
        <q-h2 class="titles-font text-h4">{{ productData.name }}</q-h2>
        <q-h5 class="text-body1">{{ productData.description }}</q-h5>
        <q-btn class="bg-white text-black text-body1 q-pa-none">{{ productData.buttonStatus }}</q-btn>
      </q-item>
      <q-item class="flex-4 flex jusfity-center align-top text-white">
        <q-h5 class="text-h6">R$ {{ productData.price }}</q-h5>
      </q-item>
    </q-item>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ProductVue',
  props: {
    productData: {
      type: Object,
      required: true
    }
  },  
})
</script>

<style>
  .titles-font {
    font-family: 'Bahiana';
  }
  @media (max-width: 600px) {
    #product {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    #data-products {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
  }
</style>