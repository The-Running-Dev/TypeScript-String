describe('String', () => {
    it('Should Return True for Empty String', () => {
        expect(String.IsNullOrWhiteSpace('')).toEqual(true);
    });

    it('Should Return False for Non-Empty String', () => {
        expect(String.IsNullOrWhiteSpace('Some string')).toEqual(false);
    });

    it('Should Return False for Non-Empty String With Padding', () => {
        expect(String.IsNullOrWhiteSpace(' Some string ')).toEqual(false);
    });
});