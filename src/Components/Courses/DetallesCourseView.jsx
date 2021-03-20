import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import BannerCourse from './CoursesComponents/BannerCourse';
import ClasesLists from './CoursesComponents/ClasesLists';
import data from './data';

const DetallesCourseView = (props) => {

    const { id } = useParams();
    const getCourse = (idCourse) => { //Obteniendo curso de los datos
        return data.filter((e) => e.id === idCourse ? e : false)
    }
    const [curso] = getCourse(id);

    return (
        <Fragment>
            <BannerCourse title={curso.titulo} description={curso.descripcion} img={curso.img} />
            <ClasesLists list={curso.clases} />
        </Fragment>
    )
}
export default DetallesCourseView;