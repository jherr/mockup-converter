const utils = require('../src/utils');
const constants = require('../src/constants');

module.exports = [
  // ListgroupItem
  ($, imports) => {
    $('li.list-group-item').each((i, elem) => {
      imports.add('ListgroupItem', 'reactstrap');
      elem.tagName = 'ListgroupItem';
      utils.translateClassNames($(elem), {
        active: {
          active: true,
        },
        disabled: {
          disabled: true,
        },
        'list-group-item-action': {
          action: true,
        },
        'list-group-item-success': {
          color: 'success',
        },
        'list-group-item-info': {
          color: 'info',
        },
        'list-group-item-warning': {
          color: 'warning',
        },
        'list-group-item-danger': {
          color: 'danger',
        },
      });
      utils.removeClasses($(elem), [
        'list-group-item',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // Listgroup
  ($, imports) => {
    $('ul.list-group').each((i, elem) => {
      imports.add('Listgroup', 'reactstrap');
      elem.tagName = 'Listgroup';
      utils.translateClassNames($(elem), {
        fluid: {
          fluid: true,
        },
      });
      utils.removeClasses($(elem), [
        'list-group',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // Jumbotron
  ($, imports) => {
    $('div.jumbotron').each((i, elem) => {
      imports.add('Jumbotron', 'reactstrap');
      elem.tagName = 'Jumbotron';
      utils.translateClassNames($(elem), {
        fluid: {
          fluid: true,
        },
      });
      utils.removeClasses($(elem), [
        'jumbotron',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // BreadcrumbItem
  ($, imports) => {
    $('li.breadcrumb-item').each((i, elem) => {
      imports.add('BreadcrumbItem', 'reactstrap');
      elem.tagName = 'BreadcrumbItem';
      utils.translateClassNames($(elem), {
        active: {
          active: true,
        },
      });
      utils.removeClasses($(elem), [
        'breadcrumb-item',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // Breadcrumb
  ($, imports) => {
    $('ol.breadcrumb').each((i, elem) => {
      imports.add('Breadcrumb', 'reactstrap');
      elem.tagName = 'Breadcrumb';
      utils.removeClasses($(elem), [
        'breadcrumb',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // Badge
  ($, imports) => {
    $('span.badge').each((i, elem) => {
      imports.add('Badge', 'reactstrap');
      elem.tagName = 'Badge';
      utils.translateClassNames($(elem), {
        'badge-primary': {
          color: 'primary',
        },
        'badge-success': {
          color: 'success',
        },
        'badge-info': {
          color: 'info',
        },
        'badge-warning': {
          color: 'warning',
        },
        'badge-danger': {
          color: 'danger',
        },
        'badge-pill': {
          pill: true,
        },
      });
      utils.removeClasses($(elem), [
        'badge',
        'badge-default',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // Modal - remove modal-content
  ($) => {
    $('div.modal-content').each((i, elem) => {
      $(elem).children().each((ci, child) => {
        $(child).insertBefore($(elem));
      });
      $(elem).remove();
    });
  },
  // Modal - remove top tag
  ($) => {
    $('div.modal').each((i, elem) => {
      $(elem).children().each((ci, child) => {
        $(child).insertBefore($(elem));
      });
      $(elem).remove();
    });
  },
  // Modal
  ($, imports) => {
    $('div.modal-dialog').each((i, elem) => {
      imports.add('Modal', 'reactstrap');
      elem.tagName = 'Modal';
      utils.removeClasses($(elem), [
        'modal-dialog',
      ]);
      $(elem).attr('role', null);
      utils.finalizeClasses($(elem));
    });
  },
  // ModalFooter
  ($, imports) => {
    $('div.modal-footer').each((i, elem) => {
      imports.add('ModalFooter', 'reactstrap');
      elem.tagName = 'ModalFooter';
      utils.removeClasses($(elem), [
        'modal-footer',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // ModalBody
  ($, imports) => {
    $('div.modal-body').each((i, elem) => {
      imports.add('ModalBody', 'reactstrap');
      elem.tagName = 'ModalBody';
      utils.removeClasses($(elem), [
        'modal-body',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // ModalHeader
  ($, imports) => {
    $('div.modal-header').each((i, elem) => {
      imports.add('ModalHeader', 'reactstrap');
      elem.tagName = 'ModalHeader';
      utils.removeClasses($(elem), [
        'modal-header',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // CardBlock
  ($, imports) => {
    $('div.card-block').each((i, elem) => {
      imports.add('CardBlock', 'reactstrap');
      elem.tagName = 'CardBlock';
      utils.removeClasses($(elem), [
        'card-block',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // Card
  ($, imports) => {
    $('div.card').each((i, elem) => {
      imports.add('Card', 'reactstrap');
      elem.tagName = 'Card';
      utils.removeClasses($(elem), [
        'card',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // Collapse
  ($, imports) => {
    $('div.collapse').each((i, elem) => {
      imports.add('Collapse', 'reactstrap');
      elem.tagName = 'Collapse';
      utils.removeClasses($(elem), [
        'collapse',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // Container
  ($, imports) => {
    $('div.container').each((i, elem) => {
      imports.add('Container', 'reactstrap');
      elem.tagName = 'Container';
      utils.translateClassNames($(elem), {
        fluid: {
          fluid: true,
        },
      });
      utils.removeClasses($(elem), [
        'container',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // CheckBox
  ($, imports) => {
    $('input[type="checkbox"].form-check-input').each((i, elem) => {
      imports.add('Input', 'reactstrap');
      elem.tagName = 'Input';
      utils.removeClasses($(elem), [
        'form-check-input',
      ]);
      $(elem).attr('type', 'checkbox');
      utils.finalizeClasses($(elem));
    });
  },
  // Radio
  ($, imports) => {
    $('input.form-check-input').each((i, elem) => {
      imports.add('Input', 'reactstrap');
      elem.tagName = 'Input';
      utils.removeClasses($(elem), [
        'form-check-input',
      ]);
      $(elem).attr('type', 'radio');
      utils.finalizeClasses($(elem));
    });
  },
  // FormText
  ($, imports) => {
    $('small.form-text').each((i, elem) => {
      imports.add('FormText', 'reactstrap');
      elem.tagName = 'FormText';
      utils.translateClassNames($(elem), {
        'text-muted': {
          muted: true,
        },
      });
      utils.removeClasses($(elem), [
        'form-text',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // Textarea
  ($, imports) => {
    $('textarea.form-control').each((i, elem) => {
      imports.add('Input', 'reactstrap');
      elem.tagName = 'Input';
      utils.removeClasses($(elem), [
        'form-control',
      ]);
      $(elem).attr('type', 'textarea');
      utils.finalizeClasses($(elem));
    });
  },
  // Select
  ($, imports) => {
    $('select.form-control').each((i, elem) => {
      imports.add('Input', 'reactstrap');
      elem.tagName = 'Input';
      utils.removeClasses($(elem), [
        'form-control',
      ]);
      $(elem).attr('type', 'select');
      utils.finalizeClasses($(elem));
    });
  },
  // Label
  ($, imports) => {
    $('label').each((i, elem) => {
      imports.add('Label', 'reactstrap');
      elem.tagName = 'Label';
      utils.finalizeClasses($(elem));
    });
  },
  // FormGroup
  ($, imports) => {
    $('div.form-group').each((i, elem) => {
      imports.add('FormGroup', 'reactstrap');
      elem.tagName = 'FormGroup';
      utils.translateClassNames($(elem), {
        row: {
          row: true,
        },
      });
      utils.removeClasses($(elem), [
        'form-group',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // Form
  ($, imports) => {
    $('form').each((i, elem) => {
      imports.add('Form', 'reactstrap');
      utils.translateClassNames($(elem), {
        'form-inline': {
          inline: true,
        },
      });
      elem.tagName = 'Form';
      utils.finalizeClasses($(elem));
    });
  },
  // Row
  ($, imports) => {
    $('div.row').each((i, elem) => {
      imports.add('Row', 'reactstrap');
      elem.tagName = 'Row';
      utils.translateClassNames($(elem), {
        'no-gutter': {
          noGutter: true,
        },
      });
      utils.removeClasses($(elem), [
        'row',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // DropdownItem
  ($, imports) => {
    $('div.dropdown-divider').each((i, elem) => {
      imports.add('DropdownItem', 'reactstrap');
      elem.tagName = 'DropdownItem';
      $(elem).attr('divider', constants.BooleanProperty);
      $(elem).attr('role', null);
      utils.removeClasses($(elem), [
        'dropdown-divider',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // DropdownItem
  ($, imports) => {
    $('a.dropdown-item').each((i, elem) => {
      imports.add('DropdownItem', 'reactstrap');
      elem.tagName = 'DropdownItem';
      utils.removeClasses($(elem), [
        'dropdown-item',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // DropdownMenu
  ($, imports) => {
    $('div.dropdown-menu').each((i, elem) => {
      imports.add('DropdownMenu', 'reactstrap');
      elem.tagName = 'DropdownMenu';
      utils.removeClasses($(elem), [
        'dropdown-menu',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // DropdownToggle
  ($, imports) => {
    $('button.dropdown-toggle').each((i, elem) => {
      imports.add('DropdownToggle', 'reactstrap');
      elem.tagName = 'DropdownToggle';
      utils.removeClasses($(elem), [
        'btn',
        'dropdown-toggle',
      ]);
      $(elem).attr('type', null);
      utils.finalizeClasses($(elem));
    });
  },
  // Button
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
        'btn-outline-secondary': {
          color: 'secondary',
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
        'btn-secondary': {
          color: 'secondary',
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
      $(elem).attr('type', null);
      utils.finalizeClasses($(elem));
    });
  },
  // ButtonGroup
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
  // InputGroup
  ($, imports) => {
    $('div.input-group').each((i, elem) => {
      imports.add('InputGroup', 'reactstrap');
      elem.tagName = 'InputGroup';
      utils.translateClassNames($(elem), {
        'input-group-lg': {
          size: 'lg',
        },
        'input-group-sm': {
          size: 'sm',
        },
      });
      utils.removeClasses($(elem), [
        'input-group',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // Input
  ($, imports) => {
    $('input.form-control').each((i, elem) => {
      imports.add('Input', 'reactstrap');
      elem.tagName = 'Input';
      utils.removeClasses($(elem), [
        'form-control',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // InputGroupAddon
  ($, imports) => {
    $('span.input-group-addon').each((i, elem) => {
      imports.add('InputGroupAddon', 'reactstrap');
      elem.tagName = 'InputGroupAddon';
      utils.removeClasses($(elem), [
        'input-group-addon',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
  // InputGroupButton
  ($, imports) => {
    $('span.input-group-btn').each((i, elem) => {
      imports.add('InputGroupButton', 'reactstrap');
      elem.tagName = 'InputGroupButton';
      utils.removeClasses($(elem), [
        'input-group-btn',
      ]);
      utils.finalizeClasses($(elem));
    });
  },
];
