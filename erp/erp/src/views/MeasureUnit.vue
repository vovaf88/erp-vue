<template>
    <div>
        <h3>Measure units</h3>
        
        <div>
            <p v-for="mu in listMeasureUnits" :key="mu.id">
                
                <p>{{ mu.name }}</p>
            </p>
        </div>

    </div>
</template>

<script>
export default {
    name: "MeasureUnits",
    data() {
        return {
            listMeasureUnits: []
        }
    },
    components: {},
    created(){
        this.loadListMeasureUnits();
        
    },
    methods: {
        async loadListMeasureUnits() {
            this.listMeasureUnits = await fetch(
                `${this.$store.getters.getServerUrl}/measureunits/`
            ).then(response => response.json())
            console.log(this.listMeasureUnits)
        },
    }
}
</script>