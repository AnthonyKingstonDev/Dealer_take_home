import React from "react";
import "./Card.scss";


//Sub compoents of the card


function CardImage({ src }) {
    return <img className="card-image" src={src} />;
}

function CardHeader({ children }) {
    return <h3 className="card-header">{children}</h3>;
}

function CardBody({ children }) {
    return <div className="card-body">{children}</div>;
}

function Button({ children, onClick }) {
    return (
        <button className="card-button" onClick={onClick}>
            {children}
        </button>
    );
}


// Uses the sub componenets to create a function that generates a card


export default function Card({ id, selectedId, onSelect, data }) {
    const isSelected = selectedId === id;

    return (
        <div className={`card ${isSelected ? "selected" : ""}`}>

            <CardImage src={data.image} />


            <div className="cardComponents">
                <CardHeader>{data.title}</CardHeader>
                <CardBody>{data.body}</CardBody>

            </div>

            {/* This button changes the state to the state of the button press and therefore causes the board to render on card of the button pressed */}
            <Button onClick={() => onSelect(id)}>Button {id + 1}</Button>
        </div>
    );
}
