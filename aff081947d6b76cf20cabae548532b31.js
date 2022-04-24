let wasm;const heap=new Array(32).fill(void 0);function getObject(e){return heap[e]}heap.push(void 0,null,!0,!1);let heap_next=heap.length;function dropObject(e){e<36||(heap[e]=heap_next,heap_next=e)}function takeObject(e){const t=getObject(e);return dropObject(e),t}const cachedTextDecoder=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!1});cachedTextDecoder.decode();let cachegetUint8Memory0=null;function getUint8Memory0(){return null!==cachegetUint8Memory0&&cachegetUint8Memory0.buffer===wasm.memory.buffer||(cachegetUint8Memory0=new Uint8Array(wasm.memory.buffer)),cachegetUint8Memory0}function getStringFromWasm0(e,t){return cachedTextDecoder.decode(getUint8Memory0().subarray(e,e+t))}function addHeapObject(e){heap_next===heap.length&&heap.push(heap.length+1);const t=heap_next;return heap_next=heap[t],heap[t]=e,t}function isLikeNone(e){return null==e}let cachegetFloat64Memory0=null;function getFloat64Memory0(){return null!==cachegetFloat64Memory0&&cachegetFloat64Memory0.buffer===wasm.memory.buffer||(cachegetFloat64Memory0=new Float64Array(wasm.memory.buffer)),cachegetFloat64Memory0}let cachegetInt32Memory0=null;function getInt32Memory0(){return null!==cachegetInt32Memory0&&cachegetInt32Memory0.buffer===wasm.memory.buffer||(cachegetInt32Memory0=new Int32Array(wasm.memory.buffer)),cachegetInt32Memory0}let WASM_VECTOR_LEN=0;const cachedTextEncoder=new TextEncoder("utf-8",{ignoreBOM:!0,fatal:!1}),encodeString="function"==typeof cachedTextEncoder.encodeInto?function(e,t){return cachedTextEncoder.encodeInto(e,t)}:function(e,t){const n=cachedTextEncoder.encode(e);return t.set(n),{read:e.length,written:n.length}};function passStringToWasm0(e,t,n){if(void 0===n){const n=cachedTextEncoder.encode(e),r=t(n.length);return getUint8Memory0().subarray(r,r+n.length).set(n),WASM_VECTOR_LEN=n.length,r}let r=e.length,b=t(r);const _=getUint8Memory0();let c=0;for(;c<r;c++){const t=e.charCodeAt(c);if(t>127)break;_[b+c]=t}if(c!==r){0!==c&&(e=e.slice(c)),b=n(b,r,r=c+3*e.length);const t=getUint8Memory0().subarray(b+c,b+r);c+=encodeString(e,t).written}return WASM_VECTOR_LEN=c,b}function debugString(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return`${e}`;if("string"==t)return`"${e}"`;if("symbol"==t){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const t=e.length;let n="[";t>0&&(n+=debugString(e[0]));for(let r=1;r<t;r++)n+=", "+debugString(e[r]);return n+="]",n}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(!(n.length>1))return toString.call(e);if(r=n[1],"Object"==r)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:r}function makeMutClosure(e,t,n,r){const b={a:e,b:t,cnt:1,dtor:n},_=(...e)=>{b.cnt++;const t=b.a;b.a=0;try{return r(t,b.b,...e)}finally{0==--b.cnt?wasm.__wbindgen_export_2.get(b.dtor)(t,b.b):b.a=t}};return _.original=b,_}function __wbg_adapter_30(e,t,n){wasm.__wbindgen_export_3(e,t,addHeapObject(n))}function __wbg_adapter_33(e,t,n){wasm.__wbindgen_export_4(e,t,addHeapObject(n))}function __wbg_adapter_36(e,t){wasm.__wbindgen_export_5(e,t)}function __wbg_adapter_39(e,t){try{const r=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.__wbindgen_export_6(r,e,t);var n=getInt32Memory0()[r/4+0];if(getInt32Memory0()[r/4+1])throw takeObject(n)}finally{wasm.__wbindgen_add_to_stack_pointer(16)}}function __wbg_adapter_42(e,t,n){wasm.__wbindgen_export_7(e,t,addHeapObject(n))}export function start(){wasm.start()}function handleError(e,t){try{return e.apply(this,t)}catch(e){wasm.__wbindgen_export_9(addHeapObject(e))}}function getArrayU8FromWasm0(e,t){return getUint8Memory0().subarray(e/1,e/1+t)}async function load(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}async function init(e){void 0===e&&(e=new URL("aff081947d6b76cf20cabae548532b31.wasm",import.meta.url));const t={wbg:{}};t.wbg.__wbg_navigator_1f72d7edb7b4c387=function(e){return addHeapObject(getObject(e).navigator)},t.wbg.__wbindgen_object_drop_ref=function(e){takeObject(e)},t.wbg.__wbindgen_string_new=function(e,t){return addHeapObject(getStringFromWasm0(e,t))},t.wbg.__wbg_get_a9cab131e3152c49=function(){return handleError((function(e,t){return addHeapObject(Reflect.get(getObject(e),getObject(t)))}),arguments)},t.wbg.__wbg_now_20d2aadcf3cc17f7=function(e){return getObject(e).now()},t.wbg.__wbg_instanceof_HtmlElement_806c643943ab20c1=function(e){return getObject(e)instanceof HTMLElement},t.wbg.__wbg_remove_0bfd44c3622f33b2=function(e){getObject(e).remove()},t.wbg.__wbindgen_cb_drop=function(e){const t=takeObject(e).original;if(1==t.cnt--)return t.a=0,!0;return!1},t.wbg.__wbg_createElement_3c9b5f3aa42457a1=function(){return handleError((function(e,t,n){return addHeapObject(getObject(e).createElement(getStringFromWasm0(t,n)))}),arguments)},t.wbg.__wbg_setid_ea9f00ecb5da9dde=function(e,t,n){getObject(e).id=getStringFromWasm0(t,n)},t.wbg.__wbg_style_dd3ba68ea919f1b0=function(e){return addHeapObject(getObject(e).style)},t.wbg.__wbg_setsize_1d5b32171e4916c6=function(e,t){getObject(e).size=t>>>0},t.wbg.__wbg_setautofocus_ce657398d4bfbbb0=function(e,t){getObject(e).autofocus=0!==t},t.wbg.__wbg_sethidden_7a120b754b048503=function(e,t){getObject(e).hidden=0!==t},t.wbg.__wbg_appendChild_a86c0da8d152eae4=function(){return handleError((function(e,t){return addHeapObject(getObject(e).appendChild(getObject(t)))}),arguments)},t.wbg.__wbg_setInterval_00dcd6d9b783b38f=function(){return handleError((function(e,t,n){return getObject(e).setInterval(getObject(t),n)}),arguments)},t.wbg.__wbg_new_693216e109162396=function(){return addHeapObject(new Error)},t.wbg.__wbg_stack_0ddaca5d1abfb52f=function(e,t){const n=passStringToWasm0(getObject(t).stack,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n},t.wbg.__wbg_error_09919627ac0992f5=function(e,t){try{console.error(getStringFromWasm0(e,t))}finally{wasm.__wbindgen_export_8(e,t)}},t.wbg.__wbg_getError_447f4b8abb16917e=function(e){return getObject(e).getError()},t.wbg.__wbg_getError_cc18cbef4864f62f=function(e){return getObject(e).getError()},t.wbg.__wbg_createShader_8d2a55e7777bbea7=function(e,t){const n=getObject(e).createShader(t>>>0);return isLikeNone(n)?0:addHeapObject(n)},t.wbg.__wbg_createShader_c17c7cf4768e0737=function(e,t){const n=getObject(e).createShader(t>>>0);return isLikeNone(n)?0:addHeapObject(n)},t.wbg.__wbg_shaderSource_daca520f63ef8fca=function(e,t,n,r){getObject(e).shaderSource(getObject(t),getStringFromWasm0(n,r))},t.wbg.__wbg_shaderSource_bbfeb057b5f88df5=function(e,t,n,r){getObject(e).shaderSource(getObject(t),getStringFromWasm0(n,r))},t.wbg.__wbg_compileShader_1b371763cfd802f7=function(e,t){getObject(e).compileShader(getObject(t))},t.wbg.__wbg_compileShader_4940032085b41ed2=function(e,t){getObject(e).compileShader(getObject(t))},t.wbg.__wbg_getShaderParameter_2972af1cb850aeb7=function(e,t,n){return addHeapObject(getObject(e).getShaderParameter(getObject(t),n>>>0))},t.wbg.__wbg_getShaderParameter_87e97ffc5dc7fb05=function(e,t,n){return addHeapObject(getObject(e).getShaderParameter(getObject(t),n>>>0))},t.wbg.__wbg_getShaderInfoLog_95d068aeccc5dbb3=function(e,t,n){const r=getObject(t).getShaderInfoLog(getObject(n));var b=isLikeNone(r)?0:passStringToWasm0(r,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),_=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=_,getInt32Memory0()[e/4+0]=b},t.wbg.__wbg_getShaderInfoLog_a680dbc6e8440e5b=function(e,t,n){const r=getObject(t).getShaderInfoLog(getObject(n));var b=isLikeNone(r)?0:passStringToWasm0(r,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),_=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=_,getInt32Memory0()[e/4+0]=b},t.wbg.__wbg_createProgram_c2675d2cc83435a6=function(e){const t=getObject(e).createProgram();return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_createProgram_6a25e4bb5cfaad4b=function(e){const t=getObject(e).createProgram();return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_linkProgram_b98c8967f45a44fd=function(e,t){getObject(e).linkProgram(getObject(t))},t.wbg.__wbg_linkProgram_edd275997033948d=function(e,t){getObject(e).linkProgram(getObject(t))},t.wbg.__wbg_getProgramParameter_e4fe54d806806081=function(e,t,n){return addHeapObject(getObject(e).getProgramParameter(getObject(t),n>>>0))},t.wbg.__wbg_getProgramParameter_4100b1077a68e2ec=function(e,t,n){return addHeapObject(getObject(e).getProgramParameter(getObject(t),n>>>0))},t.wbg.__wbg_attachShader_0867104b37cae2d6=function(e,t,n){getObject(e).attachShader(getObject(t),getObject(n))},t.wbg.__wbg_attachShader_0994bf956cb31b2b=function(e,t,n){getObject(e).attachShader(getObject(t),getObject(n))},t.wbg.__wbg_getProgramInfoLog_e70b0120bda14895=function(e,t,n){const r=getObject(t).getProgramInfoLog(getObject(n));var b=isLikeNone(r)?0:passStringToWasm0(r,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),_=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=_,getInt32Memory0()[e/4+0]=b},t.wbg.__wbg_getProgramInfoLog_234b1b9dbbc9282f=function(e,t,n){const r=getObject(t).getProgramInfoLog(getObject(n));var b=isLikeNone(r)?0:passStringToWasm0(r,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),_=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=_,getInt32Memory0()[e/4+0]=b},t.wbg.__wbg_createVertexArrayOES_69c38b2b74e927fa=function(e){const t=getObject(e).createVertexArrayOES();return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_createVertexArray_d502151c473563b2=function(e){const t=getObject(e).createVertexArray();return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_texSubImage2D_f5b8e6e635a5736f=function(){return handleError((function(e,t,n,r,b,_,c,g,a,o){getObject(e).texSubImage2D(t>>>0,n,r,b,_,c,g>>>0,a>>>0,getObject(o))}),arguments)},t.wbg.__wbg_texSubImage2D_fe76e590b3e3fa85=function(){return handleError((function(e,t,n,r,b,_,c,g,a,o){getObject(e).texSubImage2D(t>>>0,n,r,b,_,c,g>>>0,a>>>0,getObject(o))}),arguments)},t.wbg.__wbg_framebufferRenderbuffer_ed95c4854179b4ac=function(e,t,n,r,b){getObject(e).framebufferRenderbuffer(t>>>0,n>>>0,r>>>0,getObject(b))},t.wbg.__wbg_framebufferRenderbuffer_d73f3cb3e5a605a2=function(e,t,n,r,b){getObject(e).framebufferRenderbuffer(t>>>0,n>>>0,r>>>0,getObject(b))},t.wbg.__wbg_colorMask_0cfe7588f073be4e=function(e,t,n,r,b){getObject(e).colorMask(0!==t,0!==n,0!==r,0!==b)},t.wbg.__wbg_colorMask_c92354ec3511685f=function(e,t,n,r,b){getObject(e).colorMask(0!==t,0!==n,0!==r,0!==b)},t.wbg.__wbg_blendEquationSeparate_ffbed0120340f7d5=function(e,t,n){getObject(e).blendEquationSeparate(t>>>0,n>>>0)},t.wbg.__wbg_blendEquationSeparate_ccdda0657b246bb0=function(e,t,n){getObject(e).blendEquationSeparate(t>>>0,n>>>0)},t.wbg.__wbg_blendFuncSeparate_c750720abdc9d54e=function(e,t,n,r,b){getObject(e).blendFuncSeparate(t>>>0,n>>>0,r>>>0,b>>>0)},t.wbg.__wbg_blendFuncSeparate_0aa8a7b4669fb810=function(e,t,n,r,b){getObject(e).blendFuncSeparate(t>>>0,n>>>0,r>>>0,b>>>0)},t.wbg.__wbg_uniform2f_3a04be03a4c69f62=function(e,t,n,r){getObject(e).uniform2f(getObject(t),n,r)},t.wbg.__wbg_uniform2f_fa5841b64e0ac5e9=function(e,t,n,r){getObject(e).uniform2f(getObject(t),n,r)},t.wbg.__wbg_disableVertexAttribArray_e1c513cfd55355c9=function(e,t){getObject(e).disableVertexAttribArray(t>>>0)},t.wbg.__wbg_disableVertexAttribArray_8da45bfa7fa5a02d=function(e,t){getObject(e).disableVertexAttribArray(t>>>0)},t.wbg.__wbg_instanceof_HtmlInputElement_750fccab172eab35=function(e){return getObject(e)instanceof HTMLInputElement},t.wbg.__wbg_clearColor_2c1d714dee770474=function(e,t,n,r,b){getObject(e).clearColor(t,n,r,b)},t.wbg.__wbg_clearColor_3973a216e3a63c8f=function(e,t,n,r,b){getObject(e).clearColor(t,n,r,b)},t.wbg.__wbg_clear_786a8deca6672a9d=function(e,t){getObject(e).clear(t>>>0)},t.wbg.__wbg_clear_a9fbec6b33c4e095=function(e,t){getObject(e).clear(t>>>0)},t.wbg.__wbg_deleteTexture_8c7434cb1b20f64f=function(e,t){getObject(e).deleteTexture(getObject(t))},t.wbg.__wbg_deleteTexture_bf4ea3b750a15992=function(e,t){getObject(e).deleteTexture(getObject(t))},t.wbg.__wbg_scissor_056d185c74d7c0ad=function(e,t,n,r,b){getObject(e).scissor(t,n,r,b)},t.wbg.__wbg_scissor_3ea2048f24928f06=function(e,t,n,r,b){getObject(e).scissor(t,n,r,b)},t.wbg.__wbg_requestAnimationFrame_8e3c7028c69ebaef=function(){return handleError((function(e,t){return getObject(e).requestAnimationFrame(getObject(t))}),arguments)},t.wbg.__wbg_innerWidth_aebdd1c86de7b6aa=function(){return handleError((function(e){return addHeapObject(getObject(e).innerWidth)}),arguments)},t.wbg.__wbg_setwidth_654d8adcd4979eed=function(e,t){getObject(e).width=t>>>0},t.wbg.__wbg_setheight_2b662384bfacb65c=function(e,t){getObject(e).height=t>>>0},t.wbg.__wbg_open_fd57bd436de42549=function(){return handleError((function(e,t,n,r,b){const _=getObject(e).open(getStringFromWasm0(t,n),getStringFromWasm0(r,b));return isLikeNone(_)?0:addHeapObject(_)}),arguments)},t.wbg.__wbg_clipboard_e99151dcef87806f=function(e){const t=getObject(e).clipboard;return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_writeText_df83b2c8a773a84a=function(e,t,n){return addHeapObject(getObject(e).writeText(getStringFromWasm0(t,n)))},t.wbg.__wbg_getBoundingClientRect_ab935d65fdd23c25=function(e){return addHeapObject(getObject(e).getBoundingClientRect())},t.wbg.__wbg_scrollTop_f1031b88f039d8df=function(e){return getObject(e).scrollTop},t.wbg.__wbg_offsetTop_c8f74f82dc787ed0=function(e){return getObject(e).offsetTop},t.wbg.__wbg_clientHeight_205d93d6eadff351=function(e){return getObject(e).clientHeight},t.wbg.__wbg_height_1f8574470ebe45c9=function(e){return getObject(e).height},t.wbg.__wbg_scrollLeft_9aba28808f857e36=function(e){return getObject(e).scrollLeft},t.wbg.__wbg_offsetLeft_3b3b09bce24322ef=function(e){return getObject(e).offsetLeft},t.wbg.__wbg_offsetWidth_3afb80444bdcabce=function(e){return getObject(e).offsetWidth},t.wbg.__wbg_clientWidth_11f72beceb108bff=function(e){return getObject(e).clientWidth},t.wbg.__wbg_width_a260098679e33e90=function(e){return getObject(e).width},t.wbg.__wbg_performance_71eb0d14ca622227=function(e){const t=getObject(e).performance;return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_width_20b7a9ebdd5f4232=function(e){return getObject(e).width},t.wbg.__wbg_height_57f43816c2227a89=function(e){return getObject(e).height},t.wbg.__wbg_instanceof_HtmlCanvasElement_b94545433bb4d2ef=function(e){return getObject(e)instanceof HTMLCanvasElement},t.wbg.__wbg_devicePixelRatio_cac0b66c0e1e056b=function(e){return getObject(e).devicePixelRatio},t.wbg.__wbindgen_number_get=function(e,t){const n=getObject(t),r="number"==typeof n?n:void 0;getFloat64Memory0()[e/8+1]=isLikeNone(r)?0:r,getInt32Memory0()[e/4+0]=!isLikeNone(r)},t.wbg.__wbg_new_cc9018bd6f283b6f=function(e){return addHeapObject(new Uint8Array(getObject(e)))},t.wbg.__wbg_length_0acb1cf9bbaf8519=function(e){return getObject(e).length},t.wbg.__wbg_instanceof_WebGlRenderingContext_b0885da52b151d86=function(e){return getObject(e)instanceof WebGLRenderingContext},t.wbg.__wbindgen_string_get=function(e,t){const n=getObject(t),r="string"==typeof n?n:void 0;var b=isLikeNone(r)?0:passStringToWasm0(r,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),_=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=_,getInt32Memory0()[e/4+0]=b},t.wbg.__wbg_getSupportedExtensions_0d5d24aad2788aec=function(e){const t=getObject(e).getSupportedExtensions();return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_length_2cd798326f2cc4c1=function(e){return getObject(e).length},t.wbg.__wbg_instanceof_WebGl2RenderingContext_e29e70ae6c00bfdd=function(e){return getObject(e)instanceof WebGL2RenderingContext},t.wbg.__wbg_getSupportedExtensions_f7eec3b83ce8c78d=function(e){const t=getObject(e).getSupportedExtensions();return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_createFramebuffer_f6f4aff3c462de89=function(e){const t=getObject(e).createFramebuffer();return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_createFramebuffer_f656a97f24d2caf3=function(e){const t=getObject(e).createFramebuffer();return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_createRenderbuffer_5f8fcf55de2b35f5=function(e){const t=getObject(e).createRenderbuffer();return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_createRenderbuffer_e66ea157342e02e9=function(e){const t=getObject(e).createRenderbuffer();return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_matchMedia_7a04497c9cd2fc1e=function(){return handleError((function(e,t,n){const r=getObject(e).matchMedia(getStringFromWasm0(t,n));return isLikeNone(r)?0:addHeapObject(r)}),arguments)},t.wbg.__wbg_matches_7809d58d7a13e2eb=function(e){return getObject(e).matches},t.wbg.__wbg_location_fa9019d2eb2195e8=function(e){return addHeapObject(getObject(e).location)},t.wbg.__wbg_search_083c5449552cf16e=function(){return handleError((function(e,t){const n=passStringToWasm0(getObject(t).search,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n}),arguments)},t.wbg.__wbg_href_ee02b91ff794f1c0=function(){return handleError((function(e,t){const n=passStringToWasm0(getObject(t).href,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n}),arguments)},t.wbg.__wbg_protocol_8a7c3a0ad0534fb9=function(){return handleError((function(e,t){const n=passStringToWasm0(getObject(t).protocol,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n}),arguments)},t.wbg.__wbg_host_5a60711dad652364=function(){return handleError((function(e,t){const n=passStringToWasm0(getObject(t).host,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n}),arguments)},t.wbg.__wbg_hostname_52b243e8e2ba0022=function(){return handleError((function(e,t){const n=passStringToWasm0(getObject(t).hostname,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n}),arguments)},t.wbg.__wbg_port_91ba722f8d346400=function(){return handleError((function(e,t){const n=passStringToWasm0(getObject(t).port,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n}),arguments)},t.wbg.__wbg_origin_890e8002c9eeba35=function(){return handleError((function(e,t){const n=passStringToWasm0(getObject(t).origin,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n}),arguments)},t.wbg.__wbg_getItem_eb6e17b18b890a47=function(){return handleError((function(e,t,n,r){const b=getObject(t).getItem(getStringFromWasm0(n,r));var _=isLikeNone(b)?0:passStringToWasm0(b,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),c=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=c,getInt32Memory0()[e/4+0]=_}),arguments)},t.wbg.__wbg_setItem_ed2ea572329ab721=function(){return handleError((function(e,t,n,r,b){getObject(e).setItem(getStringFromWasm0(t,n),getStringFromWasm0(r,b))}),arguments)},t.wbg.__wbg_localStorage_6e9ba4e9a3771427=function(){return handleError((function(e){const t=getObject(e).localStorage;return isLikeNone(t)?0:addHeapObject(t)}),arguments)},t.wbg.__wbg_newnoargs_e23b458e372830de=function(e,t){return addHeapObject(new Function(getStringFromWasm0(e,t)))},t.wbg.__wbg_setTimeout_a100c5fd6f7b2032=function(){return handleError((function(e,t,n){return getObject(e).setTimeout(getObject(t),n)}),arguments)},t.wbg.__wbg_value_14b43f7df5bd6160=function(e,t){const n=passStringToWasm0(getObject(t).value,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n},t.wbg.__wbg_clipboardData_a95ca12e53577c09=function(e){const t=getObject(e).clipboardData;return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_getData_18bfc326d2fcc5fc=function(){return handleError((function(e,t,n,r){const b=passStringToWasm0(getObject(t).getData(getStringFromWasm0(n,r)),wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),_=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=_,getInt32Memory0()[e/4+0]=b}),arguments)},t.wbg.__wbg_stopPropagation_63abc0c04280af82=function(e){getObject(e).stopPropagation()},t.wbg.__wbg_preventDefault_747982fd5fe3b6d0=function(e){getObject(e).preventDefault()},t.wbg.__wbg_altKey_4c4f9abf8a09e7c7=function(e){return getObject(e).altKey},t.wbg.__wbg_shiftKey_94c9fa9845182d9e=function(e){return getObject(e).shiftKey},t.wbg.__wbg_isComposing_fa3e456916264d71=function(e){return getObject(e).isComposing},t.wbg.__wbg_keyCode_9bdbab45f06fb085=function(e){return getObject(e).keyCode},t.wbg.__wbg_files_506106b5b79463d5=function(e){const t=getObject(e).files;return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_length_ced2607e299e48b0=function(e){return getObject(e).length},t.wbg.__wbg_get_bbde85c2e4ce9183=function(e,t){const n=getObject(e)[t>>>0];return isLikeNone(n)?0:addHeapObject(n)},t.wbg.__wbg_name_705e027681939ce2=function(e,t){const n=passStringToWasm0(getObject(t).name,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n},t.wbg.__wbg_lastModified_578207da4ec8a735=function(e){return getObject(e).lastModified},t.wbg.__wbg_size_e8d6777bbbbd2991=function(e){return getObject(e).size},t.wbg.__wbg_arrayBuffer_781cc81e507364b8=function(e){return addHeapObject(getObject(e).arrayBuffer())},t.wbg.__wbg_items_ab2c5110450d2c6a=function(e){return addHeapObject(getObject(e).items)},t.wbg.__wbg_length_37d5aa06d94e029d=function(e){return getObject(e).length},t.wbg.__wbg_get_a2af1e42e8d6d040=function(e,t){const n=getObject(e)[t>>>0];return isLikeNone(n)?0:addHeapObject(n)},t.wbg.__wbg_type_d73ca5f20cbe175f=function(e,t){const n=passStringToWasm0(getObject(t).type,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n},t.wbg.__wbg_deltaMode_08c2fcea70146506=function(e){return getObject(e).deltaMode},t.wbg.__wbg_deltaX_692299f5e35cfb0d=function(e){return getObject(e).deltaX},t.wbg.__wbg_deltaY_f78bae9413139a24=function(e){return getObject(e).deltaY},t.wbg.__wbg_ctrlKey_e4aeb9366ca88d41=function(e){return getObject(e).ctrlKey},t.wbg.__wbg_metaKey_ad377163d8beff50=function(e){return getObject(e).metaKey},t.wbg.__wbg_shiftKey_42596574095ad5e2=function(e){return getObject(e).shiftKey},t.wbg.__wbg_length_86a84abd1008e3f0=function(e){return getObject(e).length},t.wbg.__wbg_item_5cffd6d67fb3a3a3=function(e,t){const n=getObject(e).item(t>>>0);return isLikeNone(n)?0:addHeapObject(n)},t.wbg.__wbg_identifier_efb4abe3a00599c1=function(e){return getObject(e).identifier},t.wbg.__wbg_force_8c0adc9011c40238=function(e){return getObject(e).force},t.wbg.__wbg_left_a1624a1a425102f3=function(e){return getObject(e).left},t.wbg.__wbg_top_da39668ed41161c4=function(e){return getObject(e).top},t.wbg.__wbg_pageX_20e9ef69ae98e6ca=function(e){return getObject(e).pageX},t.wbg.__wbg_pageY_8e273493fff14cd6=function(e){return getObject(e).pageY},t.wbg.__wbg_blur_685fb8c8baa471a1=function(){return handleError((function(e){getObject(e).blur()}),arguments)},t.wbg.__wbg_focus_42ad8e77a7a0b22a=function(){return handleError((function(e){getObject(e).focus()}),arguments)},t.wbg.__wbg_button_78dae8616402469e=function(e){return getObject(e).button},t.wbg.__wbg_clientX_83648828186ba19f=function(e){return getObject(e).clientX},t.wbg.__wbg_clientY_ba9e5549993281e3=function(e){return getObject(e).clientY},t.wbg.__wbindgen_is_object=function(e){const t=getObject(e);return"object"==typeof t&&null!==t},t.wbg.__wbg_static_accessor_NODE_MODULE_33b45247c55045b0=function(){return addHeapObject(r)},t.wbg.__wbg_process_70251ed1291754d5=function(e){return addHeapObject(getObject(e).process)},t.wbg.__wbg_versions_b23f2588cdb2ddbb=function(e){return addHeapObject(getObject(e).versions)},t.wbg.__wbg_node_61b8c9a82499895d=function(e){return addHeapObject(getObject(e).node)},t.wbg.__wbindgen_is_string=function(e){return"string"==typeof getObject(e)},t.wbg.__wbg_require_2a93bc09fee45aca=function(){return handleError((function(e,t,n){return addHeapObject(getObject(e).require(getStringFromWasm0(t,n)))}),arguments)},t.wbg.__wbg_crypto_2f56257a38275dbd=function(e){return addHeapObject(getObject(e).crypto)},t.wbg.__wbg_msCrypto_d07655bf62361f21=function(e){return addHeapObject(getObject(e).msCrypto)},t.wbg.__wbg_newwithlength_8f0657faca9f1422=function(e){return addHeapObject(new Uint8Array(e>>>0))},t.wbg.__wbg_createTexture_23de5d8f7988e663=function(e){const t=getObject(e).createTexture();return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_createTexture_0df375980a9c46c9=function(e){const t=getObject(e).createTexture();return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_deleteShader_b6480fae6d31ca67=function(e,t){getObject(e).deleteShader(getObject(t))},t.wbg.__wbg_deleteShader_d39446753b2fa1e7=function(e,t){getObject(e).deleteShader(getObject(t))},t.wbg.__wbindgen_boolean_get=function(e){const t=getObject(e);return"boolean"==typeof t?t?1:0:2},t.wbg.__wbg_detachShader_e2c6cb7c2c469a33=function(e,t,n){getObject(e).detachShader(getObject(t),getObject(n))},t.wbg.__wbg_detachShader_a3e090b94d09c8a2=function(e,t,n){getObject(e).detachShader(getObject(t),getObject(n))},t.wbg.__wbg_useProgram_022d72a653706891=function(e,t){getObject(e).useProgram(getObject(t))},t.wbg.__wbg_useProgram_039f85866d3a975b=function(e,t){getObject(e).useProgram(getObject(t))},t.wbg.__wbg_createBuffer_48c0376fc0746386=function(e){const t=getObject(e).createBuffer();return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_createBuffer_b6dbd62c544371ed=function(e){const t=getObject(e).createBuffer();return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_bindBuffer_28e62f648e99e251=function(e,t,n){getObject(e).bindBuffer(t>>>0,getObject(n))},t.wbg.__wbg_bindBuffer_a5f37e5ebd81a1f6=function(e,t,n){getObject(e).bindBuffer(t>>>0,getObject(n))},t.wbg.__wbg_bindFramebuffer_b7a06305d2823b34=function(e,t,n){getObject(e).bindFramebuffer(t>>>0,getObject(n))},t.wbg.__wbg_bindFramebuffer_6ef149f7d398d19f=function(e,t,n){getObject(e).bindFramebuffer(t>>>0,getObject(n))},t.wbg.__wbg_bindRenderbuffer_0fe389ab46c4d00d=function(e,t,n){getObject(e).bindRenderbuffer(t>>>0,getObject(n))},t.wbg.__wbg_bindRenderbuffer_1974e9f4fdd0b3af=function(e,t,n){getObject(e).bindRenderbuffer(t>>>0,getObject(n))},t.wbg.__wbg_bindVertexArray_dfe63bf55a9f6e54=function(e,t){getObject(e).bindVertexArray(getObject(t))},t.wbg.__wbg_bindVertexArrayOES_35d97084dfc5f6f4=function(e,t){getObject(e).bindVertexArrayOES(getObject(t))},t.wbg.__wbg_pixelStorei_707653d2f29a6c67=function(e,t,n){getObject(e).pixelStorei(t>>>0,n)},t.wbg.__wbg_pixelStorei_db7d39661916037c=function(e,t,n){getObject(e).pixelStorei(t>>>0,n)},t.wbg.__wbg_bufferData_282e5d315f5503eb=function(e,t,n,r){getObject(e).bufferData(t>>>0,getObject(n),r>>>0)},t.wbg.__wbg_bufferData_8542921547008e80=function(e,t,n,r){getObject(e).bufferData(t>>>0,getObject(n),r>>>0)},t.wbg.__wbg_disable_ada50e27543b1ebd=function(e,t){getObject(e).disable(t>>>0)},t.wbg.__wbg_disable_ec8402e41edbe277=function(e,t){getObject(e).disable(t>>>0)},t.wbg.__wbg_drawElements_efa6c15e2787a58c=function(e,t,n,r,b){getObject(e).drawElements(t>>>0,n,r>>>0,b)},t.wbg.__wbg_drawElements_a192faf49b4975d6=function(e,t,n,r,b){getObject(e).drawElements(t>>>0,n,r>>>0,b)},t.wbg.__wbg_enable_981a414a11bbed87=function(e,t){getObject(e).enable(t>>>0)},t.wbg.__wbg_enable_51cc5ea7d16e475c=function(e,t){getObject(e).enable(t>>>0)},t.wbg.__wbg_enableVertexAttribArray_1d5f3ff6e7da7095=function(e,t){getObject(e).enableVertexAttribArray(t>>>0)},t.wbg.__wbg_enableVertexAttribArray_85c507778523db86=function(e,t){getObject(e).enableVertexAttribArray(t>>>0)},t.wbg.__wbg_framebufferTexture2D_3bb72a24d7618de9=function(e,t,n,r,b,_){getObject(e).framebufferTexture2D(t>>>0,n>>>0,r>>>0,getObject(b),_)},t.wbg.__wbg_framebufferTexture2D_e07b69d4972eccfd=function(e,t,n,r,b,_){getObject(e).framebufferTexture2D(t>>>0,n>>>0,r>>>0,getObject(b),_)},t.wbg.__wbg_getUniformLocation_776a1f58e7904d81=function(e,t,n,r){const b=getObject(e).getUniformLocation(getObject(t),getStringFromWasm0(n,r));return isLikeNone(b)?0:addHeapObject(b)},t.wbg.__wbg_getUniformLocation_201fd94276e7dc6f=function(e,t,n,r){const b=getObject(e).getUniformLocation(getObject(t),getStringFromWasm0(n,r));return isLikeNone(b)?0:addHeapObject(b)},t.wbg.__wbg_getAttribLocation_f875dcf14748b9d4=function(e,t,n,r){return getObject(e).getAttribLocation(getObject(t),getStringFromWasm0(n,r))},t.wbg.__wbg_getAttribLocation_ae4109e1d8e7050f=function(e,t,n,r){return getObject(e).getAttribLocation(getObject(t),getStringFromWasm0(n,r))},t.wbg.__wbg_renderbufferStorage_56e5cf7c10bbc044=function(e,t,n,r,b){getObject(e).renderbufferStorage(t>>>0,n>>>0,r,b)},t.wbg.__wbg_renderbufferStorage_6ded6b343c662a60=function(e,t,n,r,b){getObject(e).renderbufferStorage(t>>>0,n>>>0,r,b)},t.wbg.__wbg_texImage2D_ca7055ca4feee279=function(){return handleError((function(e,t,n,r,b,_,c,g,a,o){getObject(e).texImage2D(t>>>0,n,r,b,_,c,g>>>0,a>>>0,getObject(o))}),arguments)},t.wbg.__wbg_texImage2D_830d94fcfc70baf0=function(){return handleError((function(e,t,n,r,b,_,c,g,a,o){getObject(e).texImage2D(t>>>0,n,r,b,_,c,g>>>0,a>>>0,getObject(o))}),arguments)},t.wbg.__wbg_uniform1i_42b99e992f794a51=function(e,t,n){getObject(e).uniform1i(getObject(t),n)},t.wbg.__wbg_uniform1i_22f9e77ed65e1503=function(e,t,n){getObject(e).uniform1i(getObject(t),n)},t.wbg.__wbg_bindTexture_27a724e7303eec67=function(e,t,n){getObject(e).bindTexture(t>>>0,getObject(n))},t.wbg.__wbg_bindTexture_dbddb0b0c3efa1b9=function(e,t,n){getObject(e).bindTexture(t>>>0,getObject(n))},t.wbg.__wbg_activeTexture_1ba5758f0a8358b6=function(e,t){getObject(e).activeTexture(t>>>0)},t.wbg.__wbg_activeTexture_eec8b0e6c72c6814=function(e,t){getObject(e).activeTexture(t>>>0)},t.wbg.__wbg_texParameteri_1298d8804b59bbc0=function(e,t,n,r){getObject(e).texParameteri(t>>>0,n>>>0,r)},t.wbg.__wbg_texParameteri_7414cf15f83e1d52=function(e,t,n,r){getObject(e).texParameteri(t>>>0,n>>>0,r)},t.wbg.__wbg_vertexAttribPointer_a75ea424ba9fa4e8=function(e,t,n,r,b,_,c){getObject(e).vertexAttribPointer(t>>>0,n,r>>>0,0!==b,_,c)},t.wbg.__wbg_vertexAttribPointer_4375ff065dcf90ed=function(e,t,n,r,b,_,c){getObject(e).vertexAttribPointer(t>>>0,n,r>>>0,0!==b,_,c)},t.wbg.__wbg_viewport_6c864379ded67e8a=function(e,t,n,r,b){getObject(e).viewport(t,n,r,b)},t.wbg.__wbg_viewport_06c29be651af660a=function(e,t,n,r,b){getObject(e).viewport(t,n,r,b)},t.wbg.__wbg_get_590a2cd912f2ae46=function(e,t){return addHeapObject(getObject(e)[t>>>0])},t.wbg.__wbindgen_object_clone_ref=function(e){return addHeapObject(getObject(e))},t.wbg.__wbg_self_99737b4dcdf6f0d8=function(){return handleError((function(){return addHeapObject(self.self)}),arguments)},t.wbg.__wbg_window_9b61fbbf3564c4fb=function(){return handleError((function(){return addHeapObject(window.window)}),arguments)},t.wbg.__wbg_globalThis_8e275ef40caea3a3=function(){return handleError((function(){return addHeapObject(globalThis.globalThis)}),arguments)},t.wbg.__wbg_global_5de1e0f82bddcd27=function(){return handleError((function(){return addHeapObject(global.global)}),arguments)},t.wbg.__wbindgen_is_undefined=function(e){return void 0===getObject(e)},t.wbg.__wbg_call_ae78342adc33730a=function(){return handleError((function(e,t){return addHeapObject(getObject(e).call(getObject(t)))}),arguments)},t.wbg.__wbindgen_memory=function(){return addHeapObject(wasm.memory)},t.wbg.__wbg_buffer_7af23f65f6c64548=function(e){return addHeapObject(getObject(e).buffer)},t.wbg.__wbg_newwithbyteoffsetandlength_ce1e75f0ce5f7974=function(e,t,n){return addHeapObject(new Uint8Array(getObject(e),t>>>0,n>>>0))},t.wbg.__wbg_set_f25e869e4565d2a2=function(e,t,n){getObject(e).set(getObject(t),n>>>0)},t.wbg.__wbg_randomFillSync_654a7797990fb8db=function(){return handleError((function(e,t,n){getObject(e).randomFillSync(getArrayU8FromWasm0(t,n))}),arguments)},t.wbg.__wbg_subarray_da527dbd24eafb6b=function(e,t,n){return addHeapObject(getObject(e).subarray(t>>>0,n>>>0))},t.wbg.__wbg_getRandomValues_fb6b088efb6bead2=function(){return handleError((function(e,t){getObject(e).getRandomValues(getObject(t))}),arguments)},t.wbg.__wbg_measure_c528ff64085b7146=function(){return handleError((function(e,t,n,r){try{performance.measure(getStringFromWasm0(e,t),getStringFromWasm0(n,r))}finally{wasm.__wbindgen_export_8(e,t),wasm.__wbindgen_export_8(n,r)}}),arguments)},t.wbg.__wbg_mark_abc7631bdced64f0=function(e,t){performance.mark(getStringFromWasm0(e,t))},t.wbg.__wbg_log_02e20a3c32305fb7=function(e,t){try{console.log(getStringFromWasm0(e,t))}finally{wasm.__wbindgen_export_8(e,t)}},t.wbg.__wbg_log_5c7513aa8c164502=function(e,t,n,r,b,_,c,g){try{console.log(getStringFromWasm0(e,t),getStringFromWasm0(n,r),getStringFromWasm0(b,_),getStringFromWasm0(c,g))}finally{wasm.__wbindgen_export_8(e,t)}},t.wbg.__wbindgen_debug_string=function(e,t){const n=passStringToWasm0(debugString(getObject(t)),wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n},t.wbg.__wbindgen_throw=function(e,t){throw new Error(getStringFromWasm0(e,t))},t.wbg.__wbindgen_rethrow=function(e){throw takeObject(e)},t.wbg.__wbg_then_ce526c837d07b68f=function(e,t){return addHeapObject(getObject(e).then(getObject(t)))},t.wbg.__wbg_then_842e65b843962f56=function(e,t,n){return addHeapObject(getObject(e).then(getObject(t),getObject(n)))},t.wbg.__wbg_resolve_a9a87bdd64e9e62c=function(e){return addHeapObject(Promise.resolve(getObject(e)))},t.wbg.__wbg_instanceof_Window_0e6c0f1096d66c3c=function(e){return getObject(e)instanceof Window},t.wbg.__wbg_data_ccaf50f3288b08c5=function(e,t){const n=getObject(t).data;var r=isLikeNone(n)?0:passStringToWasm0(n,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),b=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=b,getInt32Memory0()[e/4+0]=r},t.wbg.__wbg_setProperty_ae9adf5d00216c03=function(){return handleError((function(e,t,n,r,b){getObject(e).setProperty(getStringFromWasm0(t,n),getStringFromWasm0(r,b))}),arguments)},t.wbg.__wbg_body_2a1ff14b05042a51=function(e){const t=getObject(e).body;return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_getElementById_f83c5de20dc455d6=function(e,t,n){const r=getObject(e).getElementById(getStringFromWasm0(t,n));return isLikeNone(r)?0:addHeapObject(r)},t.wbg.__wbg_dataTransfer_a9eebb31aa4055f2=function(e){const t=getObject(e).dataTransfer;return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_addEventListener_78d3aa7e06ee5b73=function(){return handleError((function(e,t,n,r){getObject(e).addEventListener(getStringFromWasm0(t,n),getObject(r))}),arguments)},t.wbg.__wbg_getContext_0c19ba5c037e057f=function(){return handleError((function(e,t,n){const r=getObject(e).getContext(getStringFromWasm0(t,n));return isLikeNone(r)?0:addHeapObject(r)}),arguments)},t.wbg.__wbg_hidden_809625377ca6c4a3=function(e){return getObject(e).hidden},t.wbg.__wbg_setvalue_649eb7de76d4a493=function(e,t,n){getObject(e).value=getStringFromWasm0(t,n)},t.wbg.__wbg_ctrlKey_37d7587cf9229e4c=function(e){return getObject(e).ctrlKey},t.wbg.__wbg_metaKey_ecd5174305b25455=function(e){return getObject(e).metaKey},t.wbg.__wbg_key_a8ae33ddc6ff786b=function(e,t){const n=passStringToWasm0(getObject(t).key,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n},t.wbg.__wbg_hash_d124cf237fe7b7c1=function(){return handleError((function(e,t){const n=passStringToWasm0(getObject(t).hash,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n}),arguments)},t.wbg.__wbg_userAgent_e5954dbb033ddef9=function(){return handleError((function(e,t){const n=passStringToWasm0(getObject(t).userAgent,wasm.__wbindgen_export_0,wasm.__wbindgen_export_1),r=WASM_VECTOR_LEN;getInt32Memory0()[e/4+1]=r,getInt32Memory0()[e/4+0]=n}),arguments)},t.wbg.__wbg_touches_d4869a7500017809=function(e){return addHeapObject(getObject(e).touches)},t.wbg.__wbg_changedTouches_21bd59fbbc482ad7=function(e){return addHeapObject(getObject(e).changedTouches)},t.wbg.__wbg_get_8a239117b507dd81=function(e,t){const n=getObject(e)[t>>>0];return isLikeNone(n)?0:addHeapObject(n)},t.wbg.__wbg_getExtension_22c72750813222f6=function(){return handleError((function(e,t,n){const r=getObject(e).getExtension(getStringFromWasm0(t,n));return isLikeNone(r)?0:addHeapObject(r)}),arguments)},t.wbg.__wbg_getParameter_00a3d89e6e005c2f=function(){return handleError((function(e,t){return addHeapObject(getObject(e).getParameter(t>>>0))}),arguments)},t.wbg.__wbg_getExtension_bea19db80bdbefef=function(){return handleError((function(e,t,n){const r=getObject(e).getExtension(getStringFromWasm0(t,n));return isLikeNone(r)?0:addHeapObject(r)}),arguments)},t.wbg.__wbg_getParameter_f511b92ebf87c44e=function(){return handleError((function(e,t){return addHeapObject(getObject(e).getParameter(t>>>0))}),arguments)},t.wbg.__wbg_document_99eddbbc11ec831e=function(e){const t=getObject(e).document;return isLikeNone(t)?0:addHeapObject(t)},t.wbg.__wbg_innerHeight_67ea5ab43c3043ad=function(){return handleError((function(e){return addHeapObject(getObject(e).innerHeight)}),arguments)},t.wbg.__wbindgen_closure_wrapper1051=function(e,t,n){return addHeapObject(makeMutClosure(e,t,68,__wbg_adapter_30))},t.wbg.__wbindgen_closure_wrapper1054=function(e,t,n){return addHeapObject(makeMutClosure(e,t,71,__wbg_adapter_33))},t.wbg.__wbindgen_closure_wrapper1065=function(e,t,n){return addHeapObject(makeMutClosure(e,t,74,__wbg_adapter_36))},t.wbg.__wbindgen_closure_wrapper2303=function(e,t,n){return addHeapObject(makeMutClosure(e,t,63,__wbg_adapter_39))},t.wbg.__wbindgen_closure_wrapper5633=function(e,t,n){return addHeapObject(makeMutClosure(e,t,195,__wbg_adapter_42))},("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await load(await e,t);return wasm=n.exports,init.__wbindgen_wasm_module=r,wasm.__wbindgen_start(),wasm}export default init;
