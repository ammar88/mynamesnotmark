import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const fadeInOutAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({ opacity: 1 })
    ),
    transition(':enter', [
      style({ opacity: 0 }),
      animate('.4s .4s')
    ]),
    transition(':leave', [
      animate('.3s', style({ opacity: 0 }))
    ])
  ]);
