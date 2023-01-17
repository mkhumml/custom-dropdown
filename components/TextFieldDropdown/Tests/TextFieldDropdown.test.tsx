import TextFieldDropdown from "../TextFieldDropdown";
import renderer from "react-test-renderer";

let mockData: any = null;

jest.mock("../useDropdownSearch", () => {
  return jest.fn(() => ({
    data: mockData,
    error: null,
    loading: false,
  }));
});


describe("TextFieldDropdown without Data", () => {
  test("Controlled Snapshot", () => {
    const tree = renderer.create(
      <TextFieldDropdown
        setDropdownValue={jest.fn((x) => x)}
        dropdownValue={""}
        label="DropdownControlled"
        name="DropdownControlledTest"
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
