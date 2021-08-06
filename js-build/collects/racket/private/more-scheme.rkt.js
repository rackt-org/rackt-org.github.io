import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";import * as M1 from "../../../runtime/paramz.rkt.js";var current_parameterization = function() {if (arguments.length!==0) {throw $rjs_core.racketContractError("arity mismatch");} else {}return M0.continuation_mark_set_first(false,M1.parameterization_key);};var call_with_parameterization = function(paramz3521, thunk3522) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.__rjs_quoted__.parameterization_p(paramz3521)!==false) {var if_res2272 = M0.rvoid();} else {var if_res2272 = M0.raise_argument_error($rjs_core.Symbol.make("call-with-parameterization"),$rjs_core.UString.make("parameterization?"),0,paramz3521,thunk3522);}if_res2272;if (M0.procedure_p(thunk3522)!==false) {var if_res2273 = M0.procedure_arity_includes_p(thunk3522,0);} else {var if_res2273 = false;}if (if_res2273!==false) {var if_res2274 = M0.rvoid();} else {var if_res2274 = M0.raise_argument_error($rjs_core.Symbol.make("call-with-parameterization"),$rjs_core.UString.make("(-> any)"),1,paramz3521,thunk3522);}if_res2274;var __context2275 = $rjs_core.Marks.getFrames();var __context2276;try {__context2276 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M1.parameterization_key,paramz3521);var __wcm_result2277 = thunk3522();} finally {$rjs_core.Marks.updateFrame(__context2275,__context2276);}return __wcm_result2277;};var let_result2279 = M0.make_struct_type($rjs_core.Symbol.make("break-parameterization"),false,1,0,false);var struct_break_paramz = let_result2279.getAt(0);var make_break_paramz = let_result2279.getAt(1);var break_paramz_p = let_result2279.getAt(2);var break_paramz_ref = let_result2279.getAt(3);var break_paramz_set_bang_ = let_result2279.getAt(4);var let_result2280 = M0.make_struct_type($rjs_core.Symbol.make("break-parameterization"),false,1,0,false,M0.rnull,M0.current_inspector());var type3523 = let_result2280.getAt(0);var maker3524 = let_result2280.getAt(1);var pred3525 = let_result2280.getAt(2);var access3526 = let_result2280.getAt(3);var mutate3527 = let_result2280.getAt(4);var let_result2281 = M0.values(type3523,maker3524,pred3525,M0.make_struct_field_accessor(access3526,0,$rjs_core.Symbol.make("cell")),M0.make_struct_field_mutator(mutate3527,0,$rjs_core.Symbol.make("cell")));var struct_break_parameterization = let_result2281.getAt(0);var make_break_parameterization = let_result2281.getAt(1);var break_parameterization_p = let_result2281.getAt(2);var break_parameterization_cell = let_result2281.getAt(3);var set_break_parameterization_cell_bang_ = let_result2281.getAt(4);var current_break_parameterization = function() {if (arguments.length!==0) {throw $rjs_core.racketContractError("arity mismatch");} else {}return make_break_paramz(M0.continuation_mark_set_first(false,M1.break_enabled_key));};var call_with_break_parameterization = function(paramz3528, thunk3529) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (break_paramz_p(paramz3528)!==false) {var if_res2282 = M0.rvoid();} else {var if_res2282 = M0.raise_argument_error($rjs_core.Symbol.make("call-with-break-parameterization"),$rjs_core.UString.make("break-parameterization?"),0,paramz3528,thunk3529);}if_res2282;if (M0.procedure_p(thunk3529)!==false) {var if_res2283 = M0.procedure_arity_includes_p(thunk3529,0);} else {var if_res2283 = false;}if (if_res2283!==false) {var if_res2284 = M0.rvoid();} else {var if_res2284 = M0.raise_argument_error($rjs_core.Symbol.make("call-with-parameterization"),$rjs_core.UString.make("(-> any)"),1,paramz3528,thunk3529);}if_res2284;var __context2286 = $rjs_core.Marks.getFrames();var __context2287;try {__context2287 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M1.break_enabled_key,break_paramz_ref(paramz3528,0));M1.check_for_break();var __wcm_result2288 = thunk3529();} finally {$rjs_core.Marks.updateFrame(__context2286,__context2287);}var begin_res2285 = __wcm_result2288;M1.check_for_break();return begin_res2285;};var select_handler_by_no_breaks = function(e3530, bpz3531, l3532) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __context2297 = $rjs_core.Marks.getFrames();var __context2298;try {__context2298 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M1.break_enabled_key,M0.make_thread_cell(false));var loop3533 = function(l3534) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(l3534)!==false) {var if_res2296 = M0.raise(e3530);} else {if (M0.caar(l3534)(e3530)!==false) {var begin_res2290 = M0.cdar(l3534)(e3530);var __context2291 = $rjs_core.Marks.getFrames();var __context2292;try {__context2292 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M1.break_enabled_key,bpz3531);var __wcm_result2293 = M1.check_for_break();} finally {$rjs_core.Marks.updateFrame(__context2291,__context2292);}__wcm_result2293;var if_res2295 = begin_res2290;} else {var if_res2295 = loop3533(M0.cdr(l3534));}var if_res2296 = if_res2295;}return if_res2296;};var __wcm_result2299 = loop3533(l3532);} finally {$rjs_core.Marks.updateFrame(__context2297,__context2298);}return __wcm_result2299;};var select_handler_by_breaks_as_is = function(e3535, bpz3536, l3537) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(l3537)!==false) {var if_res2306 = M0.raise(e3535);} else {if (M0.caar(l3537)(e3535)!==false) {var __context2301 = $rjs_core.Marks.getFrames();var __context2302;try {__context2302 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M1.break_enabled_key,bpz3536);M1.check_for_break();var __wcm_result2303 = M0.cdar(l3537)(e3535);} finally {$rjs_core.Marks.updateFrame(__context2301,__context2302);}var if_res2305 = __wcm_result2303;} else {var if_res2305 = select_handler_by_breaks_as_is(e3535,bpz3536,M0.cdr(l3537));}var if_res2306 = if_res2305;}return if_res2306;};var false_thread_cell = M0.make_thread_cell(false);var check_with_handlers_in_context = function(handler_prompt_key3538) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.__rjs_quoted__.continuation_prompt_available_p(handler_prompt_key3538)!==false) {var if_res2307 = M0.rvoid();} else {var if_res2307 = M0.error($rjs_core.Symbol.make("with-handlers"),$rjs_core.UString.make("exception handler used out of context"));}return if_res2307;};var handler_prompt_key = M0.make_continuation_prompt_tag($rjs_core.Symbol.make("handler-prompt-tag"));var call_handled_body = function(bpz3539, handle_proc3540, body_thunk3541) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __context2316 = $rjs_core.Marks.getFrames();var __context2317;try {__context2317 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M1.break_enabled_key,false_thread_cell);var __wcm_result2318 = M0.call_with_continuation_prompt(function(bpz3542, body_thunk3543) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __context2312 = $rjs_core.Marks.getFrames();var __context2313;try {__context2313 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M1.break_enabled_key,bpz3542);var __context2308 = $rjs_core.Marks.getFrames();var __context2309;try {__context2309 = __context2308;$rjs_core.Marks.setMark(M1.exception_handler_key,function(e3544) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return M0.abort_current_continuation(handler_prompt_key,e3544);});var __wcm_result2310 = body_thunk3543();} finally {$rjs_core.Marks.updateFrame(__context2308,__context2309);}var __wcm_result2314 = __wcm_result2310;} finally {$rjs_core.Marks.updateFrame(__context2312,__context2313);}return __wcm_result2314;},handler_prompt_key,handle_proc3540,bpz3539,body_thunk3541);} finally {$rjs_core.Marks.updateFrame(__context2316,__context2317);}return __wcm_result2318;};var call_with_exception_handler = function(exnh3545, thunk3546) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __context2321 = $rjs_core.Marks.getFrames();var __context2322;try {__context2322 = $rjs_core.Marks.enterFrame();$rjs_core.Marks.setMark(M1.exception_handler_key,exnh3545);var __wcm_result2323 = thunk3546();} finally {$rjs_core.Marks.updateFrame(__context2321,__context2322);}var begin_res2320 = __wcm_result2323;M0.rvoid();return begin_res2320;};var call_by_cc = M0.__rjs_quoted__.call_with_current_continuation;var not_there = M0.gensym();var do_hash_update = function(who3547, mut_p3548, set3549, ht3550, key3551, xform3552, default3553) {if (arguments.length!==7) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res2331 = M0.rvoid();} else {if (M0.hash_p(ht3550)!==false) {if (mut_p3548!==false) {var if_res2325 = M0.not(M0.immutable_p(ht3550));} else {var if_res2325 = M0.immutable_p(ht3550);}var if_res2326 = if_res2325;} else {var if_res2326 = false;}if (if_res2326!==false) {var if_res2328 = M0.rvoid();} else {if (mut_p3548!==false) {var if_res2327 = $rjs_core.UString.make("(and/c hash? (not/c immutable?))");} else {var if_res2327 = $rjs_core.UString.make("(and/c hash? immutable?)");}var if_res2328 = M0.raise_argument_error(who3547,if_res2327,ht3550);}if_res2328;if (M0.procedure_p(xform3552)!==false) {var if_res2329 = M0.procedure_arity_includes_p(xform3552,1);} else {var if_res2329 = false;}if (if_res2329!==false) {var if_res2330 = M0.rvoid();} else {var if_res2330 = M0.raise_argument_error(who3547,$rjs_core.UString.make("(any/c . -> . any/c)"),xform3552);}var if_res2331 = if_res2330;}if_res2331;var v3554 = M0.hash_ref(ht3550,key3551,default3553);if (M0.eq_p(v3554,not_there)!==false) {var if_res2332 = M0.raise_mismatch_error(who3547,$rjs_core.UString.make("no value found for key: "),key3551);} else {var if_res2332 = set3549(ht3550,key3551,xform3552(v3554));}return if_res2332;};var cl2333 = function(ht3555, key3556, xform3557, default3558) {if (arguments.length!==4) {throw $rjs_core.racketContractError("arity mismatch");} else {}return do_hash_update($rjs_core.Symbol.make("hash-update"),false,M0.hash_set,ht3555,key3556,xform3557,default3558);};var cl2334 = function(ht3559, key3560, xform3561) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}return hash_update(ht3559,key3560,xform3561,not_there);};var hash_update = $rjs_core.attachProcedureArity(function() {var fixed_lam2335 = {'4':cl2333,'3':cl2334}[arguments.length];if (fixed_lam2335!==undefined) {return fixed_lam2335.apply(null,arguments);} else {return M0.error($rjs_core.UString.make("case-lambda: invalid case"));}},[3,4]);var cl2336 = function(ht3562, key3563, xform3564, default3565) {if (arguments.length!==4) {throw $rjs_core.racketContractError("arity mismatch");} else {}return do_hash_update($rjs_core.Symbol.make("hash-update!"),true,M0.hash_set_bang_,ht3562,key3563,xform3564,default3565);};var cl2337 = function(ht3566, key3567, xform3568) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}return hash_update_bang_(ht3566,key3567,xform3568,not_there);};var hash_update_bang_ = $rjs_core.attachProcedureArity(function() {var fixed_lam2338 = {'4':cl2336,'3':cl2337}[arguments.length];if (fixed_lam2338!==undefined) {return fixed_lam2338.apply(null,arguments);} else {return M0.error($rjs_core.UString.make("case-lambda: invalid case"));}},[3,4]);var hash_has_key_p = function(ht3569, key3570) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.hash_p(ht3569)!==false) {var if_res2339 = M0.rvoid();} else {var if_res2339 = M0.raise_argument_error($rjs_core.Symbol.make("hash-has-key?"),$rjs_core.UString.make("hash?"),0,ht3569,key3570);}if_res2339;return M0.not(M0.eq_p(not_there,M0.hash_ref(ht3569,key3570,not_there)));};var hash_ref_bang_ = function(ht3571, key3572, new3573) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.hash_p(ht3571)!==false) {var if_res2340 = M0.not(M0.immutable_p(ht3571));} else {var if_res2340 = false;}if (if_res2340!==false) {var if_res2341 = M0.rvoid();} else {var if_res2341 = M0.raise_argument_error($rjs_core.Symbol.make("hash-ref!"),$rjs_core.UString.make("(and/c hash? (not/c immutable?))"),0,ht3571,key3572,new3573);}if_res2341;var v3574 = M0.hash_ref(ht3571,key3572,not_there);if (M0.eq_p(not_there,v3574)!==false) {if (M0.procedure_p(new3573)!==false) {var if_res2342 = new3573();} else {var if_res2342 = new3573;}var n3575 = if_res2342;M0.hash_set_bang_(ht3571,key3572,n3575);var if_res2343 = n3575;} else {var if_res2343 = v3574;}return if_res2343;};var __rjs_quoted__ = {};__rjs_quoted__.call_by_cc = call_by_cc;__rjs_quoted__.select_handler_by_no_breaks = select_handler_by_no_breaks;__rjs_quoted__.call_handled_body = call_handled_body;__rjs_quoted__.select_handler_by_breaks_as_is = select_handler_by_breaks_as_is;export { __rjs_quoted__,hash_update_bang_,hash_update,hash_has_key_p,hash_ref_bang_,call_by_cc,call_with_exception_handler,break_paramz_p as break_parameterization_p,call_with_break_parameterization,current_break_parameterization,call_with_parameterization,current_parameterization };