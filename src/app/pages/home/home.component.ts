import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ErrorService} from '../../shared/services/error.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ErrorService]
})
export class HomeComponent implements OnInit {

  userUID: string | null = "";

  constructor(public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private errorService: ErrorService,) {
  }

  ngOnInit(): void {
      this.userUID = sessionStorage.getItem("userGuid");
  }
}
