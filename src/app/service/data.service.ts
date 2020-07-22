import { Post } from "./../models/post";
import { Injectable } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreModule,
} from "angularfire2/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  allPost: Observable<Post[]>;

  // collection object <--> database
  postCollection: AngularFirestoreCollection<Post>;

  constructor(private fst: AngularFirestore) {
    this.postCollection = fst.collection<Post>("posts");
  }

  private retrievePosts() {
    this.allPost = this.postCollection.valueChanges(); // will fire everything a value is changed in DB
  }

  savePost(post) {
    var item = Object.assign({}, post);
    this.postCollection.add(item);
  }
  

  getAllPosts() {
    this.retrievePosts();
    return this.allPost;
  }
}
