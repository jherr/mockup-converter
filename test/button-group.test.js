const { expect } = require('chai');
const translate = require('../index');

describe('translator btn-group', () => {
  it('should translate a btn-group', () => {
    expect(translate(`
<html>
  <body>
    <div class="btn-group">Foo</div>
  </body>
</html>`).module).to.eql(`
import React from 'react';
import { ButtonGroup, } from 'reactstrap';

export default () => (
  <html>
    <body>
      <ButtonGroup>Foo</ButtonGroup>
    </body>
  </html>
);
`);
  });

  it('should translate a btn-group and preserve classes', () => {
    expect(translate(`
<html>
  <body>
    <div class="btn-group bar baz">Foo</div>
  </body>
</html>`).module).to.eql(`
import React from 'react';
import { ButtonGroup, } from 'reactstrap';

export default () => (
  <html>
    <body>
      <ButtonGroup className="bar baz">Foo</ButtonGroup>
    </body>
  </html>
);
`);
  });
});
