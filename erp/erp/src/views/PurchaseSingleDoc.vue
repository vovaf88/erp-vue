<template>
    <div>
        <h3>Номер: {{ doc.number }}</h3>
        <p>Партнер: {{ doc.partner }}</p>
        <p>Сумма: {{ doc.summ }}</p>
        <p>Операция: {{ doc.operation }}</p>
        <TabDoc :doc="doc.id" :tabs="doc.tabs" @reload="loadDoc"/>
    </div>
</template>

<script>
import TabDoc from '../components/TabDoc.vue';
export default {
    name: "PurchaseSingleDoc",
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
                `${this.$store.getters.getServerUrl}/purchase/${this.id}`
            ).then(response => response.json())
            
        }
    }
}

</script>