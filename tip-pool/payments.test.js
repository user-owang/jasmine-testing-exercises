describe("Payments test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = '300';
    tipAmtInput.value = '60';
  });

  it('should add a new payment to allPayments on submitPaymentInfo()', function() {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment' + paymentId].billAmt).toEqual('300');
    expect(allPayments['payment' + paymentId].tipAmt).toEqual('60');
  });

  it('should return an Object with payment details on createCurPayment()', function() {
    let thisPayment = createCurPayment();
    expect(typeof thisPayment).toEqual('object');
    expect(thisPayment.billAmt).toEqual('300');
    expect(thisPayment.tipAmt).toEqual('60');
    expect(thisPayment.tipPercent).toEqual(20);
  });

  it('should add a new tr in paymentTable for each payment added', function() {
    expect(document.querySelectorAll('#paymentTable tbody tr').length).toEqual(0);
    submitPaymentInfo();
    expect(document.querySelectorAll('#paymentTable tbody tr').length).toEqual(1);
    billAmtInput.value = '200';
    tipAmtInput.value = '50';
    submitPaymentInfo();
    expect(document.querySelectorAll('#paymentTable tbody tr').length).toEqual(2);
  });

  it('should append the right values to the right rows on appendPaymentTable()', function() {
    let thisPayment = createCurPayment();
    appendPaymentTable(thisPayment);
    let testTds = document.querySelectorAll('#paymentTable tbody tr td');
    expect(testTds[0].innerText).toEqual('$300');
    expect(testTds[1].innerText).toEqual('$60');
    expect(testTds[2].innerText).toEqual('20%');
  });

  it('should update the right values to the totals on updateSummary()', function(){
    allPayments = {
      payment1: {billAmt: '300', tipAmt: '60', tipPercent:'20'},
      payment2: {billAmt: '600', tipAmt: '30', tipPercent: '5'}
    };
    updateSummary();
    expect(summaryTds[0].innerHTML).toEqual('$900');
    expect(summaryTds[1].innerHTML).toEqual('$90');
    expect(summaryTds[2].innerHTML).toEqual('13%');
  });

  afterEach(function() {
    // teardown logic
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = '';
    updateSummary();
    billAmtInput.value = '';
    tipAmtInput.value = '';
  });
});
