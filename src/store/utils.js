/**
 * Returns a function that will return namespaced types.
 * @param {string} [ns]
 * @returns {function(string): string}
 */
export const generateNamespaceType = ns => type => (ns ? `${ns}/${type}` : type);

export const exportModule = (ns, config) => ({ [ns]: config });
