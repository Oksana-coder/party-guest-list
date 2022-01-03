import React from "react";
import { IState as IProps } from "../App";

const PeopleList: React.FC<IProps> = ({ people }) => {
    
    const renderPeopleList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="list">
                <div className="list-header">
                    <img className="list-img" src={person.url} alt={person.name} />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="list-note">{person.note}</p>
            </li>
            )
            
        })
    };

    return (
        <ul>
            {renderPeopleList()}
        </ul>
    )
}

export default PeopleList;