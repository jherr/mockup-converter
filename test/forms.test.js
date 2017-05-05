const { expect } = require('chai');
const translate = require('../index');

describe('translator forms', () => {
  it('should translate forms basics', () => {
    expect(translate(`
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
</form>
`).jsx).to.eql(`
<Form>
  <FormGroup>
    <Label for="exampleInputEmail1">Email address</Label>
    <Input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></Input>
  </FormGroup>
</Form>
`);
  });

  it('should translate row form-groups', () => {
    expect(translate(`
<div class="form-group row">
</div>
`).jsx).to.eql(`
<FormGroup row>
</FormGroup>
`);
  });

  it('should translate inline forms', () => {
    expect(translate(`
<form class="form-inline">
</form>
`).jsx).to.eql(`
<Form inline>
</Form>
`);
  });

  it('should translate selects', () => {
    expect(translate(`
<select class="form-control" id="exampleSelect1">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>
`).jsx).to.eql(`
<Input id="exampleSelect1" type="select">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</Input>
`);
  });

  it('should translate textarea', () => {
    expect(translate(`
<textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
`).jsx).to.eql(`
<Input id="exampleTextarea" rows="3" type="textarea"></Input>
`);
  });

  it('should translate radio', () => {
    expect(translate(`
<input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked>
`).jsx).to.eql(`
<Input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked></Input>
`);
  });

  it('should translate checkbox', () => {
    expect(translate(`
<input type="checkbox" class="form-check-input">
`).jsx).to.eql(`
<Input type="checkbox"></Input>
`);
  });

  it('should translate formtext', () => {
    expect(translate(`
<small class="form-text text-muted">foo</small>
`).jsx).to.eql(`
<FormText muted>foo</FormText>
`);
  });
});
