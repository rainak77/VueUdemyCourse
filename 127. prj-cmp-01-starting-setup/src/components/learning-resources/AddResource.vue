<template>
    <base-dialog v-if="inputIsInValid" title="InvalidInput" @close="conirmError">
        <template v-slot:default>
            <p>Unfortunately at least on input element is invalid.</p>
            <p>Please make sure at least a few chracters into each input field.</p>
        </template>
        <template v-slot:actions>
            <base-button @click="conirmError">Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="titleInput">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" ref="descInput"> </textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" ref="linkInput">
            </div>
            <div class="form-control">
                <base-button type="submit">AddResource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
export default {
    data() {
        return {
            inputIsInValid: false
        }
    },
    inject: ['addResource'],
    methods: {
        submitData() {
            const titleInput = this.$refs.titleInput.value;
            const descInput = this.$refs.descInput.value;
            const linkInput = this.$refs.linkInput.value;

            if (titleInput.trim() === '' || descInput === '' || linkInput === '') {
                this.inputIsInValid = true;
                return;
            }
            this.addResource(titleInput, descInput, linkInput);
        },
        conirmError() {
            this.inputIsInValid = false;
        }
    }
}

</script>


<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>