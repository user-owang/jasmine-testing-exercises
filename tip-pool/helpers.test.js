describe("Helpers test (with setup and tear-down)", function() {
  
  it('should calculate tip percentage on calculateTipPercentage(bill,tip)', function () {
    expect(calculateTipPercent(500, 150)).toEqual('30');
  });

  it('should sum all payments of a given type on sumPaymentTotal(type)', function(){
    allPayments = {
      payment1: {billAmt: '300', tipAmt: '60', tipPercent:'20'},
      payment2: {billAmt: '600', tipAmt: '30', tipPercent: '5'}
    };
    expect(sumPaymentTotal('billAmt')).toEqual('900');
    expect(sumPaymentTotal('tipAmt')).toEqual('90');
  });

  it('should append a td with value to a target tr on appendTd(tr,value)', function(){
    let targetTr = document.createElement('tr');
    appendTd(targetTr, "THIS IS A TEST OF OUR EMERGENCY APPENDTD SYSTEMS");
    expect(targetTr.childElementCount).toEqual('1');
    expect(targetTr.innerText).toEqual('THIS IS A TEST OF OUR EMERGENCY APPENDTD SYSTEMS');
  })

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    updateServerTable();
    allPayments = {};
    paymentId = 0;
    updatePaymentTable();
    updateSummary();
  });
});
