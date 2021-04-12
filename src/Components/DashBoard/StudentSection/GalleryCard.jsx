import React,{useState} from 'react'
import {Image, Button, Popconfirm} from 'antd';
import { DeleteOutlined } from "@ant-design/icons";
import {DeleteImage} from './FirebaseFunctions/StorageFunctions';
import EditImageModal from './EditImageModal';
const GalleryCard = ({Data}) => {
    const [loading, setLoading] = useState(false);
    const onDeleteItem = ()=>{
        setLoading(true);
        DeleteImage ("Gallery", Data.imgName, Data.id).then(()=>{
            setLoading(false);
        });
    }
    return (
        <div className="animate__animated animate__fadeIn gallery-card"  style={{background:"white"}}>
            <Image src={Data.img} 
            className="animate__animated animate__fadeIn gallery-card-img"
            alt={Data.imgName}/>
            <div>
            <Popconfirm
              title={"¿Deseas eliminar de forma permanente esta imagen?"}
              onConfirm={onDeleteItem}
              okText="Si"
              cancelText="No"
            >
              <Button loading={loading} size="large" type="primary" danger>
                <DeleteOutlined />
                Eliminar
              </Button>
            </Popconfirm>
            <EditImageModal Data={Data}/>
            </div>
        </div>
    )
}

export default GalleryCard
