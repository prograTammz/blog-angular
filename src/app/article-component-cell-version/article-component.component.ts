import { Component, OnInit, Input } from "@angular/core";
import { Article } from "src/models/Article";
import { ArticleService } from "../services/article.service";

@Component({
  selector: "app-article-component-cell-version",
  templateUrl: "./article-component.component.html",
  styleUrls: ["./article-component.component.scss"],
})
export class ArticleCellVersionComponentComponent implements OnInit {
  constructor(public articleService: ArticleService) {}
  @Input() article: Article;
  ngOnInit(): void {
    this.article = this.articleService.getArticles();
  }
}
