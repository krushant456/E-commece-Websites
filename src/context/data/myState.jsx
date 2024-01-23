import React, { useEffect, useState } from 'react'
import myContext from './myContext'
import { Timestamp, addDoc, collection, deleteDoc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { doc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig'
const myState = (props) => {

    const [mode, setMode] = useState('light')
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = "rgb(17,24,39)"
        } else {
            setMode("light")
            document.body.style.backgroundColor = "white"
        }
    }
    const [loading, setLoading] = useState(false)
    const [products, setproducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric"
        }
        )
    })
    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
            return toast.error("all field are required")
        }
        setLoading(true)
        try {
            const productRef = collection(fireDB, 'products')
            await addDoc(productRef, products)
            toast.success("Add product sucessfully")
            getProductData();
            setLoading(false)
            setTimeout(() => {
                window.location.href = "/dashboard"

            })
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)

        }
        // setproducts("")
    }
    const [product, setproduct] = useState([])
    const getProductData = async () => {
        setLoading(true)
        try {
            const q = query(
                collection(fireDB, "products"),
                orderBy("time")
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = []
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id })
                })
                setproduct(productArray)
            })
            return () => data
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        getProductData();

    }, [])

    const edithandle = (item) => {
        setproducts(item)
    }


    const updateProduct = async () => {
        setLoading(true)
        try {

            await setDoc(doc(fireDB, 'products', products.id), products)
            toast.success("Product Updated successfully")
            getProductData();
            setLoading(false)
            setTimeout(() => {
                window.location.href = "/dashboard"

            }, 8000);
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const deleteProduct = async (item) => {
        setLoading(true)
        await deleteDoc(doc(fireDB, 'products', item.id))
        setLoading(false)
        getProductData();
        toast.success("Product Deleted successfully")
        setLoading(false)

    }


    const [order, setOrder] = useState([]);

    const getOrderData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "order"))
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push(doc.data());
                setLoading(false)
            });
            setOrder(ordersArray);
            console.log(ordersArray)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    const [user, setUser] = useState([]);

    const getUserData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "users"))
            const usersArray = [];
            result.forEach((doc) => {
                usersArray.push(doc.data());
                setLoading(false)
            });
            setUser(usersArray);
            console.log(usersArray)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        getProductData();
        getOrderData()
        getUserData()

    }, []);
    const [searchkey, setSearchkey] = useState('')
    const [filterType, setFilterType] = useState('')
    const [filterPrice, setFilterPrice] = useState('')

    return (
        <myContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setproducts, addProduct, product, edithandle, updateProduct, deleteProduct, order, user, searchkey, filterType, filterPrice, setSearchkey, setFilterType, setFilterPrice }}>{props.children}</myContext.Provider>
    )
}

export default myState
