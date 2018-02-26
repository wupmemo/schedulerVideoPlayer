import { Component } from '@angular/core';

import { SchedulePage } from '../schedule/schedule';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SchedulePage;
  tab3Root = AboutPage;

  constructor() {

  }
}
