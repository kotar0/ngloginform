import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger,
  } from '@angular/animations';
  

export const animation = trigger('enterAnimation', [
    transition('* => *', [
        query('.animeElm' , 
            style({ 
                transform :  'translateY(100%)', 
                opacity : 0
            })),
        query('.animeElm' , 
            stagger( '200ms ease-in-out' ,
                animate('700ms 400ms ease-in-out' , 
                    style({
                        transform : 'translateY(0)',
                        opacity : 1
                    }))
        ))
    ]),
  ])