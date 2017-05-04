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

  fixBooleanProps(jsxString) {
    return jsxString.replace(new RegExp(`="${constants.BooleanProperty}"`), '');
  },

  fixClasses(jsxString) {
    return jsxString.replace(/\s+class=/, ' className=');
  },
};
