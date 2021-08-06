#lang at-exp racketscript/base

(require (for-syntax racket/base
                     racket/file
                     racket/syntax
                     syntax/parse)
         "./counter-new.rkt"
         "./todo-new.rkt"
         rackt)

(define-component header
    (<> "header"
        (<> "div" #:props ([ className "header-content" ])
            (<> "img" #:props ([ src "https://raw.githubusercontent.com/rackt-org/rackt-org.github.io/master/logo.png" ]
                               [ className "logo" ]))
            (<> "h1" (<> "a" #:props ([ href "https://github.com/rackt-org/rackt" ]) "Rackt"))
            (<> "p" "A React wrapper written in "
                (<> "a" #:props ([ href "https://github.com/vishesh/racketscript" ]) "RacketScript")))))

(define-component intro
    (<> "div"
        @<>["p"]{Rackt is a React wrapper that allows you to write functional components with React hooks, contexts, and so on.
                 As a first step, you can use almost exactly the same React API that you're used to because it seemlessly interoperates with JS under the hood.
                 Here is an example of a simple Rackt component:}
        (<> "pre"
            (<> "code" #:props ($/obj [ className "language-racket" ])
                "(define (simple-component props . ..)
    (<> \"div\" #:props ([ className \"some-class\" ]) \"some text\"))"))

        (<> "p" (<> "code" "<>") " here is a simple alias for the " (<> "code" "React.createElement") " function
        that has optional an " (<> "code" "#:props") " parameter so you can skip it if you want:")
        (<> "pre"
            (<> "code" #:props ([ className "language-racket" ])
                "(define (simple-component props . ..)
    (<> \"div\" \"some text\"))"))
        @<>["p"]{Because it's written with RacketScript, however, Rackt takes advantage of Racket's powerful macros in order to simplify and hide a lot of boilerplate that you would normally have to write in plain JS:}

        (<> "pre"
            (<> "code" #:props ($/obj [ className "language-racket" ])
                "(define-component simple-component
    (<> \"div\" #:props ([ className \"some-class\" ]) ($props 'value))"))

        (<> "p" "Here " (<> "code" "define-component") " defines a React component, but automatically propagates the \"props\" for you in the implicit " (<> "code" "$props") " variable.")

        (<> "p" "In the examples below you can see more complex components and apps (btw this site is written in Rackt as well), and how Rackt and RacketScript help to manage and reduce this complexity.")))

(define-component counter-example
    (<> "div" #:props ([ className "example" ])
        (<> "div"
            (<> "h3" "Counter")
            (<> counter))
        (<> "div"
            (<> "h3" "Source code")
            (<> "pre" (<> "code" #:props ([ className "language-racket"]) counter-source-code)))))

(define-component todo-example
    (<> "div" #:props ([ className "example" ])
        (<> "div"
            (<> "h3" "Todo app")
            (<> todo-app))
        (<> "div"
            (<> "h3" "Source code")
            (<> "pre" (<> "code" #:props ([ className "language-racket"]) todo-source-code)))))


(define-component todo-orig-example
    (<> "div" #:props ([ className "example" ])
        (<> "div"
            (<> "p" "For reference, here is the same todo app written with a lower level React API")
            (<> "pre" (<> "code" #:props ([ className "language-racket"]) todo-orig-source-code)))))

(define-component app
    (<> "div" #:props ([ className "container" ])
        (<> header)
        (<> intro)
        (<> "h2" "Examples")
        (<> counter-example)
        (<> todo-example)
        (<> todo-orig-example)))

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
  (file->string (build-path this-dir "counter-new.rkt")))
(define-syntax todo-src-code-str
  (file->string (build-path this-dir "todo-new.rkt")))
(define-syntax todo-orig-src-code-str
  (file->string (build-path this-dir "todo.rkt")))

(define-src-code-str-def counter)
(define-src-code-str-def todo)
(define-src-code-str-def todo-orig)

(render (<> app) "root")


