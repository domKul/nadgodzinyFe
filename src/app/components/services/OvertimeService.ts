import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {OvertimeResponseDto} from "../model/OvertimeResponseDto";

@Injectable({
  providedIn: 'root'
})
export class OvertimeService {
  private baseUrl = 'http://localhost:8080/api/v1/overtimes';

  constructor(private http: HttpClient) {}

  getAllOvertimes(): Observable<OvertimeResponseDto[]> {
    return this.http.get<OvertimeResponseDto[]>(this.baseUrl);
  }

  getOvertimesByStatus(year: number, status: string): Observable<OvertimeResponseDto[]> {
    return this.http.get<OvertimeResponseDto[]>(`${this.baseUrl}/status?year=${year}&status=${status}`);
  }
}
