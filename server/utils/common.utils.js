const CommonUtlis = {
  generateResponse: (statusCode, message, data) => {
    console.log(`msg: ${message}, data: ${data}`);
    return {
      statusCode,
      message,
      data,
    };
  },
  customError: (status, msg) => ({
    status,
    msg,
    isCustom: true,
  }),
  removeDuplicateFromArray: (arr) => [...new Set(arr)],
  removeObjectProperties: (obj, props) => {
    for (let i in props) {
      if (obj.hasOwnProperty(i)) {
        delete obj[i];
      }
    }
    return obj;
  },
};

Object.freeze(CommonUtlis);
module.exports = CommonUtlis;