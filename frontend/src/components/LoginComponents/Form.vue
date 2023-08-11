<template>
  <q-page class="flex justify-center align-center column">
    <q-input outlined v-model="form.email" label="Email" color="orange-12" class="fit q-my-lg shadow-1" />
    <q-input type="password" outlined v-model="form.password" label="Senha" color="orange-12" class="fit q-mt-lg shadow-1" />
    <p class="text-right q-mx-sm">Nao tem uma conta ? <router-link to="/createAccount">Crie uma aqui!</router-link></p>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FormVue',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  }
})
</script>
