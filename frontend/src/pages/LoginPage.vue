<template>
  <q-page padding>
    <FormLogin />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormLogin from '../components/LoginComponents/Form.vue'
export default defineComponent({
  name: 'LoginPage',
  components: {
    FormLogin
  }
})
</script>