import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../entities/country';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  // transform method provided by pipe which perform all operation inside pipe (countty)
  transform(tourists: Country[], searchValue: string): Country[] {
    if (!tourists || !searchValue) {
      return tourists;
    }
    //filter all data on the basic of firstName and id (country)
    return tourists.filter(tourist =>
      tourist.countryName.toLocaleLowerCase().
        includes(searchValue.toLocaleLowerCase()) || tourist.id?.toString().
          toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())

    );
  }

}
