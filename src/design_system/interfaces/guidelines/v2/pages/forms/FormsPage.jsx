/**
 * TEAM: frontend_infra
 * @flow
 */

import * as React from "react";
import TextLink from "TextLink";
import IndexedPage from "design_system/interfaces/guidelines/v2/components/IndexedPage";
import MainHeader from "design_system/interfaces/guidelines/v2/components/MainHeader";
import SubHeader from "design_system/interfaces/guidelines/v2/components/SubHeader";
import Headline from "design_system/interfaces/guidelines/v2/components/Headline";
import Words from "design_system/interfaces/guidelines/v2/components/Words";
import Image from "design_system/interfaces/guidelines/v2/components/Image";
import Collection from "design_system/interfaces/guidelines/v2/components/Collection";
import Half from "design_system/interfaces/guidelines/v2/components/Half";
import Item from "design_system/interfaces/guidelines/v2/components/Item";
import CodeBlock from "design_system/interfaces/guidelines/v2/components/CodeBlock";
import List from "design_system/interfaces/guidelines/v2/components/List";

import FormDiagram from "design_system/interfaces/guidelines/v2/pages/forms/FormDiagram";
import HorizontalGroupingDemo from "design_system/interfaces/guidelines/v2/pages/forms/HorizontalGroupingDemo";
import CTADemo from "design_system/interfaces/guidelines/v2/pages/forms/CTADemo";
import ButtonsDemo from "design_system/interfaces/guidelines/v2/pages/forms/ButtonsDemo";
import SectionsWithDescriptionsDemo from "design_system/interfaces/guidelines/v2/pages/forms/SectionsWithDescriptionsDemo";
import SectionsWithSubsectionsDemo from "design_system/interfaces/guidelines/v2/pages/forms/SectionsWithSubsectionsDemo";
import SectionBordersDemo from "design_system/interfaces/guidelines/v2/pages/forms/SectionBordersDemo";
import DynamicSectionsDemo from "design_system/interfaces/guidelines/v2/pages/forms/DynamicSectionsDemo";
import InputLevelErrorsDemo from "design_system/interfaces/guidelines/v2/pages/forms/InputLevelErrorsDemo";
import SectionLevelErrorsDemo from "design_system/interfaces/guidelines/v2/pages/forms/SectionLevelErrorsDemo";
import FormLevelErrorsDemo from "design_system/interfaces/guidelines/v2/pages/forms/FormLevelErrorsDemo";
import InlineEditDemo from "design_system/interfaces/guidelines/v2/pages/forms/InlineEditDemo";

