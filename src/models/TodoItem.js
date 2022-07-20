export class TodoItem {
    constructor(
        id,
        taskName,
        notes,
        date,
        completed
    ) {
        this.id = id;
        this.taskName = taskName;
        this.notes = notes;
        this.date = date;
        this.completed = completed;
    }
}