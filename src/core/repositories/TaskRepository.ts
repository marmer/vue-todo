import Task from "@/core/model/Task";

export function loadTasks(): Task[] {
  const currentTasks = localStorage.getItem("tasks");
  return currentTasks ? JSON.parse(currentTasks) : [];
}

export function removeTask(task: Task) {
  const tasks = loadTasks().filter(t => t.id !== task.id);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  return tasks;
}

export function storeTask(task: Task) {
  const tasks = loadTasks();

  const taskIndex = tasks.findIndex(t => t.id === task.id);
  if (taskIndex === -1) {
    tasks.push(task);
  } else {
    tasks[taskIndex] = task;
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  return tasks;
}
