import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import articulos from "../mocks/articulos";

function ItemDetailContainer({ articulostDetail }) {
    const [oneArticulos, setoneArticulos] = useState({});



    import articulos from "../mock/articulos";

    const detail = articulos.find(
        (articulos) => articulos.id === parseInt(articulosDetail)
    );
    setoneArticulos(detail);
}, [articulosDetail]);

return (
    <div>
        <ItemDetail articulos={oneArticulos} />
    </div>
);
}
export default ItemDetailContainer;