/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import IndexedPage from "design_system/interfaces/guidelines/v2/components/IndexedPage";
import MainHeader from "design_system/interfaces/guidelines/v2/components/MainHeader";
import Words from "design_system/interfaces/guidelines/v2/components/Words";
import Image from "design_system/interfaces/guidelines/v2/components/Image";
import Collection from "design_system/interfaces/guidelines/v2/components/Collection";
import Half from "design_system/interfaces/guidelines/v2/components/Half";
import Headline from "design_system/interfaces/guidelines/v2/components/Headline";
import Item from "design_system/interfaces/guidelines/v2/components/Item";
import DoItem from "design_system/interfaces/guidelines/v2/components/DoItem";
import DontItem from "design_system/interfaces/guidelines/v2/components/DontItem";
import List from "design_system/interfaces/guidelines/v2/components/List";
import TextLink from "TextLink";
import {StyleSheet, css} from "aphrodite";

function TypographyPage(): React.Node {
  return (
    <IndexedPage>
      <Half>
        <MainHeader addToIndex={false}>Typography</MainHeader>
        <Headline>
          Typography is used to establish a balanced and intuitive interface.
          Scale, weight, and organization should be carefully considered when
          building UI.
        </Headline>
      </Half>
      <Half>
        <MainHeader>Scale</MainHeader>
        <Words paragraph={true}>
          Type scales were carefully crafted based on our 4px baseline grid.
        </Words>
      </Half>
      <Image
        alt="Typography scales"
        src="https://assets.flexport.com/latitude/guidelines/typo/typo_scale.png"
      />
      <Image
        alt="Typography detailed zoom"
        src="https://assets.flexport.com/latitude/guidelines/typo/typo_magnify.png"
      />
      <Half>
        <MainHeader>Rhythm</MainHeader>
        <Words paragraph={true}>
          User interfaces inside Flexport contain immense amounts of data and
          content—from dashboards with maps and lists, to product details with
          descriptions of goods, SKU’s, PO’s, etc.
        </Words>
        <Words paragraph={true}>
          There’s infinite data to present, but finite screen space. Use type
          scales wisely, in order to help reduce cognitive load for shippers,
          consignees, and operations users.
        </Words>
      </Half>
      <Collection>
        <DoItem>
          <Words paragraph={true}>
            Combine type with contrasting weights (such as `headline` and
            `base`). Try to use `headline` or `display` only once per page.
          </Words>
          <Image
            alt="Example showing contrasting weights"
            src="https://assets.flexport.com/latitude/guidelines/typo/typo_do_0.png"
          />
        </DoItem>
        <DontItem>
          <Words paragraph={true}>
            Overuse bold weights (such as using `display`and `headline`
            together). Otherwise copy becomes difficult to parse.
          </Words>
          <Image
            alt="Example showing bold overuse"
            src="https://assets.flexport.com/latitude/guidelines/typo/typo_dont_0.png"
          />
        </DontItem>
        <DoItem>
          <Words paragraph={true}>
            Stay within a range of 45 to 75 characters for length of a line. 66
            characters is ideal for a single column page layout. 40-50 is ideal
            for multiple columns.
          </Words>
          <Image
            alt="Example showing ideal line length"
            src="https://assets.flexport.com/latitude/guidelines/typo/typo_do_1.png"
          />
        </DoItem>
        <DontItem>
          <Words paragraph={true}>
            Use the entire width of a page to contain copy.
          </Words>
          <Image
            alt="Example showing line that is too long"
            src="https://assets.flexport.com/latitude/guidelines/typo/typo_dont_1.png"
          />
        </DontItem>
      </Collection>
      <Half>
        <MainHeader indexText="Tabular lining">
          Tabular lining figures
        </MainHeader>
        <Words paragraph={true}>
          All of our numbers are set to use tabular lining so a 1 takes up the
          same amount of horizontal space as a 3. This helps with scanability
          and makes data-dense, number-heavy layouts easy to digest.
        </Words>
        <Collection collapse={false}>
          <Item className={css(styles.figures)}>
            <List incog={true} align="right">
              <Words>567,234,786.98</Words>
              <Words>11,111.00</Words>
              <Words>3,456,789.00</Words>
              <Words>151,010,216.11</Words>
            </List>
          </Item>
        </Collection>
      </Half>
      <Collection>
        <DoItem>
          <Words paragraph={true}>
            Align decimals inside a table in order to make data easy to scan.
            The jump between 2,000.00 and 11.00 are immediately apparent, in the
            example below.
          </Words>
          <Image
            alt="Example showing alignment of numbers"
            src="https://assets.flexport.com/latitude/guidelines/typo/typo_do_2.png"
          />
        </DoItem>
        <DontItem>
          <Words paragraph={true}>
            Right align numbers when they are combined with letters, and special
            characters (such as dates). It becomes to spot the differences, as
            illustrated in the “CRD” column.
          </Words>
          <Image
            alt="Example showing numbers mixed with characters"
            src="https://assets.flexport.com/latitude/guidelines/typo/typo_dont_2.png"
          />
        </DontItem>
      </Collection>
      <Half>
        <MainHeader>Colors</MainHeader>
        <Words paragraph={true}>
          Type styles have associating default colors. Below are recommendations
          for alternative colors. Apply color based on your use case (for
          example, use red40 for error messages).
        </Words>
        <Words paragraph={true}>
          Visit{" "}
          <TextLink href="/design/guidelines/color-system">
            color guidelines
          </TextLink>{" "}
          for more color combinations.
        </Words>
        <Image
          alt="Typography colors"
          src="https://assets.flexport.com/latitude/guidelines/typo/typo_colors.png"
        />
      </Half>
      <Half>
        <MainHeader>Components</MainHeader>
        <List incog={true}>
          <TextLink weight="bold" href="/design/components/text">
            Text
          </TextLink>
          <TextLink weight="bold" href="/design/components/label">
            Label
          </TextLink>
          <TextLink weight="bold" href="/design/components/link">
            Link
          </TextLink>
        </List>
      </Half>
    </IndexedPage>
  );
}

const styles = StyleSheet.create({
  figures: {
    display: "inline-block",
  },
});

export default TypographyPage;
