<template>
  <v-app>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer>
      <v-list>
        <v-list-item></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar title="Front end programador web"></v-app-bar>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <router-view />
    </v-main>
  </v-layout>
</v-app>
</template>

<script setup></script>
