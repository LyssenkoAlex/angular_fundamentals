import {Injectable} from '@angular/core';
import {AuthorModel} from "../models/Author";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {AuthorsService} from "./authors.service";
import {Actions} from "../models/Actions";


@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {


  private authors$$: BehaviorSubject<Array<AuthorModel>> = new BehaviorSubject<Array<AuthorModel>>([])
  public authors$ = this.authors$$.asObservable();
  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public isLoading$ = this.isLoading$$.asObservable();

  constructor(private authorService: AuthorsService) {
    this.authorService.setActionRunnerFn = this.processAction.bind(this)
  }

  processAction = async (action: string, data: any) => {
    switch (true) {
      case (action === Actions.INIT_AUTHORS):
        this.authorService.triggerActionRunner()
        break;
      case(action === Actions.ALL_AUTHORS):
        this.isLoading$$.next(true);
        this.authorService.getAll()
        break;

      case(action === Actions.RECEIVED_AUTHORS):
        this.authors$$.next(data)
        this.isLoading$$.next(false);
        break;
    }
  }
}
