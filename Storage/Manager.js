class StorageManager { 
    
    makeStorage (key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    
    getStorage (key) {
        const value = localStorage.getItem(key)
        return JSON.parse(value)
    }

}

export default StorageManager