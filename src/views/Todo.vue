<template>
  <div class="todo">
    <ol>
      <li v-bind:key="task.id" v-for="task in tasks">
        <div>
          <span>{{ task.description }}</span>
          |
          <span>{{ task.id }}</span>
        </div>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Task from "@/core/model/Task";
import * as TaskRepository from "@/core/repositories/TaskRepository";

export default class Todo extends Vue {
  constructor() {
    super();
    this.tasks = TaskRepository.loadTasks();
  }

  @Prop() private tasks: Task[];
}
</script>

<style scoped></style>
