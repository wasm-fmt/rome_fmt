import initAsync from "./biome_fmt.js";
import wasm from "./biome_fmt_bg.wasm?url";

export default function __wbg_init(input = { module_or_path: wasm }) {
	return initAsync(input);
}

export * from "./biome_fmt.js";
