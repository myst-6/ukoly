import { useEffect, useState } from "react";

export const useGroup = <T,>(all: T[], fun: (allowed: T[]) => void) => {
  const [value, setValue] = useState(all);

  const toggle = (item: T) => {
    setValue(value => {
      if (value.includes(item)) {
        const pos = value.indexOf(item);
        return [...value.slice(0, pos), ...value.slice(pos + 1)];
      } else {
        return [...value, item];
      }
    });
  };

  const toggleAll = () => {
    setValue(value => {
      if (value.length === 0) {
        return all;
      } else {
        return [];
      }
    });
  };

  useEffect(() => {
    fun(value);
  }, [value, fun]);

  return { value, toggle, toggleAll };
};