import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {WardrobeService} from "../../shared/services/wardrobe.service";
import {ClothesEntity} from "../../shared/interfaces/ClothesEntity";

@Component({
  selector: 'app-wardrobe',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.css'],
  providers: [WardrobeService]
})
export class WardrobeComponent implements OnInit {
  clothes: ClothesEntity[] = [];
  constructor(private router: Router,
              private wardrobeService: WardrobeService) { }

  ngOnInit(): void {
    this.wardrobeService.getAllClothes().subscribe((result: ClothesEntity[]) => {
      this.clothes = result;
      });

  }
}
