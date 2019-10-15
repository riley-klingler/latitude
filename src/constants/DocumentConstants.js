/**
 * TEAM: customs
 * WATCHERS: ChaseBro
 *
 * @flow
 */
import keyMirror from "keymirror";
import * as CRUDConstants from "constants/_CRUDConstants";
import * as MutationConstants from "constants/_MutationConstants";
import {SHIPMENT_DOCUMENT_TYPES} from "constants/DocumentTypeConstants.generated";
import {bookingT as t} from "config/I18n";

export const POD_CANDIDATE_TYPE = "proof_of_delivery_pod";
export const POD_TYPE_ID = 41;
// This is configured in NGINX here:
// https://github.com/flexport/flexport/blob/c95bf309c37c81122e9f5ba5302300ec7f4ba135/docker/prod/nginx/flexport.conf#L17
// Any upload request with a payload size greater than 25MB will be rejected by NGINX and not reach our app server
export const MAX_FILE_SIZE = 25000000;

export const ActionTypes = keyMirror({
  FETCH_PROOF: null,
  IGNORE: null,
  UNIGNORE: null,
  MERGE_DOCUMENTS: null,
  PROCESS_SUCCESSFUL_UPLOAD: null,
  UPLOAD_POD: null,
  ...CRUDConstants.ActionTypes,
  ...MutationConstants.ActionTypes,
});

export const EventTypes = keyMirror({
  IGNORE_SUCCESS: null,
  IGNORE_ERROR: null,
  UNIGNORE_SUCCESS: null,
  UNIGNORE_ERROR: null,
  MERGE_DOCUMENT_SUCCESS: null,
  MERGE_DOCUMENT_ERROR: null,
  UPLOAD_POD_SUCCESS: null,
  UPLOAD_POD_ERROR: null,
  ...CRUDConstants.EventTypes,
  ...MutationConstants.EventTypes,
});

export type DocumentableClasses =
  | "Shipment"
  | "BillOfLading"
  | "Client"
  | "CompanyEntity"
  | "User"
  | "Invoice"
  | "CustomBond"
  | "Refund"
  | "Product"
  | "Location"
  | "SupportQuestion"
  | "KnowledgeArticle"
  | "PurchaseOrder"
  | "Bill"
  | "Booking";

// Document types that are default visible to dispatch app truckers
export const DispatchTypes = [
  "authority_to_make_entry",
  "customs_release_3461",
  "material_safety_data_sheet_msds",
  "proof_of_delivery_pod",
  "delivery_order_do",
];

// Do not use, just use the string literal from above
export const DocumentableTypes = {
  SHIPMENT: "Shipment",
  CLIENT: "Client",
  COMPANY_ENTITY: "CompanyEntity",
  USER: "User",
  INVOICE: "Invoice",
  CUSTOM_BOND: "CustomBond",
  REFUND: "Refund",
  PRODUCT: "Product",
  LOCATION: "Location",
  SUPPORT_QUESTION: "SupportQuestion",
  KNOWLEDGE_ARTICLE: "KnowledgeArticle",
  PURCHASE_ORDER: "PurchaseOrder",
  BILL: "Bill",
  BOOKING: "Booking",
};

export const CommercialInvoiceDocTypes = [
  SHIPMENT_DOCUMENT_TYPES.commercial_invoice_packing_list,
  SHIPMENT_DOCUMENT_TYPES.commercial_invoice,
];

export const dangerousGoodsDocTypes = [
  {
    value: "lithium_battery_declaration",
    name: "Lithium Battery Declaration",
  },
  {
    value: "material_safety_data_sheet_msds",
    name: t("Material Safety Data Sheet (MSDS)"),
  },
  {
    value: "un_38_3",
    name: "UN 38.3",
  },
  {
    value: "sea_certification_for_safe_transport",
    name: t("Sea Certification for Safe Transport"),
  },
  {
    value: "air_certification_for_safe_transport",
    name: t("Air Certification for Safe Transport"),
  },
  {
    value: "shipper_s_declaration_for_dangerous_goods",
    name: t("Shipper's Declaration for Dangerous Goods"),
  },
  {
    value: "shipper_s_letter_of_instructions",
    name: t("Shipper's Letter of Instructions"),
  },
];
