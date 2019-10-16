/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 * @flow
 */

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-elements */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable flexport/no-unused-aphrodite-styles */

import * as React from "react";
import {css, StyleSheet} from "aphrodite";
import invariant from "../tools/invariant";
import {border, include, typeScale, fontWeights} from "../styles/index";

import typeof Button from "../button/Button";
import typeof IconButton from "../button/IconButton";
import typeof AnchorButton from "../button/AnchorButton";
import latitudeColors from "../latitudeColors";
import {margin, padding} from "../styles/whitespace";

type Tab = {|
  +name: string,
  +id: string,
|};

type ButtonTypes = Button | IconButton | AnchorButton;
export type AllowedButton = React.Element<ButtonTypes>;

type Props = {|
  /** array of tabs of type {name: string, id: string} */
  +tabs: $ReadOnlyArray<Tab>,
  /** activeTab is the id of the currently active tab */
  +activeTab: string,
  /** onTabChange is called with the ID when the user navigates to a tab */
  +onTabChange: string => void,
  /** a button displayed on the right side, optional */
  +actionButton?: AllowedButton,
  /** whether the tabs will be centered or not */
  +centerTabs?: boolean,
|};

/**
 * @short Use this to build tabs
 * @brandStatus V2
 * @status In Review
 * @category Navigation
 * The component provides uniform designs for building Tab Headers so that they
 * look the same across the app. */
export default function TabHeader({
  tabs,
  activeTab,
  onTabChange,
  actionButton,
  centerTabs,
}: Props) {
  invariant(
    tabs.map<string>(f => f.id).filter(id => id === activeTab).length === 1,
    "invalid active tab value"
  );

  return (
    <div className={css(styles.outer)}>
      <div className={css(styles.container, centerTabs && styles.centerTabs)}>
        {tabs.map(t => (
          <TabComponent
            id={t.id}
            key={t.id}
            name={t.name}
            onClick={onTabChange}
            active={activeTab === t.id}
          />
        ))}
      </div>
      <div>{actionButton}</div>
    </div>
  );
}

const TabComponent = (props: {
  +id: string,
  +name: string,
  +onClick: string => void,
  +active: boolean,
}) => {
  const {id, name, onClick, active} = props;
  const handleClick = () => {
    onClick(id);
  };

  return (
    <a
      id={`th-${id}`}
      className={css(styles.tab, active && styles.active)}
      onClick={handleClick}
      role="button"
    >
      {name}
    </a>
  );
};

export const _test = {TabComponent};

const styles = StyleSheet.create({
  tab: {
    color: latitudeColors.grey60,
    ...include(padding.v.m),
    ...border.b.m,
    ...typeScale.base,
    borderColor: "transparent",
    ":hover": {
      cursor: "pointer",
      borderColor: latitudeColors.grey40,
    },
    ...include(margin.r.xl),
  },
  container: {
    display: "flex",
    flex: 1,
  },
  centerTabs: {
    justifyContent: "center",
  },
  outer: {
    alignItems: "center",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    ...border.b.s,
    borderColor: latitudeColors.grey60,
  },
  active: {
    color: latitudeColors.grey60,
    borderColor: latitudeColors.grey60,
    fontWeight: fontWeights.bold,
    ":hover": {
      borderColor: latitudeColors.grey60,
    },
  },
});
