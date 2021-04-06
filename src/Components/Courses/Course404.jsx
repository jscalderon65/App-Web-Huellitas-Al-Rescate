import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Spin } from "antd";
import {RollbackOutlined} from '@ant-design/icons';
const Course404 = ({ GoTo = "/cursos" }) => {
  const { Title } = Typography;
  const [SpinState, setSpinState] = useState(false);
  useEffect(() => {
    const interval = setTimeout(() => {
      setSpinState(true);
    }, 5000);
    return () => clearTimeout(interval);
  }, []);
  return SpinState ? (
    <div className="container-404">
      <Title style={{ textAlign: "center", color: "#221d1b" }}>
        Página no encontrada
      </Title>
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container">
        <br />
        <Link to={GoTo}>
          <Button type="primary" size="large">
          <RollbackOutlined /> Volver
          </Button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="container-404">
      <Spin size="large" />
    </div>
  );
};

export default Course404;
