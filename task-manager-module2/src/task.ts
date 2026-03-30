export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export class TaskItem implements Task {
  id: string;
  title: string;
  completed: boolean;

  constructor(id: string, title: string, completed: boolean = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  toggleComplete(): void {
    this.completed = !this.completed;
  }
}