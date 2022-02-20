import React from 'react';
import ReactDOM from 'react-dom';
import {ImageList, ImageListItem,} from "@mui/material";
import { useState } from "react";
import {Button} from "react-bootstrap";

const itemData = [
    {
        itemDataType: 'model',
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        itemDataType: 'model',
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        itemDataType: 'model',
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        itemDataType: 'model',
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        itemDataType: 'model',
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        itemDataType: 'model',
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        itemDataType: 'model',
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        itemDataType: 'model',
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        itemDataType: 'program',
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        itemDataType: 'program',
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        itemDataType: 'program',
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        itemDataType: 'program',
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];

const Album = () => {
    const [check, setCheck] = useState('all')

    if (check === "all"){
        return (
            <div className={"myport"}>
                <Button variant="light" style={{ color:"#999999" }} onClick={() => setCheck('all')}>All</Button>
                <Button variant="light" style={{ color:"#999999" }} onClick={() => setCheck('model')}>3D Model</Button>
                <Button variant="light" style={{ color:"#999999" }} onClick={() => setCheck('program')}>Programming</Button>
                <ImageList sx={{ width: 1080, height: 450 }} cols={10} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        );
    } else if (check === "model") {
        return (
            <div className={"myport"}>
                <Button variant="light" style={{ color:"#999999" }} onClick={() => setCheck('all')}>All</Button>
                <Button variant="light" style={{ color:"#999999" }} onClick={() => setCheck('model')}>3D Model</Button>
                <Button variant="light" style={{ color:"#999999" }} onClick={() => setCheck('program')}>Programming</Button>
                <ImageList sx={{ width: 1080, height: 450 }} cols={10} rowHeight={164}>
                    {itemData.filter(items => items.itemDataType === 'model').map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        );
    } else if (check === "program") {
        return (
            <div className={"myport"}>
                <Button variant="light" style={{ color:"#999999" }} onClick={() => setCheck('all')}>All</Button>
                <Button variant="light" style={{ color:"#999999" }} onClick={() => setCheck('model')}>3D Model</Button>
                <Button variant="light" style={{ color:"#999999" }} onClick={() => setCheck('program')}>Programming</Button>
                <ImageList sx={{ width: 1080, height: 450 }} cols={10} rowHeight={164}>
                    {itemData.filter(items => items.itemDataType === 'program').map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        );
    }

}
export default Album;

if (document.getElementById('album')) {
    ReactDOM.render(<Album />, document.getElementById('album'));
}



