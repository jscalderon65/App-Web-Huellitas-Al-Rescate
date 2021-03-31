import React from 'react'
import {Image, Button} from 'antd';
import { DeleteOutlined, EditOutlined} from "@ant-design/icons";
const GalleryCard = () => {
    return (
        <div className="gallery-card">
            <Image src="https://picsum.photos/seed/picsum/200/300" 
            className="gallery-card-img"
            alt="picsum"/>
            <div>
            <Button type="primary" size="large" danger><DeleteOutlined/>Borrar</Button>
            <Button  type="primary" size="large"><EditOutlined/>Editar</Button>
            </div>
        </div>
    )
}

export default GalleryCard
