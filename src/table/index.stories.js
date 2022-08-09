import { Table } from "./index.ts";
import { Dropdown } from "../dropdown";
import { Checkbox } from "../checkbox";
import { TextArea } from "../textarea";
import { DatePicker } from "../date-picker";
import { RadioButton } from "../radio-button";
import { MultiChoice } from "../multichoice";
import { TimePicker } from "../time-picker";

export default {
  title: "desktop/table",
  argTypes: {
    className: { name: "className" },
    id: { name: "id" },
    label: { name: "label" },
    data: { name: "data" },
    columns: { name: "columns" },
    visible: { name: "visible" },
  },
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};

const Template = (args) => {
  const table = new Table({ ...args });
  table.addEventListener("change", (event) => {
    console.log(event);
  });
  return table;
};

const renderAge = (dataCell, dataRow) => {
  const text = new TextArea({ value: dataCell });
  return text;
};

const renderName = (cellData) => {
  const dropdown = new Dropdown({
    items: [
      {
        label: "Nguyen Van A",
        value: "a",
      },
      {
        label: "Vo Duc Hau",
        value: "voduchau",
      },
    ],
    value: cellData,
    selectedIndex: 0,
  });
  return dropdown;
};

const renderAddress = (cellData) => {
  const checkbox = new Checkbox({
    items: [
      {
        label: "VietNam",
        value: "vn",
      },
      {
        label: "Japan",
        value: "ja",
      },
    ],
    value: cellData,
  });
  return checkbox;
};

const renderDate = (cellData) => {
  const datePicker = new DatePicker({ value: cellData });
  return datePicker;
};

const renderTime = (cellData) => {
  const timePicker = new TimePicker({ value: cellData });
  return timePicker;
};

const renderGender = (cellData) => {
  const radioButton = new RadioButton({
    items: [
      { label: "male", value: "male" },
      { label: "female", value: "female" },
    ],
    value: cellData,
  });
  return radioButton;
};

const renderMultiChoice = (cellData) => {
  const multichoice = new MultiChoice({
    items: [
      { label: "sample1", value: "sample1" },
      { label: "sample2", value: "sample2" },
      { label: "sample3", value: "sample3" },
    ],
    value: cellData,
  });
  return multichoice;
};

export const Base = Template.bind({});
Base.args = {
  label: "Table component",
  visible: true,
  columns: [
    {
      headerName: "Name",
      field: "name",
      requiredIcon: true,
      render: renderName,
    },
    {
      headerName: "Address",
      field: "address",
      render: renderAddress,
    },
    {
      headerName: "Age",
      field: "age",
      render: renderAge,
    },
    {
      headerName: "Date",
      field: "date",
      render: renderDate,
    },
    {
      headerName: "Gender",
      field: "gender",
      render: renderGender,
    },
    {
      headerName: "Time",
      field: "time",
      render: renderTime,
    },
    {
      headerName: "Multichoice",
      field: "multichoice",
      render: renderMultiChoice,
    },
  ],
  data: [
    {
      name: "a",
      age: 32,
      date: "2021-03-31",
      time: "12:12",
      gender: "female",
      multichoice: ["sample1", "sample3"],
      address: ["vn"],
    },
    {
      name: "voduchau",
      age: 20,
      date: "2021-02-22",
      time: "13:13",
      gender: "male",
      multichoice: ["sample2", "sample3"],
      address: ["vn", "ja"],
    },
  ],
  id: "table-id",
  className: "table-classname",
  actionButtonsShown: true,
};
