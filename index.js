const cheerio = require('cheerio');
const indentString = require('indent-string');

const utils = require('./src/utils');
const bootstrapRules = require('./rules/bootstrap');

const createImports = (imports) => {
  let output = '';

  for (const imp in imports.libraries) {
    const components = [];
    for (const comp in imports.libraries[imp]) {
      components.push(comp);
    }
    output += `import { ${components.sort().join(', ')}, } from '${imp}';` + "\n";
  }

  return output;
};

module.exports = (html, ruleSet = bootstrapRules) => {
  const $ = cheerio.load(html);

  const imports = {
    libraries: {},
    add(name, library) {
      if (this.libraries[library] === undefined) {
        this.libraries[library] = {};
      }
      this.libraries[library][name] = true;
    },
  };

  ruleSet.forEach(rule => rule($, imports));

  utils.fixStyles($);

  let jsx = utils.fixProps($.html());
  jsx = utils.fixClasses(jsx);

  const module = `
import React from 'react';
${createImports(imports)}
export default () => (
${indentString(jsx.trim(), 2)}
);
`;

  return {
    jsx,
    module,
  };
};

module.exports.bootstrapRules = bootstrapRules;
