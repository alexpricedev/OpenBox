import { Left, Right } from '../containers/either';

/**
 * Package up a possible exception into a
 * `Right` or `Left` container.
 * @param {Function} f - A function to call
 * @return {Either} leftOrRight - A `Right` of the value or an empty `Left`
 */
const tryCatch = f => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

export default tryCatch;
