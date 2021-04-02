import React from "react";
import { Spin, Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useForm,useOnSnapshotCollection} from "my-customhook-collection";
import { getCoursesByTitle } from "./Helpers/getCoursesByTitle.js";
import { firebase } from "../../../Firebase/FirebaseConfig";
import CourseRegisterModal from './CourseRegisterModal';
import CourseCard from "./CourseCard";
const CoursesDashBoard = () => {
  const suffix = (
    <SearchOutlined
      style={{
        fontSize: 25,
        color: "#1890ff",
      }}
    />
  );
  const db = firebase.firestore();
  const refColl = db.collection("Cursos");
  const [Data] = useOnSnapshotCollection(refColl);
  const [formValue, handleInputChange] = useForm({
    searchText: "",
  });
  const { searchText } = formValue;
  const CoursesFiltered = Data && getCoursesByTitle(searchText, Data);
  const handleSearch = (e) => {
    e.preventDefault();
  };
  console.log(Data);
  return (
    <div className="animate__animated animate__fadeIn courses-dashboard-container">
      <div className="courses-dashboard-new-course-container">
          <Typography.Title style={{textAlign: "center"}} level={3}>Configuración de Cursos</Typography.Title>
        <form onSubmit={handleSearch}>
          <Input
            suffix={suffix}
            className="courses-dashboard-input"
            autoComplete="off"
            name="searchText"
            type="text"
            placeholder="Busca un curso por su nombre..."
            value={searchText}
            onChange={handleInputChange}
          />
        </form>
        <br />
        <div className="courses-dashboard-add-button">
          < CourseRegisterModal />
        </div>
        <div className="courses-dashboard-result">
          {CoursesFiltered.length > 0 ? (
            <Typography.Title level={3}>
              Resultados encontrados ({CoursesFiltered.length})
            </Typography.Title>
          ) : (
            <Typography.Title level={3}>
              {Data && `Cursos ( ${Data.length} )`}
            </Typography.Title>
          )}
        </div>
      </div>
      {Data ? (
        <div className="courses-dashboard-card-container">
          {searchText === ""
            ? Data.map((course) => <CourseCard key={course.id} {...course} />)
            : CoursesFiltered.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
        </div>
      ) : (
        <div className="courses-dashboard-spin">
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default CoursesDashBoard;
