/**
 * Class represents the mathematical set, with all it entails:
 *  - set cannot have duplicate elements in it
 *  - any set operation returns set
 */
export class Set {
  /**
   * @param {Iterable.<*>} iterable - any iterable
   */
  constructor(iterable) {
    /**
     * @private
     * @property {Array} __values - inner storage
     */
    this.__values = [];

    for (const i of iterable) {
      if (this.__values.indexOf(i) === -1) {
        this.__values.push(i);
      }
    }
  }

  /** set is iterable */
  [Symbol.iterator]() {
    return this.__values[Symbol.iterator]();
  }

  /**
   * Checks if passed set is a superSet of current set
   * @param {Set} set - set to check
   * @return {Boolean}
   */
  isSubset(set) {
    const arrSet = [...set];

    return this.__values.every(el => arrSet.indexOf(el) !== -1);
  }

  /**
   * Checks if passed set is a subset of current set
   * @param {Set} set - set to check
   * @return {Boolean}
   */
  isSuperset(set) {
    return [...set].every(el => this.__values.indexOf(el) !== -1);
  }

  /**
   * Check if element is part of current set
   * @param {*} element
   * @return {Boolean}
   */
  isIn(element) {
    return this.__values.indexOf(element) !== -1;
  }

  /**
   * Returns a set with elements from both sets
   * @param {Set} set - set to use
   * @return {Set} union of two sets
   */
  union(set) {
    return new Set([...this.__values, ...set]);
  }

  /**
   * Returns a set with elements that were present in both sets
   * @param {Set} set - set to use
   * @return {Set} intersection of two sets
   */
  intersection(set) {
    return new Set([...set]
      .filter(el => this.__values.indexOf(el) !== -1));
  }

  /**
   * Returns a set with elements that were in current set,
   * but not in passed one
   * @param {Set} set - set to use
   * @return {Set} difference of two sets
   */
  difference(set) {
    const arrSet = [...set];

    return new Set(this.__values
      .filter(el => arrSet.indexOf(el) === -1)
    );
  }
}
