/**
 * TEAM: frontend_infra
 *
 * @flow
 */

import BadgeDemo from "../../__demo__/Badge-demo";
import BannerDemo from "../../__demo__/Banner-demo";
import CheckboxDemo from "../../__demo__/Checkbox-demo";
import CheckboxListDemo from "../../__demo__/CheckboxList-demo";
import DrawerDemo from "../../__demo__/Drawer-demo";
import DropdownButtonDemo from "../../__demo__/DropdownButton-demo";
import FlagDemo from "../../__demo__/Flag-demo";
import FloatInputDemo from "../../__demo__/FloatInput-demo";
import GraphicIconDemo from "../../__demo__/GraphicIcon-demo";
import GroupDemo from "../../__demo__/Group-demo";
import HelpTooltipDemo from "../../__demo__/HelpTooltip-demo";
import IconDemo from "../../__demo__/Icon-demo";
import InlineEditDemo from "../../__demo__/InlineEdit-demo";
import InputErrorDemo from "../../__demo__/InputError-demo";
import InputGroupDemo from "../../__demo__/InputGroup-demo";
import LabelDemo from "../../__demo__/Label-demo";
import LoaderDemo from "../../__demo__/Loader-demo";
import MultiInputDemo from "../../__demo__/MultiInput-demo";
import PillDemo from "../../__demo__/Pill-demo";
import ProgressBarDemo from "../../__demo__/ProgressBar-demo";
import SettingsToggleDemo from "../../__demo__/SettingsToggle-demo";
import TextDemo from "../../__demo__/Text-demo";
import TextInputDemo from "../../__demo__/TextInput-demo";
import TextInputAutocompleteDemo from "../../__demo__/TextInputAutocomplete-demo";
import TextLinkDemo from "../../__demo__/TextLink-demo";
import TextareaInputDemo from "../../__demo__/TextareaInput-demo";
import AnchorButtonDemo from "../../button/__demo__/AnchorButton-demo";
import AnchorIconButtonDemo from "../../button/__demo__/AnchorIconButton-demo";
import ButtonDemo from "../../button/__demo__/Button-demo";
import IconButtonDemo from "../../button/__demo__/IconButton-demo";
import CalendarDateInputDemo from "../../date/__demo__/CalendarDateInput-demo";
import CalendarDateRangeDemo from "../../date/__demo__/CalendarDateRange-demo";
import DateTimeInputDemo from "../../date/__demo__/DateTimeInput-demo";
import TimeInputDemo from "../../date/__demo__/TimeInput-demo";
import DocumentUploaderDemo from "../../document/__demo__/DocumentUploader-demo";
import FileUploaderDemo from "../../document/__demo__/FileUploader-demo";
import DateRangeFilterDemo from "../../filter/__demo__/DateRangeFilter-demo";
import MultiselectFilterDemo from "../../filter/__demo__/MultiselectFilter-demo";
import SelectFilterDemo from "../../filter/__demo__/SelectFilter-demo";
import FormSectionDemo from "../../form/__demo__/FormSection-demo";
import CustomModalDemo from "../../modal/__demo__/CustomModal-demo";
import GeneralModalLoaderDemo from "../../modal/__demo__/GeneralModalLoader-demo";
import NotificationModalDemo from "../../modal/__demo__/NotificationModal-demo";
import GeneralPopoverDemo from "../../popover/__demo__/GeneralPopover-demo";
import ProgressTrackerDemo from "../../progress/__demo__/ProgressTracker-demo";
import RadioDemo from "../../radio/__demo__/Radio-demo";
import RadioGroupDemo from "../../radio/__demo__/RadioGroup-demo";
import BaseReactSelectDemo from "../../select/__demo__/BaseReactSelect-demo";
import DropdownListDemo from "../../select/__demo__/DropdownList-demo";
import MultiselectInputDemo from "../../select/__demo__/MultiselectInput-demo";
import SearchableSelectInputDemo from "../../select/__demo__/SearchableSelectInput-demo";
import SelectInputDemo from "../../select/__demo__/SelectInput-demo";
import TableDemo from "../../table/__demo__/Table-demo";
import TabHeaderDemo from "../../tabs/__demo__/TabHeader-demo";
import TabsDemo from "../../tabs/__demo__/Tabs-demo";
import TakeoverLoaderDemo from "../../takeover/__demo__/TakeoverLoader-demo";
import ToastDemo from "../../toast/__demo__/Toast-demo";

