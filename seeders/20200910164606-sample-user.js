'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Kazuki',
        pass: '15921592',
        mail: 'mutant.guppy@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Taro',
        pass: 'yamada',
        mail: 'taro@yamada.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hanako',
        pass: 'flower',
        mail: 'hanako@flower.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jiro',
        pass: 'change',
        mail: 'jiro@gchange.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sachiko',
        pass: 'happy',
        mail: 'sachiko@happy.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
