<template>
    <div>
        <h3>{{ acc.number }}</h3>
        <p>Банк: {{ acc.bank }}</p>
        <p>Владелец: {{ acc.owner }}</p>
    </div>
</template>

<script>

export default {
    name: "SingleMyBankAccount",
    props: ["id"],
    data() {
        return {
            acc: {}
        }
    },
    created() {
        this.loadMyBankAccount()
    },
    methods: {
        async loadMyBankAccount(id) {
            this.acc = await fetch(
                `${this.$store.getters.getServerUrl}/mybankaccounts/${this.id}`
            ).then(response => response.json())
            
        }
    }
}

</script>