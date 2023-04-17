import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toup'})
export class toup implements PipeTransform {
  transform(value: string): string {
value = "'"+value+"'"
    return value;
  }
}