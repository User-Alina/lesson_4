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

test('Verify update account info First and Last name', async t => {
  console.log('test')
    await t
    .typeText('input[name="firstname"]', 'Oliva', {replace: true })
    .typeText('input[name="lastname"]', 'Testing', {replace: true })
    .click('[name="newsletter"]')
    .click('[name="save_details"]')
    .navigateTo(`http://ip-5236.sunline.net.ua:38015/logout`)

    const text = await Selector('.alert.alert-success').innerText;
    await t.expect('Changes saved succeessfully').eql('Changes saved succeessfully');
    const getPageUrl = ClientFunction(()=> window.location.href);
    await t.expect(getPageUrl()).contains('');


});
