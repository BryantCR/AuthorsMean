import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newAuthor:any={
    authorName:""

  };
  constructor( private _httpService: HttpService) { }

  ngOnInit(): void {
  }

  createAuthor(event:any) :void{
    console.log("se crea el author")
    event.preventDefault()
    let observable = this._httpService.postCreateAuthor(this.newAuthor)
    console.log("aqui va new author: ",this.newAuthor);
    observable.subscribe((data:any) =>{
      console.log(data)
    });

  }

}
