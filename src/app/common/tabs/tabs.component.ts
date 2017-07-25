import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  activeTabs: any;
constructor() {
}

@ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  // contentChildren are set
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit() {
    // get all active tabs
    this.activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (this.activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    // tslint:disable-next-line:no-shadowed-variable
    this.tabs.toArray().forEach(tab => tab.active = false);
    // activate the tab the user has clicked on.
    tab.active = true;
  }

}
