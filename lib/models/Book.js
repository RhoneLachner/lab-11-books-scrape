const pool = require('../utils/pool');

module.exports = class Book {
    id;
    title;
    imgUrl;
    rating;
    price;
    inStock;

    constructor(row) {
      this.id = row.id;
      this.title = row.title;
      this.imgUrl = row.cover_img;
      this.rating = row.rating;
      this.price = row.price;
      this.inStock = row.in_stock;
    }

    static async insert({ title, imgUrl, rating, price, inStock }) {
      const { rows } = await pool.query(
        'INSERT INTO books (title, cover_img, rating, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [title, imgUrl, rating, price, inStock]
      );
      return new Book(rows[0]);
    }
};
