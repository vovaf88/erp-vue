<template>
    <div>
        <h3>{{ partner.name }}</h3>
        <p>Категория: {{ partner.inn }}</p>
        <p>Описание: {{ partner.fiz_lico }}</p>
        <p>Цена: {{ partner.buyer }}</p>
        <p>Единица измерения: {{ partner.seller }}</p>
        <p>Услуга: {{ partner.other }}</p>
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