describe("Helpers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = '300';
    tipAmtInput.value = '60';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {})

  afterEach(function() {
    // teardown logic
    allPayments = {};
    paymentId = 0;
    updateServerTable();
  });
});
