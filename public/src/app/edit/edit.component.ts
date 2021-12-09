import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router} from '@angular/router';
import { AnyObject } from 'mongoose';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  singleAuthors: any = [];
  id:any={};
  updatedAuthors:any={
    authorName:"",
  };
  constructor( private _httpService: HttpService, private _route:ActivatedRoute, private_router:Router ) { }

  ngOnInit(): void {
    console.log("init");
    // this.Authors=_id
    this._route.params.subscribe((params:any) => {
    this.id = params;
      console.log("parametros: ",params);
    })
    let observable=this._httpService.getAAuthor(this.id);
    observable.subscribe((data:any)=>{
      console.log("info en data: ",data)
      this.singleAuthors=data
      console.log("info en singleAuthors: ",this.singleAuthors.authorName)
    },
    (error:any)=>{
      console.log("Something went wrong", error);
    })
    
  };


  updateAuthor(event:any): void{
    console.log("comienza update")
    let id=this.id
    console.log("este es el id: ",id)
    let authorName= event.target.authorName.value;
    console.log("este es el authorName: ",authorName)

    let updatedAuthors:any={
      authorName
    };
    console.log("este es updatedAuthors: ",updatedAuthors)
    this._httpService.putUpdateAuthor(id, updatedAuthors)
    .subscribe((data:any) =>{
      
      console.log(data);
      location.reload();
    });
  }
  
};
