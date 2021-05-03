<template>
    <v-container>
        <pdf
            v-for="i in 2"
            :key="i"
            src="/resume.pdf"
            :page="i"
            style="height: 100%"
        ></pdf>
    </v-container>
</template>

<script>
import pdf from 'vue-pdf'

export default {
    name: 'Resume',
    components: {
        pdf
    }
}
</script>