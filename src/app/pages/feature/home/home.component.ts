import { Component, OnInit, TemplateRef, ViewChild, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NameDialogComponent } from 'src/app/shared/ui/name-dialog/name-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isNamed = false
  name = ''


  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  constructor(public dialog: MatDialog, private renderer: Renderer2) { }

  openNameDialog() {
    const nameDialog = this.dialog.open(NameDialogComponent, {},);
    nameDialog.afterClosed().subscribe((res) => {
      this.name = res.name
      this.isNamed = true
    });
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'home');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'home');
  }
}
