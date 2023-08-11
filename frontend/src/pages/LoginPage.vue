<template>
  <q-page padding>
    <FormVue />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormVue from '../components/LoginComponents/Form.vue'
export default defineComponent({
  name: 'LoginPage',
  components: {
    FormVue
  }
})
</script>