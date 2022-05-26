import React from "react";
import { Iprops } from "./types";

export default function GenderSelection(props: Iprops) {
    const { onChange } = props;
    return (
        <div data-testid='gender' className="genderdiv" onChange={onChange}>
            <label>
                <input type={'radio'} style={{ color: '#747474' }} value='male' name="gender" /> Male
            </label>
            <label>
                <input type={'radio'} style={{ color: '#747474' }} color='#747474' value='female' name="gender" /> Female
            </label>
            <label>
                <input type={'radio'} value='all' name="gender" defaultChecked /> All
            </label>
        </div>
    )
}