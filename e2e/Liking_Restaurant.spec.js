Feature('Liking Restaurant')

// Scenario('liking one restaurant', ({ I }) => {
//   I.amOnPage('/');
//   pause()
//   I.see('Rekomendasi restoran untukmu');

//   I.seeElement('#data-restaurant a');
//   I.click(locate('#data-restaurant a').first());

//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   I.amOnPage('/#/favorite');
//   I.see('Restoran favorit yang kamu pilih');
//   I.seeElement('#data-restaurant a');
// });

Scenario('Canceling liked one restaurant', ({ I }) => {
  // Liking Restaurant
  I.amOnPage('/')
  pause()
  I.see('Rekomendasi restoran untukmu')

  I.seeElement('#data-restaurant a')
  I.click(locate('#data-restaurant a').first())

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.see('Restoran favorit yang kamu pilih')
  I.seeElement('#data-restaurant a')

  // Canceling liked restaurant
  I.amOnPage('/#/favorite')
  I.see('Restoran favorit yang kamu pilih')
  I.seeElement('#data-restaurant a')

  I.click(locate('#data-restaurant a').first())

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.dontSeeElement('#data-restaurant a')
})
