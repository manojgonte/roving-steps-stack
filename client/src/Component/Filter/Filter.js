import { CheckOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { useState } from "react";
import CheckboxComponent from "../Common/Checkbox/Checkbox";

export default function Filters({ title, TourList, handleItemClick, selectedItems }) {

    const [showFilterList, setShowFilterList] = useState(true);

    return (
        <div className="border border-[#C6C6C6] rounded-md w-full h-auto p-4">
            <div className="w-full h-8 flex flex-row justify-between">
                <div>
                    <span className="text-black">{title}</span>
                </div>
                <div onClick={() => setShowFilterList(() => !showFilterList)}>
                    {showFilterList ? <UpOutlined color="#000" className="text-black" /> :
                        <DownOutlined color="#000" className="text-black" />}
                </div>
            </div>
            {/* <div className={`h-auto overflow-y-scroll`}> */}
                < ul className="h-auto overflow-y-scroll">
                    {
                        showFilterList && TourList?.map((name, index) => {
                            return (
                                // <CheckboxComponent key={index} name={name} index={index} isChecked={handleChecked} />
                                <li key={index + ".-"}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedItems.includes(name)}
                                            onChange={() => handleItemClick(name)}
                                        />
                                        <span className="ml-2 text-black">{name}</span>
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>
            {/* </div> */}
        </div >
    )
}