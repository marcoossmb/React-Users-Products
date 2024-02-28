import { useEffect, useState } from "react";
import { getProductDetail } from "../getProducTDetail";

export const useProductDetail = (id) => {

    const [productdetail, setProductdetail] = useState()

    const oneproduct = async () => {
        const data = await getProductDetail(id)
        setProductdetail(data);
    };

    useEffect(() => {
        oneproduct();
    }, [id]);

    return productdetail
}