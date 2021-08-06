#lang racketscript/base

(require racketscript/interop
         rackt)

(define-component counter
  ;; A call to (define-state name val) defines two variables:
  ;; - name
  ;; - set-name!
  ;; define-state is shorthand for React's useState
  (define-state COUNT 0)

  (<> "div"
      (<> "button" #:props ([ className "button" ]
                            [ type "button" ]
                            [ onClick (lambda (_) (set-COUNT! (sub1 COUNT))) ])
          "- 1")

      (<> "span" #:props ([ className "counter" ]) COUNT)

      (<> "button" #:props ([ className "button" ]
                            [ type "button" ]
                            [ onClick (lambda (_) (set-COUNT! (add1 COUNT))) ])
          "+ 1")))

(provide counter)
