import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {OvertimeResponseDto} from "../model/OvertimeResponseDto";
import {OvertimeService} from "../services/OvertimeService";

@Component({
  selector: 'app-overtime',
  templateUrl: './overtime.component.html',
  styleUrls: ['./overtime.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class OvertimeComponent implements OnInit {
  overtimes: OvertimeResponseDto[] = [];

  constructor(private overtimeService: OvertimeService) {}

  ngOnInit(): void {
    this.loadOvertimes();
  }

  loadOvertimes(): void {
    this.overtimeService.getAllOvertimes().subscribe((data: OvertimeResponseDto[]) => {
      this.overtimes = data;
    });
  }

  loadOvertimesByStatus(year: number, status: string): void {
    this.overtimeService.getOvertimesByStatus(year, status).subscribe((data: OvertimeResponseDto[]) => {
      this.overtimes = data;
    });
  }
}
