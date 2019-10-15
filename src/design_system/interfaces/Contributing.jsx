/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import {StyleSheet, css} from "aphrodite";
import Text from "Text";
import LinkableHeader from "base_candidate/LinkableHeader";
import TextLink from "TextLink";
import Highlight from "react-highlight/lib/optimized";

const commentBlockExample = `/**
 * short: Buttons represent actions that trigger states, launch new UI,
 *   or link the user to new locations.
 * status: Stable
 * category: Interaction
 *
 * This is the extented component description. You can write markdown and it will parse
 * it **flawlessly**. You can even include [links to stuff](google.com).
 *
 * @extends React.Component */`;

function Contributing() {
  return (
    <div className={css(styles.section)}>
      <Text scale="headline" weight="bold">
        How to Contribute
      </Text>
      <section className={css(styles.section)}>
        <LinkableHeader id="philosophy">
          <Text scale="title" weight="bold">
            Philosophy
          </Text>
        </LinkableHeader>
        <Text>
          Latitude is comprised of three high-level focus areas: Guidelines,
          Code, and Design. These focus areas work together in order to help
          teams make informed decisions, build interfaces efficiently, and
          deliver great UX.
        </Text>
      </section>
      <section className={css(styles.section)}>
        <LinkableHeader id="contribution-policy">
          <Text scale="title" weight="bold">
            Contribution Policy
          </Text>
        </LinkableHeader>
        <Text>
          Our design system should be a stable and reliable resource, but it
          must also provide designers and engineers considerable latitude in
          their ability to work at and beyond the edges of the system. Theseus
          encourages all teams to provide detailed feedback and insights about
          our design system. We believe that our design system is strongest when
          everyone contributes. This page outlines the various methods for
          contributing to Latitude.
        </Text>
      </section>
      <section className={css(styles.section)}>
        <LinkableHeader id="ways-to-contribute">
          <Text scale="title" weight="bold">
            Ways to contribute
          </Text>
        </LinkableHeader>
        <ul className={css(styles.list)}>
          <li className={css(styles.item)}>
            <TextLink href="#submitting-an-issue" disableSpaHijack={true}>
              Report an issue
            </TextLink>
          </li>
          <li className={css(styles.item)}>
            <TextLink href="#amendments" disableSpaHijack={true}>
              Amend a component
            </TextLink>
          </li>
          <li className={css(styles.item)}>
            <TextLink href="#contribute-component" disableSpaHijack={true}>
              Suggest a new component
            </TextLink>
          </li>
        </ul>
        <Text>
          Although Theseus is the centralized team responsible for our design
          system, all teams are empowered to contribute improvements, including
          brand new components.
        </Text>
      </section>
      <section className={css(styles.section)}>
        <LinkableHeader id="communicating">
          <Text scale="title" weight="bold">
            Communicating with the Latitude Team
          </Text>
        </LinkableHeader>
        <Text>
          The first step towards contributing is having an initial discussion
          with us. We can help guide decisions such as:
        </Text>
        <ul className={css(styles.list)}>
          <li className={css(styles.item)}>
            Does a component or design pattern belong inside Latitude, or
            elsewhere?
          </li>
          <li className={css(styles.item)}>
            Do we already have a component or design pattern similar to what is
            being proposed?
          </li>
          <li className={css(styles.item)}>
            Which team member outside of Theseus will be responsible for
            bringing the component or design pattern into Latitude?
          </li>
          <li className={css(styles.item)}>
            General UX and front-end best practices.
          </li>
        </ul>
        <Text>Discussions can happen in person or on slack:</Text>
        <TextLink
          href="https://flexport.slack.com/messages/C5802T6A2"
          openInNewTab={true}
        >
          #frontend-infra Slack
        </TextLink>
        <TextLink
          href="https://flexport.slack.com/messages/CCC39LZ2L"
          openInNewTab={true}
        >
          #design-systems Slack
        </TextLink>
        <Text>
          Once it’s been decided what is going into Latitude, and who will be
          building it, we’ll track it’s progress in JIRA.
        </Text>
      </section>
      <section className={css(styles.section)}>
        <Text scale="headline" weight="bold">
          Issue Tracking
        </Text>

        <section className={css(styles.section)}>
          <LinkableHeader id="where-to-find-issues">
            <Text scale="title" weight="bold">
              Where to find known issues
            </Text>
          </LinkableHeader>
          <Text>
            We keep a Jira backlog of known bugs and issues with Latitude which
            you can find{` `}
            <TextLink
              href="https://flexport.atlassian.net/secure/RapidBoard.jspa?projectKey=THESEUS&rapidView=142&view=planning"
              openInNewTab={true}
            >
              here
            </TextLink>
            . Be sure to look through the Theseus backlog before submitting a
            bug to avoid submitting a duplicate.
          </Text>
        </section>

        <section className={css(styles.section)}>
          <LinkableHeader id="submitting-an-issue">
            <Text scale="title" weight="bold">
              Submitting an Issue
            </Text>
          </LinkableHeader>
          <Text>
            You can submit an issue on the{` `}
            <TextLink
              href="https://flexport.atlassian.net/secure/RapidBoard.jspa?projectKey=THESEUS&rapidView=142&view=planning"
              openInNewTab={true}
            >
              Theseus Jira Project
            </TextLink>
            . For urgent issues, page Theseus via <code>/pagetheseus</code> on
            Slack.
          </Text>
        </section>
      </section>

      <section className={css(styles.section)}>
        <LinkableHeader id="amendments">
          <Text scale="headline" weight="bold">
            Contributing an amendment to a Latitude component
          </Text>
        </LinkableHeader>
        <Text>
          If you intend to make a change to a Latitude component, reach out to
          Theseus to build consensus on your approach before you invest time.
          Latitude components quickly gain many dependencies, so it&apos;s
          important to get the API right. Also, changes or updates to Latitude
          components must be rigorously tested.
        </Text>

        <section className={css(styles.section)}>
          <LinkableHeader id="amendment-design-checklist">
            <Text scale="title" weight="bold">
              Design Checklist
            </Text>
          </LinkableHeader>
          <ul className={css(styles.list)}>
            <li className={css(styles.item)}>
              Amendment reviewed in initial discussion
            </li>
            <li className={css(styles.item)}>
              Work with Theseus to write design guidelines
            </li>
            <li className={css(styles.item)}>Update Figma component</li>
          </ul>
        </section>

        <section className={css(styles.section)}>
          <LinkableHeader id="amendment-pr-checklist">
            <Text scale="title" weight="bold">
              Pull Request CheckList
            </Text>
          </LinkableHeader>
          <Text>
            Before submitting a pull request, please make sure the following is
            done:
          </Text>
          <ul className={css(styles.list)}>
            <li className={css(styles.item)}>
              The change or amendment should be covered by unit tests (
              <TextLink
                href="https://flexport.atlassian.net/wiki/spaces/EN/pages/103350772/How+to+Write+JavaScript+Unit+Tests"
                openInNewTab={true}
              >
                How to write Javascript Unit Tests
              </TextLink>
              )
            </li>
            <li className={css(styles.item)}>
              No external data dependencies / tied in business logic
            </li>
            <li className={css(styles.item)}>
              There is a descriptive comment block description for new or
              changed props
            </li>
            <li className={css(styles.item)}>
              A demo that reflects the new feature
            </li>
            <li className={css(styles.item)}>
              If there is a stylistic change, be sure to add Transmission
              theming
            </li>
            <li className={css(styles.item)}>
              Update all call sites if possible and when necessary (see{` `}
              <TextLink
                href="https://medium.com/@andrew_levine/writing-your-very-first-codemod-with-jscodeshift-7a24c4ede31b"
                openInNewTab={true}
              >
                How to codemod
              </TextLink>
              )
            </li>
          </ul>
        </section>

        <section className={css(styles.section)}>
          <LinkableHeader id="amendment-case-study">
            <Text scale="title" weight="bold">
              Case Study
            </Text>
          </LinkableHeader>
          <ul className={css(styles.list)}>
            <li className={css(styles.item)}>
              Someone on the trucking team noticed that our default Banner style
              did not look good on dark backgrounds
            </li>
            <li className={css(styles.item)}>
              After a quick Slack conversation in #frontend-infra we determined
              that the best path forward was to add an additional type to
              Banner’s intent prop
            </li>
            <li className={css(styles.item)}>
              <code>@jon-t</code> opened a PR to introduce the change and tagged
              Theseus for review
            </li>
          </ul>
        </section>
      </section>

      <section className={css(styles.section)}>
        <LinkableHeader id="contribute-component">
          <Text scale="headline" weight="bold">
            Contributing a new Latitude component
          </Text>
        </LinkableHeader>
        <Text>
          If you intend to make a change to a Latitude component, reach out to
          Theseus to build consensus on your approach before you invest time.
          Latitude components quickly gain many dependencies, so it&apos;s
          important to get the API right. Also, changes or updates to Latitude
          components must be rigorously tested.
        </Text>

        <section className={css(styles.section)}>
          <LinkableHeader id="addition-design-checklist">
            <Text scale="title" weight="bold">
              Design Checklist
            </Text>
          </LinkableHeader>
          <ul className={css(styles.list)}>
            <li className={css(styles.item)}>
              Design reviewed in open design review, design system office hours,
              or 1:1 with someone from Theseus
            </li>
            <li className={css(styles.item)}>
              Work with Theseus to write design guidelines
            </li>
            <li className={css(styles.item)}>Create new Figma component</li>
          </ul>
        </section>

        <section className={css(styles.section)}>
          <LinkableHeader id="addition-pr-checklist">
            <Text scale="title" weight="bold">
              Pull Request Checklist
            </Text>
          </LinkableHeader>
          <Text>
            Before submitting a pull request, please make sure the following is
            done:
          </Text>
          <ul className={css(styles.list)}>
            <li className={css(styles.item)}>
              Comprehensive tests are written for the new component / feature (
              <TextLink
                href="https://flexport.atlassian.net/wiki/spaces/EN/pages/103350772/How+to+Write+JavaScript+Unit+Tests"
                openInNewTab={true}
              >
                How to write Javascript Unit Tests
              </TextLink>
              )
            </li>
            <li className={css(styles.item)}>
              No external data dependencies / tied in business logic
            </li>
          </ul>
          <Text>
            For pull requests that add a component to Latitude, make sure the
            following is done as well:
          </Text>
          <ul className={css(styles.list)}>
            <li className={css(styles.item)}>
              Includes clear comment block descriptions for every prop
            </li>
            <li className={css(styles.item)}>
              Includes a standard component comment block header (see below for
              an example)
            </li>
            <li className={css(styles.item)}>
              run <code>yarn docgen</code> to generate the new component
              documentation page
            </li>
          </ul>
          <Text>Example documentation header:</Text>

          {/* eslint-disable-next-line flexport/no-oocss */}
          <Highlight languages={["javascript"]} className="js">
            {commentBlockExample}
          </Highlight>
        </section>

        <section className={css(styles.section)}>
          <LinkableHeader id="addition-case-study">
            <Text scale="title" weight="bold">
              Case Study
            </Text>
          </LinkableHeader>
          <ul className={css(styles.list)}>
            <li className={css(styles.item)}>
              Air and platform were taking on projects which required tables
            </li>
            <li className={css(styles.item)}>
              A ticket for a Latitude table component had lived in our backlog
              for a long time, but Theseus did not have it on the immediate
              roadmap
            </li>
            <li className={css(styles.item)}>
              <code>@bdj</code> and <code>@luke-artnak</code> on the Air team
              allocated time in their roadmap to implement a reusable table in
              Latitude
            </li>
          </ul>
        </section>
      </section>

      <section className={css(styles.section)}>
        <LinkableHeader id="amendment-case-study">
          <Text scale="headline" weight="bold">
            Announcing changes
          </Text>
        </LinkableHeader>
        <Text>
          Once work is merged into Latitude, we’ll announce any contributions
          and spread props in the Theseus newsletter. Also{" "}
          <span role="img" aria-label="tacos">
            🌮
          </span>
          s in Slack!!
        </Text>
      </section>
    </div>
  );
}
const styles = StyleSheet.create({
  section: {
    width: "100%",
    marginBottom: "16px",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridRowGap: "16px",
    paddingTop: "20px",
    maxWidth: "720px",
  },
  list: {
    margin: 0,
    paddingLeft: "16px",
  },
  item: {
    position: "relative",
    paddingBottom: "8px",
    ":before": {
      content: "'-'",
      display: "block",
      position: "absolute",
      top: 0,
      left: "-16px",
    },
  },
});
export default Contributing;
