const parse = document => {
  const books = document.querySelectorAll('.produt_pod');
  
  return [...books].map(book => ({
    title: book.querySelector('h3').textContent,
    imgUrl: book.querySelector('img').src,
    rating: book.querySelector('.star-rating').classList.item(1),
    price: book.querySelector('.price_color').textContent,
    inStock: !book.querySelector('.instock')
  }));
};
  


module.exports = parse;

