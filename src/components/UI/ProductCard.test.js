import { render } from "@testing-library/react"
import ProductCard from "./ProductCard"

import productData from "../../assets/data/productData.json";

describe("ProductCard tests", () =>{
    test("It renders correctly", () =>{
        const {component} = render(<ProductCard productData={productData[0]} />);
        expect(component).toMatchSnapshot();
    })
})