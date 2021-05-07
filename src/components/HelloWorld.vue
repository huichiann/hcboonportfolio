<template>
  <v-container>
    <v-row>
        <v-container>
            <v-row no-gutters>
                <v-col cols="11" sm="5" class="mx-auto my-5">
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
                        <v-row justify="center" class="ml-1">
                            <v-btn
                                v-for="(next, i) in whatsNext"
                                :key="i"
                                outlined
                                rounded
                                class="mr-2 mb-2"
                                @click="goto(next.text)">
                                {{next.text}}
                            </v-btn>
                        </v-row>
                    </v-row>
                </v-col>
                <v-col cols="11" sm="6" class="mx-auto my-8">
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
                            <div class="mac-input mt-3 ml-4">
                                <div>
                                    <span class="pink--text mr-2">></span>
                                    <span id="whitebox">h</span>
                                </div>
                            </div>
                        </div>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-row>
    <v-divider class="mt-8 mx-5"></v-divider>
    <v-row id="Projects" class="mx-5 my-5">
        <v-col>
            <v-row>
                <v-col>
                    <h1 class="display-1 font-weight-bold mt-5 text-center" >
                        Past Projects
                    </h1>
                </v-col>
            </v-row>

            <div v-for="curr in pastProjs" :key="curr.projectTitle">
                <CurrentProject :currSrc="curr.currSrc" :courseTitle="curr.courseTitle" :projectTitle="curr.projectTitle" :projectDescription="curr.projectDescription"/>
            </div>
        </v-col>
    </v-row>
    <v-row id="Contact" >
        <v-col cols="12" class="text-center">
            Contact Me
        </v-col>

        <v-col cols="12" class="text-center">
            <div>
                <div class="contactimg">
                    <a href="https://www.linkedin.com/in/hui-chiann-boon" target="_blank">
                        <v-img
                            :src="require('../assets/linkedin.png')"
                            contain
                            height=30
                            width=30
                        >
                        </v-img>
                    </a>
                </div>
                <div class="contactimg">
                    <a href="mailto:hcbooon@gmail.com">
                        <v-img
                            :src="require('../assets/gmail.png')"
                            contain
                            height=30
                            width=30
                        >
                        </v-img>
                    </a>
                </div>
                <div class="contactimg">
                    <a href="https://github.com/huichiann" target="_blank">
                        <v-img
                            :src="require('../assets/github.png')"
                            contain
                            height=30
                            width=30
                        >
                        </v-img>  
                    </a>
                </div>
            </div>              
        </v-col>
    </v-row>
    <back-to-top bottom="50px" right="50px">
        <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
    </back-to-top>
  </v-container>
</template>

<script>
import CurrentProject from "../components/CurrentProj"

export default {
    name: 'HelloWorld',
    components: {
        CurrentProject
    },
    data() {
        return {
            whatsNext: [
                { text: 'Resume', },
                { text: 'Projects', },
                { text: 'Contact', },
            ],
            datetime:"",
            pastProjs: [ 
                {   currSrc: "cerebroPink.png", 
                    courseTitle: "SMT 483 Smart City Project Experience",
                    projectTitle: "Cerebro",
                    projectDescription: "Delivered the first platform to harness data and generate insights into population construct and sentiment by working with the CEO and consultant to develop a data-gathering NLP & ML engine. <br> <br>As Lead Frontend Developer, developed website using VueJS catering to business requirements from client. <br> <br>Visit <a href='https://www.cerebro.tk/' target='_blank'>here</a>"
                },
                {   currSrc: "smart_attendance.jpg", 
                    courseTitle: "SMT 203 Smart City Systems & Management",
                    projectTitle: "MacPI - Smart Attendance",
                    projectDescription: "MacPI aims to provide a seamless process for attendance taking. We achieve this by utilising IoT devices to collect user data over the Wifi network. This data is then used to automate the process by detecting who is in class during the duration of the lesson. <br> <br>Ultimately, we hope to reimagine routine tasks, such as attendance taking, and streamline them."
                },
                {   currSrc: "smart_anly.jpg", 
                    courseTitle: "SMT 202 Analytics Applications for Smart Living",
                    projectTitle: "VVBot",
                    projectDescription: "Identified different pain points faced by consumers of food delivery so that we are able to generate solutions to tackle them <br> <br>Scraped and conducted Topic Modelling and Sentiment Analysis on 24,000 textual data. <br> <br>Developed a chatbot and analytical dashboard to collect and display incoming textual data"
                },
                {   currSrc: "Geospatial.jpg", 
                    courseTitle: "SMT 201 Geospatial Analytics for Urban Planning",
                    projectTitle: "Remastering the Master Plan",
                    projectDescription: "Delivered the first platform to harness data and generate insights into population construct and sentiment by working with the CEO and consultant to develop a data-gathering NLP & ML engine. <br> <br>As Lead Frontend Developer, developed website using VueJS catering to business requirements from client. <br> <br>Visit <a href='https://www.cerebro.tk/' target='_blank'>here</a>"
                },
            ]
        }
    },

    async mounted() {
        try {
            this.datetime = new Date()
            const viewportMeta = document.createElement('meta');
            viewportMeta.name = 'viewport';
            viewportMeta.content = 'width=device-width, initial-scale=1';
            document.head.appendChild(viewportMeta);

            var blink_speed = 1000; // every 1000 == 1 second, adjust to suit
            var t = setInterval(function () {
                var ele = document.getElementById('whitebox');
                ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
            }, blink_speed);
            console.log(t)
        } catch (e) {console.log(e)}
    },

    methods: {
        goto: function(page) {
            console.log(page)
            if (page == "Resume") {
                this.$router.push({ path: "/resume" })
            } else {
                var container = this.$el.querySelector("#" + page)
                container.scrollIntoView({behavior: 'smooth'})
            }
        },
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

#whitebox {
    background-color: white;
    color: white;
}

.contactimg {
    display: inline-block;
    margin-right: 8px;
}
</style>
