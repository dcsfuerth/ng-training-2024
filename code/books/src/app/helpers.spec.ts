import { add } from "./helpers";

describe('helper.ts', () => {
    //
    it('should add to number', () => {
        const result = add(1, 2);
        expect(result).toEqual(3);
    });

    it('should add two string', () => {
        expect("1" + "2").toEqual("12");
    });
        
})