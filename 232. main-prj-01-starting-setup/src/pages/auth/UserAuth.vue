<template>
    <div>
        <base-dialog :show="!!error" title="An error occured." @close="handleError">{{ error }}</base-dialog>
        <base-dialog :show="isLoading" title="Authenticating" fixed>
            <base-spinner></base-spinner>
        </base-dialog>
        <base-card>
            <form @submit.prevent="submitForm">
                <div class="form-control">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model.trim="email" />
                </div>
                <div class="form-control">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model.trim="password" />
                </div>
                <!-- <div class="form-control">
                <label for="confirmpassword">Confirm Password</label>
                <input type="password" id="confirmpassword" v-model.trim="confirmpassword" />
            </div> -->
                <p v-if="!formIsValid"> Please enter a valid email and password (password must be at least 6 chracters
                    long.)
                </p>
                <base-button>{{ submitButtonCaption }}</base-button>
                <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
            </form>
        </base-card>
    </div>
</template>

<script>
export default {
    computed: {
        submitButtonCaption() {
            if (this.mode === 'login') {
                return 'Login';
            } else {
                return 'SignUp';
            }
        },
        switchModeButtonCaption() {
            if (this.mode === 'login') {
                return 'SignUp instead';
            } else {
                return 'Login instead';
            }
        }
    },
    data() {
        return {
            email: '',
            password: '',
            confirmpassword: '',
            formIsValid: true,
            mode: 'login',

            isLoading: false,
            error: null
        }
    },
    methods: {
        async submitForm() {
            this.formIsValid = true;
            if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
                this.formIsValid = false;
                return;
            }
            //send http request
            this.isLoading = true;
            try {
                if (this.mode === 'login') {
                    await this.$store.dispatch('login', {
                        email: this.email,
                        password: this.password
                    });
                } 
                else {
                    await this.$store.dispatch('signUp', {
                        email: this.email,
                        password: this.password
                    });
                }
                const redirectUrl ='/' + (this.$route.query.redirect || 'coaches');
                this.$router.replace(redirectUrl);
            }
            catch (error) {
                this.error = error.message || 'Failed to  authentic.'
            }

            this.isLoading = false;
        },
        switchAuthMode() {
            if (this.mode === 'login') {
                this.mode = 'signUp';
            } else {
                this.mode = 'login';
            }
        },
        handleError(){
            this.error = null;
        }
    }
}

</script>

<style >
form {
    margin: 1rem;
    padding: 1rem;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}

input:focus,
textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
}
</style>