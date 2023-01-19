import React, { useEffect, useState } from "react";
import styles from "./Test.module.css";
import useDropdownSearch from "./useDropdownSearch";

interface ITextFieldDropdown {
  setDropdownValue: Function | undefined;
  dropdownValue: string | undefined;
  label: string;
  name: string;
}

// AS a user I WANT to be able to type inside a Textfield SO THAT the UI can know what text i want to search for
//##DONE## AS a user I WANT to see the results of the provided value so that i dont have to type whole text
// as a user i want to see if there are no results so that i can adjust my search
//##DONE##// as a user i want to see when the textfield is selected so that i cannot miss focus
//##DONE##// as i user i want to see search results only when the textfield is focused



const TextFieldDropdown = ({ setDropdownValue, label, name }: ITextFieldDropdown) => {
  const [state, setState] = useState<string>("");
  const [focus, setFocus] = useState(false)
  const { data } = useDropdownSearch({ value: state, url: "https://jsonplaceholder.typicode.com/users" });

  useEffect(() => {
    if (setDropdownValue) {
      setDropdownValue(state);
    }
  }, [state, setDropdownValue]);

  return (
    <div className="block p-4 border border-red-600">
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
        id={name}
        type="text"
        autoComplete="off"
        className={"shadow-inputBorder py-2 px-4 w-full " + (focus ? " outline-0 shadow-inputBorderFocus" : "")}
      />
      <div className="relative">
        <span className="font-semibold absolute -top-[3.35rem] left-2 pl-1 pr-1 bg-white z-inputLabel">
          {label}
        </span>
        <div className={"absolute z-dropdownOptionsContainer w-full " + (focus ? "" : " hidden")}>
          {data?.map((item: any, key: number) => {
            return (
              <div
                onMouseDown={(event: any) => {
                  setState(event.target.innerHTML);
                }}
                className={
                  "hover:bg-gray-100 hover:cursor-pointer hover:shadow-inputBorderFocus hover:relative hover:z-10 z-dropdownOptionsItem bg-white shadow-inputBorder py-2 px-4 " +
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
