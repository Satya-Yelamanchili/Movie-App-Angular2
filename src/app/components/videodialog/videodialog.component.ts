import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videodialog',
  templateUrl: './videodialog.component.html',
  styleUrls: ['./videodialog.component.css']
})
export class VideodialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<VideodialogComponent>, @Inject(MD_DIALOG_DATA) public data: any,
  private sanitizer: DomSanitizer, private route: Router) { }

  ngOnInit() {
    console.log(this.data);
  }
    getSafeUrl(data: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(data);
  }

}
