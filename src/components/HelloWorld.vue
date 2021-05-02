<template>
  <v-container>
    <v-row>
        <v-container>
            <v-row no-gutters>
                <v-col cols="12" sm="5" class="mx-5 my-5">
                    <v-row>
                        <v-img
                        :src="require('../assets/hcboonsmile.png')"
                        class="my-3"
                        contain
                        height="200"
                        />
                    </v-row>

                    <v-row justify="center" class="mb-4">
                        <h1 class="display-1 font-weight-bold mb-3">
                        Boon Hui Chiann
                        </h1>
                    </v-row>

                    <v-row>
                        <v-row justify="center">
                            <v-btn
                                v-for="(next, i) in whatsNext"
                                :key="i"
                                outlined
                                class="rounded-lg mr-5"
                                @click="goto(next.text)">
                                {{next.text}}
                            </v-btn>
                        </v-row>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="6" class="mx-5 my-5">
                    <v-row>
                        <div class="mac-top">
                            <div class="mac-exit"></div>
                            <div class="mac-min"></div>
                            <div class="mac-small"></div>
                        </div>
                        <div class="mac-bottom pb-4">
                            <div class="white--text mt-4 ml-4">
                                Last login: {{datetime}}
                            </div>
                            <div class="mac-edu mt-3 ml-4">
                                <div>
                                    <span class="pink--text mr-2">></span>
                                    <!-- <span class="yellow--text mr-2">cd Education</span> -->
                                    <span class="white--text">HC.Education</span>
                                </div>
                                <div>
                                    <span class="yellow--text">"Singapore Management University"</span>
                                </div>
                            </div>
                            <div class="mac-degree mt-3 ml-4">
                                <div>
                                    <span class="pink--text mr-2">></span>
                                    <span class="white--text">HC.Degree</span>
                                </div>
                                <div>
                                    <span class="yellow--text">"Bachelor of Science Information Systems, Smart City Management & Technology"</span>
                                </div>
                            </div>
                            <div class="mac-skils mt-3 ml-4">
                                <div>
                                    <span class="pink--text mr-2">></span>
                                    <span class="white--text">HC.Skills</span>
                                </div>
                                <div>
                                    <span class="yellow--text">["Vue", "JavaScript", "HTML/CSS", "Python"]</span>
                                </div>
                            </div>
                            <div class="mac-cert mt-3 ml-4">
                                <div>
                                    <span class="pink--text mr-2">></span>
                                    <span class="white--text">HC.Certifications</span>
                                </div>
                                <div>
                                    <span class="yellow--text">["AWS Certified Solutions Architect - Associate"]</span>
                                </div>
                            </div>
                        </div>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-row>
    <v-row id="Projects" style="height: 500px;">
        <v-row>

        </v-row>
    </v-row>
    <v-row id="Contact" style="height: 500px;">
        <v-row>

        </v-row>
    </v-row>
    <back-to-top bottom="50px" right="50px">
        <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
    </back-to-top>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data() {
        return {
            whatsNext: [
                {
                text: 'Resume',
                href: 'https://vuetifyjs.com/components/api-explorer',
                },
                {
                text: 'Projects',
                href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
                },
                {
                text: 'Contact',
                href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
                },
            ],
            datetime:""
        }
    },

    async mounted() {
        try {
            this.datetime = new Date()
        } catch (e) {console.log(e)}
    },

    methods: {
        goto: function(page) {
            console.log(page)
            var container = this.$el.querySelector("#" + page)
            container.scrollIntoView({behavior: 'smooth'})
        }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');

.mac-top {
    width:100%;
    background-color:#3d3e41;
    border-radius: 10px 10px 0px 0px;
}

.mac-exit {
    display: inline-block;
    background-color: #ef4444;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    margin: 5px 5px 0px 10px;
}

.mac-min {
    display: inline-block;
    background-color: #f59e0b;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    margin: 5px;
    margin-bottom: 0px;
}

.mac-small {
    display: inline-block;
    background-color: #10b981;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    margin: 5px;
    margin-bottom: 0px;
}

.mac-bottom{
    background-color: #111827;
    font-family: 'Roboto Mono', monospace;
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 10px 10px;
}
</style>
