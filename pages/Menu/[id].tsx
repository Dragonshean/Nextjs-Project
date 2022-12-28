import {
    buildMenuPath,
    extractDishes,
} from "../api/MenuApi";
import DisplayModal from "../../components/Dishes/DisplayModal";
import Overlay from "../../components/Overlay";
import { useState } from "react";
import Head from "next/head";
import Link from 'next/link';
import List from '../../components/Dishes/List';
import { GetStaticPaths, GetStaticProps } from "next";
import { DishProps, dishesProps, DishesListProps, popOutModalProps, closeModalProps, IdProps } from '../../pages/Menu/index';



const Details = ({ dish, id }: DishProps & IdProps & popOutModalProps & closeModalProps) => {

    // console.log("dish", dish)

    const [showModal, setShowModal] = useState(true);
    const popOutModal = () => {
        setShowModal(true);
      };
      const closeModal = () => {
        setShowModal(false);
      };
      // const [pressed, setPressed] = useState(dishType.map((item:boolean) => { return item = false }))


    // const highLightBar = (index:number) => {
    //     if ( pressed[index] === false ) {
    //         setPressed(pressed.splice(index, 1, true))
    //     }else if ( pressed[index] !== false ) {
    //     }
    // }

    /*List part*/
    const dishType:string[] = [
        '主餐 Main Course', '熱炒 Hot Dishes', "炸物 Fried Food", 
        "湯品 Soup", "生菜沙拉 Salad", "調理菜 Appetizer", 
        "飲品 Beverage", "蛋糕 Cakes", "甜點 Ice Cream"
    ]


    return (
        <>
            <Head>
                <title>凱薩西餐牛排 | 菜單</title>
            </Head>
            <div className='dishes-plate'>
                <div className='left-bar'>
                    <h3>餐點列表</h3>
                    <ul>
                        { dishType.map( (item, index)=>{ return <Link href={'/Menu/' + index} key={index} ><li className="" >{item}</li></Link> } )}
                    </ul>
                </div>
                {showModal ? (
                <Overlay>
                    <DisplayModal dish={dish[parseInt(id)]}  closeModal={closeModal} />
                </Overlay>
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


//TODO need to fix the props of dish, should be each id not object
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string
    const dataPath = buildMenuPath();
    const data = await extractDishes(dataPath);
  
    const list = data.map((item:DishesListProps) => {
        return item.dishes
    })

    return {
      props: {
        dish: list,
        id
      },
    };
  };