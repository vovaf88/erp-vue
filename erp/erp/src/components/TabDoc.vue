<template>
    <div>
        <div>
            <p v-for="tab in tabs" :key="tab.id">
                {{ tab.tovar }} | {{ tab.count }}
            </p>
                

        </div>

        <form action="#">
            <label for="tovar">Введите товар</label>
            <input type="text" id="tovar" name="tovar" v-model="tovar">
            <label for="count">Введите количество</label>
            <input type="text" id="count" name="count" v-model="count">
            <button type="button" @click="sendTabDoc">Сохранить</button>
        </form>

    </div>
</template>

<script>
export default {
    name: "BankCreate",
    props:['doc', 'tabs'],
    data(){
        return {
            tovar: '',
            count: '',
        }
    },
    methods: {
        async sendTabDoc(){
            let data = {
                tovar: this.tovar,
                count: this.count,
                doc: this.doc,
            };
            console.log(data);
            fetch(`${this.$store.getters.getServerUrl}/tabscreate/`,
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