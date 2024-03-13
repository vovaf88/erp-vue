<template>
    <div>
        <h3>Banks</h3>
        <div>
            <router-link to="/banks/create">Создать банк</router-link>/
        </div>
        <div>
            <p v-for="bank in listBank" :key="bank.id">
                <h4><a href="" @click="goTo(bank.id)">{{ bank.name }}</a></h4>  
                <p>{{ bank.name }} / {{ bank.bik }}</p>
            </p>
        </div>

        </div>
</template>

<script>
export default {
    name: "BankList",
    data() {
        return {
            listBank: []
        }
    },
    components: {},
    created(){
        this.loadListBank()
    },
    methods: {
        async loadListBank() {
            this.listBank= await fetch(
                `${this.$store.getters.getServerUrl}/banks/`
            ).then(response => response.json())
            
        },
        goTo(id){
            this.$router.push({ name: 'SingleBank', params: { id: id }})
        }
    }
}
</script>