import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  allAuthors: any=[]

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    let observable = this._httpService.getAuthors();


    observable.subscribe(
       (data:any) =>{
         console.log("esto es data authors: ",data)
      this.allAuthors = data
      console.log("temp: ",this.allAuthors)



    },
    (error:any) =>{
      console.log("Something wet wrong ",error);
    })
    // console.log("After loading the tasks: ", this.taskslist);
  }



  deleteAuthors(_id:object):void{

    console.log("Authors que se eliminara ", _id);
    this._httpService.deleteAuthor(_id)
    .subscribe((data:any) =>{ 
      console.log(data);
    });
    location.reload();
  }
};

