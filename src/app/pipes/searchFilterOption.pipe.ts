
import { PipeTransform, Pipe } from "@angular/core";
import { Filters } from "../search/search.component.viewmodel"

@Pipe({
  name: 'SearchFilterOptions'
})
export class SearchFilterOptionsPipe implements PipeTransform {
  debugger;
  transform(value: Filters[], filterBy: string): Filters {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    let d = value.find(x => x.filterId == filterBy);
    //return filterBy ? value.find( filter=>filter.filterId==filterBy) : value;
    return d;
  }
}
