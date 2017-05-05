const { expect } = require('chai');
const translate = require('../index');

describe('translator dropdown', () => {
  it('should translate an input group to JSX', () => {
    expect(translate(`
<button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Action
</button>
`).jsx).to.eql(`
<DropdownToggle data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn-secondary">
  Action
</DropdownToggle>
`);
  });

  it('should translate an input group to JSX', () => {
    expect(translate(`
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a>
  <div role="separator" class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">Separated link</a>
</div>
`).jsx).to.eql(`
<DropdownMenu>
  <DropdownItem href="#">Action</DropdownItem>
  <DropdownItem href="#">Another action</DropdownItem>
  <DropdownItem href="#">Something else here</DropdownItem>
  <DropdownItem divider></DropdownItem>
  <DropdownItem href="#">Separated link</DropdownItem>
</DropdownMenu>
`);
  });
});
