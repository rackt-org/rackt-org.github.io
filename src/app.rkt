#lang racketscript/base

(require "./counter.rkt"
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

(define todo-source-code "#lang racketscript/base

(require racketscript/interop
         \"./rackt.rkt\")

(define StateContext (create-context))

(define (add-todo state action)
    (append ($ state 'todos) (list ($ action 'todo))))

(define (remove-todo state action)
    (filter (lambda (el) (not (eq? ($ el 'id) ($ action 'id)))) ($ state 'todos)))

(define (reducer state action)
    (cond
        [(eq? ($ action 'type) \"add\")
            ([ todos (add-todo state action)])]
        [(eq? ($ action 'type) \"remove\")
            ([ todos (remove-todo state action)])]
        [else state]))

(define (todo-input props . ..)
    (define ctx (use-context StateContext))
    (define dispatch ($ ctx 'dispatch))
    (define store ($ ctx 'store))
    (define-values (text set-text) (use-state \"\"))

    (define (update-text e)
        (set-text (js-string->string ($ e 'target 'value)) text))

    (define (submit-todo e)
        (($ e 'preventDefault))
        (dispatch ([ type \"add\" ]
                       [ todo ([ id (#js*.Date.now) ]
                                     [ text text ])]))

    (set-text \"\"))

    (<> \"form\"
         #:props ([ onSubmit submit-todo ])
            (<> \"input\"
                #:props ([ className \"todo-input\" ]
                               [ placeholder \"What needs to be done?\" ]
                               [ value text ]
                               [ onChange update-text]))))

(define (todo-item props . ..)
    (define ctx (use-context StateContext))
    (define dispatch ($ ctx 'dispatch))
    (define (remove-todo id)
        (dispatch ([ type \"remove\" ]
                         [ id ($ props 'todo 'id) ])))

    (<> \"li\"
        #:props ([ className \"todo-item\"])
            ($ props 'todo 'text)
            (<> \"button\"
                #:props ([ type \"button\" ]
                         [ className \"button button-clear todo-remove-button\"]
                         [ onClick remove-todo ])
                \"x\")))

(define (todo-list props . ..)
    (define ctx (use-context StateContext))
    (define dispatch ($ ctx 'dispatch))
    (define store ($ ctx 'store))

    (<> \"ul\"
         (map (lambda (todo) (<> todo-item #:props ([todo todo]))) ($ store 'todos))))

(define (todo-app props . ..)
    (define provider ($ StateContext 'Provider))
    (define default-state ([todos (list)]))
    (define-values (store dispatch) (use-reducer reducer default-state))

    (<> provider
        #:props ([ value
            ([ store store ]
                   [ dispatch dispatch ])])
        (<> \"div\"
            (<> todo-input))
            (<> todo-list)))

(provide todo-app)
")

(define counter-source-code "(define (counter props ..)
    (define-values (counter set-counter) (use-state 0))

    (<> \"div\"
        (<> \"button\"
            #:props ([ className \"button\" ]
                     [ type \"button\" ]
                     [onClick (lambda (_) (set-counter (- counter 1)))])
            \"- 1\")

        (<> \"span\" #:props ([ className \"counter\" ]) counter)

        (<> \"button\"
            #:props ([ className \"button\" ]
                     [ type \"button\" ]
                     [onClick (lambda (_) (set-counter (+ counter 1)))])
            \"+ 1\")))")

(render (<> app) "root")


