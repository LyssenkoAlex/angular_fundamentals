
export interface AuthorModel {
  name: string;
  id: string;
}

export interface AuthorModelAddASuccess {
  successful: boolean;
  "result": {
    "name": string,
    "id": string
  }
}
