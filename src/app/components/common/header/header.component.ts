import { Component, Input, OnInit } from '@angular/core';
import { Backgound } from '../../../models/background.model';

@Component({
    selector: 'header-root',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    @Input()
    headerStyle: Array<Backgound>;

    ngOnInit() {
  
    }

    styleObject(header: Backgound) :Object {
        return {
            'background-image': `url(${header.backgroundImage}`,
            'background-position-x': `${header.backgroundPosition[0]}`,
            'background-position-y': `${header.backgroundPosition[1]}`
        }
    }
}