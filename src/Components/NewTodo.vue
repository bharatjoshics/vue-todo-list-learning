<template>
    <form @submit.prevent="submitData">
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
import { mapActions } from 'vuex';
export default {
    //emits: ['add-todo'],
    data() {
        return {
            addTask: ''
        };
    },
    /*methods: {
        submitData() {
            this.$emit('add-todo', this.addId, this.addTask);
            this.addId = '';
            this.addTask = '';
        }
    }*/
   methods: {
        ...mapActions(['addTodo']),
        submitData(){
            if(this.addTask){
                this.addTodo({
                    task: this.addTask,
                    isCompleted: false
                });
                this.addTask = '';
            }
        }
   }
};
</script>
