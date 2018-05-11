import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BookingServiceService {

  // variables
  baseURL = 'http://127.0.0.1:8000/api/bookings/';
  contentHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  // gets the rooms from the db
  getRooms() {
    return this.http.get('http://127.0.0.1:8080/api/rooms/all');
  }

  /**
   * Stores a booking
   * @param data the booking input data
   */
  storeBooking(data) {
    return this.http.post(this.baseURL, data, {headers: this.contentHeaders});
  }

}
