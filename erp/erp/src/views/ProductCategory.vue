<template>
    <div>
        <h3>Products categories</h3>
        
        <div>
            <p v-for="category in listProductCategory" :key="category.id">
                
                <p>{{ category.name }}</p>
            </p>
        </div>

    </div>
</template>

<script>
export default {
    name: "ProductCategoryList",
    data() {
        return {
            listProductCategory: []
        }
    },
    components: {},
    created(){
        this.loadListProductCategory()
    },
    methods: {
        async loadListProductCategory() {
            this.listProductCategory= await fetch(
                `${this.$store.getters.getServerUrl}/product-categories/`
            ).then(response => response.json())
            
        },
    }
}
</script>