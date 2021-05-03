<template>
  <v-app>
    <vue-headful title="Boon Hui Chiann"/>
    <v-app-bar
      app
      dark
      elevation = 10
      dense
    >
      <div class="d-flex align-center logos">
        <v-img
          contain
          :src="require('./assets/hcboon.png')"
          width="45"
          @click="backToHome"
        />

        <v-img
          class="shrink mt-1"
          contain
          min-width="100"
          :src="require('./assets/hcboonwhite.png')"
          width="200"
          @click="backToHome"
        />
      </div>

      <v-spacer></v-spacer>
      <!-- <v-btn
            v-for="(next, i) in whatsNext"
            :key="i"
            class="mt-2 mr-2 mb-2"
            @click="goto(next.text)"
            elevation = 0>
            {{next.text}}
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
    data() {
        return {
            whatsNext: [
                {
                text: 'Resume',
                },
                {
                text: 'Projects',
                },
                {
                text: 'Contact',
                },
            ],
        }
    },
    methods: {
        backToHome: function() {
            this.$router.push({ path: "/" })
        },
        goto: function(page) {
            console.log(page)
            console.log(this.$route.name)
            
            if (this.$route.name == "Resume") {
                console.log(container)
                this.$router.push({ path: "/" })  
                var container = this.$el.querySelector("#" + page)
                console.log(container)
                container.scrollIntoView({behavior: 'smooth'}) 
            } else {
                if (page == "Resume") {
                    this.$router.push({ path: "/resume" })
                } else {
                    container = this.$el.querySelector("#" + page)
                    console.log(container)
                    container.scrollIntoView({behavior: 'smooth'})
                }
            }
            
        }
    }
};
</script>

<style>
.logos {
    cursor: pointer;
}
</style>
