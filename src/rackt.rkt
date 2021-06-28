#lang racketscript/base

(require racketscript/interop
         racket/list)

(define React ($/require/* "react"))
(define ReactDOM ($/require/* "react-dom"))

(provide render
         <el
         create-context
         use-state
         use-effect
         use-context
         use-reducer
         use-callback
         use-memo
         use-ref
         use-imperative-handle
         use-layout-effect
         use-debug-value)

;; Basic hooks
(define (use-state default-state)
    (apply values (js-array->list (#js.React.useState default-state))))

(define use-effect #js.React.useEffect)

(define use-context #js.React.useContext)

;; Additional hooks
(define (use-reducer reducer initial-state [init $/undefined])
    (apply values (js-array->list (#js.React.useReducer reducer initial-state init))))

(define use-callback #js.React.useCallback)

(define use-memo #js.React.useMemo)

(define use-ref #js.React.useRef)

(define use-imperative-handle #js.React.useImperativeHandle)

(define use-layout-effect #js.React.useLayoutEffect)

(define use-debug-value #js.React.useDebugValue)

;; Basic API
(define create-context #js.React.createContext)

(define create-element
    (lambda (component #:props [props null] . children)
        (apply #js.React.createElement
            (append
                (list (racket->js component) props)
                (map racket->js (flatten children))))))

(define (racket->js node)
    (cond
        [(or (string? node) (number? node)) ($/str node)]
        [else node]))

;; A small alias for readability
(define <el create-element)

(define (render react-element node-id)
    (#js.ReactDOM.render react-element (#js*.document.getElementById node-id)))
