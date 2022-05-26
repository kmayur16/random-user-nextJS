import React from "react";
import { Iprops } from "./types";
export default function DisplayCard(props: Iprops) {
    const { randomUser } = props;
    return (
        <div className="carddiv">
            {randomUser?.map((res: any, index: number) =>
            (

                <div key={index} className="card" data-testid={`res-item-${index}`}>
                    <div className="first">
                        <img style={{
                            padding: '5px 0 5px 0',
                            borderRadius: '8px'
                        }} alt='thumbnail' src={window.innerWidth <= 620 ? res.picture.large : res.picture.medium} />
                        <p className="name">{res.name.title} {res.name.first} {res.name.last} ({res.nat})</p>
                    </div>
                    <div className="emaildiv">
                        <p className="email">Email: {res.email}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}