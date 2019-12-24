const fs = require("fs");

const filename = process.argv[2]

const content = fs.readFileSync(filename, "utf8");

const index = content.indexOf("\n");

const fieldNames = content.slice(0, index);

const updatedFieldNames = fieldNames.split(",").map((item, i) => {
  if (
    item.indexOf("conditions_") < 0 &&
    item.indexOf("offers_") < 0 &&
    item.indexOf("text_") < 0 &&
    item.indexOf("category_") < 0
  )
    return item;

  const index = item.indexOf("_");
  const type = item.slice(0, index);
  return `${item.slice(index + 1)}__${type}`;
});

const updatedContent = `${updatedFieldNames}${content.slice(index)}`

const newFileName = `${filename.slice(0,-4)}_new.csv`

fs.writeFileSync(newFileName, updatedContent)

console.log(`Written to ${newFileName}`)
