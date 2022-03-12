import {Component} from '@angular/core';
import {AuthorModel} from "../../models/Author";
import {AuthorsFacade} from "../../store/authors/authors.facade";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Actions} from "../../models/Actions";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  authors: AuthorModel[] | undefined
  isLoading: boolean = true
  authors$ = this.store.authors$
  form: FormGroup;
  submitted = false

  constructor(private store: AuthorsFacade, private fb: FormBuilder,) {
    this.store.getAll();
    this.form = fb.group({
      name: [
        "", [Validators.required]
      ]
    })
  }

  get name() {
    return this.form?.get("name")
  }

  onFormSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.store.addAuthor(this.form.value)

  }

}
