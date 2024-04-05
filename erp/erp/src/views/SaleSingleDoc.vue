<template>
    <div>
        <h3>Номер: {{ doc.number }}</h3>
        <p>Партнер: {{ doc.partner }}</p>
        <p>Сумма: {{ doc.summ }}</p>
        <p>Операция: {{ doc.operation }}</p>
        <p v-for="tab in doc.str_sale" :key="tab.id">
            <p>{{ tab.product }} / {{ tab.count }} / {{ tab.price }} / {{ tab.summa }}</p>
        </p>
        <TabDoc :doc="doc.id" :tabs="doc.tabs" @reload="loadDoc"/>
    </div>
</template>

<script>
import TabDoc from '../components/SaleTabDoc.vue';
export default {
    name: "SaleSingleDoc",
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
                `${this.$store.getters.getServerUrl}/sale/${this.id}`
            ).then(response => response.json())
            
        }
    }
}

</script>