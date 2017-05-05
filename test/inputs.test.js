const { expect } = require('chai');
const translate = require('../index');

describe('translator inputs', () => {
  it('should translate an input group to JSX', () => {
    expect(translate(`
<div class="input-group">
  <span class="input-group-addon" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
</div>
`).jsx).to.eql(`
<InputGroup>
  <InputGroupAddon id="basic-addon1">@</InputGroupAddon>
  <Input type="text" placeholder="Username" aria-describedby="basic-addon1"></Input>
</InputGroup>
`);
  });

  it('should handle input group sizing', () => {
    expect(translate(`
<div class="input-group input-group-lg">
</div>
<div class="input-group input-group-sm">
</div>
`).jsx).to.eql(`
<InputGroup size="lg">
</InputGroup>
<InputGroup size="sm">
</InputGroup>
`);
  });

  it('should handle input group sizing', () => {
    expect(translate(`
<div class="input-group">
  <span class="input-group-btn">
    <button class="btn btn-secondary" type="button">Go!</button>
  </span>
</div>
`).jsx).to.eql(`
<InputGroup>
  <InputGroupButton>
    <Button color="secondary">Go!</Button>
  </InputGroupButton>
</InputGroup>
`);
  });

  it('should bring in the right imports', () => {
    expect(translate(`
<div class="input-group">
  <span class="input-group-addon" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
</div>
`).module).to.contain(`import { Input, InputGroup, InputGroupAddon, }`);
  });
});
