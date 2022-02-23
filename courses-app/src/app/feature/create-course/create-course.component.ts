import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from "@angular/forms";

@Pipe({ name: 'durationConvert'})
export class DurationConvert implements PipeTransform{
  transform(val: number) {
    return `${(val - (val % 60)) / 60} h : ${(val % 60)} m`
  }
}

@Pipe({ name: 'dateConvert'})
export class DateConvert implements PipeTransform{
  transform(val: string) {
    const date = new Date(val)
    return val ? `${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()}` : ''
  }
}

function nameValidate() : {[key: string]: any} | null {

  return (control: AbstractControl): { [key: string]: any } | null => {

    const forbidden = control.value.toLowerCase()
      .match(
        /^[a-zA-Z0-9_.-]*$/
      )
    console.log('nameValidate: ', forbidden)
    return forbidden === null ? { forbiddenName: { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})

export class CreateCourseComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      title:[
        "", [Validators.required]
      ],
      description:[
        "", [Validators.required]
      ],
      authorName:[
        "", nameValidate()
      ],
      duration:[
        "", [Validators.required]
      ],
      createDate:[
        "", [Validators.required]
      ]
    })
  }

  ngOnInit(): void {
  }

  get title() {
    return this.form?.get("title")
  }

  get description() {
    return this.form?.get("description")
  }

  get authorName() {
    return this.form?.get("authorName")
  }

  get duration() {
    return this.form?.get("duration")
  }

  get createDate() {
    return this.form?.get("createDate")
  }

  onFormSubmit() {
    alert(JSON.stringify(this.form?.value, null, 2))
  }
}
