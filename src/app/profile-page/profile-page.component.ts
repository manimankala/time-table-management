import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  profileData: any = {}; // To store the profile data
  avatarInitials: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProfileData();
  }

  fetchProfileData(): void {
    this.http.get('API_ENDPOINT').subscribe((response: any) => {
      if (response?.data?.length) {
        this.profileData = response.data[0];
        this.avatarInitials = this.getInitials(this.profileData.name || 'Unknown User');
      }
    });
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  }
}
