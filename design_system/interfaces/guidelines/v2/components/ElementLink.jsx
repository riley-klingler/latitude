/**
 * TEAM: frontend_infra
 * @flow
 */

import React, {useState, type Node} from "react";
import { StyleSheet, css } from "aphrodite";
import Link from "../../../../../Link";
import IconButton from "../../../../../button/IconButton";
import copyToClipboard from "../../../../../tools/CopyToClipboard";

type Props = {|
  +name: string,
  +children: Node,
|};

/** Normalizes a string into a format suitable for ID */
function getHrefId(name: string): string {
  return name.toLowerCase().replace(/ +/g, "-");
}

function ElementLink({name, children}: Props) {
  const [showLink, setShowLink] = useState(false);
  const hrefId = getHrefId(name);

  const onClick = () => {
    const url = `${window.location.href.replace(
      window.location.hash,
      ""
    )}#${hrefId}`;
    copyToClipboard(url, "copied link to clipboard");
  };

  return (
    <div
      id={hrefId}
      className={css(styles.wrapper)}
      onMouseEnter={() => setShowLink(true)}
      onMouseLeave={() => setShowLink(false)}
    >
      {children}
      <div
        className={css(styles.elementLink, showLink && styles.showLink)}
        style={{
          opacity: 0,
          transition: "opacity 0.2s",
        }}
      >
        <Link href={`#${hrefId}`} disableSpaHijack={true}>
          <IconButton
            type="button"
            iconName="link"
            kind="bare"
            size="s"
            onClick={onClick}
          />
        </Link>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    display: "inline-block",
  },
  elementLink: {
    position: "absolute",
    display: "flex",
    top: 0,
    bottom: 0,
    right: 0,
    transform: "translateX(100%)",
    paddingTop: 4,
    paddingLeft: 8,
    alignItems: "center",
  },
  showLink: {
    opacity: 1,
  },
});

export default ElementLink;
