<template>
    <div>
        <h3>{{ partner.name }}</h3>
        <p>ИНН: {{ partner.inn }}</p>
        <p>Физ. лицо: {{ partner.fiz_lico }}</p>
        <p>Покупатель: {{ partner.buyer }}</p>
        <p>Поставщик: {{ partner.seller }}</p>
        <p>Прочее: {{ partner.other }}</p>
    </div>
</template>

<script>

export default {
    name: "SinglePartner",
    props: ["id"],
    data() {
        return {
            partner: {}
        }
    },
    created() {
        this.loadPartner()
    },
    methods: {
        async loadPartner(id) {
            this.partner = await fetch(
                `${this.$store.getters.getServerUrl}/partners/${this.id}`
            ).then(response => response.json())
            
        }
    }
}

</script>