<template>
    <v-row class="mt-8">
        <v-card
            elevation="2"
            outlined
        >
            <v-row>
                <v-col cols="12" md="4" sm="4">
                    <expandable-image 
                        class="image my-3 ml-2 mr-2" 
                        :src="require(`../assets/${currSrc}`)" >
                    </expandable-image>
                </v-col>
                <v-divider v-if="!isMobile()"
                    vertical
                    class="my-8 mr-4"
                ></v-divider>
                <v-divider v-if="isMobile()" class="mx-6"></v-divider>
                <v-col cols="11" md="6" sm="7" class="my-3 ml-3">
                    <div class="text-h5 font-weight-bold mt-1 text-center text-md-start text-sm-start">
                        {{courseTitle}}
                    </div>
                    <div class="text-subtitle-1 font-weight-bold mt-5 font-italic text-center text-md-start text-sm-start">
                        {{projectTitle}}
                    </div>
                    <div class="mt-3 text-justify" v-html="projectDescription" v-if="!isMobile()">
                        {{projectDescription}}
                    </div>
                    <div v-else>
                        <div class="text-center">
                            <v-btn
                                v-if="!seeMore"
                                elevation = 0
                                @click="seeMore = !seeMore"
                                icon
                                plain>
                                <i class="fa fa-chevron-down ml-1"></i>
                            </v-btn>
                            <v-btn
                                v-else
                                elevation = 0
                                @click="seeMore = !seeMore"
                                icon
                                plain>
                                <i class="fa fa-chevron-up ml-1"></i>
                            </v-btn>                            
                            </div>
                        <div class="mt-3 text-justify" v-html="projectDescription" v-if="seeMore">
                            {{projectDescription}}
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </v-row>
</template>

<script>
export default {
    name: "CurrentProject",
    props: ["currSrc", "courseTitle", "projectTitle", "projectDescription"],
    data() {
        return {
            seeMore: false,
        }
    },
    methods: {
        isMobile() {
            if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
    }
}
</script>

<style>

</style>