<template>
  <section class="singleteam">
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item 
        v-for="member in members" 
        :key="member.id" 
        :name="member.fullName" 
        :role="member.role">
      </user-item>
    </ul>
    
    <router-link :to="'/teams/t2'">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '@/components/users/UserItem.vue';

export default {
  props:['teamId'],
  inject: ['teams', 'users'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName:'',
      members: []      
    };
  },
  methods:{    
    paramChange(teamId){
    const selectedTeam = this.teams.find(team=> team.id === teamId);
    const members = selectedTeam.members;
    var selectedMembers = [];

    for(const member of members){
     const selectedUser =  this.users.find(user=> user.id === member);
     selectedMembers.push(selectedUser);     
    }
    this.members = selectedMembers;
    this.teamName = selectedTeam.name;
    }
  },
  created() {
    // console.log(this.$route.query)
    this.paramChange(this.teamId);
  },
  beforeRouteUpdate(to,from,next){
    console.log('before Route Update');
    next();
  },
  watch:{
    teamId(teamId){
      this.paramChange(teamId)
    }
  }
}
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>