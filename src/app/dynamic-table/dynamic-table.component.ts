// dynamic-table.component.ts
import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  data: any[] = [];

  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.data = this.tableService.getData();
  }
}
