import {AuthorState} from "../store/authors/author.reducer";


export interface AuthorModel {
  name: string;
  id: string;
}

export interface AuthorModelAdd {
  sendRequest:boolean,
  successful: boolean;
  error?:any
  result?: {
    name: string,
    id: string
  }
}

export const initialStateAddModel: AuthorModelAdd = {
  sendRequest:false,
  successful: false,
  result: {
    "name": "",
    "id": ""
  }
}
