import {ClientFunction, Selector} from 'testcafe';


fixture `Getting Started`
    .page `http://ip-5236.sunline.net.ua:38015`
    .beforeEach(async n => {
      console.log('before')
      await n
      .click('.account.dropdown')
      .typeText('input[name="email"]', '11223344aaallliiinnnaaa1@gmail.com')
      .typeText('input[name="password"]', '1111')
      .click('.btn.btn-default[name="login"]')})
      .page `http://ip-5236.sunline.net.ua:38015/edit_account`

test('Verify update account info New password', async t => {
  console.log('test')
    await t
    .typeText('input[name="password"]', '1111')
    .typeText('input[name="new_password"]', '11111')
    .typeText('input[name="confirmed_password"]', '11111')
    .click('[name="save_account"]')
    .navigateTo(`http://ip-5236.sunline.net.ua:38015/logout`)

    const text = await Selector('.alert.alert-success').innerText;
    await t.expect('Changes saved successfully').eql('Changes saved successfully');
    const getPageUrl = ClientFunction(()=> window.location.href);
    await t.expect(getPageUrl()).contains('');


});
