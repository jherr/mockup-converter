const utils = require('../src/utils');

module.exports = [
  ($, imports) => {
    $('button').each((i, elem) => {
      imports.add('Button', 'reactstrap');
      elem.tagName = 'Button';
      utils.translateClassNames($(elem), {
        'btn-outline-primary': {
          color: 'primary',
          outline: true,
        },
        'btn-outline-info': {
          color: 'info',
          outline: true,
        },
        'btn-outline-success': {
          color: 'success',
          outline: true,
        },
        'btn-outline-warning': {
          color: 'warning',
          outline: true,
        },
        'btn-outline-danger': {
          color: 'danger',
          outline: true,
        },
        'btn-outline-inverse': {
          color: 'inverse',
          outline: true,
        },
        'btn-outline-link': {
          color: 'link',
          outline: true,
        },
        'btn-primary': {
          color: 'primary',
        },
        'btn-info': {
          color: 'info',
        },
        'btn-success': {
          color: 'success',
        },
        'btn-warning': {
          color: 'warning',
        },
        'btn-danger': {
          color: 'danger',
        },
        'btn-inverse': {
          color: 'inverse',
        },
        'btn-link': {
          color: 'link',
        },
        'btn-large': {
          size: 'lg',
        },
        'btn-small': {
          size: 'sm',
        },
        'btn-mini': {
          size: 'mini',
        },
        'btn-block': {
          block: true,
        },
        disabled: {
          disabled: true,
        },
      });
      utils.removeClasses($(elem), [
        'btn',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  ($, imports) => {
    $('div.btn-group').each((i, elem) => {
      imports.add('ButtonGroup', 'reactstrap');
      elem.tagName = 'ButtonGroup';
      utils.removeClasses($(elem), [
        'btn-group',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
];
