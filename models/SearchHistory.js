import sequelize from '../lib/db';

const SearchHistory = sequelize.define('SearchHistory', {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  query: { type: DataTypes.STRING, allowNull: false },
});

export default SearchHistory;
