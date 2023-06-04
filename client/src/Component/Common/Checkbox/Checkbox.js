import React, { useState } from 'react';
import { CheckOutlined } from "@ant-design/icons";
import Checkbox from "react-custom-checkbox";

export default function CheckboxComponent({ name, index }) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="py-1">
            <Checkbox
                icon={
                    <CheckOutlined />}
                name={name + " " + index}
                checked={isChecked}
                onChange={(value, event) => {
                    setIsChecked(value)
                }}
                borderColor="#C6C6C6"
                style={{ cursor: "pointer" }}
                labelStyle={{ marginLeft: 5, userSelect: "none", fontSize: "12px", paddingLeft: "4px" }}
                label={name}
            />
        </div>
    )
}
