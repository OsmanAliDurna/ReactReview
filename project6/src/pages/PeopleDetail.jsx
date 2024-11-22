import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PeopleDetail = () => {
  const [people, setPeople] = useState([]);

  const { id } = useParams();
  const { avatar, first_name, last_name, email } = people;

  const getPeople = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPeople();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="text-center">
      <img src={avatar} alt={first_name} className="img-thumbnail" />
      <h2>
        {first_name} {last_name}
      </h2>
      <h5>{email}</h5>
      <button className="btn btn-warning" onClick={() => navigate(-1)}>
        GO BACK
      </button>
      <button className="btn btn-danger" onClick={() => navigate("/")}>
        HOME
      </button>
    </div>
  );
};

export default PeopleDetail;
