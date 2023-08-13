<template>
  <q-page class="flex justify-center align-center column">
    <form>
      <q-input filled v-model="form.email" label="Email" color="orange-12" class="fit q-my-lg" suffix="@gmail.com"
        :rules="[val => val && val.length > 0 || 'É necessário fornecer um endereço do Gmail.']"
      />
      <q-input v-model="form.password" filled :type="visiblePassword ? 'password' : 'text'" label="Senha" color="orange-12" class="fit fit q-mt-lg" 
      :rules="[val => val && val.length > 0 || 'Certifique-se de que a senha não esteja em branco.']" >
        <template v-slot:append>
          <q-icon
            :name="visiblePassword ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="visiblePassword = !visiblePassword"
          />
        </template>
      </q-input>
      <div class="flex justify-center align-center">
        <q-btn type="submit" label="Entrar" class="q-mt-lg text-body-1 desktop-submit-button-width mobile-submit-button-width" color="orange-12"></q-btn>
      </div>
    </form>
    <p class="text-right q-mx-sm mx-auto">Não possui uma conta? <router-link to="/createAccount" class="no-text-decoration">Crie uma aqui!</router-link></p>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'FormLogin',
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
  .mx-auto {
    margin: 0vh auto;
  }
  .desktop-submit-button-width {
    width: 25vw;
  }
  @media (max-width: 760px) {
    .mobile-submit-button-width {
      width: 70vw;
    }
  }
</style>