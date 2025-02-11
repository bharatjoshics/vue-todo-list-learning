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
import { mapActions } from 'vuex';
export default {
    //emits: ['add-todo'],
    data() {
        return {
            addId: '',
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
            if(this.addId && this.addTask){
                this.addTodo({
                    id: this.addId,
                    task: this.addTask,
                    isCompleted: false
                });
                this.addId = '';
                this.addTask = '';
            }
        }
   }
};
</script>
