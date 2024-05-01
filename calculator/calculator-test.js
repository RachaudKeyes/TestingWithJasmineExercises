
it('should calculate the monthly rate correctly', function () {
  const formValues = {
    amount: 20000,
    years: 7,
    rate: 4.2
  };
  expect(calculateMonthlyPayment(formValues)).toEqual('275.22');
});

it("should return a result with 2 decimal places", function() {
  const formValues = {
    amount: 50000,
    years: 10,
    rate: 5.0
  };
  expect(calculateMonthlyPayment(formValues)).toEqual('530.33');
});

it("should handle extremely high interest rates", function() {
  const formValues = {
    amount: 5000,
    years: 3,
    rate: 85.0
  };
  expect(calculateMonthlyPayment(formValues)).toEqual('387.12');
})
