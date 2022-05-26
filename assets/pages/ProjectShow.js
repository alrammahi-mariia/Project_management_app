import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import axios from "axios";

const ProjectShow = () => {
  const [id, setId] = useState(useParams().id);
  const [project, setProject] = useState({ name: "", description: "" });

  useEffect(() => {
    axios
      .get(`/api/project/${id}`)
      .then(function (response) {
        setProject(reponse.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Show Project</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn-outline-info float-right" to="/">
              View All Projects
            </Link>
          </div>
          <div className="card-body">
            <b className="text-mutes">Name:</b>
            <p>{project.name}</p>
            <b className="text-muted">Description:</b>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectShow;
