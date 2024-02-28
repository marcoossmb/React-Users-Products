import { useEffect, useState } from "react";
import { getUsuarios } from "../getUsuarios";

export const useUsuarios = () => {

    const [usuario, setUsuario] = useState()

    const allusuarios = async () => {
        const data = await getUsuarios()
        setUsuario(data);
    };

    useEffect(() => {
        allusuarios();
    }, []);

    return usuario
}