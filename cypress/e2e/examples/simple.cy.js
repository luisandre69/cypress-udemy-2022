describe('test 1', () => {
	it('true should be true', () => {
		expect(true).to.equal(true);
	});

	it.skip('true cant be false', () => {
		expect(true).to.equal(false);
	});

	it('5 is 5', () => {
		expect(5).to.equal(5);
	});
});

describe('test 2', () => {
	it('false is false', () => {
		expect(false).to.equal(false);
	});
});
