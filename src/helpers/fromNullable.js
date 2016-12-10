import { Left, Right } from '../containers/either';

/**
 * Package up a possible `null` value into a
 * `Right` or `Left` container. Using `!=` over `!==`
 * allows us to catch the `undefined` case too.
 */
const fromNullable = x =>
  x != null ? Right(x) : Left(null); // eslint-disable-line

export default fromNullable;
