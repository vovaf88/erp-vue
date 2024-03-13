<template>
    <div>
        <h3>Product create</h3>
        <form action="#">
            <label for="name">Введите название номенклатуры </label>
            <input type="text" id="name" name="name" v-model="name"><hr>
            <label for="description">Введите описание </label>
            <input type="text" id="description" name="description" v-model="description"><hr>
            <label for="category">Введите категорию </label>
            <input type="text" id="category" name="category" v-model="category"><hr>
            <label for="measure_unit">Введите единицу измерения </label>
            <input type="text" id="measure_unit" name="measure_unit" v-model="measure_unit"><hr>
            <label for="price">Введите цену </label>
            <input type="text" id="price" name="price" v-model="price"><hr>
            <label for="service">Является услугой </label>
            <input type="text" id="service" name="service" v-model="service"><hr>            
            <button type="button" @click="sendProduct">Сохранить</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "ProductCreate",
    data(){
        return {
            name: "",
            description: "",
            category: "",
            measure_unit: "",
            price: "",
            service: "",

        }
    },
    methods: {
        async sendProduct(){
            let data = {
                name: this.name,
                description: this.description,
                category: this.category,
                measure_unit: this.measure_unit,
                price: this.price,
                service: this.service
                
            };
            fetch(`${this.$store.getters.getServerUrl}/products/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(response => {
                console.log(response.json())
            })
            }
        }
    }
</script>