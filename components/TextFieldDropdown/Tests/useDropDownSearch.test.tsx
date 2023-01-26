import { render, renderHook, act, waitFor } from "@testing-library/react";
import useDropdownSearch from "../useDropdownSearch";

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Not good enough to test axios or async custom hooks in general.

test("Not good enough to test axios or async custom hooks in general.", async () => {
  expect(1).toBe(1);
  const { result } = renderHook(() => useDropdownSearch({ value: "", url: "" }))
  await act(async () => {
    console.log("test")
    console.log(result)
    await expect(result.current.data).resolves.toEqual("");
  })

});
