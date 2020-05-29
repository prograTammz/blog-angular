import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ArticleComponentComponent } from "./article-component/article-component.component";
import { ArticleCellVersionComponentComponent } from "./article-component-cell-version/article-component.component";
import { ArticleCellComponentComponent } from "./cells-component/cells-component.component";
import { ArticleService } from "./services/article.service";
import {FeedService} from "./services/feed.service"
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponentComponent,
    ArticleCellVersionComponentComponent,
    ArticleCellComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ArticleService, FeedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
