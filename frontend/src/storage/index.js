let storage

const getItem = (name) => {
  try {
    return storage.getItem(name)
  } catch (e) {
    throw e
  }
}

const setItem = (name, value) => {
  try {
    storage.setItem(name, value)
  } catch (e) {
    throw e
  }
}

const setStorage = (instance) => {
  if (!instance) {
    throw 'You must provide an instance of your storage'
  }

  storage = instance
}

export default { setStorage, getItem, setItem }
