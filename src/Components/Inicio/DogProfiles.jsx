import React from "react";
import DogCard from "./DogCard.jsx";
import { Typography, Divider } from "antd";
import "antd/dist/antd.css";
const { Title } = Typography;
const DogProfiles = () => {
  return (
    <div className="dog-profiles-container">
      <div className="dog-profiles-title">  
        <Title style={{ color: "#423834", textAlign: "center",fontSize:"46px" }}>
          ¡Conoce a nuestros mejores amigos!
        </Title>
        <Divider style={{ borderColor: "#423834" }}>
        </Divider>
      </div>
      <br />
      <div className="dog-profiles-cards">
        <DogCard src={"https://scontent.fbog2-1.fna.fbcdn.net/v/t1.0-9/69864362_523188741848265_2122992941319323648_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=nnFJTf5MK-UAX_VbjMA&_nc_ht=scontent.fbog2-1.fna&oh=1ea4127089e425691091ccf93975ef5a&oe=6072979D"} name={"Manchas"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, impedit. Eos officiis inventore repellat ullam suscipit quia quis enim expedita nihil magni, dolorem in eum, eligendi esse nulla quaerat assumenda?"}/>
        <DogCard src={" https://scontent.fbog2-2.fna.fbcdn.net/v/t1.0-9/69851708_523188791848260_5480161081789775872_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Eb4DhlUaDB4AX_n5uaT&_nc_ht=scontent.fbog2-2.fna&oh=aafbc875db6f721853e755e50a348e9f&oe=60723A60"} name={"Ofelia"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, impedit. Eos officiis inventore repellat ullam suscipit quia quis enim expedita nihil magni, dolorem in eum, eligendi esse nulla quaerat assumenda?"}/>
        <DogCard src={" https://scontent.fbog2-1.fna.fbcdn.net/v/t1.0-9/69539109_523188785181594_7964906027390861312_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=glGJ9iKWE70AX-DPdlf&_nc_ht=scontent.fbog2-1.fna&oh=e48768d40257f62d11e49f7a73c2ccad&oe=60717BFB"} name={"Peluche"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, impedit. Eos officiis inventore repellat ullam suscipit quia quis enim expedita nihil magni, dolorem in eum, eligendi esse nulla quaerat assumenda?"}/>
      </div>
    </div>
  );
};

export default DogProfiles;
