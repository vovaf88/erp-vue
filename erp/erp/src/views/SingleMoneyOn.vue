<template>
    <div>
        <h3>{{ doc.number }}</h3>
        <p>ИНН: {{ doc.doc_date }}</p>
        <p>Физ. лицо: {{ doc.operation }}</p>
        <p>Покупатель: {{ doc.my_company }}</p>
        <p>Поставщик: {{ doc.partner }}</p>
        <p>Прочее: {{ doc.summa }}</p>
    </div>
</template>

<script>

export default {
    name: "SingleMoneyOn",
    props: ["id"],
    data() {
        return {
            doc: {}
        }
    },
    created() {
        this.loadMoneyOn()
    },
    methods: {
        async loadMoneyOn(id) {
            this.doc = await fetch(
                `${this.$store.getters.getServerUrl}/moneyon/${this.id}`
            ).then(response => response.json())
            
        }
    }
}

</script>