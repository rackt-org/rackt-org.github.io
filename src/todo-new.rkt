#lang racketscript/base

(require racketscript/interop
         rackt)

;; A TodoItem is a js obj with "id" and "text" properties
(define (mk-todo-item id text) ($/obj [id id] [text text]))

;; A TodoList is a js obj with a "todos" property that is a list of TodoItems
(define (mk-todo-list . items) ($/obj [todos items]))

;; Adds a TodoItem to the given TodoList
(define (add-todo-item todos item)
  ($/obj [todos (append ($ todos 'todos) (list item))]))

;; Removes a TodoItem from the given TodoList
(define (remove-todo-item todos id)
  (define (item-has-id? id item) (eq? id ($ item 'id)))
  ($/obj [todos (remove id ($ todos 'todos) item-has-id?)]))

(define INITIAL-TODOS
  (mk-todo-list
   (mk-todo-item 0 "Replace JavaScript with RacketScript")
   (mk-todo-item 1 "Install Rackt")
   (mk-todo-item 2 "Enjoy!")))

;; TodoListContext is a React context. It propagates a React Reducer,
;; i.e., an obj with "state" and "dispatch" props, where:
;;   "state": a TodoList obj
;;   "dispatch": fn that takes a TodoList and action and returns a new TodoList
;;      Allowed actions:
;;      - "add": adds a todo item to the list
;;      - "done": removes the specified item from the list
(define TodoListContext (create-context))

;; This the main app component. It consists of two subcomponents:
;; - todo-input: an input box
;; - todo-list: the list of items
(define-component todo-app
  ;; In the body of a Rackt define-component, a $props variable is
  ;; implicitly bound to the React "props" of this component. It may
  ;; be used as a plain id, or may be called with property arguments


  ;; with-reducer-context defines a new React Reducer with the
  ;; specified initial value and actions, and then propagates the
  ;; created state and reducer variables using the specified Context
  (with-reducer-context TodoListContext

    #:init INITIAL-TODOS

    ;; The #:actions table implicitly constructs a reducer function
    ;; that consumes a state and action and returns a new state.
    ;; The state and action values are available as implicit variables
    ;; $state and $action, respectively.
    #:actions ([add (add-todo-item $state ($action 'todo))] ; arg must have "todo" property
               [done (remove-todo-item $state ($action 'id))]) ; arg must have "id" property

    (<> "div"
        (<> todo-input)
        (<> todo-list))))

(define-component todo-input
  ;; The following implicit vars are available in the body of in-reducer-context,
  ;; - $ctx-state: the Reducer's state
  ;; - $ctx-dispatch: the Reducer's dispatch function
  (in-reducer-context TodoListContext

    (define-state TEXT "")

    (define (update-text e)
      (set-TEXT! (js-string->string ($ e 'target 'value)) TEXT))

    (<> "form"
        #:props ([onSubmit
                  (lambda (e)
                    (($ e 'preventDefault))
                    ($ctx-dispatch add [todo (mk-todo-item (#js*.Date.now) TEXT)])
                    (set-TEXT! ""))])
        (<> "input"
            #:props ([ className "todo-input" ]
                     [ placeholder "What needs to be done?" ]
                     [ value TEXT ]
                     [ onChange update-text])))))

;; A todo-list component consists of a list of todo-item components
(define-component todo-list
  (define (mk-todo-item-component todo) (<> todo-item #:props ([todo todo])))
  (in-reducer-context TodoListContext
    (<> "ul" (map mk-todo-item-component ($ctx-state 'todos)))))

(define-component todo-item
  (in-reducer-context TodoListContext
    (<> "li" #:props ([ className "todo-item"])
        ($props 'todo 'text)
        (<> "button"
            #:props ([ type "button" ]
                     [ className "button button-clear todo-done-button"]
                     [ onClick (lambda (_) ($ctx-dispatch done [id ($props 'todo 'id)]))])
            "✔"))))

(provide todo-app)
