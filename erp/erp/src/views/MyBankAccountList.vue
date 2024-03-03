<template>
    <div>
        <h3>My Bank Accounts</h3>
        
        <div>
            <p v-for="acc in listMyBankAccount" :key="acc.id">
                <h4><a href="" @click="goTo(acc.id)">{{ acc.number }}</a></h4>  
                <p>{{ acc.bank }} / {{ acc.owner }}</p>
            </p>
        </div>

    </div>
</template>

<script>
export default {
    name: "MyBankAccountList",
    data() {
        return {
            listMyBankAccount: []
        }
    },
    components: {},
    created(){
        this.loadListMyBankAccount()
    },
    methods: {
        async loadListMyBankAccount() {
            this.listMyBankAccount= await fetch(
                `${this.$store.getters.getServerUrl}/mybankaccounts/`
            ).then(response => response.json())
            
        },
        goTo(id){
            this.$router.push({ name: 'SingleMyBankAccount', params: { id: id }})
        }
    }
}
</script>