const options = <%= JSON.stringify(options, null, 2) %>;
export default (context, inject) => {
  inject('saastarter', options);
}

