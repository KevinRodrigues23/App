import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Appointment } from './Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  bookingListRef!: AngularFireList<any>;
  bookingRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createBooking(apt: Appointment) {
    return this.bookingListRef.push({
      name: apt.texto,
      email: apt.descripton,
      
    });
  }
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/appointment');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id: any, apt: Appointment) {
    return this.bookingRef.update({
      name: apt.texto,
      email: apt.descripton
      
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    this.bookingRef.remove();
  }
}


