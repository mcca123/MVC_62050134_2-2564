<template>
	<v-container>
		<h1 class="page-header">Summary</h1>
		<div class="user">
            <v-card class="form" v-for="(user, index) in sortedUser" :key="index" >
                <h3>Command: {{ user.user_command }}</h3>
                <h3>Register: {{ user.user_register }}</h3>
                <h3>Memory Address: {{ user.user_memory }}</h3>
                <h3>Binary: {{user.user_first_binary}}{{user.user_register}}{{user.user_memory}}{{user.user_last_binary}}</h3>
            </v-card>
		</div>
	</v-container>
</template>

<style src="./style.css"> </style>

<script>
export default {
	data: () => ({

	}),

    computed: {
        sortedUser(){
            let users = this.$store.getters.users
            // sort by Command
                users = users.sort((a, b) => {
                    return a.user_sort - b.user_sort
                })
            return users
        },
    },

    // before render component -> get product
    created(){
        this.$store.dispatch('getUsers')
    },

    methods: {

    }
};
</script>



