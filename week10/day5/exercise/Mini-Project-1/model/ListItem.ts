import { v4 as uuidv4 } from 'uuid';

export interface ListItemInterface {
  id: string;
  item: string;
  checked: boolean;
}

export class ListItem implements ListItemInterface {
  constructor(public item: string, public checked: boolean = false, public id: string = uuidv4()) {}

  toggleChecked(): void {
    this.checked = !this.checked;
  }
}
