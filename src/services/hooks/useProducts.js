import { useEffect, useState } from "react";
import { getProducts } from "../getProducts";

export const useProducts = () => {

    const [product, setProduct] = useState()

    const allproducts = async () => {
        const data = await getProducts()
        setProduct(data);
    };

    useEffect(() => {
        allproducts();
    }, []);

    return product
}