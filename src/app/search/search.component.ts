import { Component } from '@angular/core';
import { SearchService } from '../service/search.service'
import { Filters, SearchItem, SearchTableItems } from './search.component.viewmodel'
import { CompleterService, CompleterData } from 'ng2-completer';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  //styleUrls: ['./app.component.css']
})
export class SearchComponent {

  private filterData: Filters[];
  private autoSearchItems: string[];
  private filterValue: string;
  private filterLabel: string;
  private searchItem: string;
  private dataService: CompleterData;
  private searchTableItems: SearchTableItems[];
  private tableActive: boolean;
  private parentRouter: Router;
  private arrayOfString: string[];

  constructor(private _searchService: SearchService, private completerService: CompleterService, private _router: Router) {
    this.parentRouter = _router;
    this._searchService.getSearchByFilterValues('0').subscribe(data =>
    { this.autoSearchItems = this.autoCompleteDataInitial(data); this.dataService = this.completerService.local(this.autoSearchItems, '', '');
    console.log(this.dataService); console.log(this.arrayOfString); err => console.log('error')
   });
  }
  private ngOnInit() {
    this._searchService.getFilterResult().subscribe(data => { this.filterData = data; console.log(this.filterData + 'filters'); err => console.log('error') });
    this.filterValue = '0';
    this.filterLabel = 'Filter By';
    this.tableActive = false;
    this.searchTableItems = [];
  }
  private SearchFilter(event: any, val: string) {

    event.preventDefault();
    this.autoSearchItems = [];
    this.searchItem = '';
    this.filterValue = val;
    this.filterLabel = event.target.outerText;
    // this.dataService=[];
  }

  // private SearchOnClick = (search: string): any => {
  private SearchOnClick(search: string) {
    this.searchItem = search;
    if (this.filterValue !== '0') {
      if (search == '' || search == undefined) {
        if (this.filterValue == '0') {
          this.searchItem = this.filterValue;

        } else {
          !!this.searchItem ? this._searchService.getSearchByFilterValues(this.filterValue).subscribe(data => { this.autoSearchItems = this.autoCompleteDataInitial(data); this.dataService = this.completerService.local(this.autoSearchItems, this.searchItem, this.searchItem); err => console.log('error') }) : this.searchItem;
        }
      } else {
        !!this.searchItem ? this._searchService.getSearchByFilterValues(this.filterValue).subscribe(data => { this.autoSearchItems = this.autoCompleteDataInitial(data); this.dataService = this.completerService.local(this.autoSearchItems, '', ''); console.log(this.dataService + '  inside'); err => console.log('error') }) : this.searchItem;
      }
    }
  }
  private autoCompleteDataInitial(itemList: SearchTableItems[]): any {

    this.arrayOfString = [];
    for (let item in itemList) {
      this.arrayOfString.push(itemList[item].medicineName);
    }
    return this.arrayOfString;
  }

  // private autoCompleteData(itemList: SearchTableItems[], val: string): any {

  //   for (let item in itemList) {
  //     if (item.startsWith(val)) {
  //       return itemList[item];
  //     }
  //   }
  // }
  private Search() {
    debugger
    this._searchService.getSearchResult(this.filterValue, this.searchItem, false).subscribe(data => {
      this.searchTableItems = data;data==null?this.tableActive=false: (this.tableActive = true); console.log(data)
    })
  }
  private PopulteTable(itemList: SearchTableItems[], filterValue: string, searchItem: string): any {

    if (filterValue == '0') {
      this.searchTableItems = itemList.filter(x => x.medicineName.toLocaleLowerCase().startsWith(searchItem))
    } else {
      this.searchTableItems = itemList.filter(x => x.filterId == filterValue && x.medicineName.toLocaleLowerCase().startsWith(searchItem))
    }
  }
}
//  this.PopulteTable(data.search, this.filterValue, this.searchItem.toLocaleLowerCase())
