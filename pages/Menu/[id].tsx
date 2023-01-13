import {
    buildMenuPath,
    extractDishes,
    buildModalPath,
    extractModals
} from "../api/MenuApi";
import DisplayModal from "../../components/Dishes/DisplayModal";
import { useState } from "react";
import Head from "next/head";
import Link from 'next/link';
import List from '../../components/Dishes/List';
import { GetStaticPaths, GetStaticProps } from "next";
import { ModalsProps, DishProps, dishesProps, DishesListProps, popOutModalProps, closeModalProps, IdProps } from '../../pages/Menu/index';

export type HightLightProps = {
    hightLightBar: () => void;
};

const Details = ({ dish, id, modal }: ModalsProps & DishProps & IdProps & popOutModalProps & closeModalProps) => {

    console.log("id page dish", dish)
    console.log("id page id", id) 
    console.log("id page modal", modal[parseInt(id)].details) 

    const [ showModal, setShowModal ] = useState(false);
    const [ Modal, setModal ] = useState({})

    const dishItem = modal[parseInt(id)].details

    const popOutModal = (id:number) => {
        setShowModal(true);
        setModal(dishItem[id])
    }
    
    const closeModal = () => {
        setShowModal(false);
    };
    
    
    /*List part*/
    const dishType:string[] = [
        '主餐 Main Course', '熱炒 Hot Dishes', "炸物 Fried Food", 
        "湯品 Soup", "生菜沙拉 Salad", "調理菜 Appetizer", 
        "飲品 Beverage", "蛋糕 Cakes", "甜點 Ice Cream"
    ]
        


    // const [pressed, setPressed] = useState(hightLight)
        
    // pressed[parseInt(id)] = true

    return (
        <>
            <Head>
                <title>凱薩西餐牛排 | 菜單</title>
            </Head>
            <div className='dishes-plate'>
                <div className='left-bar'>
                    <h3>餐點列表</h3>
                    <ul>
                        { dishType.map( (item, index)=>{ 
                            return ( 
                            <li key={index} className={ index === parseInt(id) ? "active" : "" } > 
                                <Link href={'/Menu/' + index} key={index}>
                                    {item}
                                </Link>
                            </li> 
                            )})
                        }
                    </ul>
                </div>
                {showModal ? (
                    <DisplayModal details={Modal} closeModal={closeModal} />
                ) : null}
                <div className='right-bar'>
                    <h3>餐點介紹</h3>
                    <div className='dishes-container'>
                        <List dish={dish[parseInt(id)]} key={id}  popOutModal={popOutModal} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details;

export const getStaticPaths: GetStaticPaths = async() => {
    const dataPath = buildMenuPath(); 
    const data = await extractDishes(dataPath); 


    const paths = data.map((item:dishesProps)=>{
        return {
            params: { id: item.id }
        }
    })
    return {
        paths, 
        fallback: false
    }
}


//TODO need to fix the props of dish, should be each id not object// fixed~~
export const getStaticProps: GetStaticProps = async ({ params }) => { 
    const id = params?.id as string 

    const dataPath = buildMenuPath(); 
    const data = await extractDishes(dataPath);
    const list = data.map((item:DishesListProps) => {
        return item.dishes
    })

    const dataPath2 = buildModalPath();
    const data2 = await extractModals(dataPath2);

    return {
      props: {
        dish: list,
        id,
        modal: data2
      },
    };
  };