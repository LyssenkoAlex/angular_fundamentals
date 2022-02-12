import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:'searchCourseTitle'
})

export class SearchPipe implements PipeTransform {
  transform(value: any, ...args:any): any {
    console.log('step 2 value', value)
    console.log('step 2 args', args)
    if(args?.length < 2) {
      return value
    }
    return value.filter((val:any)=>{
      console.log('step 55')
      let rVal = val.name.includes(args)
      return rVal
    })
  }
}
