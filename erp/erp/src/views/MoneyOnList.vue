<template>
    <div>
        <h3>Money On Documents</h3>
        <p><router-link to="/moneyon/create">Создать документ</router-link></p>
        <div>
            <p v-for="doc in listMoneyOn" :key="doc.id">
                <h4><a href="" @click="goTo(doc.id)">{{ doc.number }}</a></h4>  
                <p>{{ doc.number }} / {{ doc.summa }}</p>
            </p>
        </div>

    </div>
</template>

<script>
export default {
    name: "MoneyOnList",
    data() {
        return {
            listMoneyOn: []
        }
    },
    components: {},
    created(){
        this.loadListMoneyOn()
    },
    methods: {
        async loadListMoneyOn() {
            this.listMoneyOn= await fetch(
                `${this.$store.getters.getServerUrl}/moneyon/`
            ).then(response => response.json())
            
        },
        goTo(id){
            this.$router.push({ name: 'SingleMoneyOn', params: { id: id }})
        }
    }
}
</script>