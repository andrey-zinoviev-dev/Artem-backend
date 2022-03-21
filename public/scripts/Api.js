class Api {
  constructor (url, headers) {
    this.url = url;
    this.headers = headers;
  }
  _handleResponse(res) {
    return res.json();
  }
  _handleError(err) {
    return err;
  }

  loadInitialCookie(hash) {
    return fetch(`${this.url}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        hash,
      })
    })
    .then(this._handleResponse)
    .catch(this._handleError);
  }
  // setCartCookie() {
  //   return fetch(`${this.url}setcookie`, {
  //     credentials: "include",
  //   })
  //   .then(this._handleResponse)
  //   .catch(this._handleError);
  // }

  getCartDetailsOnLoad() {
    return fetch(`${this.url}orderpage`, {
      credentials: 'include',
    })
    .then(this._handleResponse)
    .catch(this._handleError)
  }

  sendCartDetails(cart, hash) {
      return fetch(`${this.url}updateCart`, {
        method: 'POST',
        headers: this.headers,
        credentials: "include",
        body: JSON.stringify({
          cart: cart,
          hash: hash,
        }),
      })
      .then(this._handleResponse)
      .catch(this._handleError)
  };
};

const mainApi = new Api('/', {
  'Content-Type': 'application/json',
});