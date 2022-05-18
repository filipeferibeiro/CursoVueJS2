<template>
	<div class="task-grid">
		<template v-if="tasks.length">
			<TaskItem
				v-for="(task, i) in tasks"
				:key="task.name"
				:task="task"
				@taskDeleted="$emit('taskDeleted', i)"
				@taskStateChanged="$emit('taskStateChanged', i)"
			/>
		</template>
		<p v-else class="no-task">Sua vida está em dia :)</p>
	</div>
</template>

<script>
import TaskItem from "./TaskItem.vue";
export default {
	props: {
		tasks: {
			type: Array,
			required: true,
		},
	},
	components: { TaskItem },
};
</script>

<style>
.task-grid {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
.task-grid .task {
	margin: 10px;
}
.no-task {
	color: #aaa;
	font-size: 1.7rem;
}
</style>
