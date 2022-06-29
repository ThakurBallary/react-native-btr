# Icon Picker

Horizontally scrollable icons.

[Example](https://github.com/ThakurBallary/react-native-btr-demo/tree/main/src/Components/IconPicker.tsx)

### Props
Key | Type | Default
----|----|----
icons | array | [{ type: 'FontAwesome', name: 'comments' },{ type: 'FontAwesome', name: 'font' },{ type: 'FontAwesome', name: 'font-awesome' },{ type: 'FontAwesome', name: 'rocket' },{ type: 'MaterialCommunityIcons', name: 'account-circle' },{ type: 'MaterialCommunityIcons', name: 'alarm' },{ type: 'MaterialCommunityIcons', name: 'apps' },{ type: 'MaterialCommunityIcons', name: 'attachment' },{ type: 'MaterialCommunityIcons', name: 'autorenew' },{ type: 'MaterialCommunityIcons', name: 'check' },{ type: 'MaterialCommunityIcons', name: 'close' },{ type: 'MaterialCommunityIcons', name: 'layers' },{ type: 'MaterialCommunityIcons', name: 'star' }]
selectedIcon | { type?: string, name: string } | { type: 'FontAwesome', name: 'comments' }
onSelect | function | selectedIcon => alert(selectedIcon) 
