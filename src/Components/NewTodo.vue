<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Id</label>
            <input type="number" v-model="addId"/>
        </div>
        <div>
            <label>Task</label>
            <input type="text" v-model="addTask"/>
        </div>
        <div>
            <button>Add Task</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-todo'],
    data() {
        return {
            addId: '',
            addTask: ''
        };
    },
    methods: {
        submitData() {
            this.$emit('add-todo', this.addId, this.addTask);
            this.addId = '';
            this.addTask = '';
        }
    }
};
</script>
