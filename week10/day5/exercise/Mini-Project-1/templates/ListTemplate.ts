import { FullList } from "../model/FullList";

export class ListTemplate {
    constructor(private ulElement: HTMLUListElement) {}

    renderList(fullList: FullList): void {
        this.ulElement.innerHTML = '';
        const items = fullList.getItems();

        items.forEach((item) => {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.checked;

            if (item.checked) {
                li.classList.add('completed');
            }

            checkbox.addEventListener('change', () => {
                item.toggleChecked();
                if (item.checked) {
                  li.classList.add('completed'); 
                } else {
                  li.classList.remove('completed'); 
                }
                fullList.saveToLocalStorage();
              });
              

            const label = document.createElement('label');
            label.textContent = item.item;

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', () => {
                fullList.removeItem(item.id);
                this.renderList(fullList);
            });

            li.append(checkbox, label, deleteButton);
            this.ulElement.appendChild(li);
        });
    }
}