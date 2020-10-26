import React from 'react';
import { observer } from 'mobx-react';

import { SelectFileDialog } from './file-selection/SelectFileDialog';
import { action, observable } from 'mobx';

interface TranslatePageProps {}

@observer
export class TranslatePage extends React.Component<TranslatePageProps> {
  @observable private selectionDialogOpen: boolean = true;

  public render() {
    return (
      <div>
        <SelectFileDialog
          open={this.selectionDialogOpen}
          onClose={this.handleDialogClose}
        />
      </div>
    );
  }

  @action
  private handleDialogClose = () => {
    console.log('Called', this.selectionDialogOpen);
    this.selectionDialogOpen = false;
  };
}
