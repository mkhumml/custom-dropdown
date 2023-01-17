import React, { useEffect, useState } from "react";
import styles from "./Test.module.css";
import useDropdownSearch from "./useDropdownSearch";

interface ITextFieldDropdown {
  setDropdownValue: Function | undefined;
  dropdownValue: string | undefined;
  label: string;
  name: string;
}

const TextFieldDropdown = ({ setDropdownValue, label, name }: ITextFieldDropdown) => {
  const [state, setState] = useState("");
  const { data } = useDropdownSearch({ state });

  useEffect(() => {
    if (setDropdownValue) {
      setDropdownValue(state);
    }
  }, [state, setDropdownValue]);

  return (
    <div className="block p-4">
      <input
        value={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
        id={name}
        type="text"
        autoComplete="off"
        className="shadow-inputBorder py-2 px-4 w-full focus:outline-0 focus:shadow-inputBorderFocus"
      />
      <div className="relative z-10">
        <span className="font-semibold absolute -top-[3.35rem] left-2 pl-1 pr-1 bg-white z-10">
          {label}
        </span>
        <div className="absolute z-10 w-full">
          {data?.map((item: any, key: number) => {
            return (
              <div
                onClick={(event: any) => {
                  setState(event.target.innerHTML);
                }}
                className={
                  "hover:bg-gray-100 hover:cursor-pointer hover:shadow-inputBorderFocus hover:relative hover:z-10 bg-white shadow-inputBorder py-2 px-4 " +
                  `${styles.Animated}`
                }
                key={key}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TextFieldDropdown;
