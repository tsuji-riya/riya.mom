import * as fs from "node:fs";

const list = [];

fs.readdirSync("./public/posts")
    .filter(file => file.endsWith(".md"))
.forEach(file => {
    const fileFs = fs.readFileSync(`./public/posts/${file}`, "utf-8");

    list.push({
        name: fileFs.split("\n")[0].replace("# ", ""),
        path: file.replace(".md", "")
    })
});

fs.existsSync("./src/generated") || fs.mkdirSync("./src/generated");
fs.writeFileSync("./src/generated/posts.json", JSON.stringify(list, null, 2), "utf-8");