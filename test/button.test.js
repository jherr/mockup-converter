const { expect } = require('chai');
const translate = require('../index');

describe('translator button', () => {
  it('should translate a button to JSX', () => {
    expect(translate(`
<html>
  <body>
    <button class="btn">Foo</button>
  </body>
</html>`).jsx).to.eql(`
<html>
  <body>
    <Button>Foo</Button>
  </body>
</html>`);
  });

  it('should translate a button to a full module', () => {
    expect(translate(`
<html>
  <body>
    <button class="btn">Foo</button>
  </body>
</html>`).module).to.eql(`
import React from 'react';
import { Button, } from 'reactstrap';

export default () => (
  <html>
    <body>
      <Button>Foo</Button>
    </body>
  </html>
);
`);
  });

  it('should translate button sizes', () => {
    expect(translate(`
<html>
  <body>
    <button class="btn btn-large">Foo</button>
    <button class="btn btn-small">Foo</button>
    <button class="btn btn-mini">Foo</button>
    <button class="btn btn-mini bar">Foo</button>
  </body>
</html>`).jsx).to.eql(`
<html>
  <body>
    <Button size="lg">Foo</Button>
    <Button size="sm">Foo</Button>
    <Button size="mini">Foo</Button>
    <Button size="mini" className="bar">Foo</Button>
  </body>
</html>`);
  });

  it('should translate disabled', () => {
    expect(translate(`
<html>
  <body>
    <button class="btn disabled">Foo</button>
    <button class="btn disabled">Foo</button>
  </body>
</html>`).jsx).to.eql(`
<html>
  <body>
    <Button disabled>Foo</Button>
    <Button disabled>Foo</Button>
  </body>
</html>`);
  });
});
