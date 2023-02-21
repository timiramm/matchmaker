/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sports', [{
      title: 'Футбол',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Баскетбол',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Теннис',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Волейбол',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Dota 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
