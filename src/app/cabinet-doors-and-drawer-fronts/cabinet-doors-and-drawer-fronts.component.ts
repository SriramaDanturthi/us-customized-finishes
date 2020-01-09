import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabinet-doors-and-drawer-fronts',
  templateUrl: './cabinet-doors-and-drawer-fronts.component.html',
  styleUrls: ['./cabinet-doors-and-drawer-fronts.component.scss']
})
export class CabinetDoorsAndDrawerFrontsComponent implements OnInit {
  jsonData;
  constructor() { }

  ngOnInit() {
    this.jsonData = [
      {
        title: '1 PIECE MDF DESIGNS',
        children: [
          {
            title: 'FLAT PANEL DOORS',
            children: [
              { title: 'CLASSIC SLAB'},
              { title: 'IS 100' },
              {  title: 'IS 200'},
              {
                title: 'V-GROOVE',
              }
            ]
          },
          {
            title: 'ROUNDED CORNER DOORS',
            children: [
              {
                title: 'RC100',

              },
              {
                title: 'RC200',

              },
              {
                title: 'RC300',

              },
              {
                title: 'RC400',

              },
              {
                title: 'RC500',

              },
              {
                title: 'RC600',

              },
              {
                title: 'RC700',

              },
              {
                title: 'RC800',

              },
              {
                title: 'ACCLAIM',

              },
              {
                title: 'AVANTI',

              },
              {
                title: 'LEX300',

              },
              {
                title: 'SQRS',

              }
            ]
          },
          {
            title: 'SQUARE CORNER DOORS',
            children: [
              {
                title: 'LEXINGTON',

              },
              {
                title: 'SQ',

              },
              {
                title: 'SQ300',

              },
              {
                title: 'CHESAPEAKE',

              },
              {
                title: 'BCC',

              },
              {
                title: 'SC100',

              }
            ]
          },
          {
            title: 'SHAKER DOORS',
            children: [
              {
                title: 'SHAKER 1',

              },
              {
                title: 'SHAKER 2',

              },
              {
                title: 'SHAKER 3',

              },
              {
                title: 'SHAKER 4',

              },
              {
                title: 'SHAKER 5',

              },
              {
                title: 'SHAKER 7',

              }
            ]
          }
        ]
      },
      {
        title: '5 PIECE MDF DESIGNS',
        children: [
          {
            title: '2000',

          },
          {
            title: '2003',

          },
          {
            title: '2004',

          },
          {
            title: '2006',

          }
        ]
      },
      {
        title: 'GLASS DOORS',
        children: [
          {
            title: '7 LIGHT SPECIAL',

          },
          {
            title: 'LEX 4 LIGHT FULL ROUND',

          },
          {
            title: 'LEX 8 LIGHT',

          },
          {
            title: 'LEX PROVENCIAL 4 LIGHT',

          },
          {
            title: 'RC 300 - 4 LIGHT',

          },
          {
            title: 'SHAKER 3 - 6 LIGHT',

          },
          {
            title: 'SQ 6 LIGHT CATHEDRAL',

          },
          {
            title: 'SQ 7 LIGHT SPLIT FULL ROUND',

          },
          {
            title: 'SQ 9 LIGHT ARCH',

          },
          {
            title: 'SQ 9 LIGHT SQUARE',

          },
          {
            title: 'SQ ARCH 4 LIGHT',

          }
        ]
      },
      {
        title: 'HARDWOOD DOORS'
      }
    ]
  }

}
