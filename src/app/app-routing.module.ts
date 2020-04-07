import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BASE_URL } from "./consts/routes.const";
import { CREATE_URL } from "./consts/routes.const";
import { CreateComponent } from "./create/create.component";
import { FEED_URL } from "./consts/routes.const";
import { FeedComponent } from "./feed/feed.component";

const routes = [
  {
    path: "",
    redirectTo: `${BASE_URL}${FEED_URL}`,
    pathMatch: "full"
  },
  {
    path: `${FEED_URL}`,
    component: FeedComponent
  },
  {
    path: `${CREATE_URL}`,
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
