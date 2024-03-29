import React, { useState } from 'react';
import { CheckOutlined } from "@ant-design/icons";
import Checkbox from "react-custom-checkbox";

export default function CheckboxComponent({ name, index, isChecked }) {
    // const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="py-1">
            <Checkbox
                icon={
                    <CheckOutlined />}
                name={name + " " + index}
                checked={isChecked}
                onChange={(value, event) => {
                    // setIsChecked(value)
                    isChecked(value, name)
                }}
                borderColor="#C6C6C6"
                style={{ cursor: "pointer", color: 'black' }}
                labelStyle={{ marginLeft: 5, userSelect: "none", fontSize: "12px", paddingLeft: "4px", color: 'black' }}
                label={name}
            />
        </div>
    )
}
