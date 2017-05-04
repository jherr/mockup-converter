const parseStyles = require('style-parser');
const camelCase = require('camelcase');

const constants = require('./constants');

module.exports = {
  removeClasses(elem, classes) {
    classes.forEach(cls => elem.removeClass(cls));
  },

  finalizeClasses(elem) {
    const cls = elem.attr('class') || '';
    if (cls.trim().length > 0) {
      elem.attr('className', cls.trim());
    }
    elem.attr('class', null);
  },

  translateClassNames(elem, classMap) {
    for (const clName in classMap) {
      if (elem.hasClass(clName)) {
        for (const prop in classMap[clName]) {
          if (typeof classMap[clName][prop] === 'string') {
            elem.attr(prop, classMap[clName][prop]);
          } else {
            elem.attr(prop, constants.BooleanProperty);
          }
        }
      }
      this.removeClasses(elem, [
        clName,
      ]);
    }
  },

  fixProps(jsxString) {
    let outString = jsxString.replace(new RegExp(`="${constants.BooleanProperty}"`, 'g'), '');
    outString = outString.replace(/="@@@(.*?)@@@"/g, (found, group1) => {
      const fixGroup1 = group1.replace(/&apos;/g, '\'');
      return `=${fixGroup1}`;
    });
    return outString;
  },

  fixClasses(jsxString) {
    return jsxString.replace(/\s+class=/, ' className=');
  },

  fixStyleValue(value) {
    const f = value.match(/(\d+)px/);
    if (f) {
      return parseInt(f[1], 10);
    }
    return value;
  },

  fixStyles($) {
    $('[style]').each((i, elem) => {
      const styles = parseStyles($(elem).attr('style'));
      const outStyles = {};
      for (const k in styles) {
        outStyles[camelCase(k)] = this.fixStyleValue(styles[k]);
      }
      const jsStyles = JSON.stringify(outStyles)
        .replace(/"/g, '\'')
        .replace(/'(\w+)':/g, '$1: ')
        .replace(/: (\w+),/g, ': $1, ');
      $(elem).attr('style', `@@@{${jsStyles}}@@@`);
    });
  },
};
