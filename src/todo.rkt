#lang racketscript/base

(require racketscript/interop
         rackt)

(define StateContext (create-context))

(define-component todo-input
  (in-context StateContext
    ;; $ctx is implicity bound to the React context value
    ;; it may be used as a plain id, or may called with property arguments
    (define dispatch ($ctx 'dispatch))
    (define store ($ctx 'store))
    (define-state TEXT "")

    (define (update-text e)
        (set-TEXT! (js-string->string ($ e 'target 'value)) TEXT))

    (define (submit-todo e)
        (($ e 'preventDefault))
        (dispatch ($/obj [ type "add" ]
                       [ todo ($/obj [ id (#js*.Date.now) ]
                                     [ text TEXT ])]))

    (set-TEXT! ""))

    (<> "form"
         #:props ([ onSubmit submit-todo ])
            (<> "input"
                #:props ([ className "todo-input" ]
                         [ placeholder "What needs to be done?" ]
                         [ value TEXT ]
                         [ onChange update-text])))))

(define-component todo-item
  (in-context StateContext
    ;; $ctx is implicity bound to the React context value
    ;; it may be used as a plain id, or may called with property arguments
    (define dispatch ($ctx 'dispatch))
    (define (done-todo id)
      (dispatch ($/obj [ type "done" ]
                       [ id ($props 'todo 'id) ])))

    (<> "li" #:props ([ className "todo-item"])
        ;; $props is implicity bound to the React "props" of this component;
        ;; it may be used as a plain id, or may be called with property arguments
        ($props 'todo 'text)
        (<> "button"
            #:props ([ type "button" ]
                     [ className "button button-clear todo-done-button"]
                     [ onClick done-todo ])
            "✔"))))

(define-component todo-list
  (in-context StateContext
    (define dispatch ($ctx 'dispatch))
    (define store ($ctx 'store))
    (<> "ul"
        (map (lambda (todo) (<> todo-item #:props ([todo todo]))) ($ store 'todos)))))

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

(define-component todo-app
  (define-values (store dispatch) (use-reducer reducer default-state))
  (with-context StateContext = ($/obj [ store store ] [ dispatch dispatch ])
    (<> "div"
        (<> todo-input)
        (<> todo-list))))

(provide todo-app)
