import { useState, useEffect } from 'react';

const useClientSideState = <T>(initialValue: T): T => {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return value;
};

export default useClientSideState;
