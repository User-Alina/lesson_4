import {ClientFunction, Selector} from 'testcafe';


fixture `Getting Started`
    .page `http://ip-5236.sunline.net.ua:38015`
    .beforeEach(async n => {
      console.log('before')
      await n
      .click('.account.dropdown')
      .typeText('input[name="email"', '11223344aaallliiinnnaaa222@gmail.com')
      .typeText('input[name="password"]', '1111')
      .click('.btn.btn-default[name="login"]')
      await n.expect('You are now logged in as Alina Test.').eql('You are now logged in as Alina Test.');
      const getPageUrl = ClientFunction(()=> window.location.href);
      await n.expect(getPageUrl()).contains('');
    })


test('Verify user is able to confirm order.', async t => {
  console.log('test')
    await t
    .typeText('input[name="query"]', 'Duck')
    .pressKey( 'enter' )
    .click('[data-name="Blue Duck"]')
    .click('[name="add_cart_product"]')
    .click('.featherlight-close-icon.featherlight-close')
    .navigateTo(`http://ip-5236.sunline.net.ua:38015/checkout`)
    .click('[name="confirm_order"]')

    await t.expect('Your order is successfully completed!').eql('Your order is successfully completed!');
    const getPageUrl = ClientFunction(()=> window.location.href);
    await t.expect(getPageUrl()).contains('');


});
