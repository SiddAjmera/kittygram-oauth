import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { auth } from "firebase";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private user: BehaviorSubject<
    Observable<firebase.User>
  > = new BehaviorSubject<Observable<firebase.User>>(null);
  user$ = this.user.asObservable().pipe(switchMap(user => user));

  constructor(private afAuth: AngularFireAuth) {
    this.user.next(this.afAuth.authState);
  }

  loginViaGoogle() {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  getCurrentLoggedInUserEmail(): Observable<string> {
    return this.user$.pipe(map(user => user.email));
  }
}
