import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TypingApp';

  randomText=faker.lorem.sentence();
  enteredText="";


  onTypingText(event:any){
    this.enteredText=event.target.value
    console.log(this.enteredText)
  }
  
  compare(letter:any, enteredLetterIndex:any){
    if(!this.enteredText[enteredLetterIndex]){
      return "pending";
    }else if(this.enteredText[enteredLetterIndex]==letter){
      return "correct";
    }else{
      return "incorrect";
    }
  }
}
