/**
 * TEAM: frontend_infra
 * WATCHERS: notandrewkaye
 *
 * @flow
 */
import * as React from "react";
import Section from "design_system/components/documentation_layout/Section";
import DeprecatedHorizontalGroup from "DeprecatedHorizontalGroup";
import {StyleSheet, css} from "aphrodite";

type Props = {
  +children?: React.Node,
  +minWidth?: number,
  +title?: string,
};

export default class Examples extends React.PureComponent<Props> {
  render() {
    const {children, minWidth, title} = this.props;
    const examples = React.Children.toArray(children);
    const numExamples = examples.length;
    // eslint-disable-next-line no-nested-ternary
    const basis = numExamples >= 4 ? 25 : numExamples <= 2 ? 50 : 33;
    return (
      <Section title={title}>
        <DeprecatedHorizontalGroup
          spacing="xl"
          mainAlign="around"
          minWidth={minWidth}
          fill={true}
          basis={basis}
        >
          {examples.map((example, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={`example-${i}`} className={css(styles.example)}>
              {example}
            </div>
          ))}
        </DeprecatedHorizontalGroup>
      </Section>
    );
  }
}

const styles = StyleSheet.create({
  example: {
    display: "flex",
    flex: 1,
  },
});
