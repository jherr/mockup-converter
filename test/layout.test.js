const { expect } = require('chai');
const translate = require('../index');

describe('translator layout', () => {
  it('should translate containers', () => {
    expect(translate(`
<div class="container">
</div>
<div class="container fluid">
</div>
`).jsx).to.eql(`
<Container>
</Container>
<Container fluid>
</Container>
`);
  });

  it('should translate rows', () => {
    expect(translate(`
<div class="row">
</div>
<div class="row no-gutter">
</div>
`).jsx).to.eql(`
<Row>
</Row>
<Row noGutter>
</Row>
`);
  });
});
