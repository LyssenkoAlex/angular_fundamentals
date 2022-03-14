import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {CoursesFacade} from "../../store/courses/courses.facade";
import {CourseModelRequest} from "../../models/Course";
import {Router} from "@angular/router";

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
  submitted = false;
  addResult:boolean = false
  constructor(private fb: FormBuilder, private store:CoursesFacade, private router: Router) {
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
    this.store.getAddCourseResult$.subscribe((res:CourseModelRequest) => {
      console.log("CourseModelAdd resp: ", res)
      if(res.successful) {
        this.router.navigate(['/courses'])
        this.store.resetState()
      }
    })
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
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.form.value.authors = ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36']
    this.store.addCourse(this.form?.value)
  }
}
