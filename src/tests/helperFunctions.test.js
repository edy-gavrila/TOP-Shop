import { addCommasToPrice } from "../API/helperFunctions"

describe("helper functions:",() => {
    describe("Tests for 'addCommasToPrice' :", () =>{
        test("returns the correct string value", () => {
            expect(addCommasToPrice("120")).toBe("120");
            expect(addCommasToPrice("1234")).toBe("1,234");
            expect(addCommasToPrice("12345")).toBe("12,345");
            expect(addCommasToPrice("1234567")).toBe("1,234,567");
            expect(addCommasToPrice("12345678")).toBe("12,345,678");

        })
    })
})