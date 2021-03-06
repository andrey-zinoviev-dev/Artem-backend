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

  loadInitialCookie() {
    return fetch(`${this.url}cartcookie`, {
      headers: this.headers,
    })
    .then(this._handleResponse)
    .catch(this._handleError);
  }

  getCartDetailsOnLoad() {
    return fetch(`${this.url}orderpage`, {
      credentials: 'include',
    })
    .then(this._handleResponse)
    .catch(this._handleError)
  }

  sendCartDetails(cart) {
      return fetch(`${this.url}updateCart`, {
        method: 'POST',
        headers: this.headers,
        credentials: "include",
        body: JSON.stringify({
          cart: cart,
        }),
      })
      .then(this._handleResponse)
      .catch(this._handleError)
  };

  deleteFromCart(cartElement) {
    return fetch(`${this.url}deleteFromCart`, {
      method: "POST",
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        cartElement,
      }),
    })
    .then(this._handleResponse)
    .catch(this._handleError);
  }
};

const mainApi = new Api('/', {
  'Content-Type': 'application/json',
});