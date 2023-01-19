import { JwtService } from './../../../core/services/jwt.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/core/services/user.service';

import {
  ConfirmationDialogComponent,
  ConfirmDialogModel,
} from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { Router } from '@angular/router';
import { User } from 'src/app/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
})
export class UserHeaderComponent implements OnInit {
  today = new Date();
  currentUser: User | null;

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private jwtService: JwtService,
    private router: Router
  ) {
    this.currentUser = this.jwtService.getUser();
  }

  ngOnInit(): void {}

  getToday() {
    return this.today;
  }

  logOut(): void {
    const title = `Tem certeza que deseja sair?`;
    const dialogData = new ConfirmDialogModel(title, '', 'Sair', 'Cancelar');

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult) {
        this.userService.purgeAuth();
        this.router.navigateByUrl('/login');
      }
    });
  }
}
