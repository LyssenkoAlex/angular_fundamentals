import {Injectable} from '@angular/core';
import {AuthorModel} from "../models/Author";
import {Subject} from "rxjs";
import {AuthorsService} from "./authors.service";
import {Actions} from "../models/Actions";



@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {

  public authorsData: Subject<AuthorModel> = new Subject<AuthorModel>()

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
        this.authorService.getAll()
        break;

      case(action === Actions.RECEIVED_AUTHORS):
        console.log('processAction RECEIVED_AUTHORS', data);
        this.authorsData.next(data)
        break;
    }
  }


}
