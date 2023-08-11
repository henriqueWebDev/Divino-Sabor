<template>
  <q-page class="flex justify-center align-center column">
    <q-input filled v-model="form.email" label="Email" color="orange-12" class="fit q-my-lg" />
    <q-input v-model="form.password" filled :type="isPwd ? 'password' : 'text'" label="Senha" color="orange-12" class="fit fit q-mt-lg">
        <template v-slot:append>
          <q-icon
            :name="visiblePassword ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="visiblePassword = !visiblePassword"
          />
        </template>
      </q-input>
    <p class="text-right q-mx-sm">Nao tem uma conta ? <router-link to="/createAccount" class="no-text-decoration">Crie uma aqui!</router-link></p>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'FormVue',
  data() {
    return {
      visiblePassword: ref(true),
      form: {
        email: '',
        password: ''
      }
    }
  }
})
</script>

<style>
  .no-text-decoration {
    text-decoration: none;
  }
</style>