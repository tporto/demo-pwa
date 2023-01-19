import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnInit {
  title: string;
  message?: string;
  confirmAction?: string;
  cancelAction?: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel
  ) {
    this.title = data.title;
    this.message = data.message;
    this.confirmAction = data.confirmAction;
    this.cancelAction = data.cancelAction;
  }

  ngOnInit() {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

  getConfirmActionText(): string {
    return this.confirmAction || 'Sim';
  }

  getCancelActionText(): string {
    return this.cancelAction || 'Não';
  }
}

export class ConfirmDialogModel {
  constructor(
    public title: string,
    public message?: string,
    public confirmAction?: string,
    public cancelAction?: string
  ) {}
}
