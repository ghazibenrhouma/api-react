import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            setDataUser(result.data);
        };
        fetchData();
    }, []);
    console.log(dataUser);
    return ( <
        div className = "card-style" >
        <
        ul > { " " } {
            dataUser.map((el) => {
                return ( <
                    Card style = {
                        { width: "18rem" } }
                    key = { el.id }
                    className = "card" >
                    <
                    Card.Body >
                    <
                    Card.Title > { el.userId } < /Card.Title>{" "} <
                    Card.Subtitle className = "mb-2 text-muted" > { " " } { el.id } { " " } <
                    /Card.Subtitle>{" "} <
                    Card.Text > { " " } { el.title } < br / > { el.completed } { " " } <
                    /Card.Text>{" "} <
                    /Card.Body>{" "} <
                    /Card>
                );
            })
        } { " " } <
        /ul>{" "} <
        /div>
    );
};

export default UserList;