<template>
    <div>
        <h3>Products</h3>
        <div>
            <router-link to="/products/create">Создать номенклатуру</router-link>/
        </div>
        
        <div>
            <p v-for="product in listProduct" :key="product.id">
                <h4><a href="" @click="goTo(product.id)">{{ product.name }}</a></h4>  
                <p>{{ product.name }} / {{ product.category }}</p>
            </p>
        </div>

    </div>
</template>

<script>
export default {
    name: "ProductList",
    data() {
        return {
            listProduct: []
        }
    },
    components: {},
    created(){
        this.loadListProduct()
    },
    methods: {
        async loadListProduct() {
            this.listProduct= await fetch(
                `${this.$store.getters.getServerUrl}/products/`
            ).then(response => response.json())
            
        },
        goTo(id){
            this.$router.push({ name: 'SingleProduct', params: { id: id }})
        }
    }
}
</script>