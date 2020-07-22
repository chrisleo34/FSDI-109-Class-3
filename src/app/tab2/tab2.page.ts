import { DataService } from "./../service/data.service";
import { SharedService } from "./../service/shared.service";
import { Component } from "@angular/core";
import { Post } from "../models/post";

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  model = new Post();

  constructor(private shared: SharedService, private data: DataService) {}

  savePost() {
    this.model.from = this.shared.userName;

    // tslint:disable-next-line: quotemark
    console.log("posting", this.model);

    this.data.savePost(this.model);

    this.model = new Post();
  }
}
