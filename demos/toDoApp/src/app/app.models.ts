export class ListItem {
    name: string;
    completed: boolean;

    constructor(name: string) {
        this.name = name;
        this.completed = false;
    }
}