import Link from 'next/link';
import List from './Dishes/List';
import React, { useState } from 'react'
import Item from './Dishes/Item';
// import { API_GET_DISH } from "../public/constants";


// async function fetchData(setData) {
//     //從後端fetch db.json的data資料 set到 useState 的data中
//     const res = await fetch(API_GET_DISH);
//     const { data } = await res.json();
//     setData(data);
//   }
  
//   async function fetchSetData(data) {
//     await fetch(API_GET_DISH, {
//       method: "PUT",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({ data }),
//     });
//   }


export default function Dishes () {
    // const [data, setData] = useState([]);
    
    const dishType:any[] = ['熱炒 Hot Dishes', "炸物 Fried Food", "湯品 Soup", "生菜沙拉 Salad", "調理菜 Side Dishes", "飲品 Drinks", "蛋糕 Cakes", "甜點 Ice Cream"]
    
    const [pressed, setPressed] = useState(dishType.map((item:boolean) => { return item = false }))

    console.log("1", pressed)

    const highLightBar = (index:number) => {
        console.log("2", index)
        if ( pressed[index] === false ) {
            setPressed(pressed.splice(index, 1, true))
            console.log("6", pressed)
        }else if ( pressed[index] !== false ) {
            return console.log("nothing")
        }
    }

    return (
        <div className='dishes-plate'>
            <div className='left-bar'>
                <h3>餐點列表</h3>
                <ul>
                    { dishType.map( (item, index)=>{ return <li className={pressed[index] ? "active" : ""} onClick={()=> highLightBar(index)} key={index}><Link href="" >{item}</Link></li> } )}
                </ul>
            </div>
            
            <div className='right-bar'>
                <p>List img</p>
            </div>
            {/* <List
                dishData={data}
            /> */}
        </div>
        
    )
}