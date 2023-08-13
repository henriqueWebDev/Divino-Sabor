<template>
  <q-page padding>
    <FormCreateAccount />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormCreateAccount from '../components/CreateAccountComponents/Form.vue'
export default defineComponent({
  name: 'CreateAccountPage',
  components: {
    FormCreateAccount
  }
})
</script>
