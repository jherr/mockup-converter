const { expect } = require('chai');
const translate = require('../index');

describe('translator', () => {
  it('should handle nothing', () => {
    expect(translate('').jsx).to.eql('');
  });

  it('should turn class into className', () => {
    expect(translate(`
<html>
  <div class="foo">
  </div>
</html>
`).jsx).to.equal(`
<html>
  <div className="foo">
  </div>
</html>
`);
  });
});
