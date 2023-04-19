import { useEffect, useRef, useState } from "react";

/**
 * A copy of `useMemo`, but guaranteeing that the
 * passed function is only re-run when it changes.
 *
 * It expects your function to be wrapped in a
 * `useCallback` with a dependency array. Don't
 * pass the dependency array directly here.
 *
 * (React's `useMemo` can throw away the result
 * and re-run the function at any time, even if
 * the runtime doesn't currently do it.)
 */
export const useStrictMemo = <T>(fn: () => T) => {
  const storedFn = useRef(fn);
  const [state, setState] = useState(fn);

  useEffect(() => {
    if (storedFn.current !== fn) {
      storedFn.current = fn;
      setState(fn());
    }
  }, [fn]);

  return state;
};
