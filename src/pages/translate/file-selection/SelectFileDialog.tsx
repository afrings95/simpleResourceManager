import React from 'react';
import { Button, Container, Dialog, DialogTitle } from '@material-ui/core';
import { action, computed } from 'mobx';
import './SelectFileDialog.scss';
import { observer } from 'mobx-react';

interface SelectFileDialogProps {
  open: boolean;
  onClose: () => void;
}

@observer
export class SelectFileDialog extends React.Component<SelectFileDialogProps> {
  public render() {
    return (
      <Dialog onClose={this.props.onClose} open={this.props.open}>
        <Container className='select-file-dialog'>
          <DialogTitle className='select-file-dialog-title'>
            Resource Selection
          </DialogTitle>
          <span>Select the related .resx-files you want to edit</span>
          <div className='select-file-dialog-footer'>
            <Button
              variant='contained'
              color={'primary'}
              className='select-file-dialog-footer-button'>
              Open
            </Button>
            <Button
              variant='contained'
              color={'default'}
              className='select-file-dialog-footer-button'
              onClick={this.props.onClose}>
              Dismiss
            </Button>
          </div>
        </Container>
      </Dialog>
    );
  }
}
