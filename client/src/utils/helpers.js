export const isEmailValid = (email) => {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

export const objectConvertQueryString = params => {
  if (Object.entries(params).length > 0) {
    const paramString = Object.entries(params).reduce((res, [key, value], index) => {
      let queryString = '';

      const valueString = JSON.stringify(value);
      if (index > 0) {
        queryString = `&${key}=${valueString}`;
      } else {
        queryString = `${key}=${valueString}`;
      }
      return res + queryString;
    }, '?');

    return paramString;
  }
  return '';
};

export const queryStringConvertObject = queryString => {
  if (queryString === null || queryString === '' || queryString === undefined) {
    return {};
  }
  const decodedQueryString = decodeURI(queryString);

  const pattern = /([?]|[&])/g;
  const splitedQuery = decodedQueryString.split(pattern);

  const queryObject = {};
  splitedQuery.forEach(item => {
    if (item.indexOf('=') !== -1) {
      const keyValue = item.split('=');
      if (keyValue[1].indexOf('[') !== -1 || keyValue[1].indexOf('{') !== -1) {
        queryObject[keyValue[0]] = JSON.parse(keyValue[1]);
      } else {
        // queryObject[keyValue[0]] = keyValue[1];
        queryObject[keyValue[0]] = JSON.parse(keyValue[1]);
      }
    }
  });
  // console.log(queryObject, 'newArray');
  return queryObject;
};