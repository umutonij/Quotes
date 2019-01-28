import { Component, OnInit,Input } from '@angular/core';
import {Quotes} from '../quotes';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})

export class QuoteFormComponent implements OnInit {
  @Input() quote:Quotes;
  newQuote=new Quotes(0,"","",new Date());
  constructor() { }

  ngOnInit() {
  }

}
