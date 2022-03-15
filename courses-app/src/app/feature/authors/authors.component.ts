import {Component, OnInit} from '@angular/core';
import {AuthorsFacade} from "../../store/authors/authors.facade";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthorModel, AuthorModelAdd, AuthorState} from "../../models/Author";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit{

  form: FormGroup;
  submitted = false
  authors:AuthorModel[] = []
  addResult?:AuthorModelAdd


  constructor(private store: AuthorsFacade, private fb: FormBuilder,) {
    this.form = fb.group({
      name: [
        "", [Validators.required]
      ]
    })
  }

  ngOnInit():void {
    this.store.getAll();
    this.store.getAllAuthorsResult$.subscribe((resp:AuthorState) => {
      this.authors = resp.result.authors
    })
    this.store.getAddAuthorResult$.subscribe((result) => {
      this.addResult = result
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
    this.store.getAll();
  }

}
