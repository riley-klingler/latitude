/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow
 */
import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import classnames from "classnames";
import Group from "../../../Group";
import Text from "../../../Text";
import jsxToString from "../../../tools/jsxToString";

export type ExampleProps = {
  +children?: React.Node,
  +code?: React.Element<any>,
  +printCode?: boolean,
  +title: string,
};

type DefaultProps = {
  printCode: boolean,
};

export default class Example extends React.PureComponent<ExampleProps> {
  static defaultProps: DefaultProps = {
    printCode: false,
  };

  render() {
    const {children, code, printCode, title} = this.props;
    return (
      <article>
        <Group flexDirection="column" gap={20}>
          <header>
            <Text scale="title" weight="bold">
              {title}
            </Text>
          </header>
          <Group flexDirection="column" gap={12}>
            {children}
            {code}
            {printCode ? (
              <pre className={css(styles.pre)}>
                {/* eslint-disable-next-line flexport/no-oocss */}
                <code className={classnames("html", css(styles.code))}>
                  {code && jsxToString(code)}
                </code>
              </pre>
            ) : null}
          </Group>
        </Group>
      </article>
    );
  }
}

const styles = StyleSheet.create({
  pre: {
    display: "flex",
    flex: 1,
  },
  code: {
    flex: 1,
  },
});
