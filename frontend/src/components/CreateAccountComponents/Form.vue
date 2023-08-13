<template>
  <q-page class="flex justify-center align-center column">
    <form>
      <q-input filled label="Nome" type="text" v-model="formData.name" color="orange-12" class="fit q-mt-lg" >
        <template v-slot:before>
          <q-icon name="mail" />
        </template>
      </q-input>
      <q-input filled label="Email" type="email" v-model="formData.email" color="orange-12" class="fit q-mt-lg" suffix="@gmail.com" >
        <template v-slot:before>
          <q-icon name="person" />
        </template>
      </q-input>
      <q-input filled label="Senha" :type="visiblePassword ? 'password' : 'text'" v-model="formData.password" color="orange-12" class="fit q-mt-lg">
        <template v-slot:before>
          <q-icon name="key"/>
        </template>
        <template v-slot:append>
          <q-icon
              :name="visiblePassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="visiblePassword = !visiblePassword"
            />
        </template>
      </q-input>
          <q-input filled label="Confirmar senha" :type="visiblePassword ? 'password' : 'text'" v-model="formData.confirmPassword" color="orange-12" class="fit q-mt-lg">
        <template v-slot:before>
          <q-icon name="key"/>
        </template>
      </q-input>
      <div>
        <q-toggle v-model="acceptTerms" label="Eu aceito a licença e os termos." class="q-ml-lg q-mt-sm" color="orange-13"/>
      </div>
      <div class="text-right text-align-center">
        <q-btn type="reset" label="Resetar" class="bg-orange-12 text-white q-ma-sm" />
        <q-btn type="subtmit" label="Confirmar" class="bg-orange-12 text-white q-ma-sm" />
      </div>
    </form>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'FormCreateAccount',
  data() {
    return {
      visiblePassword: ref(true),
      acceptTerms: ref(false),
      formData: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  }
})
</script>
<style>
  @media (max-width: 760px) {
    .text-align-center {
      text-align: center;
    }
  }
</style>