const componentsDemoList = {
  Badge: {demo: BadgeDemo, demoPath: "__demo__/Badge-demo"},
  Banner: {demo: BannerDemo, demoPath: "__demo__/Banner-demo"},
  Checkbox: {demo: CheckboxDemo, demoPath: "__demo__/Checkbox-demo"},
  CheckboxList: {
    demo: CheckboxListDemo,
    demoPath: "__demo__/CheckboxList-demo",
  },
  Drawer: {demo: DrawerDemo, demoPath: "__demo__/Drawer-demo"},
  DropdownButton: {
    demo: DropdownButtonDemo,
    demoPath: "__demo__/DropdownButton-demo",
  },
  Flag: {demo: FlagDemo, demoPath: "__demo__/Flag-demo"},
  FloatInput: {
    demo: FloatInputDemo,
    demoPath: "__demo__/FloatInput-demo",
  },
  GraphicIcon: {
    demo: GraphicIconDemo,
    demoPath: "__demo__/GraphicIcon-demo",
  },
  Group: {demo: GroupDemo, demoPath: "__demo__/Group-demo"},
  HelpTooltip: {
    demo: HelpTooltipDemo,
    demoPath: "__demo__/HelpTooltip-demo",
  },
  Icon: {demo: IconDemo, demoPath: "__demo__/Icon-demo"},
  InlineEdit: {
    demo: InlineEditDemo,
    demoPath: "__demo__/InlineEdit-demo",
  },
  InputError: {
    demo: InputErrorDemo,
    demoPath: "__demo__/InputError-demo",
  },
  InputGroup: {
    demo: InputGroupDemo,
    demoPath: "__demo__/InputGroup-demo",
  },
  Label: {demo: LabelDemo, demoPath: "__demo__/Label-demo"},
  Loader: {demo: LoaderDemo, demoPath: "__demo__/Loader-demo"},
  MultiInput: {
    demo: MultiInputDemo,
    demoPath: "__demo__/MultiInput-demo",
  },
  Pill: {demo: PillDemo, demoPath: "__demo__/Pill-demo"},
  ProgressBar: {
    demo: ProgressBarDemo,
    demoPath: "__demo__/ProgressBar-demo",
  },
  SettingsToggle: {
    demo: SettingsToggleDemo,
    demoPath: "__demo__/SettingsToggle-demo",
  },
  Text: {demo: TextDemo, demoPath: "__demo__/Text-demo"},
  TextInput: {
    demo: TextInputDemo,
    demoPath: "__demo__/TextInput-demo",
  },
  TextInputAutocomplete: {
    demo: TextInputAutocompleteDemo,
    demoPath: "__demo__/TextInputAutocomplete-demo",
  },
  TextLink: {demo: TextLinkDemo, demoPath: "__demo__/TextLink-demo"},
  TextareaInput: {
    demo: TextareaInputDemo,
    demoPath: "__demo__/TextareaInput-demo",
  },
  AnchorButton: {
    demo: AnchorButtonDemo,
    demoPath: "button/__demo__/AnchorButton-demo",
  },
  AnchorIconButton: {
    demo: AnchorIconButtonDemo,
    demoPath: "button/__demo__/AnchorIconButton-demo",
  },
  Button: {demo: ButtonDemo, demoPath: "button/__demo__/Button-demo"},
  IconButton: {
    demo: IconButtonDemo,
    demoPath: "button/__demo__/IconButton-demo",
  },
  CalendarDateInput: {
    demo: CalendarDateInputDemo,
    demoPath: "date/__demo__/CalendarDateInput-demo",
  },
  CalendarDateRange: {
    demo: CalendarDateRangeDemo,
    demoPath: "date/__demo__/CalendarDateRange-demo",
  },
  DateTimeInput: {
    demo: DateTimeInputDemo,
    demoPath: "date/__demo__/DateTimeInput-demo",
  },
  TimeInput: {
    demo: TimeInputDemo,
    demoPath: "date/__demo__/TimeInput-demo",
  },
  DocumentUploader: {
    demo: DocumentUploaderDemo,
    demoPath: "document/__demo__/DocumentUploader-demo",
  },
  FileUploader: {
    demo: FileUploaderDemo,
    demoPath: "document/__demo__/FileUploader-demo",
  },
  DateRangeFilter: {
    demo: DateRangeFilterDemo,
    demoPath: "filter/__demo__/DateRangeFilter-demo",
  },
  MultiselectFilter: {
    demo: MultiselectFilterDemo,
    demoPath: "filter/__demo__/MultiselectFilter-demo",
  },
  SelectFilter: {
    demo: SelectFilterDemo,
    demoPath: "filter/__demo__/SelectFilter-demo",
  },
  FormSection: {
    demo: FormSectionDemo,
    demoPath: "form/__demo__/FormSection-demo",
  },
  CustomModal: {
    demo: CustomModalDemo,
    demoPath: "modal/__demo__/CustomModal-demo",
  },
  GeneralModalLoader: {
    demo: GeneralModalLoaderDemo,
    demoPath: "modal/__demo__/GeneralModalLoader-demo",
  },
  NotificationModal: {
    demo: NotificationModalDemo,
    demoPath: "modal/__demo__/NotificationModal-demo",
  },
  GeneralPopover: {
    demo: GeneralPopoverDemo,
    demoPath: "popover/__demo__/GeneralPopover-demo",
  },
  ProgressTracker: {
    demo: ProgressTrackerDemo,
    demoPath: "progress/__demo__/ProgressTracker-demo",
  },
  Radio: {demo: RadioDemo, demoPath: "radio/__demo__/Radio-demo"},
  RadioGroup: {
    demo: RadioGroupDemo,
    demoPath: "radio/__demo__/RadioGroup-demo",
  },
  BaseReactSelect: {
    demo: BaseReactSelectDemo,
    demoPath: "select/__demo__/BaseReactSelect-demo",
  },
  DropdownList: {
    demo: DropdownListDemo,
    demoPath: "select/__demo__/DropdownList-demo",
  },
  MultiselectInput: {
    demo: MultiselectInputDemo,
    demoPath: "select/__demo__/MultiselectInput-demo",
  },
  SearchableSelectInput: {
    demo: SearchableSelectInputDemo,
    demoPath: "select/__demo__/SearchableSelectInput-demo",
  },
  SelectInput: {
    demo: SelectInputDemo,
    demoPath: "select/__demo__/SelectInput-demo",
  },
  Table: {demo: TableDemo, demoPath: "table/__demo__/Table-demo"},
  TabHeader: {
    demo: TabHeaderDemo,
    demoPath: "tabs/__demo__/TabHeader-demo",
  },
  Tabs: {demo: TabsDemo, demoPath: "tabs/__demo__/Tabs-demo"},
  TakeoverLoader: {
    demo: TakeoverLoaderDemo,
    demoPath: "takeover/__demo__/TakeoverLoader-demo",
  },
  Toast: {demo: ToastDemo, demoPath: "toast/__demo__/Toast-demo"},
};

export default componentsDemoList;
