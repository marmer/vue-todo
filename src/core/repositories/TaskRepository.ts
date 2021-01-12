import Task from "@/core/model/Task";

export function loadTasks(): Task[] {
  const currentTasks = localStorage.getItem("tasks");
  return currentTasks ? JSON.parse(currentTasks) : [];
}

export function storeTask(task: Task) {
  const tasks = loadTasks();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
