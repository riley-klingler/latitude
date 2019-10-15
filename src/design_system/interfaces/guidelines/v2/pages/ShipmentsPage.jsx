/**
 * TEAM: frontend_infra
 *
 * @flow
 */

import React from "react";
import type {Node} from "react";
import IndexedPage from "design_system/interfaces/guidelines/v2/components/IndexedPage";
import MainHeader from "design_system/interfaces/guidelines/v2/components/MainHeader";
import SubHeader from "design_system/interfaces/guidelines/v2/components/SubHeader";
import Headline from "design_system/interfaces/guidelines/v2/components/Headline";
import Words from "design_system/interfaces/guidelines/v2/components/Words";
import Image from "design_system/interfaces/guidelines/v2/components/Image";
import Collection from "design_system/interfaces/guidelines/v2/components/Collection";
import Half from "design_system/interfaces/guidelines/v2/components/Half";
import Item from "design_system/interfaces/guidelines/v2/components/Item";
import DoItem from "design_system/interfaces/guidelines/v2/components/DoItem";
import DontItem from "design_system/interfaces/guidelines/v2/components/DontItem";
import CautionItem from "design_system/interfaces/guidelines/v2/components/CautionItem";
import List from "design_system/interfaces/guidelines/v2/components/List";
import TextLink from "TextLink";

function ShipmentsPage(): Node {
  return (
    <IndexedPage>
      <Half>
        <MainHeader addToIndex={false}>Shipment display</MainHeader>
        <Headline>
          Shipments are the life-blood of Flexport. Our users interact with
          shipments in a multitude of ways—we&apos;ve developed flexible
          guidelines to render shipments across the ecosystem.
        </Headline>
      </Half>
      <Half>
        <MainHeader>Principles</MainHeader>
      </Half>
      <Collection>
        <Item>
          <SubHeader>Recognizable</SubHeader>
          <Words paragraph={true}>
            Utilizing this pattern across all shipments across Flexport is
            essential to reducing cognitive friction for our users. Without
            standardization, users would need to reprocess the same information
            over and over.
          </Words>
        </Item>
        <Item>
          <SubHeader>Flexible</SubHeader>
          <Words paragraph={true}>
            The design of shipment display accounts for the most simple and
            complex use cases, while retaining recognizability. If you find that
            this pattern is not flexible enough, please consult with
            #design-systems in Slack.
          </Words>
        </Item>
      </Collection>
      <Half>
        <MainHeader>Anatomy</MainHeader>
      </Half>
      <Image
        alt="Anatomy diagram"
        framed={true}
        src="https://assets.flexport.com/latitude/guidelines/shipment_display/anatomy.png"
      />
      <Half>
        <Words paragraph={true}>
          The pattern’s structure can be dissected into three modules. Use the
          following guideliens to swap in and out data within each module.
        </Words>
      </Half>
      <Collection>
        <Item>
          <SubHeader>Level 1</SubHeader>
          <Words paragraph={true}>
            Use for primary identifiers — FLEX ID, names (shipment & client),
            priority level, bookmarking.
          </Words>
        </Item>
        <Item>
          <SubHeader>Level 2</SubHeader>
          <Words paragraph={true}>
            Use for supporting identifiers — tags, custom attributes, etc. If
            there is nothing to display, Level 3 will take this position.
          </Words>
        </Item>
        <Item>
          <SubHeader>Level 3</SubHeader>
          <Words paragraph={true}>
            Use for teritiary types of information — shipment status, overall
            progress of a shipment, # of containers, mode of transportation,
            etc.
          </Words>
        </Item>
      </Collection>
      <Half>
        <MainHeader>Usage</MainHeader>
        <SubHeader>FLEX ID</SubHeader>
        <Words paragraph={true}>
          A FLEX ID can be configured with different styles such as weight,
          links, and buttons. Refer to{" "}
          <TextLink href="/design/guidelines/typography">
            Typography Guidelines
          </TextLink>{" "}
          for more detail about sizing.
        </Words>
      </Half>
      <Image
        alt="FLEX ID table"
        src="https://assets.flexport.com/latitude/guidelines/shipment_display/flex_id_usage.png"
      />
      <Collection>
        <CautionItem>
          <Words paragraph={true}>
            Use FLEX IDs with links inside tables, to direct users into
            shipments. This should only apply if a row does not directly link to
            a shipment.
          </Words>
          <Image
            alt="FLEX ID table"
            src="https://assets.flexport.com/latitude/guidelines/shipment_display/flex_id_caution.png"
          />
        </CautionItem>
        <DontItem>
          <Words paragraph={true}>
            Use FLEX IDs with buttons inside tables, as it detracts from other
            (potentially more important) data.
          </Words>
          <Image
            alt="FLEX ID table"
            src="https://assets.flexport.com/latitude/guidelines/shipment_display/flex_id_dont.png"
          />
        </DontItem>
      </Collection>
      <Half>
        <SubHeader>Incorporating more levels of information</SubHeader>
        <Words paragraph={true}>
          Designing complex workflows will involve stitching together many types
          of views; for example, table -&gt; form -&gt; detail page. Pay
          attention to where shipments appear, and try to be cognizant of
          retaining visual consistency as much as possible. Below are examples
          of different views which feature shipments.
        </Words>
        <Words paragraph={true}>
          Below are examples of different views which feature shipments.
        </Words>
      </Half>
      <Image
        alt="Examples of incorporating more levels of info"
        src="https://assets.flexport.com/latitude/guidelines/shipment_display/information_levels.png"
      />
      <Half>
        <SubHeader>Apply different styles based on context</SubHeader>
      </Half>
      <Collection>
        <DoItem>
          <Words paragraph={true}>
            Use non-emphasized styles when shipments are used for referencing
            primary content.
          </Words>
          <Image
            alt="Use non-emphasized styles"
            src="https://assets.flexport.com/latitude/guidelines/shipment_display/non_emphasized.png"
          />
        </DoItem>
        <DontItem>
          <Words paragraph={true}>
            Use emphasized styles when primary information is something other
            than the shipment. Users won’t know where to look.
          </Words>
          <Image
            alt="Don't use emphasized styles"
            src="https://assets.flexport.com/latitude/guidelines/shipment_display/emphasized.png"
          />
        </DontItem>
      </Collection>

      <MainHeader>Components</MainHeader>

      <List incog={true}>
        <TextLink weight="bold" href="/design/components/Pill">
          Pill
        </TextLink>
      </List>
    </IndexedPage>
  );
}

export default ShipmentsPage;
