<template>
  <q-layout view="hhr lpR ffr">

    <q-header elevated class="bg-orange-12 text-white q-pa-sm">
      <q-toolbar id="tollbar" class="row">
        <q-toolbar-title class="titles-font text-h2">
          DIVINO SABOR
        </q-toolbar-title>
        <div>
          <q-btn class="q-mr-sm bg-white text-black text-subtitle1"><router-link id="loginRouter" to="/login" class="text-black">Entrar</router-link></q-btn>
          <q-btn class="q-ml-sm bg-white text-black text-subtitle1" @click="toggleRightDrawer()">Meus Pedidos <p class="text-subtitle1 q-ma-none q-ml-sm">{{ quantityOfItemsICart }}</p></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-orange-12 text-white q-py-xs text-center text-subtitle1">
      Descubra o sabor divino em nosso cardápio online e deixe-se levar por uma experiência gastronômica única!
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const rightDrawerOpen = ref(false)
    var quantityOfItemsICart = 0

    return {
      rightDrawerOpen,
      quantityOfItemsICart,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  },
}
</script>

<style scoped>
  .titles-font {
    font-family: 'Bahiana';
  } 
  #loginRouter {
    text-decoration: none;
  }
  @media (max-width: 600px) {
    #tollbar {
      flex-direction: column;
    }
  }
</style>