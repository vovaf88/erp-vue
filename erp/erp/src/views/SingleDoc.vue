<template>
    <div>
        <h3>Номер: {{ doc.number }}</h3>
        <p>Дата: {{ doc.doc_date }}</p>
        <TabDoc :doc="doc.id" :tabs="doc.tabs" @reload="loadDoc"/>
    </div>
</template>

<script>
import TabDoc from '../components/TabDoc.vue';
export default {
    name: "SingleDoc",
    props: ["id"],
    components: {
        TabDoc
    },
    data() {
        return {
            doc: {}
        }
    },
    created() {
        this.loadDoc()
    },
    methods: {
        async loadDoc(id) {
            this.doc = await fetch(
                `${this.$store.getters.getServerUrl}/docs/${this.id}`
            ).then(response => response.json())
            
        }
    }
}

</script>