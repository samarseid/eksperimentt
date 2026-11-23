import "../_runtime.mjs";
import { require_react } from "./react.mjs";
import { createContextScope } from "./radix-ui__react-context.mjs";
import { require_jsx_runtime } from "./react2.mjs";
require_react();
require_jsx_runtime();
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var [PopperContentProvider, useContentContext] = createPopperContext("PopperContent");
function isNotNull(value) {
	return value !== null;
}
__name(isNotNull, "isNotNull");
function getSideAndAlignFromPlacement(placement) {
	const [side, align = "center"] = placement.split("-");
	return [side, align];
}
__name(getSideAndAlignFromPlacement, "getSideAndAlignFromPlacement");
export { createPopperScope };
