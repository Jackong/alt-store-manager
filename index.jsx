class Manager {
    constructor(store, state) {
        store.state = {}
        this.state = store.state[store.displayName] = state
    }
    get(name) {
        return !name ? this.state : this.state[name]
    }
    set(state) {
        for (let key in state) {
            if (!state.hasOwnProperty(key)) {
                continue
            }
            this.state[key] = state[key]
        }
    }
    concat(state) {
        for (var key in state) {
            if (!state.hasOwnProperty(key)) {
                continue
            }
            let value = state[key]
            if (value instanceof Array) {
                this.state[key] = this.state[key] ? this.state[key] : []
                this.state[key] = this.state[key].concat(value)
                return
            }
            this.state[key] = value
        }
    }
}

export default Manager
