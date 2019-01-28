import { Component } from '@angular/core';
import { Quotes } from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    Quotes = [
        new Quotes(1,'Independence is happiness.', 'All that we see or seem is but a dream within a dream.'),
        new Quotes(2,'Happiness can exist only in acceptance.', 'Independence is happiness.'),
        new Quotes(3, 'Love has no age, no limit; and no death.', 'Happiness can exist only in acceptance.'),
        new Quotes(4, 'You cannot shake hands with a clenched fist.', 'You can not blame gravity for falling in love.'),
        new Quotes(5, 'Learning never exhausts the mind.', 'Whoever is happy will make others happy too.'),
        new Quotes(6, 'There is no charm equal to tenderness of heart.', 'If opportunity does not knock, build a door.'),

    ]
}