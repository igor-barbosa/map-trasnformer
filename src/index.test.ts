import MapTransformer from ".";

describe('Test Index', () => {
    
    it('should convert object to string', () => {
        let data = {
            text1: 'text1',
            text2: 'text2'
        };
        let transformer = (obj: any) => (`${obj.text1} ${obj.text2}`);

        expect(MapTransformer.object(data,transformer)).toEqual(`text1 text2`);
    });

    it('should map and convert the object from array', () => {
        let data = [{ text: 'text1' }, {text: 'text2'}];
        let transformer = (obj: any) => (`${obj.text}`);
        expect(MapTransformer.array(data, transformer)).toEqual(['text1','text2'])
    });

});