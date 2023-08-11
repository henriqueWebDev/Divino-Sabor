<template>
  <q-layout view="hHh lpR fff">

    <q-header elevated class="bg-orange-12 text-white q-pa-sm">
      <q-toolbar id="tollbar" class="row">
        <q-toolbar-title>
          <q-h1 class="titles-font text-h2 titles-font">DIVINO SABOR</q-h1>
        </q-toolbar-title>
        <div>
          <q-btn class="q-mr-sm bg-white text-black text-subtitle1"><router-link id="homeRouter" to="/" class="text-black">Voltar</router-link></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-orange-12 text-white q-py-xs text-center text-subtitle1">
      Descubra o sabor divino em nosso cardápio online e deixe-se levar por uma experiência gastronômica única!
    </q-footer>

  </q-layout>
</template>

<style>
  .titles-font {
    font-family: 'Bahiana';
  }
  #homeRouter {
    text-decoration: none;
  }
</style>