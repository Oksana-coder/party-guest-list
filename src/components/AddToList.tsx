import React, { useState } from "react";
import { IState as Props } from "../App";


interface IProps {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
};

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        note: ""
    });

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [evt.target.name]: evt.target.value
        })
    };

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.img) {
            return;
        };

        setPeople([
            ...people,
            {
                name: input.name,
                age: Number(input.age),    // parseInt(input.age)
                url: input.img,
                note: input.note
            }
        ]);

        setInput({
            name: "",
            age: "",
            img: "",
            note: ""
        });
    };

    return (
        <div className="add-to-list">
            <input
                type="text"
                placeholder="Name"
                className="add-to-list__input"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="text"
                placeholder="Age"
                className="add-to-list__input"
                value={input.age}
                onChange={handleChange}
                name="age"
            />
            <input
                type="text"
                placeholder="Image URL"
                className="add-to-list__input"
                value={input.img}
                onChange={handleChange}
                name="img"
            />
            <textarea
                placeholder="Notes"
                className="add-to-list__input"
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button
                className="add-to-list__btn"
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList;