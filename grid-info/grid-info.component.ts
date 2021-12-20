import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-grid-info',
  templateUrl: './grid-info.component.html',
  styleUrls: ['./grid-info.component.css']
})
export class GridInfoComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  public columnDefs;
  public searchValue;
  public sortingOrder;
  InfoList:any=[];
  status: any = 'ACTIVE';
  public showAll: boolean = false;

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.columnDefs = [
       {
        headerName: "Name",
        field: "Name",
        width: 150,
        sortable: true,
        filter: true,
        resizable: true,
        sortingOrder: ["asc", "desc"],
      },
      {
        headerName: "Address",
        field: "Address",
        width: 400,
        filter: true,
        resizable: true
      },
      {
        headerName: "Age",
        field: "Age",
        width: 90,
        sortable: true,
        filter: true,
        resizable: true,
        sortingOrder: ["desc", null]
      },
      {
        headerName: "Is Married",
        field: "IsMarried",
        width: 150,
        sortable: true,
        filter: true,
        resizable: true,
        sortingOrder: ["asc"]
      },
      {
        headerName: "Occupation",
        field: "Occupation",
        width: 150,
        sortable: true,
        resizable: true,
        filter: true
      },
      {
        headerName: "Income",
        field: "Income",
        width: 150,
        sortable: true,
        resizable: true,
        filter: true
      },
      {
        headerName: "Status",
        field: "status",
        hide: true
      }
    ];
  }

  onGridReady(params)
  {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.service.getInfoList().subscribe(data => {
      console.log("------- Status: ", data[]);
      params.api.setRowData(data);
    })
  }

  public showActive(active) {
    console.log("--------- Checked !", this.gridApi.data);
  }

  public showActiveRecordsOnly(e) {
    this.showActive(e.target.checked);
  }

}
