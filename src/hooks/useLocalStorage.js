import { useEffect, useState } from "react";

// 1. Create function useLocalStorage(key, initialValue)
// 2. Create state to store value
// 3. Get value from local storage and parse it
// 4. Set value to local storage with useEffect
// 5. Retrun localstorage and setLocalstorage with new value

export function useLocalStorage(key, initialValue = null) {
  const [localstorage, setLocalstorage] = useState(() => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localstorage));
  }, [key, initialValue, localstorage]);

  return [localstorage, setLocalstorage];
}
