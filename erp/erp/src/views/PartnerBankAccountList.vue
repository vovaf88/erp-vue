<template>
    <div>
        <h3>Partners</h3>
        
        <div>
            <p v-for="acc in listPartnerBankAccount" :key="acc.id">
                <h4><a href="" @click="goTo(acc.id)">{{ acc.number }}</a></h4>  
                <p>{{ acc.owner }} / {{ acc.bank }}</p>
            </p>
        </div>

    </div>
</template>

<script>
export default {
    name: "PartnerBankAccountList",
    data() {
        return {
            listPartnerBankAccount: []
        }
    },
    components: {},
    created(){
        this.loadListPartnerBankAccount()
    },
    methods: {
        async loadListPartnerBankAccount() {
            this.listPartnerBankAccount= await fetch(
                `${this.$store.getters.getServerUrl}/partnerbankaccounts/`
            ).then(response => response.json())
            
        },
        goTo(id){
            this.$router.push({ name: 'SinglePartnerBankAccount', params: { id: id }})
        }
    }
}
</script>