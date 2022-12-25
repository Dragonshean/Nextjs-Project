import Link from 'next/link';
import { popOutModalProps, DishesListProps } from '../pages/Menu/index';
import List from './Dishes/List';
// import React, { useState } from 'react'

export default function Dishes ({dishes, popOutModal}: DishesListProps & popOutModalProps) {
    

    const dishType:any[] = ['熱炒 Hot Dishes', "炸物 Fried Food", "湯品 Soup", "生菜沙拉 Salad", "調理菜 Side Dishes", "飲品 Drinks", "蛋糕 Cakes", "甜點 Ice Cream"]
    
    // const [pressed, setPressed] = useState(dishType.map((item:boolean) => { return item = false }))


    // const highLightBar = (index:number) => {
    //     if ( pressed[index] === false ) {
    //         setPressed(pressed.splice(index, 1, true))
    //     }else if ( pressed[index] !== false ) {
    //     }
    // }

    /*List part*/
    




    return (
        <div className='dishes-plate'>
            <div className='left-bar'>
                <h3>餐點列表</h3>
                <ul>
                    { dishType.map( (item, index)=>{ return <li className=""  key={index}><Link href="" >{item}</Link></li> } )}
                </ul>
            </div>
            
            <div className='right-bar'>
                <h3>餐點介紹</h3>
                <div className='dishes-container'>
                    <List dishes={dishes} popOutModal={popOutModal} />
                </div>
            </div>
        </div>
        
    )
}