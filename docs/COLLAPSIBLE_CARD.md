# CollapsibleCard

###### Note: Please bear with the current documentation. Docs will be updated soon.

CollapsibleCard is a card with HIDE & SHOW feature.

### Props
Key | Type | Default
----|----|----
visibleByDefault | boolean | false
style | object |  
title | string | 
titleStyle | object |
iconUp | string | chevron-up 
iconDown | string | chevron-down 
iconStyle | object |

### Usage
```
import { CollapsibleCard } from 'react-native-btr';

<CollapsibleCard 
    visibleByDefault={false}
    title='Categories'
    iconUp='chevron-up'
    iconDown='chevron-down'
>
    <Text>Content of CollapsibleCard</Text>
</CollapsibleCard>

<CollapsibleCard />
``` 