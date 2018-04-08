import { Component } from "@angular/core";

@Component({
    template:`<div class="lead-body">
    <div class="lead-link">
      <a routerLink="/animal">动物世界</a>
    </div>
  </div>`,
    styles: [`
    .lead-body {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #bdecf9;
    }
    .lead-link {
      width: 1000px;
      margin: 80px auto;
    }
    a{
      display: inline-block;
      width: 230px;
      height: 150px;
      margin: 0 8px 20px;
      line-height: 150px;
      background-color: #fff;
      border: 1px solid #fff;
      border-radius: 10px;
      color: #393939;
      font-size: 20px;
      letter-spacing: 4px;
      text-align:center;
      transition: box-shadow .5s linear;
    }
    a:active {
      border: none;
    }
    a:focus {
      
      outline: none;
      text-decoration: none;
    }
    a:hover {
      -webkit-box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
  `]
})
export class IndexComponent{
  
}