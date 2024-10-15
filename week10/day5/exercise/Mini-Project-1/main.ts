import { FullList } from "./model/FullList";
import { ListTemplate } from "./templates/ListTemplate";
import './style.css'

const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement;
const newItemInput = document.getElementById("newItem") as HTMLInputElement;
const clearItemsButton = document.getElementById("clearItemsButton") as HTMLButtonElement;
const ListItems = document.getElementById("listItems") as HTMLUListElement;

const fullList = new FullList();
const listTemplate = new ListTemplate(ListItems);

fullList.loadFromLocalStorage();
listTemplate.renderList(fullList);

itemEntryForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  if(newItemInput.value.trim()) {
    fullList.addItem(newItemInput.value.trim());
    listTemplate.renderList(fullList);
    newItemInput.value = '';
  }
});

clearItemsButton.addEventListener('click', () => {
  fullList.clearList();
  listTemplate.renderList(fullList);
});