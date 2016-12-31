OpenBox
===========

[![Code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript)

> OpenBox - A collection of simple funcational tools for everyday programming use

This project is currently a fun way for me to solidify my knowledge of
functional programming in JS, testing and documentation writing. That being
said, it's limited feature set production ready and being used in
[Proovi.io](http://proovi.io);

It is based off the material from Brian Lonsdorf's excellent tutorial
series on [egghead.io](https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript).
Along with help from Chet Harrison's
[A Gentle Introduction to Functional JavaScript](https://github.com/ChetHarrison/A-Gentle-Introduction-to-Functional-JavaScript).

I've been writing notes about my experience learning FP in JS in the Wiki of
this project.

This project follows the [Fantasy Land spec](https://github.com/fantasyland/fantasy-land).


## Containers (types)

- [x] Box (functor)
  - [ ] ap method ([apply](https://github.com/fantasyland/fantasy-land#apply))
  - [x] of method ([applicative](https://github.com/fantasyland/fantasy-land#applicative))
    - Further tests needed
  - [ ] chain method ([chain](https://github.com/fantasyland/fantasy-land#chain))
- [ ] Either
  - [ ] Todo...


### Build
```sh
yarn build-all
```

### Test
```sh
yarn test
```


### Thanks to
- Brian Lonsdorf ([@drboolean](https://twitter.com/drboolean))
- Chet Harrison ([@chetharrison](https://twitter.com/chetharrison))
- [ES6 Library Minimal](https://www.npmjs.org/package/es6-library-minimal) starter kit


## License
MIT
