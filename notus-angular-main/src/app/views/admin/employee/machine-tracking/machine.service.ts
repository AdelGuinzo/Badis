import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private apiUrl = 'http://localhost:3000/machines';  // Replace with your API URL

  constructor(private http: HttpClient) {}

  getMachines(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addMachine(machine: any): Observable<any> {
    return this.http.post(this.apiUrl, machine);
  }

  deleteMachine(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
