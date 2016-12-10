import { Left, Right } from './either';

/**
 * Package up a possible `null` (or `undefined`) value
 * into a `Right` or `Left` container.
 */
const fromNullable = x =>
  x != null ? Right(x) : Left(null);

export default fromNullable;
