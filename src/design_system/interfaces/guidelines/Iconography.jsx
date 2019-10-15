/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow
 */
import * as React from "react";

import Icon from "Icon";
import Text from "Text";
import {iconData, type IconNames} from "tools/icons";
import {css, StyleSheet} from "styles/aphrodite";

import betterGroupBy from "tools/betterGroupBy";

type IconData = {
  twoTone?: boolean,
  name: string,
  category:
    | "action"
    | "deprecated"
    | "detailed"
    | "industry"
    | "information"
    | "location"
    | "transportation"
    | "web",
  description: string,
  path: Array<string>,
  elaboratePath?: any,
  key: IconNames,
};

const Iconography = () => {
  const iconsByCategory = betterGroupBy(
    Object.keys(iconData).map(key => ({...iconData[key], ...{key}})),
    icon => icon.category
  );
  const hiddenCategories = ["deprecated", "detailed", "web"];
  const mainCategories = Array.from(iconsByCategory.keys())
    .sort()
    .filter(cat => !hiddenCategories.includes(cat));
  return (
    <div className={css(styles.section)}>
      <Text scale="headline" weight="bold">
        <span algolia-id="docsearch-title">Iconography</span>
      </Text>
      <div className={css(styles.overview)}>
        <Text scale="title">
          Icons are graphic elements that quickly and concisely convey
          information to the user.
        </Text>
      </div>
      {mainCategories.map((category, i) => (
        <Category
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          category={iconsByCategory.get(category)}
          title={category}
        />
      ))}
      <Category category={iconsByCategory.get("detailed")} title="Detailed" />
    </div>
  );
};

const Category = ({
  category,
  title,
}: {
  +category?: Array<IconData>,
  +title: string,
}) => {
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  if (category) {
    return (
      <div className={css(styles.category)}>
        <Text scale="title" weight="bold">
          {capitalizedTitle}
        </Text>
        <div className={css(styles.grid)}>
          {category.map((icon, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className={css(styles.cell)} key={i}>
              <div>
                <Icon iconName={icon.key} size="xxl" color="grey60" />
              </div>
              <pre className={css(styles.iconName)}>
                <code algolia-id="docsearch-text">{icon.key}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default Iconography;

const styles = StyleSheet.create({
  category: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridRowGap: "20px",
    paddingBottom: "36px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 120px)",
    gridGap: "36px",
  },
  cell: {
    display: "grid",
    gridTemplateColumns: "1fr",
    textAlign: "center",
    gridRowGap: "12px",
  },
  iconName: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  section: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridRowGap: "36px",
    gridAutoRows: "max-content",
    paddingTop: "12px",
  },
  overview: {
    maxWidth: "450px",
  },
});
