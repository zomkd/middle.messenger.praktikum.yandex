export function stringToQuery(data = {}) {
  return Object.entries(data).reduce((query: string, [k, v]) => {
    const divider = query === '' ? '?' : '&';

    query += `${divider}${k}=${v}`;
    return query;
  }, '');
}
