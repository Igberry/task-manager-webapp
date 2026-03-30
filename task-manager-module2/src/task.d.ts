export interface Task {
    id: string;
    title: string;
    completed: boolean;
}
export declare class TaskItem implements Task {
    id: string;
    title: string;
    completed: boolean;
    constructor(id: string, title: string, completed?: boolean);
    toggleComplete(): void;
}
//# sourceMappingURL=task.d.ts.map