<template>
  <div class="todo">
    <ul>
      <li v-bind:key="task.id" v-for="task in tasks">
        <div>
          <label>
            {{ task.id }}
            <input
              type="text"
              v-model="task.description"
              v-on:change="save(task)"
            />
            <input
              type="checkbox"
              v-model="task.done"
              v-on:change="save(task)"
            />
          </label>
        </div>
        <button type="button" v-on:click="remove(task)">-</button>
      </li>
      <li>
        <button type="button" v-on:click="addNew()">add</button>
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
    console.log(`initial load`);
  }

  @Prop() private tasks: Task[];

  save(task: Task) {
    this.tasks = TaskRepository.storeTask(task);
  }

  remove(task: Task) {
    this.tasks = TaskRepository.removeTask(task);

    this.$forceUpdate();
  }

  addNew() {
    this.tasks = TaskRepository.storeTask(new Task(""));

    this.$forceUpdate();
  }
}
</script>

<style scoped></style>
