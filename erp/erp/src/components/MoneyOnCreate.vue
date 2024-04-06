<template>
    <div>
        <h3>Money On create</h3>
        <form action="#">
            <label for="number">Введите номер </label>
            <input type="text" id="number" name="number" v-model="number"><hr>
            <label for="doc_date">Введите дату </label>
            <input type="text" id="doc_date" name="doc_date" v-model="doc_date"><hr>
            <label for="operation">Введите операцию </label>
            <input type="text" id="operation" name="operation" v-model="operation"><hr>
            <label for="my_company">Введите компанию </label>
            <input type="text" id="my_company" name="my_company" v-model="my_company"><hr>
            <label for="partner">Введите партнера </label>
            <input type="text" id="partner" name="partner" v-model="partner"><hr>
            <label for="summa">Является сумму </label>
            <input type="text" id="summa" name="summa" v-model="summa"><hr>            
            <button type="button" @click="sendDoc">Сохранить</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "MoneyOnCreate",
    data(){
        return {
           
            number: "",
            doc_date: "",
            operation: "",
            my_company: "",
            partner: "",
            summa: "",

        }
    },
    methods: {
        async sendDoc(){
            let data = {
                number: this.number,
                doc_date: this.doc_date,
                operation: this.operation,
                my_company: this.my_company,
                partner: this.partner,
                summa: this.summa
                
            };
            fetch(`${this.$store.getters.getServerUrl}/moneyon/`,
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