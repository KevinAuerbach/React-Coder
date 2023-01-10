import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Carrousel from "./Carrousel";


const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")
        const filtrado = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection
        getDocs(filtrado).then((data) => {
            setProductos(data.docs.map((doc) => ({id:doc.id, ...doc.data()})))
            setLoading(false)
        })     
    }, [id]);

    

    return (
        <div className="container mt-5">
                <Carrousel/>
               {loading ? <Loading /> : <ItemList productos={productos}/>} 
        </div>
    )
}


export default ItemListContainer;