


import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
  } from '@angular/animations';

  // export const left = [
  //   query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  //   group([
  //     query(':enter', [style({ transform: 'translateX(-200px)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
  //       optional: true,
  //     }),
  //     query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(200px)' }))], {
  //       optional: true,
  //     }),
  //   ]),
  // ];
  
  // export const right = [
  //   query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  //   group([
  //     query(':enter', [style({ transform: 'translateX(200px)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
  //       optional: true,
  //     }),
  //     query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-200px)' }))], {
  //       optional: true,
  //     }),
  //   ]),
  // ];
  export const right = [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ right: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ right: '100%'}))
      ]),
      query(':enter', [
        animate('600ms ease', style({ right: '0%'}))
      ])
    ])
  ]

  export const left = [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ left: '100%'}))
      ]),
      query(':enter', [
        animate('600ms ease', style({ left: '0%'}))
      ])
    ])
  ]