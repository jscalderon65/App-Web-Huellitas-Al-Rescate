import React from "react";
import { Divider, Typography } from "antd";
import {
  SettingOutlined,
  QuestionCircleOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  WarningOutlined
} from "@ant-design/icons";
import { useMediaQuery } from "my-customhook-collection";

const SecondHome = () => {
  const { Title, Text } = Typography;
  const mediaQuery = useMediaQuery("(max-width: 460px)");
  return (
    <div className="second-home-container">
      <Title style={{ textAlign: mediaQuery ? "center" : "left" }}>
        Dashboard de configuración <SettingOutlined />
      </Title>
      <Divider />
      <Title level={3} style={{ textAlign: "left" }}>
        <QuestionCircleOutlined /> ¿Qué es?
      </Title>
      <Title level={5}>
        Esta sección privada es una zona de configuración del contenido
        multimedia y estático que se muestra en la página principal, aquí se
        podrán leer, editar, actualizar y eliminar las características de
        secciones como: los cursos, las actividades de los cursos, los
        comentarios que se publiquen en los cursos y las imágenes que su
        mostrarán en la sección de estudiantes.
      </Title>
      <Divider />
      <Title level={3} style={{ textAlign: "left" }}>
        <ExclamationCircleOutlined /> ¿Comó usarlo?
      </Title>
      <Title level={5}>
        En el menú principal, donde se encuentra el botón de salir, esta ubicado
        un botón de color azul que abre el menú lateral, el cual contiene las
        opciones para ir a la configuración de cursos comentarios y estudiantes,
        cada sección tiene sus propias características las cuales son:
        <br />
        <br />
        <ul>
          <li>
            <Text keyboard>Cursos:</Text> en esta sección se encuentran todas las
            configuraciones de los cursos y sus respectivas actividades, es en
            está opción donde se podrán crear, eliminar, actualizar y leer, cada
            curso y actividad de curso. Los cursos poseen cuatro elementos,
            título, descripción, imagen y actividades, estás últimas poseen solo
            tres opciones, título, descripción y url de youtube.
            Esta sección posee una barra de búsqueda para filtrar y buscar los cursos por el título.
          </li>
          <br />
          <br />
          <li>
          <Text keyboard>Comentarios:</Text> la sección que permite la visualización del contenido de los cursos en la página principal, posee una caja de comentarios, la cual está abierta a cualquier usuario que visite la aplicación web y se decida loguear con un correo de Google, pero se sabe que al estár abierta la sección de comentarios a todo público  puede ocurrir la situación de que en algún momento se comenten ideas ofensivas o contenido inapropiado, por eso, está sección está dedicada a disponer y dar la opción de eliminar cada comentario hecho en algún curso, en las tablas que muestran los comentarios se podrá observar el autor del comentario el comentario y un pequeño botón para eliminarlo.
          </li>
          <br />
          <br />
          <li>
          <Text keyboard>Estudiantes:</Text>en esta sección se podrán añadir y eliminar las imágenes que se mostrarán en la sección de comentarios, estas imágenes solo poseen dos items, descripción e imagen, la descripción se podrá editar y la imagen se podrá eliminar.
          </li>
        </ul>
      </Title>
      <Divider />
      <Title level={3} style={{ textAlign: "left" }}>
        <CheckCircleOutlined /> ¿Cuando usarlo?
      </Title>
      <Title level={5}>
        En cualquier momento que se requiera cambiar o editar el contenido multimedia y estático que se muestra en la aplicación web en las secciones de cursos, actividades de cursos y sección de estudiantes.
      </Title>
      <Divider />
      <Title level={3} style={{ textAlign: "left" }}>
      <WarningOutlined /> Advertencias y términos de uso
      </Title>
      <Title level={5}>
        Los servicios que se usan en está aplicación son de la colección de sistemas serverless de Google, Firebase, del cual se usa su base de datos, cloud Firestore y su gestor de contenido multimedia cloud Storage, todo esto en su versión gratuita, por eso es aconsejable que no se sobrepasen las 100 imágenes en la aplicación, ya que al ser gratuito, se tiene un almacenamiento limitado.
        La creación, código e idea de esta aplicación pertenecen a los desarrolladores cuyos perfiles de github se encuentran en el footer del dashboard de configuración, quienes podrán disponer de la aplicación de forma libre.
      </Title>
      <Divider />
    </div>
  );
};

export default SecondHome;
