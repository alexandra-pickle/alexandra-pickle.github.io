import { Component, OnInit } from '@angular/core';
import { ListItem } from '../app/app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  list: Array<ListItem>;
  newTask: ListItem;
  
  public ngOnInit() {
    this.title = 'To do list';
    this.list = new Array<ListItem>();
    this.newTask = new ListItem('');
  }

  public addNewItem() {
    this.list.push(this.newTask);
    this.newTask = new ListItem('');
    this.sortList();
  }

  public changeItemStatus(item: ListItem) {
    item.completed = !item.completed;
    this.sortList();
  }

  public delete(item: ListItem) {
    let index = this.list.indexOf(item);
    this.list.splice(index, 1);
    this.sortList();
  }

  private sortList() {
    this.list.sort(function(a: ListItem, b: ListItem) {
      if (a.completed === b.completed) {
        return 0;
      } else if (a.completed === true) {
        return 1;
      }
      return -1;
    });
  }
}
