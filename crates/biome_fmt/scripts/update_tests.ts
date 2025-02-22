#!/usr/bin/env -S deno run --allow-read --allow-write
import { walk } from "jsr:@std/fs/walk";

import init, { format } from "../pkg/biome_fmt.js";

await init();

const test_root = new URL(import.meta.resolve("../test_data"));

for await (const entry of walk(test_root, {
    includeDirs: false,
	exts: ["html", "vue", "json", "tsx"],
})) {
    if (entry.name.startsWith(".")) {
        continue;
    }

    const expect_path = entry.path + ".snap";
    const input = Deno.readTextFileSync(entry.path);

    const actual = format(input, entry.path);
    Deno.writeTextFileSync(expect_path, actual);
}
console.log("done");
