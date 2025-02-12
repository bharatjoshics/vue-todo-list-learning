<template>
  <li>
    <h2>{{ id }} {{ isCompleted ? '(Completed)' : '(Pending)' }}</h2>
    <div v-if="isEditing">
      <input type="text" v-model="editableTask" />
      <button @click="saveEdit">Save</button> &nbsp;
      <button @click="cancelEdit">Cancel</button>
    </div>
    <div v-else>
      <p><strong>Task:</strong> {{ task }}</p>
      <button @click="toggleCompletion">{{ isCompleted ? 'Undo' : 'Complete' }}</button> &nbsp;
      <button @click="startEdit">Edit</button>
    </div>
  </li>
</template>

<script>
export default {
    props: ['id', 'task', 'isCompleted'],
    data() {
      return {
        isEditing: false,
        editableTask: this.task,
      };
    },
    methods: {
      toggleCompletion() {
        this.$emit('toggle-completion', this.id);
      },
      startEdit() {
        this.isEditing = true;
      },
      cancelEdit() {
        this.isEditing = false;
        this.editableTask = this.task;
      },
      saveEdit() {
        if (this.editableTask.trim()){
          this.$emit('edit-task',this.id, this.editableTask);
          this.isEditing = false;
        }
      }
    }
};
</script>