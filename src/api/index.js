import queryString from 'query-string';
import CONFIGS from './../configs';

function loadUsers (options) {
  const defaultOptions = {
    page: 1,
    results: 10,
    seed: CONFIGS.RESULTS_ORDER,
    inc: CONFIGS.INCLUDING_RESULTS,
  };

  const realOptions = {
    ...defaultOptions,
    ...options,
  };

  const queryStringfiedOptions = queryString.stringify(realOptions, {
    arrayFormat: 'comma',
  });

  return fetch(`${CONFIGS.BASE_URL}?${queryStringfiedOptions}`).then(response =>
    response.json()
  );
}
export default loadUsers;
