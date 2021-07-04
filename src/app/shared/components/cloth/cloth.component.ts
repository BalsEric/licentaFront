import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";
import {ClothesEntity} from "../../interfaces/ClothesEntity";
@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.css']
})
export class ClothComponent implements OnInit {
  @Input() cloth: ClothesEntity = {};
  constructor() { }

  ngOnInit(): void {
    console.log(this.cloth);
  }

}
