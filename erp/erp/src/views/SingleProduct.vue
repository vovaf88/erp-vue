<template>
    <div>
        <h3>{{ product.name }}</h3>
        <p>Категория: {{ product.category }}</p>
        <p>Описание: {{ product.description }}</p>
        <p>Цена: {{ product.price }}</p>
        <p>Единица измерения: {{ product.measure_unit }}</p>
        <p>Услуга: {{ product.service }}</p>
    </div>
</template>

<script>

export default {
    name: "SingleProduct",
    props: ["id"],
    data() {
        return {
            product: {}
        }
    },
    created() {
        this.loadProduct()
    },
    methods: {
        async loadProduct(id) {
            this.product = await fetch(
                `${this.$store.getters.getServerUrl}/products/${this.id}`
            ).then(response => response.json())
            
        }
    }
}

</script>