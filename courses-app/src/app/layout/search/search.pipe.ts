import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:'searchCourseTitle'
})

export class SearchPipe implements PipeTransform {
  transform(value: any, ...args:any): any {

    if(args?.length < 2) {
      return value
    }
    return value.filter((val:any)=>{

      let rVal = val.name.includes(args)
      return rVal
    })
  }
}
