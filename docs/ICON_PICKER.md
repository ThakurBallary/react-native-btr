# Icon Picker

###### Note: Please bear with the current documentation. Docs will be updated soon.

Horizontally scrollable icons.

### Props
Key | Type | Default
----|----|----
icons | array | ['account', 'account-multiple', 'airplane', 'alarm', 'alert-circle', 'apps', 'attachment', 'auto-fix', 'autorenew', 'briefcase', 'check', 'close', 'currency-usd', 'food-fork-drink', 'google-analytics', 'help-circle', 'layers', 'library', 'pencil', 'star', 'subway-variant', 'white-balance-incandescent'],
selectedIcon | string | 'account'
onSelect | function | selectedIcon => alert(selectedIcon) 

### Usage
```
import { IconPicker } from 'react-native-btr';

state = {
    selectedIcon: 'account'
}

<IconPicker 
  selectedIcon={this.state.selectedIcon}
  onSelect={selectedIcon => this.setState({selectedIcon})}
/>
``` 