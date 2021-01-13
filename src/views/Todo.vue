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
              v-on:keyup="save(task)"
            />
            <input type="checkbox" v-model="task.done" />
          </label>
        </div>
        <button type="button" v-on:click="remove(task)">-</button>
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
    this.handleLast();
  }

  @Prop() private tasks: Task[];

  save(task: Task) {
    this.tasks = TaskRepository.storeTask(task);
    this.handleLast();
  }

  saveAll() {
    this.tasks.forEach(task => this.save(task));

    this.$forceUpdate();
  }

  remove(task: Task) {
    this.tasks = TaskRepository.removeTask(task);

    this.$forceUpdate();
  }

  handleLast() {
    if (
      this.tasks.length === 0 ||
      this.tasks[this.tasks.length - 1].description.length > 0
    ) {
      this.addNew();
    }
  }

  addNew() {
    this.tasks = TaskRepository.storeTask(new Task(""));

    this.$forceUpdate();
  }
}
</script>

<style scoped></style>
