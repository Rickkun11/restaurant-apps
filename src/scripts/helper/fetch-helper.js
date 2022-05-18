import CONFIG from '../global/config';


const getData = async (url) => {
  const response = await fetch(url);
  return await checkResponse(response);
};

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': CONFIG.AUTH_TOKEN,
    },
    body: JSON.stringify(data),
  });
  return await checkResponse(response);
};


/**
 *
 * @param {Response} response
 * @return {Promise}
 */
const checkResponse = async (response) => {
  try {
    return await response.json();
  } catch (error) {
    throw new Error('Terjadi kesalahan saat memproses data.');
  }
};

export {getData, postData};
