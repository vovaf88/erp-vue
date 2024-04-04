<template>
    <div>
        <h3>Документы</h3>
        
        <div>
            <p v-for="doc in listDoc" :key="doc.id">
                <h4><a href="" @click="goTo(doc.id)">{{ doc.number }}</a></h4>  
                <p>{{ doc.number }} / {{ doc.doc_date }}</p>
            </p>
        </div>

    </div>
</template>

<script>
export default {
    name: "doclist",
    data() {
        return {
            listDoc: []
        }
    },
    components: {},
    created(){
        this.loadListDoc()
    },
    methods: {
        async loadListDoc() {
            this.listDoc= await fetch(
                `${this.$store.getters.getServerUrl}/purchase/`
            ).then(response => response.json())
            
        },
        goTo(id){
            this.$router.push({ name: 'PurchaseSingleDoc', params: { id: id }})
        }
    }
}
</script>