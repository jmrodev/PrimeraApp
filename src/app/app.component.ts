import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title:string = 'PrimeraApp';
  todo :string= '';
  todoArray:any=[];
  addTodo(value:any)
     {this.todoArray.push(value);
      console.log(this.todoArray);
     }
     deleteItem(todo:any)
     {   
        for(let i=0 ;i<= this.todoArray.length ;i++)
        {    if(todo== this.todoArray[i])
           {     this.todoArray.splice(i,1)   
           }
        }
    }

}