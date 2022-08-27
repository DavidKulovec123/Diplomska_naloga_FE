import React, {useEffect, useState} from "react";
import {forEach} from "react-bootstrap/ElementChildren";

const UsersInClassCard = ({cardData}:{cardData:any}) => {

    return (

        <>


            <div className="col-sm-3 " style={{marginTop: "10px"}}>
                <div>{cardData.razred.user.map((user: any) => {
                    return (
                        <>
                            <div>Clan: {user.first_name} {user.last_name}</div>

                        </>
                    )
                })}
                </div>
            </div>

        </>
    )
}

export default UsersInClassCard;