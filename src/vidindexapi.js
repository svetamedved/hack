function queryParams(source) {
  var array = [];

  for(var key in source) {
     array.push(encodeURIComponent(key) + "=" + encodeURIComponent(source[key]));
  }

  return array.join("&");
}


async function GetAccessToken() {
    var params = {
        // Request parameters
        "allowEdit": "False",
    };

    const response = await fetch('https://api.videoindexer.ai/auth/eastus/Accounts/7a3df00b-3b38-4886-919e-6ffc5246e42d/AccessToken?' + queryParams(params),
      {
        method: 'GET',
      mode: 'cors',
      headers: {
        "Ocp-Apim-Subscription-Key": "83b63be4ec4c4545ac245ff80a37799c"
      }
    });

    let result = await response.json();

    console.log(result);

}

export default GetAccessToken;
