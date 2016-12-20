import { Left, Right } from '../containers/either';

/**
 * Package up a possible `null` value into a
 * `Right` or `Left` container. Using `!=` over `!==`
 * allows us to catch the `undefined` case too.
 * @param {*} x - A value which might be null or undefined
 * @return {Either} leftOrRight - A `Right` of the value or an empty `Left`
 */
const fromNullable = x =>
  x != null ? Right(x) : Left(null); // eslint-disable-line

export default fromNullable;
