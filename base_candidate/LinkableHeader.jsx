/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import Link from "../Link";
import IconButton from "../button/IconButton";
import copyToClipboard from "../tools/CopyToClipboard";

type Props = {|
  // a unique identifier for the given section
  +id: string,
  +children: React.Element<*>,
|};

function LinkableSection({id, children}: Props) {
  const url = `${window.location.toString()}#${id}`;

  const handleClick = () => {
    copyToClipboard(url, "copied link to clipboard");
  };

  return (
    <Link
      id={id}
      className={css(styles.container)}
      href={`#${id}`}
      disableSpaHijack={true}
    >
      {children}
      <div className={css(styles.iconContainer)}>
        <IconButton
          iconName="link"
          type="button"
          kind="bare"
          size="m"
          onClick={handleClick}
        />
      </div>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginLeft: "8px",
  },
});

export default LinkableSection;
