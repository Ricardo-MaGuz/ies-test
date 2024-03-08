import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-name-dialog',
  templateUrl: './name-dialog.component.html',
  styleUrls: ['./name-dialog.component.scss']
})
export class NameDialogComponent implements OnInit {
  nameDialog!: string;

  constructor(
    public dialogRef: MatDialogRef<NameDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {
  }

  closeDialog() { this.dialogRef.close({ event: 'close', name: this.nameDialog }); }
}