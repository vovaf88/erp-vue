<template>
    <div>
        <h3>{{ bank.name }}</h3>
        <p>БИК: {{ bank.bik }}</p>
    </div>
</template>

<script>

export default {
    name: "SingleBank",
    props: ["id"],
    data() {
        return {
            bank: {}
        }
    },
    created() {
        this.loadBank()
    },
    methods: {
        async loadBank(id) {
            this.bank = await fetch(
                `${this.$store.getters.getServerUrl}/banks/${this.id}`
            ).then(response => response.json())
            
        }
    }
}

</script>