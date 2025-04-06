import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements AfterViewInit {
  @ViewChild('notificationDiv') notificationDiv!: ElementRef;

  ngAfterViewInit() {
    console.log(this.notificationDiv.nativeElement); // Access the element here
  }
}
