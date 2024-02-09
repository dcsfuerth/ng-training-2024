import { add } from "./helpers";

describe('helper.ts', () => {
    
    it('should add two numbers', () => {
        const result = add(1, 2);
        expect(result).toEqual(3);
    });

    it('should add two numbers with 0', () => {
        const result = add(1, 2) + 0;
        expect(result).toEqual(3);
    });

})