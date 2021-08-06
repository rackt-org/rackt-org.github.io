import * as $rjs_core from '../runtime/core.js';import * as M0 from "../rackt/main.rkt.js";import * as M1 from "../runtime/kernel.rkt.js";import * as M2 from "./counter.rkt.js";import * as M3 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";import * as M4 from "./todo.rkt.js";import * as M5 from "../collects/racket/private/kw.rkt.js";var header = $rjs_core.attachProcedureArity(function(props1, ...__dot__dot_21) {if (arguments.length<1) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __dot__dot_2 = $rjs_core.Pair.listFromArray(__dot__dot_21);var temp5 = $rjs_core.UString.make("header");var __dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_73 = M0.__lt_el;var temp24 = $rjs_core.UString.make("div");var temp35 = {'className':$rjs_core.UString.make("header-content")};var __dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_79 = M0.__lt_el;var temp710 = $rjs_core.UString.make("img");var temp811 = {'src':$rjs_core.UString.make("https://raw.githubusercontent.com/rackt-org/rackt-org.github.io/master/logo.png"),'className':$rjs_core.UString.make("logo")};var temp46 = M1.checked_procedure_check_and_extract(M5.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_79,M5.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),3)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M1.list(temp811),temp710);var temp2 = $rjs_core.UString.make("h1");var __dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_712 = M0.__lt_el;var temp913 = $rjs_core.UString.make("a");var temp1014 = {'href':$rjs_core.UString.make("https://github.com/rackt-org/rackt")};var temp1115 = $rjs_core.UString.make("Rackt");var temp57 = M0.__lt_el(temp2,M1.checked_procedure_check_and_extract(M5.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_712,M5.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),4)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M1.list(temp1014),temp913,temp1115));var temp4 = $rjs_core.UString.make("p");var temp3 = $rjs_core.UString.make("An ultrasmall (~70 loc) React wrapper written in ");var __dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_716 = M0.__lt_el;var temp1217 = $rjs_core.UString.make("a");var temp1318 = {'href':$rjs_core.UString.make("https://github.com/vishesh/racketscript")};var temp1419 = $rjs_core.UString.make("RacketScript");var temp68 = M0.__lt_el(temp4,temp3,M1.checked_procedure_check_and_extract(M5.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_716,M5.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),4)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M1.list(temp1318),temp1217,temp1419));return M0.__lt_el(temp5,M1.checked_procedure_check_and_extract(M5.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_73,M5.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),6)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M1.list(temp35),temp24,temp46,temp57,temp68));});var intro = $rjs_core.attachProcedureArity(function(props20, ...__dot__dot_216) {if (arguments.length<1) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __dot__dot_21 = $rjs_core.Pair.listFromArray(__dot__dot_216);var temp12 = $rjs_core.UString.make("div");var temp11 = M0.__lt_el($rjs_core.UString.make("p"),$rjs_core.UString.make("Rackt is a tiny but still powerful React wrapper that allows you to write functional components with React hooks, contexts, and so on.\n        Despite the fact Rackt is in the early development stage, you can already use it because it has only simple js interop under the hood.\n        In most cases Rackt doesn't change API of React and you can use all familiar functions as you've already used to.\n        Here is an example of a simple Rackt component:"));var temp9 = $rjs_core.UString.make("pre");var __dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_722 = M0.__lt_el;var temp1623 = $rjs_core.UString.make("code");var temp1724 = {'className':$rjs_core.UString.make("language-racket")};var temp1825 = $rjs_core.UString.make("(define (simple-component props . ..)\n    (<> \"div\" #:props ([ className \"some-class\" ]) \"some text\"))");var temp10 = M0.__lt_el(temp9,M1.checked_procedure_check_and_extract(M5.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_722,M5.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),4)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M1.list(temp1724),temp1623,temp1825));var temp8 = M0.__lt_el($rjs_core.UString.make("p"),M0.__lt_el($rjs_core.UString.make("code"),$rjs_core.UString.make("<>")),$rjs_core.UString.make(" here is a simple alias for "),M0.__lt_el($rjs_core.UString.make("code"),$rjs_core.UString.make("React.createElement")),$rjs_core.UString.make(" function\n        that has optional "),M0.__lt_el($rjs_core.UString.make("code"),$rjs_core.UString.make("#:props")),$rjs_core.UString.make(" parameter so you can skip it if you want:"));var temp7 = $rjs_core.UString.make("pre");var __dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_726 = M0.__lt_el;var temp1927 = $rjs_core.UString.make("code");var temp2028 = {'className':$rjs_core.UString.make("language-racket")};var temp2129 = $rjs_core.UString.make("(define (simple-component props . ..)\n    (<> \"div\" \"some text\"))");return M0.__lt_el(temp12,temp11,temp10,temp8,M0.__lt_el(temp7,M1.checked_procedure_check_and_extract(M5.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_726,M5.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),4)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M1.list(temp2028),temp1927,temp2129)),M0.__lt_el($rjs_core.UString.make("p"),$rjs_core.UString.make("In the examples below you can see more complex components and apps (btw this site is written in Rackt as well).")));});var counter_example = $rjs_core.attachProcedureArity(function(props30, ...__dot__dot_3113) {if (arguments.length<1) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __dot__dot_31 = $rjs_core.Pair.listFromArray(__dot__dot_3113);var __dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_732 = M0.__lt_el;var temp2333 = $rjs_core.UString.make("div");var temp2434 = {'className':$rjs_core.UString.make("example")};var temp2535 = M0.__lt_el($rjs_core.UString.make("div"),M0.__lt_el($rjs_core.UString.make("h3"),$rjs_core.UString.make("Counter")),M0.__lt_el(M2.counter));var temp16 = $rjs_core.UString.make("div");var temp15 = M0.__lt_el($rjs_core.UString.make("h3"),$rjs_core.UString.make("Source code"));var temp14 = $rjs_core.UString.make("pre");var __dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_737 = M0.__lt_el;var temp2738 = $rjs_core.UString.make("code");var temp2839 = {'className':$rjs_core.UString.make("language-racket")};var counter_source_code2940 = counter_source_code;var temp2636 = M0.__lt_el(temp16,temp15,M0.__lt_el(temp14,M1.checked_procedure_check_and_extract(M5.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_737,M5.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),4)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M1.list(temp2839),temp2738,counter_source_code2940)));return M1.checked_procedure_check_and_extract(M5.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_732,M5.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),5)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M1.list(temp2434),temp2333,temp2535,temp2636);});var todo_example = $rjs_core.attachProcedureArity(function(props41, ...__dot__dot_4217) {if (arguments.length<1) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __dot__dot_42 = $rjs_core.Pair.listFromArray(__dot__dot_4217);var __dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_743 = M0.__lt_el;var temp3144 = $rjs_core.UString.make("div");var temp3245 = {'className':$rjs_core.UString.make("example")};var temp3346 = M0.__lt_el($rjs_core.UString.make("div"),M0.__lt_el($rjs_core.UString.make("h3"),$rjs_core.UString.make("Todo app")),M0.__lt_el(M4.todo_app));var temp20 = $rjs_core.UString.make("div");var temp19 = M0.__lt_el($rjs_core.UString.make("h3"),$rjs_core.UString.make("Source code"));var temp18 = $rjs_core.UString.make("pre");var __dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_748 = M0.__lt_el;var temp3549 = $rjs_core.UString.make("code");var temp3650 = {'className':$rjs_core.UString.make("language-racket")};var todo_source_code3751 = todo_source_code;var temp3447 = M0.__lt_el(temp20,temp19,M0.__lt_el(temp18,M1.checked_procedure_check_and_extract(M5.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_748,M5.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),4)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M1.list(temp3650),temp3549,todo_source_code3751)));return M1.checked_procedure_check_and_extract(M5.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_743,M5.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),5)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M1.list(temp3245),temp3144,temp3346,temp3447);});var app = $rjs_core.attachProcedureArity(function(props52, ...__dot__dot_5321) {if (arguments.length<1) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __dot__dot_53 = $rjs_core.Pair.listFromArray(__dot__dot_5321);var __dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_754 = M0.__lt_el;var temp3955 = $rjs_core.UString.make("div");var temp4056 = {'className':$rjs_core.UString.make("container")};var temp4157 = M0.__lt_el(header);var temp4258 = M0.__lt_el(intro);var temp4359 = M0.__lt_el($rjs_core.UString.make("h2"),$rjs_core.UString.make("Examples"));var temp4460 = M0.__lt_el(counter_example);var temp4561 = M0.__lt_el(todo_example);return M1.checked_procedure_check_and_extract(M5.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_tdemo_by_rackt_by_main_dot_rkt_90_754,M5.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),8)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M1.list(temp4056),temp3955,temp4157,temp4258,temp4359,temp4460,temp4561);});var todo_source_code = $rjs_core.UString.make("#lang racketscript/base\n\n(require racketscript/interop\n         rackt)\n\n(define StateContext (create-context))\n\n(define-component todo-input\n  (in-context StateContext\n    ;; $ctx is implicity bound to the React context value\n    ;; it may be used as a plain id, or may called with property arguments\n    (define dispatch ($ctx 'dispatch))\n    (define store ($ctx 'store))\n    (define-state TEXT \"\")\n\n    (define (update-text e)\n        (set-TEXT! (js-string->string ($ e 'target 'value)) TEXT))\n\n    (define (submit-todo e)\n        (($ e 'preventDefault))\n        (dispatch ($/obj [ type \"add\" ]\n                       [ todo ($/obj [ id (#js*.Date.now) ]\n                                     [ text TEXT ])]))\n\n    (set-TEXT! \"\"))\n\n    (<> \"form\"\n         #:props ([ onSubmit submit-todo ])\n            (<> \"input\"\n                #:props ([ className \"todo-input\" ]\n                         [ placeholder \"What needs to be done?\" ]\n                         [ value TEXT ]\n                         [ onChange update-text])))))\n\n(define-component todo-item\n  (in-context StateContext\n    ;; $ctx is implicity bound to the React context value\n    ;; it may be used as a plain id, or may called with property arguments\n    (define dispatch ($ctx 'dispatch))\n    (define (done-todo id)\n      (dispatch ($/obj [ type \"done\" ]\n                       [ id ($props 'todo 'id) ])))\n\n    (<> \"li\" #:props ([ className \"todo-item\"])\n        ;; $props is implicity bound to the React \"props\" of this component;\n        ;; it may be used as a plain id, or may be called with property arguments\n        ($props 'todo 'text)\n        (<> \"button\"\n            #:props ([ type \"button\" ]\n                     [ className \"button button-clear todo-done-button\"]\n                     [ onClick done-todo ])\n            \"✔\"))))\n\n(define-component todo-list\n  (in-context StateContext\n    (define dispatch ($ctx 'dispatch))\n    (define store ($ctx 'store))\n    (<> \"ul\"\n        (map (lambda (todo) (<> todo-item #:props ([todo todo]))) ($ store 'todos)))))\n\n(define default-state\n    ($/obj [ todos (list\n        ($/obj [ id 0 ] [ text \"Replace JavaScript with RacketScript\"])\n        ($/obj [ id 1 ] [ text \"Install Rackt\" ])\n        ($/obj [ id 2 ] [ text \"Enjoy!\" ]))]))\n\n(define (add-todo state action)\n    (append ($ state 'todos) (list ($ action 'todo))))\n\n(define (done-todo state action)\n    (filter (lambda (el) (not (eq? ($ el 'id) ($ action 'id)))) ($ state 'todos)))\n\n(define (reducer state action)\n    (cond\n        [(eq? ($ action 'type) \"add\")\n            ($/obj [ todos (add-todo state action)])]\n        [(eq? ($ action 'type) \"done\")\n            ($/obj [ todos (done-todo state action)])]\n        [else state]))\n\n(define-component todo-app\n  (define-values (store dispatch) (use-reducer reducer default-state))\n  (with-context StateContext = ($/obj [ store store ] [ dispatch dispatch ])\n    (<> \"div\"\n        (<> todo-input)\n        (<> todo-list))))\n\n(provide todo-app)\n");var counter_source_code = $rjs_core.UString.make("#lang racketscript/base\n\n(require racketscript/interop\n         rackt)\n\n(define-component counter\n    (define-state COUNT 0)\n    (<> \"div\"\n        (<> \"button\"\n            #:props ([ className \"button\" ]\n                     [ type \"button\" ]\n                     [ onClick (lambda (_) (set-COUNT! (sub1 COUNT))) ])\n            \"- 1\")\n\n        (<> \"span\" #:props ([ className \"counter\" ]) COUNT)\n\n        (<> \"button\"\n            #:props ([ className \"button\" ]\n                     [ type \"button\" ]\n                     [ onClick (lambda (_) (set-COUNT! (add1 COUNT))) ])\n            \"+ 1\")))\n\n(provide counter)\n");M0.render(M0.__lt_el(app),$rjs_core.UString.make("root"));var __rjs_quoted__ = {};export { __rjs_quoted__ };