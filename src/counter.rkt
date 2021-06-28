#lang racketscript/base

(require racketscript/interop
         "./rackt.rkt")

(define (counter props ..)
    (define-values (counter set-counter) (use-state 0))

    (<el "div"
        (<el "button"
            #:props ($/obj [ className "button" ]
                   [ type "button" ]
                   [onClick (lambda (_) (set-counter (- counter 1)))])
            "- 1")

        (<el "span" #:props ($/obj [ className "counter" ]) counter)

        (<el "button"
            #:props ($/obj [ className "button" ]
                   [ type "button" ]
                   [onClick (lambda (_) (set-counter (+ counter 1)))])
            "+ 1")))

(provide counter)
