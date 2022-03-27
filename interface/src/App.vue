<template>
	<v-app>
		<Navigation
			:navTitle="currentRouteName"
		/>
		<v-main>
			<v-container fluid style="height: 100vh">
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>


<script>
import Navigation from "@/components/navigation.vue";

// views handle app interface / ui
// can handle some form validation work before sending data to back-end
export default {
	name: "App",

	components: {
		Navigation,
	},

	data: () => ({
		
	}),

	created() {
		this.$store.dispatch('getUsers')
	},

	computed: {
		// display nav route name
		currentRouteName() {
			return this.$route.name;
		},
	},
};
</script>

<style>
	*{
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	}
</style>
