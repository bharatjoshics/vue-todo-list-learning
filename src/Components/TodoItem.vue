<template>
    <li>
        <h2>{{ id }} {{ isCompleted ? '(Completed)' : '(Pending)' }}</h2>
        <button @click="toggleCompletion">{{ isCompleted ? 'Undo' : 'Complete' }}</button>
        <p><strong>Task:</strong> {{ task }}</p>
    </li>    
</template>

<script>
export default {
    props: ['id', 'task', 'isCompleted'],
    methods: {
        toggleCompletion() {
            this.$emit('toggle-completion', this.id);
        }
    }
};
</script>