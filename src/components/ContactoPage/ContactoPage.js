import React, {useEffect} from "react";
import {db} from "../../utils/firebase";
import {collection, getDocs, query, where} from "firebase/firestore";

export const ContactoPage = () => {

 //useEffect(()=>{
  //  const getData = async()=>{
        //creamos referencia
  //      const query = doc(db, "postres", "6gf5DpiDKbaiVYRV8bu9");
        //solicitud
    //    const response = await getDoc(query);
        //console.log("id", response.id);
       // console.log("data", response.data());
    //    const newProduct = {
   //         ...response.data(),
   //         id: response.id
   //     }
  //      console.log(newProduct)
 //   }
 //   getData();
 //}, [])

 //useEffect(()=>{
  //  const getData = async()=>{
        //creamos referencia
    //    const query = collection(db, "postres");
        //solicitud
    //    const response = await getDocs(query);
    //    console.log(response)
    //   const productos = response.docs.map(doc => {
    //        const newProduct = {
    //        ...doc.data(),
    //        id: doc.id
    //        }
    //        return newProduct
    //    })
   //     console.log(productos);
  //  }
   // getData();
 //}, [])

 useEffect(()=>{
    const getData = async()=>{
        //creamos referencia
        const queryRef = query(collection(db, "postres"), where("category", "==", "chocolate"))
        //solicitud
        const response = await getDocs(queryRef);
        console.log(response)
        const productos = response.docs.map(doc => {
            const newProduct = {
            ...doc.data(),
            id: doc.id
            }
            return newProduct
        })
        console.log(productos);
    }
    getData();
 }, [])

    return(
        <div>
            ContactoPage
        </div>
    )
}
