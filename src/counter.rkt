#lang racketscript/base

(require racketscript/interop
         rackt)

(define (counter props ..)
    (define-values (counter set-counter) (use-state 0))

    (<> "div"
        (<> "button"
            #:props ([ className "button" ]
                     [ type "button" ]
                     [ onClick (lambda (_) (set-counter (sub1 counter))) ])
            "- 1")

        (<> "span" #:props ([ className "counter" ]) counter)

        (<> "button"
            #:props ([ className "button" ]
                     [ type "button" ]
                     [ onClick (lambda (_) (set-counter (add1 counter))) ])
            "+ 1")))

(provide counter)
