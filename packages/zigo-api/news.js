ZigoApiNews= {
  getNews: function (_args, _callback) {
    const datas = {
      params: _args,
      isAuthorized: false,
      method: 'GET',
    };
    
    ZigoApi.call('/news/getNews', datas, _callback);
  },
};