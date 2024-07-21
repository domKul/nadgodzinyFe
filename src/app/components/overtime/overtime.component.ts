import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {OvertimeResponseDto} from "../model/OvertimeResponseDto";
import {OvertimeService} from "../services/OvertimeService";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-overtime',
  templateUrl: './overtime.component.html',
  standalone: true,
  styleUrls: ['./overtime.component.css'],
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, CommonModule, MatButton]
})
export class OvertimeComponent implements OnInit {
  overtimes: OvertimeResponseDto[] = [];
  displayedColumns: string[] = ['id', 'creationDate', 'overtimeDate', 'status', 'duration'];
  dataSource = new MatTableDataSource<OvertimeResponseDto>();

  constructor(private overtimeService: OvertimeService) {}

  ngOnInit(): void {
    this.loadOvertimes();
  }

  loadOvertimes(): void {
    this.overtimeService.getAllOvertimes().subscribe((data: OvertimeResponseDto[]) => {
      this.overtimes = data;
      this.dataSource.data = data;
    });
  }

  applyFilter(year: string, status: string): void {
    this.overtimeService.getOvertimesByStatus(Number(year), status).subscribe(
      (data: OvertimeResponseDto[]) => {
        this.dataSource.data = data;
      },
      error => {
        console.error('Error fetching filtered data', error);
      }
    );
  }
}
