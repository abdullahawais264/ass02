import sequelize from '../lib/db';

const Book = sequelize.define('Book', {
  title: { type: DataTypes.STRING, allowNull: false },
  genreId: { type: DataTypes.INTEGER, allowNull: false },
  authorId: { type: DataTypes.INTEGER, allowNull: false },
});

export default Book;
