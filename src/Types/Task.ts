export interface Task {
    id: string,
    title: string,
    content: string,
    complete: boolean,
    index?: number
}

export interface createTask extends Omit<Task, "id" | "index"> {}