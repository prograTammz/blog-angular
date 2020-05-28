import { Article } from "src/models/Article";
import { Injectable } from "@angular/core";
//import {Subject} from 'rxjs'
@Injectable()
export class ArticleService {
//private articlesUpdated = new Subject<Article[]>();

  private articles: Article = 
    {
      atricle_id: "sdsa",
      user_id: "00000",
      cells: [
        {
          cell_type: "text",
          metadata: {},
          content: [
            "How much toilet paper is sold in France each year? How many miles of train tracks are there in Germany? What percentage of people are standing up versus sitting or lying down at 9:45 a.m. in the United States?",
          ],

          original_author: "00000",
          contributors: ["00000"],
        },

        {
          cell_type: "text",
          metadata: {},
          content: [
            "In job interviews, you may face a brain teaser like one of these. “What’s the point of guessing the answer to a question when you can just take five seconds and Google it?” you might wonder. The purpose isn’t to make you sweat and scream curse words in your head, but rather to test your capacity for structured thinking and your ability to use logic, practice deduction, and build a big answer by asking many small questions.",
          ],

          original_author: "00000",
          contributors: ["00000"],
        },

        {
          cell_type: "text",
          metadata: {},
          content: [
            "With structured thinking, you methodically break down problems and solve them piece by piece, rather than worrying, relying on past assumptions, or shrugging in absolute cluelessness. Neil deGrasse Tyson once told a hypothetical story about asking two job candidates the same question: How tall is the spire on the building they’re in? In this scenario, one candidate happens to know the answer. The other steps outside, measures the building’s shadow against her own, and gives a rough estimate. “Who are you gonna hire?” Tyson said. “I’m hiring the person who figured it out. ’Cause that person knows how to use the mind in a way not previously engaged.”",
          ],

          original_author: "00000",
          contributors: ["00000"],
        },

        {
          cell_type: "picture",
          metadata: { width: 50, figureCaption: "A graduating duck",figureAlt:"Graduating Duck" },
          content: ["https://img.fruugo.com/product/6/39/57499396_max.jpg"],

          original_author: "00000",
          contributors: ["00000"],
        },

        {
          cell_type: "text",
          metadata: {},
          content: [
            "This amazing duck for<script> console.log('sdsadasd')</script> instance is <b>one amazing duck</b> that worked so hard and now demands graduation, shall we not give it to her?",
          ],

          original_author: "00000",
          contributors: ["00000"],
        },
      ],
      heading_image:
        "https://miro.medium.com/max/1400/1*mEK6L8YDCi3ET75P4rb-Yw.jpeg",

      heading_image_caption: "Photo: Westend61/Getty Images",
      title: "This 3-Minute Exercise Will Change the Way You Solve Problems",
  }
  ;


  getArticles() {
    return this.articles;
  }
}
