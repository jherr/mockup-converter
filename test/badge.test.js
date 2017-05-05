const { expect } = require('chai');
const translate = require('../index');

describe('translator badges', () => {
  it('should translate badges', () => {
    expect(translate(`
<span class="badge badge-default">Default</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-pill badge-default">Default</span>
`).jsx).to.eql(`
<Badge>Default</Badge>
<Badge color="primary">Primary</Badge>
<Badge color="success">Success</Badge>
<Badge color="info">Info</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="danger">Danger</Badge>
<Badge pill>Default</Badge>
`);
  });
});
