import { Component, OnInit ,Input} from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    @Input() quote:Quotes;
    Quotes = [
        new Quotes(1,'Independence is happiness', 'All that we see or seem is but a dream within a dream.', 'Jacky' ,new Date(2019,1,29)),
        new Quotes(2,'Happiness can exist only in acceptance.', 'Independence is happiness.', 'Jacky', new Date(2019,1,4)),
        new Quotes(3, 'Love has no age, no limit; and no death.', 'Happiness can exist only in acceptance.', 'Jacky' ,new Date(2019,1,20)),
        // new Quotes(4, 'You cannot shake hands with a clenched fist.', 'You can not blame gravity for falling in love.', new Date(2019,1,10)),
        // new Quotes(5, 'Learning never exhausts the mind.', 'Whoever is happy will make others happy too.', new Date(2019,1,18)),
        // new Quotes(6, 'There is no charm equal to tenderness of heart.', 'If opportunity does not knock, build a door.', new Date(2019,1,26)),
    ]
    toogleDetails(index){
        this.Quotes[index].showDescription = !this.Quotes[index].showDescription;
    }
    deleteQuote(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.Quotes[index].name}`)
            
            if(toDelete){
                this.Quotes.splice(index,1)
            }
            
        }
       
    }
    addNewQuotes(quote){
        let quoteLength = this.Quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.Quotes.push(quote)
    }
    ngOnInit() {
}

}