import { CheckOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { useState } from "react";
import CheckboxComponent from "../Common/Checkbox/Checkbox";

export default function Filters({ title, TourList, handleChecked }) {

    const [showFilterList, setShowFilterList] = useState(true);

    return (
        <div className="border border-[#C6C6C6] rounded-md w-full h-auto p-4">
            <div className="w-full h-8 flex flex-row justify-between">
                <div>
                    <span className="text-black">{title}</span>
                </div>
                <div onClick={() => setShowFilterList(() => !showFilterList)}>
                    {showFilterList ? <UpOutlined /> :
                        <DownOutlined />}
                </div>
            </div>
            <div className={`h-auto overflow-y-scroll`}>
                {
                    showFilterList && TourList.map((name, index) => {
                        return (
                            <CheckboxComponent key={index} name={name} index={index} isChecked={handleChecked} />
                        )
                    })
                }
            </div>
        </div>
    )
}