const { expect } = require('chai');
const translate = require('../index');

describe('translator collapse', () => {
  it('should translate collapse', () => {
    expect(translate(`
<div class="collapse">
  <div class="card">
    <div class="card-block">
      Foo
    </div>
  </div>
</div>
`).jsx).to.eql(`
<Collapse>
  <Card>
    <CardBlock>
      Foo
    </CardBlock>
  </Card>
</Collapse>
`);
  });
});
