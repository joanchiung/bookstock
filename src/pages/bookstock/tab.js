import Edit from "./Edit";
import List from "./List";

import AmerEdit from "./AmerEdit";
import AmerList from "./AmerList";

import {Tabs} from 'flowbite-react';

import {useState} from 'react'


export default function TabsWithIcons() {
    const [data, setData] = useState('')
    const [amerData, setAmerData] = useState('')
    return (
        // eslint-disable-next-line
        <Tabs.Group  style="underline" >
            <Tabs.Item active="active" title="台股" >
                <div  className="mb-12" > 
                    <h3 className="content-h3title">新增投資紀錄</h3>
                    <Edit add={setData}/>  
                    <div  className="mb-16" > </div>   

                    <h3 className="content-h3title ">資產清單</h3>          
                    <List listData={data} deleteData={setData}/>
                </div>
            </Tabs.Item>

            <Tabs.Item  title="美股">
                <div  className="mb-12" > 
                    <h3 className="content-h3title">新增投資紀錄</h3>
                    <AmerEdit add={setAmerData}/>  
                    <div  className="mb-16" > </div>   

                    <h3 className="content-h3title ">資產清單</h3>          
                    <AmerList listAmerData={amerData} deleteAmerData={setAmerData}/>
                </div>
            </Tabs.Item>

        </Tabs.Group>
    )
}
