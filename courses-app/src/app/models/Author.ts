

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

export interface AuthorState {
  loading: boolean;
  result: { successful: boolean, authors: AuthorModel[] },
  error: any,
}

export const initialState: AuthorState = {
  loading: false,
  result: {successful: false, authors: []},
  error: '',
}
