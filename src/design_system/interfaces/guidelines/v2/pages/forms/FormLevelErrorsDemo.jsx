/**
 * TEAM: frontend_infra
 * @flow
 */

import React, {useState} from "react";

import Grid from "../../../../../../grid/Grid";
import Row from "../../../../../../grid/Row";
import Cell from "../../../../../../grid/Cell";
import Group from "../../../../../../Group";
import Banner from "../../../../../../Banner";
import Button from "../../../../../../button/Button";
import Checkbox from "../../../../../../Checkbox";
import InputError from "../../../../../../InputError";
import Text from "../../../../../../Text";
import SelectInput from "../../../../../../select/SelectInput";
import TextInput from "../../../../../../TextInput";
import RadioGroup from "../../../../../../radio/RadioGroup";
import Label from "../../../../../../Label";
import SectionExample from "./SectionExample";

const roleOptions = [
  {
    label: "Shipper",
    value: "Shipper",
  },
  {
    label: "Consignee",
    value: "Consignee",
  },
];

function FormLevelErrorsDemo() {
  const [shipmentName, setShipmentName] = useState("");
  const [role, setRole] = useState("Shipper");
  const [notifyParty, setNotifyParty] = useState(true);

  return (
    <SectionExample>
      <Grid gutter={20} rowGap={20}>
        <Row>
          <Cell span={12}>
            <Banner
              intent="warning"
              iconName="attention"
              message="Please fix 3 errors"
            />
          </Cell>
        </Row>
        <Row>
          <Cell span={12}>
            <Group justifyContent="space-between" alignItems="center">
              <Text weight="bold" scale="headline">
                Create booking
              </Text>
              <Button>Use template</Button>
            </Group>
          </Cell>
        </Row>
        <Row>
          <Cell span={{xs: {span: 12}, lg: {span: 8}}}>
            <Label value="Shipment name" indicateRequired={true}>
              <InputError showError={true} errorText="Shipment name is missing">
                <TextInput
                  value={shipmentName}
                  onChange={val => setShipmentName(val)}
                  isInvalid={true}
                />
              </InputError>
            </Label>
          </Cell>
        </Row>
        <Row>
          <Cell span={12}>
            <Text weight="bold">Involved parties</Text>
          </Cell>
        </Row>
        <Row>
          <Cell span={12}>
            <Label
              value="What is your role in this trade?"
              indicateRequired={true}
            >
              <RadioGroup
                options={roleOptions}
                value={role}
                onChange={val => setRole(val)}
                isInline={false}
              />
            </Label>
          </Cell>
        </Row>
        <Row>
          <Cell span={{xs: {span: 12}, lg: {span: 6}}}>
            <Label value="Shipper" indicateRequired={true}>
              <SelectInput
                value=""
                options={[]}
                placeholder="Select company entity"
                onChange={() => undefined}
              />
            </Label>
          </Cell>
          <Cell span={{xs: {span: 12}, lg: {span: 6}}}>
            <Label value="Consignee" indicateRequired={true}>
              <SelectInput
                value=""
                options={[]}
                placeholder="Select company entity"
                onChange={() => undefined}
              />
            </Label>
          </Cell>
        </Row>
        <Row>
          <Cell span={12}>
            <Checkbox
              checked={notifyParty}
              onChange={val => setNotifyParty(val)}
              label="Notify party is same as consignee"
            />
          </Cell>
        </Row>
      </Grid>
    </SectionExample>
  );
}

export default FormLevelErrorsDemo;
