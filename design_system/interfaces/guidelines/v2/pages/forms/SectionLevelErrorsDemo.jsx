/**
 * TEAM: frontend_infra
 * @flow
 */

import React, {useState} from "react";

import Grid from "../../../../../../grid/Grid";
import Row from "../../../../../../grid/Row";
import Cell from "../../../../../../grid/Cell";
import Banner from "../../../../../../Banner";
import Text from "../../../../../../Text";
import TextInput from "../../../../../../TextInput";
import TextareaInput from "../../../../../../TextareaInput";
import RadioGroup from "../../../../../../radio/RadioGroup";
import Label from "../../../../../../Label";
import SectionExample from "./SectionExample";
import SelectInput from "../../../../../../select/SelectInput";

const containerTypeOptions = [
  {
    value: "20 ft",
    label: "20 ft",
  },
  {
    value: "40 ft",
    label: "40 ft",
  },
];

const cargoUnitOptions = [
  {
    label: "KG / CBM",
    value: "KG / CBM",
  },
  {
    label: "LC / CFT",
    value: "LC / CFT",
  },
];

const packageDetailsOptions = [
  {
    label: "Yes",
    value: "Yes",
  },
  {
    label: "No",
    value: "No",
  },
];

const typeOptions = [
  {
    label: "Cartons",
    value: "Cartons",
  },
  {
    label: "Boxes",
    value: "Boxes",
  },
];

function SectionLevelErrorsDemo() {
  const [containerType, setContainerType] = useState("20 ft");
  const [quantity, setQuantity] = useState("2");
  const [cargoUnits, setCargoUnits] = useState("KG / CBM");
  const [packageDetails, setPackageDetails] = useState("Yes");
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalVolume, setTotalVolume] = useState(0);
  const [type, setType] = useState("Cartons");
  const [marksNumbers, setMarksNumbers] = useState("");

  return (
    <SectionExample>
      <Grid gutter={20} rowGap={20}>
        <Row>
          <Cell span={12}>
            <Text weight="bold">Cargo details</Text>
          </Cell>
        </Row>
        <Row>
          <Cell span={12}>
            <Banner iconName="attention" message="Enter cargo details" />
          </Cell>
        </Row>
        <Row>
          <Cell span={{xs: {span: 12}, lg: {span: 3}}}>
            <Label value="Container type" indicateRequired={true}>
              <SelectInput
                value={containerType}
                options={containerTypeOptions}
                onChange={val => setContainerType(val)}
              />
            </Label>
          </Cell>
          <Cell span={{xs: {span: 12}, lg: {span: 3}}}>
            <Label value="Quantity" indicateRequired={true}>
              <TextInput value={quantity} onChange={val => setQuantity(val)} />
            </Label>
          </Cell>
        </Row>
        <Row>
          <Cell span={12}>
            <Label value="Cargo units">
              <RadioGroup
                options={cargoUnitOptions}
                value={cargoUnits}
                onChange={val => setCargoUnits(val)}
              />
            </Label>
          </Cell>
          <Cell span={12}>
            <Label value="Do you know your package details?">
              <RadioGroup
                options={packageDetailsOptions}
                value={packageDetails}
                onChange={val => setPackageDetails(val)}
              />
            </Label>
          </Cell>
        </Row>
        <Row>
          <Cell span={{xs: {span: 12}, lg: {span: 3}}}>
            <Label value="Total weight" indicateRequired={true}>
              <TextInput
                suffix="kg"
                value={totalWeight.toString()}
                onChange={val => setTotalWeight(val)}
              />
            </Label>
          </Cell>
          <Cell span={{xs: {span: 12}, lg: {span: 3}}}>
            <Label value="Total volume" indicateRequired={true}>
              <TextInput
                suffix="cbm"
                value={totalVolume.toString()}
                onChange={val => setTotalVolume(val)}
              />
            </Label>
          </Cell>
          <Cell span={{xs: {span: 12}, lg: {span: 3}}}>
            <Label value="Type" indicateRequired={true}>
              <SelectInput
                value={type}
                options={typeOptions}
                onChange={val => setType(val)}
              />
            </Label>
          </Cell>
        </Row>
        <Row>
          <Cell span={{xs: {span: 12}, lg: {span: 9}}}>
            <Label value="Marks and numbers - Optional" indicateRequired={true}>
              <TextareaInput
                value={marksNumbers}
                placeholder="Purchase order or description of shipment"
                onChange={val => setMarksNumbers(val)}
                rows={{min: 3, max: 3}}
              />
            </Label>
          </Cell>
        </Row>
      </Grid>
    </SectionExample>
  );
}

export default SectionLevelErrorsDemo;
