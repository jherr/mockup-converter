const { expect } = require('chai');
const translate = require('../index');

describe('translator modal', () => {
  it('should translate modal', () => {
    expect(translate(`
<div class="modal fade">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`).jsx).to.eql(`
<Modal>
    <ModalHeader>
        <h5 className="modal-title">Modal title</h5>
      </ModalHeader><ModalBody>
        <p>Modal body text goes here.</p>
      </ModalBody><ModalFooter>
        <Button color="primary">Save changes</Button>
        <Button data-dismiss="modal" color="secondary">Close</Button>
      </ModalFooter>
  </Modal>
`);
  });
});
