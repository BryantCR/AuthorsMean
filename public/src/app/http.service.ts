import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    console.log("hola")
    return this._http.get('http://localhost:8080/authors');
 };
 getAAuthor(_id:any){
  console.log("soy getAAuthors: ",_id.id)
 return this._http.get(`http://localhost:8080/authors/${_id.id}`);
 
}

postCreateAuthor(newAuthor:any){
  console.log("info que se guardara: ",newAuthor.authorName)
return this._http.post('http://localhost:8080/authors', newAuthor);
};
putUpdateAuthor(_id: any, updatedAuthors:any){
return this._http.put(`http://localhost:8080/authors/${_id.id}`, updatedAuthors);
};
deleteAuthor(_id: object){
return this._http.delete(`http://localhost:8080/authors/${_id}`, _id);
};

}
