/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow
 */
/* eslint-disable react/forbid-elements */
import * as React from "react";
import Group from "../../../Group";
import {StyleSheet, css} from "aphrodite";
import Text from "../../../Text";

type Props = {
  +importStatement?: Array<string>,
  +summary?: string,
  +title: string,
  +searchTags?: Array<string>,
};

export default class Header extends React.PureComponent<Props> {
  // eslint-disable-next-line class-methods-use-this
  renderImportStatement(statement: string) {
    return (
      <div className={css(styles.importWrapper)}>
        <pre className={css(styles.pre)}>
          {/* eslint-disable-next-line flexport/no-oocss */}
          <code className="javascript">{statement}</code>
        </pre>
      </div>
    );
  }

  render() {
    const {importStatement, summary, title, searchTags} = this.props;
    return (
      <header style={{maxWidth: 800}}>
        <Group flexDirection="column" gap={8}>
          <Text scale="headline">{title}</Text>
          {summary ? <Text>{summary}</Text> : null}
          {importStatement ? (
            <Group flexDirection="column" gap={8}>
              {importStatement.map(statement =>
                this.renderImportStatement(statement)
              )}
            </Group>
          ) : null}
        </Group>
        {searchTags ? (
          <span className={css(styles.searchTags)}>
            {searchTags.map(tag => (
              <Text key={tag}>{tag} </Text>
            ))}
          </span>
        ) : null}
      </header>
    );
  }
}

const styles = StyleSheet.create({
  importWrapper: {
    display: "inline-block",
  },
  pre: {
    margin: 0,
  },
  searchTags: {
    display: "none",
  },
});
