const { expect } = require('chai');
const translate = require('../index');

describe('translator listgroup', () => {
  it('should translate listgroup', () => {
    expect(translate(`
<ul class="list-group">
  <li class="list-group-item active">Cras justo odio</li>
  <li class="list-group-item disabled">Dapibus ac facilisis in</li>
  <li class="list-group-item list-group-item-action">Morbi leo risus</li>
  <li class="list-group-item list-group-item-info">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
`).jsx).to.eql(`
<Listgroup>
  <ListgroupItem active>Cras justo odio</ListgroupItem>
  <ListgroupItem disabled>Dapibus ac facilisis in</ListgroupItem>
  <ListgroupItem action>Morbi leo risus</ListgroupItem>
  <ListgroupItem color="info">Porta ac consectetur ac</ListgroupItem>
  <ListgroupItem>Vestibulum at eros</ListgroupItem>
</Listgroup>
`);
  });
});
