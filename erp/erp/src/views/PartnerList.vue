<template>
    <div>
        <h3>Partners</h3>
        <div>
            <p v-for="partner in listPartner" :key="partner.id">
                <h4><a href="" @click="goTo(partner.id)">{{ partner.name }}</a></h4>  
                <p>{{ partner.name }} / {{ partner.inn }}</p>
            </p>
        </div>

    </div>
</template>

<script>
export default {
    name: "PartnerList",
    data() {
        return {
            listPartner: []
        }
    },
    components: {},
    created(){
        this.loadListPartner()
    },
    methods: {
        async loadListPartner() {
            this.listPartner= await fetch(
                `${this.$store.getters.getServerUrl}/partners/?seller=&buyer=&other=`
            ).then(response => response.json())
            
        },
        goTo(id){
            this.$router.push({ name: 'SinglePartner', params: { id: id }})
        }
    }
}
</script>