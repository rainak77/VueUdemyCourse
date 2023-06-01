<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <KeepAlive>
        <component :is="selectedTab"></component>
    </KeepAlive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: "stored-resources",
            storedResources: [
                { id: 'official-guide', title: 'official-guide', description: 'The official vue.js description', link: 'https://vuejs.org' },
                { id: 'google', title: 'Google', description: 'Learn to google', link: 'https://www.google.com/' }
            ],
        };
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat'
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, link) {
            this.storedResources.unshift({
                id: new Date().toISOString(),
                title,
                description,
                link
            });
            this.selectedTab = "stored-resources"
        },
        removeResource(id){
            // const resIndex = this.storedResources.findIndex(res=>res.id ===id);
        //   this.storedResources =  this.storedResources.filter(res=>res.id !==id);
        //     console.log(this.storedResources.length)


            const resIndex = this.storedResources.findIndex(res=>res.id ===id);
            this.storedResources.splice(resIndex,1)
            console.log(this.storedResources.length)
        }
    }
}
</script>

<style></style>