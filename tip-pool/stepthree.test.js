describe("Stepthree test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = '500';
    tipAmtInput.value = '100';
    submitPaymentInfo();
    billAmtInput.value = '100';
    tipAmtInput.value = '20';
    submitPaymentInfo();
    serverNameInput.value = 'jeff';
    submitServerInfo();
    serverNameInput.value = 'bill';
    submitServerInfo();
  });

  it('should create a delete button td with a class of delete on appendDeleteBtn', function() {
    let testTr = document.createElement('tr');
    appendDeleteBtn(testTr);
    expect(testTr.innerHTML).toEqual('<td class="delete">X</td>');
  });

  it('should remove an entry in the allServers or allPayments object on removeFromObject()', function(){
    let clickTar = document.querySelector('#server2 .delete');
    removeFromObject(clickTar)
    expect(allServers['server2']).toThrow();
    expect(allServers['server1']).toEqual({serverName: 'jeff'});
    clickTar = document.querySelector('#payment1 .delete');
    removeFromObject(clickTar);
    expect(allPayments['payment1']).toThrow();
    expect(allPayments['payment2']).toEqual({billAmt: '100', tipAmt: '20', tipPercent: 20});
  });

  it('should remove the parent tr of the target on deleteParent() for server', function() {
    let clickTar = document.querySelector('#server1 .delete');
    let testTrs = document.querySelectorAll('#serverTable tbody tr');
    expect(testTrs.length).toEqual(2);
    deleteParent(clickTar);
    expect(testTrs.length).toEqual(1);
    expect(clickTar).toBeFalsy;
  });

  it('should remove the parent tr of the target on deleteParent() for payment', function() {
    let clickTar = document.querySelector('#payment2 .delete');
    let testTrs = document.querySelectorAll('#paymentTable tbody tr');
    expect(testTrs.length).toEqual(2);
    deleteParent(clickTar);
    expect(testTrs.length).toEqual(1);
    expect(clickTar).toBeFalsy;
  });

  afterEach(function() {
    // teardown logic
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = '';
    updateSummary();
    allServers = {};
    serverId = 0;
    updateServerTable();
  });
});
