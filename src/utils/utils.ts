import { IKeyValuePromise } from "../types/types";

export function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: NodeJS.Timeout;
  return function(...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export async function getAllPromisesSettled<T>(promises: IKeyValuePromise<T>[]): Promise<Record<string, T>>{
  const results = await Promise.allSettled(promises.map(o => o.value));
  const fulfilledResults: Record<string, T> = {};

  promises.forEach((promise, index) => {
    const result = results[index];
    if (result.status === "fulfilled"){
      fulfilledResults[promise.key] = result.value;
    }
  });
  return fulfilledResults;
}

export const sanitizeString = (str: string): string => {
  return str.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
};