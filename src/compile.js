const Handlebars = require("handlebars");
const Filter = require("handlebars.filter");
const fs = require('fs');

Filter.registerHelper(Handlebars);

let projects = JSON.parse(fs.readFileSync('src/projects.json', 'utf8'));

projects.forEach((p) => {
  let template = Handlebars.compile(fs.readFileSync(`src/templates/${ p.template }`, 'utf8'));
  fs.writeFile(`./${p.path}.html`, template(p), (err) => {
    if (err) throw err;
    console.log(`${p.title} compiled successfully`);
  });
});
