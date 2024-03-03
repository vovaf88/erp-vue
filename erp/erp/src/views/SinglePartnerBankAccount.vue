<template>
    <div>
        <h3>{{ acc.number }}</h3>
        <p>Банк: {{ acc.bank }}</p>
        <p>Владелец: {{ acc.owner }}</p>
    </div>
</template>

<script>

export default {
    name: "SinglePartnerBankAccount",
    props: ["id"],
    data() {
        return {
            acc: {}
        }
    },
    created() {
        this.loadPartnerBankAccount()
    },
    methods: {
        async loadPartnerBankAccount(id) {
            this.acc = await fetch(
                `${this.$store.getters.getServerUrl}/partnerbankaccounts/${this.id}`
            ).then(response => response.json())
            
        }
    }
}

</script>

