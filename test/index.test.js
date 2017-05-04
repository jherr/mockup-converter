const { expect } = require('chai');
const translate = require('../index');

describe('translator', () => {
  it('should handle nothing', () => {
    expect(translate('').jsx).to.eql('');
  });
});
