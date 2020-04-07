import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppFirebaseModule } from "./app-firebase.module";
import { AppMaterialModule } from "./app-material.module";
import { AppRoutingModule } from "./app-routing.module";
import { CreateComponent } from "./create/create.component";
import { FeedComponent } from "./feed/feed.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppFirebaseModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  declarations: [AppComponent, CreateComponent, FeedComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
