# correcthorse

> See **XKCD** for reference!

[![xkcd.png][1]][2]

# Install

```shell
npm install git+https://github.com/Tobi042/secure-correcthorse.git --save
```

# `correcthorse(options?)`

You'll get back a Promise resolving to a random, strong and readable password

```js
var correcthorse = require('correcthorse');
correcthorse().then(function(password) {
  console.log(password)
  // <- 'correct-horse-battery-staple'
});
```

You can set a couple of options.

- `length` is the minimum character length allowed (default: 16)
- `words` is the minimum word count allowed (default: 4)
- `separator` is the separator string used between random words (default: '-')
- `maxFails` is the maximum number of times the PRNG library may fail before we stop retrying (default: 10)


# CLI

```shell
$ correcthorse
correct-horse-battery-staple
```

# License

MIT

[1]: http://imgs.xkcd.com/comics/password_strength.png
[2]: http://xkcd.com/936/
