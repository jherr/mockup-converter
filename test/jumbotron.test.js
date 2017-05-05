const { expect } = require('chai');
const translate = require('../index');

describe('translator badges', () => {
  it('should translate jumbotron', () => {
    expect(translate(`
<div class="jumbotron">
</div>
<div class="jumbotron fluid">
</div>
`).jsx).to.eql(`
<Jumbotron>
</Jumbotron>
<Jumbotron fluid>
</Jumbotron>
`);
  });
});
