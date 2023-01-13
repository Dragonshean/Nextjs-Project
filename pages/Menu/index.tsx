import Dishes from "../../components/Dishes";
import Head from "next/head";
import {
    buildMenuPath,
    extractDishes
} from "../api/MenuApi";
import Link from 'next/link';
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  
  const dataPath = buildMenuPath();
  const data = await extractDishes(dataPath);
  const list = data.map((item:any)=>{
        return item
    })

  return {
    props: {
      menu: list,
    },
  };
};



export interface DishesListProps {
    item: dishesProps[];
    dishes: dishesProps[];
  }
export interface DishProps {
    dish: dishesProps[];
}
export interface ModalsProps {
    modal: modalProps[];
}
export interface DetailsProps {
    details: modalProps;
}
export interface IdProps {
    id:string;
}


export interface dishesProps {
    id: string;
    name: string;
    img: string;
    file: string;
}

export interface modalProps {
  id: string;
  name: string;
  description: string;
  price_noon: string;
  price_night: string;
  img: string;
  from: string;
  file: string;
  details:any;
}

export type popOutModalProps = {
  popOutModal: (id:number) => void;
};
export type closeModalProps = {
  closeModal: () => void;
};

const Menu = () => {
  
const dishType:any[] = [
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
                    { dishType.map( (item, index)=>{ return <li className="" key={index}><Link href={'/Menu/' + index} >{item}</Link></li> } )}
                </ul>
            </div>
            <Dishes />
        </div>
    </>
  );
};

export default Menu;
