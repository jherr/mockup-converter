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

  it('should parse styles', () => {
    expect(translate(`
<html>
  <div style="margin-top: 50px;padding: 5px; line-height: 2em;">
  </div>
</html>
`).jsx).to.equal(`
<html>
  <div style={{marginTop: 50, padding: 5, lineHeight: '2em'}}>
  </div>
</html>
`);
  });
});
