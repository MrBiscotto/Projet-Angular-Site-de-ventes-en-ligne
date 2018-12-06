import { Component, OnInit } from '@angular/core';
import {SoldObjectService} from './sold-object.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-sold-object',
  templateUrl: './sold-object.component.html',
  styleUrls: ['./sold-object.component.scss'],

    animations: [
      trigger('listStagger', [
        transition('* <=> *', [
          query(
            ':enter',
            [
              style({ opacity: 0, transform: 'translateY(-15px)' }),
              stagger(
                '50ms',
                animate(
                  '550ms ease-out',
                  style({ opacity: 1, transform: 'translateY(0px)' })
                )
              )
            ],
            { optional: true }
          ),
          query(':leave', animate('50ms', style({ opacity: 0 })), {
            optional: true
          })
        ])
      ])
    ]

})
export class SoldObjectComponent implements OnInit {

  private _objects = [];

  constructor(private _soldObjectService: SoldObjectService) { }


  ngOnInit() {
    this._soldObjectService.getSoldObjects()
      .subscribe(data => this._objects = data);
    console.log('WTF');
  }
}
