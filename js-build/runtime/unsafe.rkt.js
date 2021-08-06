import * as $rjs_core from './core.js';import * as Core from "./core.js";var unsafe_fx_plus_ = function(a63, b64) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a63+b64)|0;};var unsafe_fx_ = function(a65, b66) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a65-b66)|0;};var unsafe_fx_times_ = function(a67, b68) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a67*b68)|0;};var unsafe_fxquotient = function(a69, b70) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a69/b70)|0;};var unsafe_fxremainder = function(a71, b72) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a71%b72)|0;};var unsafe_fxmodulo = function(a73, b74) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}var remainder75 = a73%b74;if ((remainder75>=0)!==false) {var if_res23 = remainder75;} else {var if_res23 = remainder75+b74;}return Math.floor(if_res23);};var unsafe_fxabs = function(a76) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return Math.abs(a76);};var unsafe_fx_eq_ = function(a77, b78) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a77===b78;};var unsafe_fx_lt_ = function(a79, b80) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a79<b80;};var unsafe_fx_lt__eq_ = function(a81, b82) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a81<=b82;};var unsafe_fx_gt_ = function(a83, b84) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a83>b84;};var unsafe_fx_gt__eq_ = function(a85, b86) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a85>=b86;};var unsafe_fxmin = function(a87, b88) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if ((a87<b88)!==false) {var if_res24 = a87;} else {var if_res24 = b88;}return if_res24;};var unsafe_fxmax = function(a89, b90) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if ((a89>b90)!==false) {var if_res25 = b90;} else {var if_res25 = a89;}return if_res25;};var unsafe_fl_eq_ = function(a91, b92) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a91===b92;};var unsafe_fl_lt_ = function(a93, b94) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a93<b94;};var unsafe_fl_lt__eq_ = function(a95, b96) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a95<=b96;};var unsafe_fl_gt_ = function(a97, b98) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a97>b98;};var unsafe_fl_gt__eq_ = function(a99, b100) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return a99>=b100;};var unsafe_flmin = function(a101, b102) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if ((a101<b102)!==false) {var if_res26 = a101;} else {var if_res26 = b102;}return if_res26;};var unsafe_flmax = function(a103, b104) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if ((a103>b104)!==false) {var if_res27 = b104;} else {var if_res27 = a103;}return if_res27;};var unsafe_fxrshift = function(a105, b106) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a105>>b106)|0;};var unsafe_fxlshift = function(a107, b108) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a107<<b108)|0;};var unsafe_fxand = function(a109, b110) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a109&&b110)|0;};var unsafe_fxior = function(a111, b112) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a111||b112)|0;};var unsafe_fxxor = function(a113, b114) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return (a113^b114)|0;};var unsafe_fxnot = Core.bitwiseNot;var unsafe_car = function(v115) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v115.hd;};var unsafe_cdr = function(v116) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v116.tl;};var unsafe_mcar = function(v117) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v117.hd;};var unsafe_mcdr = function(v118) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v118.tl;};var unsafe_set_mcar_bang_ = function(p119, v120) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return p119.setCar(v120);};var unsafe_set_mcdr_bang_ = function(p121, v122) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return p121.setCdr(v122);};var unsafe_cons_list = function(v123, rest124) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return Core.Pair.make(v123,rest124);};var unsafe_struct_ref = function(v125, k126) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v125._fields[k126];};var unsafe_vector_ref = function(v127, k128) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v127.ref(k128);};var unsafe_vector_set_bang_ = function(v129, k130, val131) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v129.set(k130,val131);};var unsafe_vector_length = function(v132) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return v132.length();};var unsafe_immutable_hash_iterate_first = function(h133) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h133.iterateFirst();};var unsafe_immutable_hash_iterate_next = function(h134, i135) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h134.iterateNext(i135);};var unsafe_immutable_hash_iterate_key = function(h136, i137) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h136.iterateKey(i137);};var unsafe_immutable_hash_iterate_value = function(h138, i139) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h138.iterateValue(i139);};var unsafe_immutable_hash_iterate_key_plus_value = function(h140, i141) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h140.iterateKeyValue(i141);};var unsafe_immutable_hash_iterate_pair = function(h142, i143) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h142.iteratePair(i143);};var unsafe_mutable_hash_iterate_first = function(h144) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h144.iterateFirst();};var unsafe_mutable_hash_iterate_next = function(h145, i146) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h145.iterateNext(i146);};var unsafe_mutable_hash_iterate_key = function(h147, i148) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h147.iterateKey(i148);};var unsafe_mutable_hash_iterate_value = function(h149, i150) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h149.iterateValue(i150);};var unsafe_mutable_hash_iterate_key_plus_value = function(h151, i152) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h151.iterateKeyValue(i152);};var unsafe_mutable_hash_iterate_pair = function(h153, i154) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return h153.iteratePair(i154);};var unsafe_undefined = Core.theUnsafeUndefined;var unsafe_make_place_local = Core.Box.make;var unsafe_place_local_set_bang_ = function(b155, v156) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return b155.set(v156);};var unsafe_place_local_ref = function(b157) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return b157.get();};var variable_reference_from_unsafe_p = function(v158) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return false;};var unsafe_root_continuation_prompt_tag = function() {if (arguments.length!==0) {throw $rjs_core.racketContractError("arity mismatch");} else {}return Core.Marks.defaultContinuationPromptTag();};var __rjs_quoted__ = {};export { __rjs_quoted__,unsafe_fx_plus_,unsafe_fx_,unsafe_fx_times_,unsafe_fxquotient,unsafe_fxremainder,unsafe_fxmodulo,unsafe_fxabs,unsafe_fx_eq_,unsafe_fx_lt_,unsafe_fx_lt__eq_,unsafe_fx_gt_,unsafe_fx_gt__eq_,unsafe_fxmin,unsafe_fxmax,unsafe_fl_eq_,unsafe_fl_lt_,unsafe_fl_lt__eq_,unsafe_fl_gt_,unsafe_fl_gt__eq_,unsafe_flmin,unsafe_flmax,unsafe_fxrshift,unsafe_fxlshift,unsafe_fxand,unsafe_fxior,unsafe_fxxor,unsafe_fxnot,unsafe_car,unsafe_cdr,unsafe_mcar,unsafe_mcdr,unsafe_set_mcar_bang_,unsafe_set_mcdr_bang_,unsafe_cons_list,unsafe_struct_ref,unsafe_vector_ref,unsafe_vector_set_bang_,unsafe_vector_length,unsafe_immutable_hash_iterate_first,unsafe_immutable_hash_iterate_next,unsafe_immutable_hash_iterate_key,unsafe_immutable_hash_iterate_value,unsafe_immutable_hash_iterate_key_plus_value,unsafe_immutable_hash_iterate_pair,unsafe_mutable_hash_iterate_first,unsafe_mutable_hash_iterate_next,unsafe_mutable_hash_iterate_key,unsafe_mutable_hash_iterate_value,unsafe_mutable_hash_iterate_key_plus_value,unsafe_mutable_hash_iterate_pair,unsafe_undefined,unsafe_make_place_local,unsafe_place_local_set_bang_,unsafe_place_local_ref,variable_reference_from_unsafe_p,unsafe_root_continuation_prompt_tag };