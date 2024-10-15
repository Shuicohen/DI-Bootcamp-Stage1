import { ListItem } from "./ListItem";

export class FullList {
    private items: ListItem[] = [];

    loadFromLocalStorage(): void {
        const savedList = localStorage.getItem('todoList');
        if(savedList) {
            this.items = JSON.parse(savedList).map(
                (item: any) => new ListItem(item.item, item.checked, item.id)
            );
        }
    }

    saveToLocalStorage(): void {
        localStorage.setItem('todoList', JSON.stringify(this.items));
    }

    addItem(itemText: string): void {
        const newItem = new ListItem(itemText);
        this.items.push(newItem);
        this.saveToLocalStorage();
    }

    removeItem(id: string): void {
        this.items = this.items.filter((item) => item.id !== id);
        this.saveToLocalStorage();
    }

    clearList(): void {
        this.items = [];
        localStorage.removeItem('todoList')
    }

    getItems(): ListItem[] {
        return this.items
    }
}