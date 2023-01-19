import { UserHomeService } from './../../services/user-home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-home-toggle',
  templateUrl: './users-home-toggle.component.html',
  styleUrls: ['./users-home-toggle.component.scss'],
})
export class UsersHomeToggleComponent implements OnInit {
  selectedValue = "1";

  constructor() {
  }

  ngOnInit(): void {}

  onSelectToogle() {
    UserHomeService.selectedHomeToogle.emit(this.selectedValue)
  }
}
