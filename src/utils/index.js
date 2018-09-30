let idCounter = 0;

/**
 * Generate a unique integer id (unique within the entire client session).
 * Useful for temporary DOM ids.
 *
 * Based on: https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1509-L1515
 *
 * @param {string} [prefix]
 * @returns {string}
 */
export function uniqueId(prefix) {
  const id = `${++idCounter}`;
  return prefix ? prefix + id : id;
}
