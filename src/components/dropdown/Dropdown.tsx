import { useState } from "react";
import Button from "../button/Button";
import "./Dropdown.scss";
import { save, open } from "@tauri-apps/api/dialog";
import { invoke } from "@tauri-apps/api";

interface Props {
    textareaValue: string;
    handleTextChange: (text: string) => void;
    handleTextSizeChange: (size: number) => void;
}

const Dropdown = ({ textareaValue, handleTextChange, handleTextSizeChange }: Props) => {
    const [currentFileDropdownOption, setFileDropdownOption] = 
        useState("close");
    const [currentAppereanceDropdownOption, setAppereanceDropdownOption] =
        useState("close");
    const [currentTextSizeDropdownOption, setTextSizeDropdownOption] =
        useState("close");

    const optionCloseStyle = {
        display: "none",
    };

    const optionOpenStyle = {
        display: "block",
    };

    const handleSave = async () => {
        let path = await save({
            filters: [
                {
                    name: "Text File",
                    extensions: ["txt"],
                },
            ],
        });

        await invoke("saving_file", { path: path, content: textareaValue });
    };

    const handleRead = async () => {
        let path = await open({
            filters: [
                {
                    name: "Text File",
                    extensions: ["txt"],
                },
            ],
        });

        let result: string = await invoke("reading_file", { path: path });
        handleTextChange(result);
    };

    const handleClear = async () => {
        handleTextChange("");
    };

    return (
        <div className="dropdown">
            <div className="dropdown__submenu">
                <Button
                    className="dropdown_main"
                    dropdownOption={currentFileDropdownOption}
                    onClick={() => {
                        currentFileDropdownOption === "close"
                            ? setFileDropdownOption("open")
                            : setFileDropdownOption("close");
                    }}
                >
                    File
                </Button>
                <div
                    className="dropdown__content"
                    style={
                        currentFileDropdownOption === "close"
                            ? optionCloseStyle
                            : optionOpenStyle
                    }
                >
                    <ul className="dropdown__list">
                        <li className="dropdown__item">
                            <Button
                                className="dropdown_options"
                                onClick={handleSave}
                            >
                                Save
                            </Button>
                        </li>
                        <li className="dropdown__item">
                            <Button
                                className="dropdown_options"
                                onClick={handleRead}
                            >
                                Open
                            </Button>
                        </li>
                        <li className="dropdown__item">
                            <Button
                                className="dropdown_options"
                                onClick={handleClear}
                            >
                                Clear
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="dropdown__submenu">
                <Button
                    className="dropdown_main"
                    dropdownOption={currentAppereanceDropdownOption}
                    onClick={() => {
                        currentAppereanceDropdownOption === "close"
                            ? setAppereanceDropdownOption("open")
                            : setAppereanceDropdownOption("close");
                    }}
                >
                    Appereance
                </Button>
                <div
                    className="dropdown__content"
                    style={
                        currentAppereanceDropdownOption === "close"
                            ? optionCloseStyle
                            : optionOpenStyle
                    }
                >
                    <ul className="dropdown__list">
                        <li className="dropdown__item">
                            <div className="dropdown__submenu">
                                <Button
                                    className="dropdown_main"
                                    dropdownOption={currentTextSizeDropdownOption}
                                    onClick={() => {
                                        currentTextSizeDropdownOption === "close"
                                            ? setTextSizeDropdownOption("open")
                                            : setTextSizeDropdownOption("close");
                                    }}
                                >
                                    Text Size
                                </Button>
                                <div
                                    className="dropdown__content"
                                    style={
                                        currentTextSizeDropdownOption === "close"
                                            ? optionCloseStyle
                                            : optionOpenStyle
                                    }
                                >
                                    <ul className="dropdown__list">
                                        <li className="dropdown__item">
                                            <Button
                                                className="dropdown_options"
                                                onClick={() => handleTextSizeChange(75)}
                                            >
                                                75%
                                            </Button>
                                        </li>
                                        <li className="dropdown__item">
                                            <Button
                                                className="dropdown_options"
                                                onClick={() => handleTextSizeChange(100)}
                                            >
                                                100%
                                            </Button>
                                        </li>
                                        <li className="dropdown__item">
                                            <Button
                                                className="dropdown_options"
                                                onClick={() => handleTextSizeChange(150)}
                                            >
                                                150%
                                            </Button>
                                        </li>
                                        <li className="dropdown__item">
                                            <Button
                                                className="dropdown_options"
                                                onClick={() => handleTextSizeChange(200)}
                                            >
                                                200%
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
