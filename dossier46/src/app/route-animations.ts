


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

  
// export const slider2 =
// trigger('routeAnimations', [
//   transition('* => isLeft', slideTo('left') ),
//   transition('* => isRight', slideTo('right') ),
//   transition('isRight => *', slideTo('left') ),
//   transition('isLeft => *', slideTo('right') )
// ]);

export function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({ [direction]: '0%'}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}