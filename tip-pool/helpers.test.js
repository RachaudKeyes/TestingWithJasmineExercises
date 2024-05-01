describe('Helper functions with setup and teardown', function() {
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 15;
        submitPaymentInfo();
    })

    it('should sum total tip amount of all payments from sumPaymentTotal()', function() {
        // already set up
        expect(sumPaymentTotal('tipAmt')).toEqual(15);

        // Another bill
        billAmtInput.value = 300;
        tipAmtInput.value = 33

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(48);
    });

    it('should sum toatl bill amount of all payments from sumPaymentTotal()', function() {
        // already set up
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        // Another bill
        billAmtInput.value = 300;
        tipAmtInput.value = 33

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(400);
    });

    it('should sum total tip percent on sumPaymentTotal()', function() {
        // already set up
        expect(sumPaymentTotal('tipPercent')).toEqual(15);

        // Another bill
        billAmtInput.value = 300;
        tipAmtInput.value = 33

        submitPaymentInfo();

        // 15% + 11%
        expect(sumPaymentTotal('tipPercent')).toEqual(26);
    })

    it('should sum tip percent of a single tip on calculateTipPercent()', function() {
        expect(calculateTipPercent(500, 120)).toEqual(24);
        expect(calculateTipPercent(180, 45)).toEqual(25);
    });

    it('should generate new td from value and append to tr on appendTd(tr, value)', function() {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'testing');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('testing');
    });

    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function() {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
        });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    })
})