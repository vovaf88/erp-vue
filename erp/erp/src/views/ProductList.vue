<template>
    <div>
        <h3>Products</h3>
        <label
            v-for="category in listCategory"
            :key="category.id"
        >
            <input @change="loadFilterListProduct" v-model="selectedCategory" :value="category.name" type="radio">
            <span>{{ category.name }}</span>
            
        </label>
        <p>{{ selectedCategory  }} <button @click="loadListProduct">Сброс</button> </p>
        <hr>
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
            listProduct: [],
            listCategory: [],
            selectedCategory: "",
        }
    },
    components: {},
    created(){
        this.loadListProduct();
        this.loadListCategory();
    },
    methods: {
        async loadListProduct() {
            this.listProduct = await fetch(
                `${this.$store.getters.getServerUrl}/products/`

            ).then(response => response.json())
           
        },
        async loadFilterListProduct() {
            this.listProduct = await fetch(
                `${this.$store.getters.getServerUrl}/products/?category=${this.selectedCategory}`

            ).then(response => response.json())
            //console.log(`${this.$store.getters.getServerUrl}/products/?category=${this.selectedCategory}`)
            
        },
        async loadListCategory() {
            this.listCategory = await fetch(
                `${this.$store.getters.getServerUrl}/product-categories/`
            ).then(response => response.json())
          
        },
        goTo(id){
            this.$router.push({ name: 'SingleProduct', params: { id: id }})
        }
    }
}
</script>