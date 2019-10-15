/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
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
import List from "design_system/interfaces/guidelines/v2/components/List";
import TextLink from "TextLink";

function FilteringPage(): React.Node {
  return (
    <IndexedPage>
      <Half>
        <MainHeader addToIndex={false}>Filtering</MainHeader>
        <Headline>
          Use filtering to help users search for and narrow down results.
        </Headline>
      </Half>

      <Collection>
        <Item>
          <SubHeader>Simple Filters</SubHeader>
          <Words paragraph={true}>
            A compact and easily accessible bank of components that provide
            quick access to filtering a view. Simple filters work best above
            data-dense views such as tables, dashboards, detail pages, etc.
          </Words>
        </Item>

        <Item>
          <SubHeader>Filter Groups</SubHeader>
          <Words paragraph={true}>
            Enables users to configure and save groupings of filters.
            Recommended for users who are monitoring cohorts of data, and are
            not frequently adjusting their filters.
          </Words>
        </Item>

        <Item>
          <SubHeader>Faceting</SubHeader>
          <Words paragraph={true}>
            Helps users if they have a basic idea of what they&apos;re looking
            for, but don’t know what are the possible attributes of a search.
            Recommended if users need to explore and refine their results.
          </Words>
        </Item>
      </Collection>

      <Half>
        <MainHeader>Simple Filters</MainHeader>
      </Half>

      <Image
        alt="simple filters"
        src="https://assets.flexport.com/latitude/guidelines/filters/simple_filters01.png"
      />

      <Half>
        <SubHeader>Configurability</SubHeader>
        <Words paragraph={true}>
          A dropdown list can be used to bring up additional filters. Use this
          if certain filters are used a lot more than others.
        </Words>
      </Half>

      <Image
        alt="filters configurability"
        src="https://assets.flexport.com/latitude/guidelines/filters/configurability.png"
      />

      <Collection>
        <DoItem>
          <Words paragraph={true}>
            Combine compact filters, data entry filters, and filter expressions
            together. If there are too many filters to show in a view, leverage
            Panel or GeneralModal to act as overflow. Use data entry filters
            inside the overflow UI.
          </Words>
          <Image
            alt="do hide overflow"
            src="https://assets.flexport.com/latitude/guidelines/filters/do01.png"
          />
        </DoItem>

        <DontItem>
          <Words paragraph={true}>
            Try to avoid compact filters from wrapping into two lines. Instead,
            use responsive design to store overflow filters inside a panel or
            modal.
          </Words>
          <Image
            alt="don't have filters wrap two lines"
            src="https://assets.flexport.com/latitude/guidelines/filters/dont01.png"
          />
        </DontItem>

        <DoItem>
          <Words paragraph={true}>
            Look for opportunities to display a filter value in place of its
            label (if only one value is selected). In most cases, filter values
            will be self explanitory; therefore, try to save space by hiding
            filter labels.
          </Words>
          <Image
            alt="do replace the filter label if filter is self explanitory"
            src="https://assets.flexport.com/latitude/guidelines/filters/do02.png"
          />
        </DoItem>

        <DontItem>
          <Words paragraph={true}>
            Hide filter labels if filters within a group are similar. The
            example below should appear as{" "}
            <Words weight="bold">
              “Assignee • Bryan Manuele”; “Client assigned to • Gentian Edwards”
            </Words>
            .
          </Words>
          <Image
            alt="don't hide filter labels that are similar"
            src="https://assets.flexport.com/latitude/guidelines/filters/dont02.png"
          />
        </DontItem>

        <DoItem>
          <Words paragraph={true}>Use TextInput for search</Words>
          <Image
            alt="do use text input to filter"
            src="https://assets.flexport.com/latitude/guidelines/filters/do03.png"
          />
        </DoItem>

        <DontItem>
          <Words paragraph={true}>
            Never use a filter component for search
          </Words>
          <Image
            alt="don't make a custom text filter"
            src="https://assets.flexport.com/latitude/guidelines/filters/dont03.png"
          />
        </DontItem>
      </Collection>

      <Half>
        <MainHeader>Filter groups</MainHeader>
        <Words paragraph={true}>
          There are two types of groups: default, and custom. Default groups are
          defined by the system, whereas custom groups are defined by users. Use
          one or the other, or both.
        </Words>
        <Words paragraph={true}>
          Groups are typically placed inside a side bar or dropdown list.
        </Words>
        <SubHeader>Side bar</SubHeader>
        <Words paragraph={true}>
          A side bar can be beneficial for users who want to see a summary of
          the items inside their groups.
        </Words>
        <Words paragraph={true}>
          Placing it beside a table allows users to discover groups easily,
          saves clicks (compared to a dropdown list), and keeps the view simple
          by hiding filters in a modal.
        </Words>
      </Half>

      <Image
        alt="filters on sidebar"
        src="https://assets.flexport.com/latitude/guidelines/filters/sidebar.png"
      />

      <Half>
        <SubHeader>Dropdown list</SubHeader>
        <Words paragraph={true}>
          Place groups inside a dropdown list if the view is really dense.
        </Words>
      </Half>

      <Image
        alt="filter groups in dropdown list"
        src="https://assets.flexport.com/latitude/guidelines/filters/dropdownlist.png"
      />

      <Half>
        <SubHeader>Configurability</SubHeader>
        <Words paragraph={true}>
          Place filters inside modals when giving users the ability to create
          and edit groups.
        </Words>
      </Half>

      <Image
        alt="modal filtering"
        src="https://assets.flexport.com/latitude/guidelines/filters/modal.png"
      />

      <Half>
        <MainHeader>Faceting</MainHeader>
        <Words paragraph={true}>
          Below is an example of how Carrier Ops Associates leverage facets to
          pair Carrier Bookings with shipments. Read{" "}
          <TextLink href="https://www.algolia.com/doc/" openInNewTab={true}>
            Algolia’s documentation
          </TextLink>{" "}
          if you’re thinking about using faceting. Also check out Fulfillment
          Plans in ocean shipments to see it in action.
        </Words>
      </Half>

      <Image
        alt="facet filtering"
        src="https://assets.flexport.com/latitude/guidelines/filters/facet.png"
      />

      <Collection>
        <DoItem>
          <Words paragraph={true}>
            Use facets if users need to look for something specific, but don’t
            understand all possible attributes. Facets show the number of
            results that appear in each attribute, and deprioritize attributes
            with zero results. An additional indicator appears on facets with
            zero results, to education users that the result count is zero due
            to the selection of another facet.
          </Words>
        </DoItem>
        <DontItem>
          <Words paragraph={true}>
            Use facets if users need to monitor cohorts of data. Filters can be
            leveraged to reveal all searchable attributes, enabling users to
            create many different permutations of their search. In this
            scenario, selecting some filters may return zero results; however,
            in some cases it’s better to show everything, rather than
            deprioritize.
          </Words>
        </DontItem>
      </Collection>

      <MainHeader>Components</MainHeader>

      <List incog={true}>
        <TextLink weight="bold" href="/design/components/DateRangeFilter">
          DateRangeFilter
        </TextLink>

        <TextLink weight="bold" href="/design/components/SelectFilter">
          SelectFilter
        </TextLink>

        <TextLink weight="bold" href="/design/components/MultiselectFilter">
          MultiselectFilter
        </TextLink>
      </List>
    </IndexedPage>
  );
}

export default FilteringPage;
