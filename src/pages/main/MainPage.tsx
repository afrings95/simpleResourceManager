import React from 'react';
import { observer } from 'mobx-react';
import { TranslatePage } from '../translate/TranslatePage';

interface MainPageProps {}
@observer
export class MainPage extends React.Component<MainPageProps> {
  render() {
    return (
      <div>
        <TranslatePage></TranslatePage>
      </div>
    );
  }
}
