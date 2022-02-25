import {Injectable} from '@angular/core';
import {AuthorModel} from "../models/Author";
import {BehaviorSubject} from "rxjs";
import {AuthorsService} from "./authors.service";
import {Actions} from "../models/Actions";



@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {


  public authorsData: BehaviorSubject<Array<AuthorModel>> = new BehaviorSubject<Array<AuthorModel>>([])
  private _isLoading: boolean = false;
  public isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject(this._isLoading);

  constructor(private authorService: AuthorsService) {
    this.authorService.setActionRunnerFn = this.processAction.bind(this)
  }

  processAction = async (action: string, data: any) => {
    switch (true) {
      case (action === Actions.INIT_AUTHORS):
        console.log('processAction INIT_AUTHORS');
        this.authorService.triggerActionRunner()
        break;
      case(action === Actions.ALL_AUTHORS):
        console.log('processAction ALL_AUTHORS');
        this.isLoading$$.next(true);
        this.authorService.getAll()
        break;

      case(action === Actions.RECEIVED_AUTHORS):
        console.log('processAction RECEIVED_AUTHORS', data);
        this.authorsData.next(data)
        this.isLoading$$.next(false);
        break;
    }
  }


}
