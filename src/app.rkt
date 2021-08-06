#lang racketscript/base

(require (for-syntax racket/base
                     racket/file
                     racket/syntax
                     syntax/parse)
         "./counter.rkt"
         "./todo.rkt"
         rackt)

(define (header props . ..)
    (<> "header"
        (<> "div" #:props ([ className "header-content" ])
            (<> "img" #:props ([ src "https://raw.githubusercontent.com/rackt-org/rackt-org.github.io/master/logo.png" ]
                               [ className "logo" ]))
            (<> "h1" (<> "a" #:props ([ href "https://github.com/rackt-org/rackt" ]) "Rackt"))
            (<> "p" "An ultrasmall (~70 loc) React wrapper written in "
                (<> "a" #:props ([ href "https://github.com/vishesh/racketscript" ]) "RacketScript")))))

(define (intro props . ..)
    (<> "div"
        (<> "p" "Rackt is a tiny but still powerful React wrapper that allows you to write functional components with React hooks, contexts, and so on.
        Despite the fact Rackt is in the early development stage, you can already use it because it has only simple js interop under the hood.
        In most cases Rackt doesn't change API of React and you can use all familiar functions as you've already used to.
        Here is an example of a simple Rackt component:")
        (<> "pre"
            (<> "code" #:props ([ className "language-racket" ])
                "(define (simple-component props . ..)
    (<> \"div\" #:props ([ className \"some-class\" ]) \"some text\"))"))

        (<> "p" (<> "code" "<>") " here is a simple alias for " (<> "code" "React.createElement") " function
        that has optional " (<> "code" "#:props") " parameter so you can skip it if you want:")
        (<> "pre"
            (<> "code" #:props ([ className "language-racket" ])
                "(define (simple-component props . ..)
    (<> \"div\" \"some text\"))"))
        (<> "p" "In the examples below you can see more complex components and apps (btw this site is written in Rackt as well).")))

(define (counter-example props . ..)
    (<> "div" #:props ([ className "example" ])
        (<> "div"
            (<> "h3" "Counter")
            (<> counter))
        (<> "div"
            (<> "h3" "Source code")
            (<> "pre" (<> "code" #:props ([ className "language-racket"]) counter-source-code)))))

(define (todo-example props . ..)
    (<> "div" #:props ([ className "example" ])
        (<> "div"
            (<> "h3" "Todo app")
            (<> todo-app))
        (<> "div"
            (<> "h3" "Source code")
            (<> "pre" (<> "code" #:props ([ className "language-racket"]) todo-source-code)))))

(define (app props . ..)
    (<> "div"
        #:props ([ className "container" ])
            (<> header)
            (<> intro)
            (<> "h2" "Examples")
            (<> counter-example)
            (<> todo-example)))

(require (for-syntax mzlib/etc))
(define-for-syntax this-dir (this-expression-source-directory))

;; get src code strs, at compile time, from actual file
(define-syntax define-src-code-str-def
  (syntax-parser
    [(_ name:id)
     #:with def-name (format-id #'name "~a-source-code" #'name)
     #:with str-name (format-id #'name "~a-src-code-str" #'name)
     #`(define def-name #,(syntax-local-value #'str-name))]))

;; TODO:
;; need get these first, rather than in the macro,
;; bc racketscript seems to expand twice?
(define-syntax counter-src-code-str
  (file->string (build-path this-dir "counter.rkt")))
(define-syntax todo-src-code-str
  (file->string (build-path this-dir "todo.rkt")))

(define-src-code-str-def todo)
(define-src-code-str-def counter)

(render (<> app) "root")


