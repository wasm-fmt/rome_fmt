import initAsync from "./web_fmt.js";
import wasm from "./web_fmt_bg.wasm?url";

export default function __wbg_init(input = wasm) {
	return initAsync(input);
}

export * from "./web_fmt.js";
