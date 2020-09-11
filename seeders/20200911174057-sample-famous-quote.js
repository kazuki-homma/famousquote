'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FamousQuotes', [
      {
        content: '人生は公平ではない。そのことに慣れよう',
        detail: '',
        author: 'ビル・ゲイツ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: '俺は議論はしない、議論に勝っても、人の生き方は変えられぬ',
        detail: '',
        author: '坂本龍馬',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: '人生とは、人生以外のことを夢中で考えているときにあるんだよ',
        detail: '',
        author: 'ジョン・レノン',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: '6歳の子供に説明できなければ、理解したとは言えない',
        detail: '',
        author: 'アルベルト・アインシュタイン',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: '神様は私たちに成功してほしいなんて思っていません。ただ、挑戦することを望んでいるだけよ',
        detail: '',
        author: 'マザー・テレサ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: '愛とは、大きな愛情をもって小さなことをすることです',
        detail: '',
        author: 'マザー・テレサ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: '人生は一箱のマッチに似ている。重大に扱うのはばかばかしい。重大に扱わねば危険である',
        detail: '',
        author: '芥川龍之介',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: '自分に期待することではじめて物事は可能になる',
        detail: '',
        author: 'マイケル・ジョーダン',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: '人々はあなたの美徳によってあなたを罰し、あなたの過ちによってあなたを許す',
        detail: '',
        author: 'ニーチェ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'しっかりと準備もしていないのに、目標を語る資格はない',
        detail: '',
        author: 'イチロー',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: '人は少ししか知らぬ場合にのみ、知っているなどと言えるのです。多く知るにつれ、次第に疑いが生じて来るものです',
        detail: '',
        author: 'ゲーテ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FamousQuotes', null, {});
  }
};
