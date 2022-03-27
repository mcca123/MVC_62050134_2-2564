<template>
	<v-container>
		<h1 class="page-header">Input</h1>
		<div class="warehouse">
            <v-card class="form">
                <h3>input Command</h3>
                <v-text-field class="text-field" v-model="user_command" @change="validateForm" placeholder="Load,Store,Add Register,Add Immediate"/>
                <h3>input Register</h3>
                <v-text-field class="text-field" v-model="user_register" @change="validateForm" placeholder="1111"/>
                <h3>input Memory Address</h3>
                <v-text-field class="text-field" v-model="user_memory" @change="validateForm" placeholder="11110000"/>
                
                <!-- validation status-->
                <p :class="'validation-text ' + `${form_status} `"> {{ `*${stat_validation_text}` }}</p>
                
                <!-- display list of data -->
                <li v-for="(data, index) in statistic" :key="index">
                    user_command: {{data.user_command}} user_register: {{data.user_register}} user_memory: {{data.user_memory}}
                </li>

                <!-- submit button -->
                <v-btn @click="submitForm" > enter </v-btn>
                <!-- validation status-->
                <p :class="'validation-text ' + `${form_status} `"> {{ `*${form_validation_text}` }}</p>
            </v-card>

            <v-card class="form">
               <v-card-text>
                    <p class="text-h5 text--primary">
                        วิธีการใส่ Input
                    </p>
                    <h3>การใส่ input Command</h3>
                    <div class="text--primary">
                    สามารถใส่ได้แค่ Load,Store,Add Register,Add Immediate <br>
                    ต้อมพิมพ์ตามนี้แบบเป๊ะ ๆ เท่านั้น
                    </div>
                    <br>
                    <h3>การใส่ input Register</h3>
                    <div class="text--primary">
                    ทุก Command สามารถใส่ค่า Register(X) ได้ 4 ตัวเท่านั้น
                    </div>
                    <br>
                    <h3>การใส่ input Memory Address</h3>
                    <div class="text--primary"> 
                    Load : สามารถใส่ค่า Memory Address(Y) ได้ 8 ตัวเท่านั้น <br>
                    Store : สามารถใส่ค่า Memory Address(Y) ได้ 8 ตัวเท่านั้น <br>
                    Add Register : สามารถใส่ค่า Memory Address(Y) ได้ 4 ตัวเท่านั้น <br>
                    Add Immediate : สามารถใส่ค่า Memory Address(Y) ได้ 10 ตัวเท่านั้น <br>
                    </div>
                </v-card-text>
            </v-card>
		</div>
	</v-container>
</template>

<style src="./style.css"> </style>

<script>
export default {
	data: () => ({
        user_command: '',
        user_register: 0,
        user_memory: 0,
        statistic: [],
        form_validation_text: '',
        stat_validation_text: '',
        form_status: 'form-status__hidden',
        form_is_valid: false
	}),

    created(){
        
    },

    computed: {
        // users data
        users(){
            return this.$store.getters.users
        }
    },

    methods: {
        // form handler
        addStat() {
            let stat = {
                    user_command: this.user_command,
                    user_register: this.user_register,
                    user_memory: this.user_memory
                }
            this.statistic.push(stat)
        },
        // validate form input
        // user_command
        // user_register
        // user_memory
        validateForm(){
             if(this.user_command === '' ){
                this.form_validation_text = 'Please enter Command'
                this.form_status = 'form-status__invalid'
                this.form_is_valid = false
            } else if(this.user_register === 0){
                this.form_validation_text = 'Please enter Register'
                this.form_status = 'form-status__invalid'
                this.form_is_valid = false
            } else if(this.user_memory === 0 ){
                this.form_validation_text = 'Please enter Memory'
                this.form_status = 'form-status__invalid'
                this.form_is_valid = false
            } else if(this.user_command !== '' && this.user_register !== 0 && this.user_memory !== 0) {
                this.form_validation_text = 'form is valid'
                this.form_status = 'form-status__valid'
                this.form_is_valid = true
            }
        },

        submitForm() {
            this.validateForm()
            if(this.form_is_valid){
                let formData = {
                    user_command: this.user_command,
                    user_register: this.user_register,
                    user_memory: this.user_memory,
                }
                this.$store.dispatch('addUser', formData)
            } else {
                // alert('form is not valid')
            }
        },
    }
};

</script>

