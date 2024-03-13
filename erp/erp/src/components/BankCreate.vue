<template>
    <div>
        <form action="#">
            <label for="bik">Введите БИК</label>
            <input type="text" id="bik" name="bik" v-model="bik">
            <label for="name">Введите название банка</label>
            <input type="text" id="name" name="name" v-model="name">
            <button type="button" @click="sendBank">Сохранить</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "BankCreate",
    data(){
        return {
            bik: '',
            name: '',
        }
    },
    methods: {
        async sendBank(){
            let data = {
                bik: this.bik,
                name: this.name,
            };
            fetch(`${this.$store.getters.getServerUrl}/banks/`,
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