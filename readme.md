# React Hook utils

```sh
$ npm i -D @cprecioso/react-hooks       # if you use npm
$ yarn add --dev @cprecioso/react-hooks # if you use yarn
```

## `useStrictMemo`

```js
import { useStrictMemo } from "@cprecioso/react-hooks";

const SpotifyPlayer = ({ loginToken }) => {
  const makePlayer = useCallback(
    () => new Spotify.Player({ loginToken }),
    [loginToken]
  );

  const player = useStrictMemo(makePlayer);

  return <button onClick={() => player.start()}>Play</button>;
};
```

A copy of `useMemo`, but guaranteeing that the passed function is only re-run
when it changes.

It expects your function to be wrapped in a `useCallback` with a dependency
array. Don't pass the dependency array directly here.

> React's `useMemo` can throw away the result and re-run the function at any
> time, even if the runtime doesn't currently do it.
