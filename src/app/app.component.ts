import { Component } from '@angular/core';
import{ LoremIpsum} from 'lorem-ipsum'



    const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 5,
      min: 3
    }
  });

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text = lorem.generateSentences(1);
  entredText='';

  onInput(text :any){
    this.entredText=text.value
    
  }

  compare(randomLetter:string,entredLetter:string):string{
    if(!entredLetter)
    return 'pending';

   return entredLetter===randomLetter?'correct':'incorrect'
    

  }
}
