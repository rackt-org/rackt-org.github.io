#lang racketscript/base

(require "./counter.rkt"
         "./todo.rkt"
         "./rackt.rkt")

(define (header props . ..)
    (<el "header"
        (<el "div" #:props ($/obj [ className "header-content" ])
            (<el "h1" "Rackt")
            (<el "p" "An ultrasmall (~70 loc) React wrapper written in "
                (<el "a" #:props ($/obj [ href "https://github.com/vishesh/racketscript" ]) "RacketScript")))))

(define (intro props . ..)
    (<el "div"
        (<el "p" "Rackt is a tiny but still powerful React wrapper that allows you to write functional components with React hooks, contexts, and so on.
        Despite the fact Rackt is in the early development stage, you can already use it because it has only simple js interop under the hood.
        In most cases Rackt doesn't change API of React and you can use all familiar functions as you've already used to.
        Here is an example of a simple Rackt component:")
        (<el "pre"
            (<el "code" #:props ($/obj [ className "language-racket" ])
                "(define (simple-component props . ..)
    (<el \"div\" #:props ($/obj [ className \"some-class\" ]) \"some text\"))"))

        (<el "p" (<el "code" "<el") " here is a simple alias for " (<el "code" "React.createElement") " function
        that has optional " (<el "code" "#:props") " parameter so you can skip it if you want:")
        (<el "pre"
            (<el "code" #:props ($/obj [ className "language-racket" ])
                "(define (simple-component props . ..)
    (<el \"div\" \"some text\"))"))
        (<el "p" "In the examples below you can see more complex components and apps (btw this site is written in Rackt as well).")))

(define (counter-example props . ..)
    (<el "div" #:props ($/obj [ className "example" ])
        (<el "div"
            (<el "h3" "Counter")
            (<el counter))
        (<el "div"
            (<el "h3" "Source code")
            (<el "pre" (<el "code" #:props ($/obj [ className "language-racket"]) counter-source-code)))))

(define (todo-example props . ..)
    (<el "div" #:props ($/obj [ className "example" ])
        (<el "div"
            (<el "h3" "Todo app")
            (<el todo-app))
        (<el "div"
            (<el "h3" "Source code")
            (<el "pre" (<el "code" #:props ($/obj [ className "language-racket"]) todo-source-code)))))

(define (app props . ..)
    (<el "div"
        #:props ($/obj [ className "container" ])
            (<el header)
            (<el intro)
            (<el "h2" "Examples")
            (<el counter-example)
            (<el todo-example)))

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
            ($/obj [ todos (add-todo state action)])]
        [(eq? ($ action 'type) \"remove\")
            ($/obj [ todos (remove-todo state action)])]
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
        (dispatch ($/obj [ type \"add\" ]
                       [ todo ($/obj [ id (#js*.Date.now) ]
                                     [ text text ])]))

    (set-text \"\"))

    (<el \"form\"
         #:props ($/obj [ onSubmit submit-todo ])
            (<el \"input\"
                #:props ($/obj [ className \"todo-input\" ]
                               [ placeholder \"What needs to be done?\" ]
                               [ value text ]
                               [ onChange update-text]))))

(define (todo-item props . ..)
    (define ctx (use-context StateContext))
    (define dispatch ($ ctx 'dispatch))
    (define (remove-todo id)
        (dispatch ($/obj [ type \"remove\" ]
                         [ id ($ props 'todo 'id) ])))

    (<el \"li\"
        #:props ($/obj [ className \"todo-item\"])
            ($ props 'todo 'text)
            (<el \"button\"
                #:props ($/obj [ type \"button\" ]
                            [ className \"button button-clear todo-remove-button\"]
                            [ onClick remove-todo ])
                \"x\")))

(define (todo-list props . ..)
    (define ctx (use-context StateContext))
    (define dispatch ($ ctx 'dispatch))
    (define store ($ ctx 'store))

    (<el \"ul\"
         (map (lambda (todo) (<el todo-item #:props ($/obj [todo todo]))) ($ store 'todos))))

(define (todo-app props . ..)
    (define provider ($ StateContext 'Provider))
    (define default-state ($/obj [todos (list)]))
    (define-values (store dispatch) (use-reducer reducer default-state))

    (<el provider
        #:props ($/obj [ value
            ($/obj [ store store ]
                   [ dispatch dispatch ])])
        (<el \"div\"
            (<el todo-input))
            (<el todo-list)))

(provide todo-app)
")

(define counter-source-code "(define (counter props ..)
    (define-values (counter set-counter) (use-state 0))

    (<el \"div\"
        (<el \"button\"
            #:props ($/obj [ className \"button\" ]
                   [ type \"button\" ]
                   [onClick (lambda (_) (set-counter (- counter 1)))])
            \"- 1\")

        (<el \"span\" #:props ($/obj [ className \"counter\" ]) counter)

        (<el \"button\"
            #:props ($/obj [ className \"button\" ]
                   [ type \"button\" ]
                   [onClick (lambda (_) (set-counter (+ counter 1)))])
            \"+ 1\")))")

(render (<el app) "root")


