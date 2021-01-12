<template>
  <div class="todo">
    <ul>
      <li v-bind:key="task.id" v-for="task in tasks">
        <div>
          <label>
            {{ task.id }}
            <span>{{ task.description }}</span>
            <input type="checkbox" v-model="task.done" />
          </label>
        </div>
      </li>
    </ul>
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