function FormsPage(): React.Node {
  return (
    <IndexedPage>
      <Half>
        <MainHeader addToIndex={false}>Forms</MainHeader>
        <Headline>
          International shipping and logistics requires massive amounts of
          information to be collected from our users. We use forms in many
          shapes and sizes to provide users simple and streamlined avenues for
          submitting and interacting with data.
        </Headline>
        <Headline>
          Successful forms are easy for users to digest and provide enough
          supporting information to help them complete their task.
        </Headline>
      </Half>
      <Half>
        <MainHeader>Layout</MainHeader>
      </Half>
      <Collection>
        <Item>
          <FormDiagram />
        </Item>
        <Item>
          <SubHeader>Anatomy</SubHeader>
          <List type="ordered">
            <Words>Section title</Words>
            <Words>Section description</Words>
            <Words>Sub section</Words>
            <Words>Data entry component</Words>
            <Words>Call to action (CTA)</Words>
          </List>
        </Item>
      </Collection>
      <Collection>
        <Item>
          <SubHeader>Think critically about placement</SubHeader>
          <Words paragraph={true}>
            If you’re designing a complex form (with overlaying modals,
            multi-step flows, progressive disclosure), it should probably live
            on it’s own page and able to be referenced via a URL.
          </Words>
        </Item>

        <Item>
          <SubHeader>Keep forms within recommended widths</SubHeader>
          <Words paragraph={true}>
            Forms are really hard to read beyond 740px, great forms lead the
            user in one direction only. An effective form guides the user
            through every field easily—if a form is very wide there is a bigger
            potential for confusion and missed fields.
          </Words>

          <CodeBlock hasMargin={true}>
            {`minwidth: "320px"\nmaxwidth: "740px"`}
          </CodeBlock>
        </Item>
      </Collection>
      <Image
        alt="Form error structure"
        src="https://assets.flexport.com/latitude/guidelines/forms/form_placement.png"
      />
      <Collection>
        <Item>
          <SubHeader>
            Use wrapping component titles to introduce a form
          </SubHeader>
          <Words paragraph={true}>
            Forms embedded in modals or takeovers should rely on the component
            title field for introduction. Forms on unique pages or forms
            embedded within a page should always include a title that clearly
            introduces the data which will be gathered.
          </Words>
          <Words paragraph={true}>
            Don’t assume a user understands how to use the form on first glance.
            Write a concise description about the form to help guide them to
            completion. See takeover and modal guidelines for more information.
          </Words>
        </Item>

        <Item>
          <SubHeader>Think responsively</SubHeader>
          <Words paragraph={true}>
            There are times when Operations associates and suppliers need to
            refer to documents in separate browser windows while filling out
            certain forms. Incorporating responsiveness into forms will minimize
            the need to scroll when users adjust the size of a window.
          </Words>
        </Item>
      </Collection>

      <Half>
        <MainHeader indexText="Calls to Action">
          Calls to Action &amp; Buttons
        </MainHeader>
      </Half>
      <Collection>
        <Item>
          <SubHeader>Calls to action</SubHeader>
          <Words paragraph={true}>
            Submitting forms can sometimes be a high stress activity for users,
            especially if it means submitting a booking or paying a bill.
            Placement and order of CTAs is critical to ensure users understand
            their desired actions.
          </Words>
          <Words paragraph={true}>
            CTAs should always be placed at the end of the form and justify with
            the right edge of the form fields. The most important CTA should
            always fall on the outside edge with less important CTAs stacking
            side-by-side in descending order of importance. Aim to use only one
            primary CTA to give users a clear path to submission.
          </Words>
          <Words paragraph={true}>
            Don’t disable CTAs or buttons unless the intention is clearly
            communicated.
          </Words>
          <List type="ordered">
            <CodeBlock>kind=&quot;bare&quot;</CodeBlock>
            <CodeBlock>kind=&quot;hollow&quot;</CodeBlock>
            <CodeBlock>
              kind=&quot;solid&quot; intent=&quot;basic&quot;
            </CodeBlock>
          </List>
          <CTADemo />
        </Item>
        <Item>
          <SubHeader>Buttons</SubHeader>
          <Words paragraph={true}>
            Buttons that are not CTAs should be placed towards the left side of
            the form, so they don’t counteract with form level CTAs. Use the
            following button types:
          </Words>
          <List type="ordered">
            <CodeBlock>
              kind=&quot;hollow&quot; intent=&quot;basic&quot;
            </CodeBlock>
            <CodeBlock>kind=&quot;bare&quot; intent=&quot;none&quot;</CodeBlock>
          </List>
          <ButtonsDemo />
        </Item>
      </Collection>

      <Half>
        <MainHeader>Horizontal Grouping</MainHeader>
      </Half>
      <Collection>
        <Item>
          <Words paragraph={true}>
            Try to use consistent input widths when laying out your form. It’s a
            jarring experience when various inputs widths don’t align with one
            another. We recommend designing a form by setting the width of your
            container, then picking horizontal groupings, followed by laying
            them out vertically.
          </Words>
          <Words paragraph={true}>
            Our FormSection and FormRow components provide simple access to
            powerful form layouts. The majority of our forms follow simple
            guidelines which should make building responsive forms with these
            components straightforward. Forms should always specify a max-width
            which conforms to our standards specified above.
          </Words>
        </Item>
        <Item>
          <Words paragraph={true}>
            Form components should always follow their content. Inputs and other
            data entry components can range from a few characters to a complex,
            multi-line information block. It is important to understand the
            product needs and plan for the range of what is expected of users.
          </Words>
          <Words paragraph={true}>
            Below is an example generator which lets you specify the two
            variables needed for any form row. Setting a max width for the form
            is a necessary first step—a max-width ensures form fields remain
            within usable widths. Specifying the number of columns in a form
            section establishes the base layout for the form. Setting a minimum
            column width at the form section level will establish the responsive
            wrapping of form rows; additionally, a minimum column width at the
            form section level ensures form elements always line up.
          </Words>
        </Item>
      </Collection>

      <HorizontalGroupingDemo />

      <Half>
        <SubHeader>FormSection auto-calculation</SubHeader>
        <Words paragraph={true}>
          FormSection will automatically calculate column layout based on the
          maximum amount of columns that will fit while retaining the minimum
          column width specified. This auto-calculation ensures that forms will
          properly collapse as the screen shrinks and also gurantees consistent
          maximum widths of each column.
        </Words>
        <Words paragraph={true}>
          If more columns fit within the form than the number specified, the
          grid will recalculate and only span the number of columns specified on
          FormSection. Consider a FormSection specified with 2 columns and a
          minColumnWidth of 200px. When the form is at a width of 400px or less
          the minColumnWidth would be reached which would force the row items to
          wrap and span the full width of the form. At a form width of 500px
          there would be adequate space for two columns, so the two row elements
          would fill the form width equally. Once the form width passes 600px
          the FormSection would reformat since an addition column could fit in
          one row without reaching the minColumnWidth.
        </Words>
      </Half>

      <Half>
        <MainHeader>Sections</MainHeader>
        <Words paragraph={true}>
          Use section titles and whitespace to distinguish form groups. The
          FormSection component includes props for adding a section title and a
          description for quick and consistent section introductions. Try to use
          concise descriptions to support section titles. They’re also valuable
          because they help act as section dividers.
        </Words>
      </Half>

      <Collection>
        <Item>
          <SubHeader>Sections with descriptions</SubHeader>
          <SectionsWithDescriptionsDemo />
        </Item>
        <Item>
          <SubHeader>Form with sub sections</SubHeader>
          <SectionsWithSubsectionsDemo />
        </Item>
        <Item>
          <SubHeader>Section borders</SubHeader>
          <Words paragraph={true}>
            Use borders to divide sections. Borders are usually needed if a form
            is long (falls below the fold), or contains many different inputs.
            Without section borders and section descriptions, it can be jarring
            for users to flow through the form.
          </Words>
          <SectionBordersDemo />
        </Item>
        <Item>
          <SubHeader>Dynamic sections</SubHeader>
          <Words paragraph={true}>
            Sometimes it’s necessary for users to dynamically add sections.
            Place the button to add additional sections in the bottom left
            corner of form near the section. The remove button should be inline
            with the section title—FormSection supports section deletion
            out-of-the-box.
          </Words>
          <DynamicSectionsDemo />
        </Item>
      </Collection>

      <Half>
        <MainHeader>Condensed forms</MainHeader>
        <Words paragraph={true}>
          Forms in tables or in views where space is at a premium fall into a
          special category: condensed layouts. Traditionally, we&apos;ve inlined
          data entry component labels next to the input in order to maximize
          vertical space. We&apos;re actively exploring our options for building
          consistent condensed forms and will update our components and
          guidelines accordingly when we&apos;ve reached a conclusion.
        </Words>
      </Half>

      <Half>
        <MainHeader>Validation</MainHeader>
      </Half>
      <Collection>
        <Item>
          <Words paragraph={true}>
            Receiving errors can be daunting for users. Error messages should be
            used to help users resolve things seamlessly.
          </Words>
          <SubHeader>Levels</SubHeader>
          <List type="ordered">
            <Words>Form level error</Words>
            <Words>Input level error</Words>
            <Words>Section level error</Words>
          </List>
          <SubHeader>Best practices</SubHeader>
          <List>
            <Words>Be brief</Words>
            <Words>
              Consider when errors are dismissed. Does the error message dismiss
              as a user resolves it? Does it stay on screen until the user
              re-submits?
            </Words>
            <Words>Use form level errors for long forms</Words>
            <Words>
              If inputs are small in width, use section level errors to
              communicate the message
            </Words>
          </List>
        </Item>
        <Item>
          <Image
            alt="Form error structure"
            src="https://assets.flexport.com/latitude/guidelines/forms/form_error_structure.png"
          />
        </Item>
      </Collection>

      <Half>
        <SubHeader>Input level errors</SubHeader>
        <Words paragraph={true}>
          If an input level error is constructive (e.g. SO number cannot contain
          special characters besides “/”), keep it on screen.
        </Words>
        <InputLevelErrorsDemo />
      </Half>

      <SubHeader>Section level errors</SubHeader>
      <Words paragraph={true}>
        <TextLink href="/design/components/Banner">Banner</TextLink> is a simple
        component which takes a string of text and can be used to notify users
        of a section-level error. Section-level errors can be used in
        conjunction with both inline and form level errors.
      </Words>
      <SectionLevelErrorsDemo />

      <SubHeader>Form level errors (for long forms)</SubHeader>
      <Words paragraph={true}>
        Auto-position users to the top of the form.
      </Words>
      <FormLevelErrorsDemo />

      <Half>
        <MainHeader>Voice and Tone</MainHeader>
      </Half>
      <Collection>
        <Item>
          <SubHeader>Remember to use plain language</SubHeader>
          <Words paragraph={true}>
            &quot;The goal of the plain language movement is to produce language
            (particularly written English) which is clear, straightforward
            expression, using only as many words as are necessary, and which
            avoids obscurity, inflated vocabulary and convoluted sentence
            construction&quot;.
          </Words>
        </Item>
        <Item>
          <SubHeader>
            Think about new shippers and employees! Don&apos;t assume users
            understand acronyms
          </SubHeader>
          <Words paragraph={true}>
            Consider using adaptive interfaces to hide definitions when users
            increase experience. Remember to avoid acronyms—provide as much
            detail as possible.
          </Words>
        </Item>
      </Collection>

      <Half>
        <MainHeader>Components</MainHeader>
        <Words paragraph={true}>
          Forms are composed of any number of data entry components. Each form
          should be carefully considered; components chosen for any form should
          follow the type of data entered and be customized according to the
          requirements for simple and successful entry.
        </Words>
      </Half>

      <Half>
        <SubHeader>Inline edit</SubHeader>
        <Words paragraph={true}>
          Inline editing provides users with an additional layer of friction
          when editing data. Use this instead of a data entry component when a
          field has many dependencies. For example, changing the name of a
          shipment in the core app is reflected in client, transmission, emails,
          messaging, etc.
        </Words>
        <Words paragraph={true}>
          Visit{" "}
          <TextLink href="/design/components/InlineEdit">InlineEdit</TextLink>{" "}
          to read more about the API.
        </Words>
      </Half>

      <Collection>
        <Item>
          <Words paragraph={true}>
            Use edit pencils as an affordance to edit when the UI is dense. For
            example, classifying products in the customs workflow.
          </Words>
          <InlineEditDemo />
        </Item>
        <Item>
          <Words paragraph={true}>
            Use edit buttons as an affordance to edit when the UI is
            internationalized, or when users are less technical. For example,
            the shipper shipping instructions form.
          </Words>
          <Image
            src="https://assets.flexport.com/latitude/guidelines/inline_edit_zh.png"
            alt="Inline Edit Example Chinese"
          />
        </Item>
      </Collection>

      <Collection>
        <Item>
          <SubHeader>Label</SubHeader>
          <List>
            <Words>Be clear and concise</Words>
            <Words>
              Labels are required. Use placeholder text sparingly (it should
              support the label’s intent, and shouldn’t repeat the label).
            </Words>
            <Words>
              Use required asterisks and optional flags to avoid user
              frustration with errors
            </Words>
            <Item>
              <Words>Add supplementary help text if:</Words>
              <List>
                <Words>the forms asks for unfamiliar data</Words>
                <Words>there may be privacy or security concerns</Words>
                <Words>there are specific recommendations for formatting</Words>
              </List>
            </Item>
          </List>
        </Item>
        <Item>
          <SubHeader>Inputs</SubHeader>
          <List>
            <Words>
              Use small sized inputs for condensed forms or UI with tight
              whitespace restrictions
            </Words>
            <Item>
              <Words>Disabled fields</Words>
              <List>
                <Words>
                  Disabling inputs can help to enforce progressive disclosure
                </Words>
                <Words>
                  Sometimes a user needs to supply information to one field
                  before another
                </Words>
                <Words>there are specific recommendations for formatting</Words>
              </List>
            </Item>
            <Item>
              <Words>Read-only fields</Words>
              <List>
                <Words>
                  Sometimes data will come from other sources - it&apos;s
                  important to distinguish this information separately from the
                  other form fields
                </Words>
              </List>
            </Item>
          </List>
        </Item>
        <Item>
          <SubHeader>Select inputs</SubHeader>
          <List>
            <Words>
              Don&apos;t let inputs span full container widths unless the data
              requires ample space
            </Words>
            <Words>
              Select a size that matches the selection data as well as the
              selected state
            </Words>
          </List>
        </Item>
        <Item>
          <SubHeader>Prefix &amp; suffix inputs</SubHeader>
          <List>
            <Words>
              Some inputs make sense when supplied with a prefix (ie. $) or a
              suffix (ie. lbs)
            </Words>
            <Words>
              Remember to match input size with a best guess of input length
            </Words>
          </List>
        </Item>
        <Item>
          <SubHeader>Checkboxes &amp; radios</SubHeader>
          <List>
            <Words>
              Always try to list options vertically - scanning a horizontal list
              adds increased cognitive load on users since each item is often
              different lengths
            </Words>
            <Words>
              Prefer small sized radios and checkboxes whenever possible
            </Words>
            <Words>
              Only use a horizontal layuot if your UI is vertically space
              constrained
            </Words>
          </List>
        </Item>
        <Item>
          <SubHeader>Date &amp; time inputs</SubHeader>
          <List>
            <Words>
              Always use a descriptive label so users understand the data they
              are supplying
            </Words>
          </List>
        </Item>
      </Collection>

      <SubHeader>Links</SubHeader>
      <List>
        <Words>
          Use links to route the user to other parts of the app or external
          webpages
        </Words>
        <Words>
          Links should generally open in new tabs so users don&apos;t lose
          progress
        </Words>
      </List>

      <Half>
        <MainHeader>Accessibility</MainHeader>
        <List type="ordered">
          <Words>
            The first input should be focused to allow users who have screen
            readers to tab through
          </Words>
          <Words>
            All text and data entry components should be tab indexible
          </Words>
          <Words>
            All text must have high color contrast. See color guidelines for
            best practices
          </Words>
        </List>
        <Words paragraph={true}>
          <TextLink
            href="https://reactjs.org/docs/accessibility.html"
            openInNewTab={true}
          >
            Read React&apos;s documentation on accessibility
          </TextLink>
        </Words>
      </Half>

      <Half>
        <MainHeader>API</MainHeader>
        <Words paragraph={true}>
          Our library for managing form state is{" "}
          <TextLink
            href="https://github.com/flexport/formula-one"
            openInNewTab={true}
          >
            Formula-one
          </TextLink>
          . It is a library which makes it easier to write type-safe forms with
          validations and complex inputs.
        </Words>
        <Words paragraph={true}>
          We&apos;ll soon provide Formula-one ready data entry components which
          will match Formula-one&apos;s api and provide all-in-one components
          which handle labels and errors for simple form composition.
        </Words>
      </Half>
    </IndexedPage>
  );
}

export default FormsPage;
