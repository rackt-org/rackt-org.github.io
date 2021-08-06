#lang racketscript/base

(require racketscript/interop
         rackt)

(define StateContext (create-context))

(define default-state
    ($/obj [ todos (list
        ($/obj [ id 0 ] [ text "Replace JavaScript with RacketScript"])
        ($/obj [ id 1 ] [ text "Install Rackt" ])
        ($/obj [ id 2 ] [ text "Enjoy!" ]))]))

(define (add-todo state action)
    (append ($ state 'todos) (list ($ action 'todo))))

(define (done-todo state action)
    (filter (lambda (el) (not (eq? ($ el 'id) ($ action 'id)))) ($ state 'todos)))

(define (reducer state action)
    (cond
        [(eq? ($ action 'type) "add")
            ($/obj [ todos (add-todo state action)])]
        [(eq? ($ action 'type) "done")
            ($/obj [ todos (done-todo state action)])]
        [else state]))

(define (todo-input props . ..)
    (define ctx (use-context StateContext))
    (define dispatch ($ ctx 'dispatch))
    (define store ($ ctx 'store))
    (define-values (text set-text) (use-state ""))

    (define (update-text e)
        (set-text (js-string->string ($ e 'target 'value)) text))

    (define (submit-todo e)
        (($ e 'preventDefault))
        (dispatch ($/obj [ type "add" ]
                       [ todo ($/obj [ id (#js*.Date.now) ]
                                     [ text text ])]))

    (set-text ""))

    (<el "form"
         #:props ($/obj [ onSubmit submit-todo ])
            (<el "input"
                #:props ($/obj [ className "todo-input" ]
                               [ placeholder "What needs to be done?" ]
                               [ value text ]
                               [ onChange update-text]))))

(define (todo-item props . ..)
    (define ctx (use-context StateContext))
    (define dispatch ($ ctx 'dispatch))
    (define (done-todo id)
        (dispatch ($/obj [ type "done" ]
                         [ id ($ props 'todo 'id) ])))

    (<el "li"
        #:props ($/obj [ className "todo-item"])
            ($ props 'todo 'text)
            (<el "button"
                #:props ($/obj [ type "button" ]
                            [ className "button button-clear todo-done-button"]
                            [ onClick done-todo ])
                "✔")))

(define (todo-list props . ..)
    (define ctx (use-context StateContext))
    (define dispatch ($ ctx 'dispatch))
    (define store ($ ctx 'store))

    (<el "ul"
         (map (lambda (todo) (<el todo-item #:props ($/obj [todo todo]))) ($ store 'todos))))

(define (todo-app props . ..)
    (define provider ($ StateContext 'Provider))
    (define-values (store dispatch) (use-reducer reducer default-state))

    (<el provider
        #:props ($/obj [ value
            ($/obj [ store store ]
                   [ dispatch dispatch ])])
        (<el "div"
            (<el todo-input))
            (<el todo-list)))

(provide todo-app)
