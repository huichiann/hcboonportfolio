<template>
  <v-app>
    <vue-headful title="Boon Hui Chiann"/>
    <v-app-bar
      app
      dark
      elevation = 10
      dense
    >
      <div class="d-flex align-center">
        <v-img
          contain
          :src="require('./assets/hcboon.png')"
          width="45"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          :src="require('./assets/hcboonwhite.png')"
          width="200"
        />
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
