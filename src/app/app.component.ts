import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.navigate = [
      {
        title: "All Tasks",
        url: "/home/all",
      },
      {
        title: "Due Tasks",
        url: "/home/due",
      },
      {
        title: "Finished Tasks",
        url: "/home/com",
      },
      {
        title: "Performance",
        url: "/register",
      },
      {
        title: "Ask Queries",
        url: "/queries",
      },
      {
        title: "About",
        url: "/about",
      },
    ];
  }

}
