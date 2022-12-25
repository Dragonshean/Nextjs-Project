import Dishes from '../../components/Dishes';
import Head from 'next/head'
import { buildDishesPath, extractDishes } from "../api/dishsdata"
import { useState } from 'react';
import DisplayModal from '../../components/Dishes/DisplayModal';
import Overlay from '../../components/Overlay';


export const getStaticProps = async () => {
    const dataPath = buildDishesPath()
    const data = await extractDishes(dataPath)

    return {
        props: { dishes: data }
    }
}
export interface DishesListProps {
    dishes: dishesProps[];
}
export type popOutModalProps = {
    popOutModal: () => void;
}
export type closeModalProps = {
    closeModal: () => void;
}


export interface dishesProps {
    id:string;
    name:string;
    price_noon:string;
    price_night:string;
    img:string;
}



const Menu = ( { dishes }: DishesListProps & popOutModalProps & closeModalProps ) => {

    const [ showModal, setShowModal ] = useState(true)

    const popOutModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }


    
    return (
        <>
            <Head>
                <title>凱薩西餐牛排 | 菜單</title>
            </Head>
            {
                showModal ? (<Overlay><DisplayModal dishes={dishes} closeModal={closeModal} /></Overlay>) : null
            }
            <Dishes dishes={dishes} popOutModal={popOutModal}  />
        </>
    )
}

export default Menu;
