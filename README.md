# alt-store-manager
a manager for alt store

## Features
* namespace state by store's displayName

## Examples
```js
import Manager from 'alt-store-manager'

class Item {
    constructor() {
        this.manager = new Manager(this, {
            items: []
        })
        this.bindActions(Actions)
    }
    onGet(item) {
        this.manager.set({
            item: item
        })
    }
    onGets(data) {
        this.manager.concat(data)
        //or
        this.manager.concat({
            items: data.items,//array will be concat
            item: data.total
        })
    }
}
let namespace = 'Item'
let Store = alt.createStore(Item, namespace)

import React, { PropTypes } from 'react'

class App extends mixin(Store) {
    render () {
        return (
            <div>
                {this.state.Item.item}
                {this.state.Item.items}
            </div>
        )
    }
}

export default App;
```
