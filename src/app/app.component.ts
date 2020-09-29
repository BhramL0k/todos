import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THE TODO APP';
  datas= [];
  len=0;
  input='Enter and Remove your Todos here';
  add(data){
    this.datas.push(data.value);
    this.len=this.datas.length;
  }

  delete(data){
    this.datas=this.datas.filter(el =>{
      return el !== data;
    });
    this.len=this.datas.length;
  }
}
