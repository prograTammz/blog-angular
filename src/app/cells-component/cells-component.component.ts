import { Component, OnInit, Input } from "@angular/core";
import { Cell } from "src/models/Cell";

@Component({
  selector: "cell-component",
  templateUrl: "./cells-component.html",
  styleUrls: ["./cells-component.scss"],
})
export class ArticleCellComponentComponent implements OnInit {
  constructor() {}
  @Input() cell: Cell;
  ngOnInit(): void {}
}
