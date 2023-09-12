
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 20000, years: 10, rate: .05};
  expect(calculateMonthlyPayment(values)).toEqual('212.13');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 20000, years: 10, rate: .05};
  const output = calculateMonthlyPayment(values);
  expect(output.indexOf('.')).toEqual(output.length-3)
});

it('should work even with large numbers', function() {
  const values = {amount: 99999999999999, years: 9999, rate: .9};
  expect (calculateMonthlyPayment(values)).toEqual('7499999999999.92');
})
