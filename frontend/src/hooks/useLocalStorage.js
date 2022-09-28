import { useEffect, useState } from 'react'

import storage from '../storage'

function getStorageValue(key) {
  const saved = storage.getItem(key)
  return JSON.parse(saved)
}

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    storage.setStorage(localStorage)

    try {
      const storedValue = getStorageValue(key)
      setValue(storedValue)
    } catch (e) {
      console.log(e)
    }
  }, [])

  useEffect(() => {
    if (!value) return
    storage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
