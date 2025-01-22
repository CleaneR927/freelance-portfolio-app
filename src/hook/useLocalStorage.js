import { useEffect, useState } from 'react';

/*
  useLocalStorage — это кастомный хук для React, который позволяет сохранять и 
  извлекать значения из localStorage с автоматической синхронизацией состояния. 
  Он упрощает работу с localStorage, предоставляя удобный интерфейс для хранения данных.
*/

function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (error) {
      console.error(
        `Ошибка при парсинге значения из localStorage для ключа "${key}":`,
        error
      );
      return defaultValue;
    }
  }
  return defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
