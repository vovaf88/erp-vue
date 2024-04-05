<template>
    <div>
        <div>
            <p v-for="tab in tabs" :key="tab.id">
                {{ tab.tovar }} | {{ tab.count }}
            </p>
                

        </div>

        <form action="#">
            <label for="product">Введите товар</label>
            <input type="text" id="product" name="product" v-model="product">
            <label for="count">Введите количество</label>
            <input type="text" id="count" name="count" v-model="count">
            <label for="price">Введите цену</label>
            <input type="text" id="price" name="price" v-model="price">
            <label for="summa">Введите сумму</label>
            <input type="text" id="summa" name="summa" v-model="summa">
            <button type="button" @click="sendTabDoc">Сохранить</button>
        </form>

    </div>
</template>

<script>
export default {
    name: "PurchaseTabDocCreate",
    props:['doc', 'tabs'],
    data(){
        return {
            product: '',
            count: '',
            price: '',
            summa: '',
        }
    },
    methods: {
        async sendTabDoc(){
            let data = {
                product: this.product,
                count: this.count,
                price: this.price,
                summa: this.summa,
                doc: this.doc,
            };
            console.log(data);
            fetch(`${this.$store.getters.getServerUrl}/tabpurchasecreate/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(response => {
                console.log(response.json())
                this.$emit('reload')
            })
            }
        }
    }

</script>