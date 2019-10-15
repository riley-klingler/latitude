/**
 * TEAM: frontend_infra
 *
 * @flow strict
 */
import type {AttachmentType} from "types/AttachmentTypes";

export default function removeAttachmentsWithError(
  attachments: $ReadOnlyArray<AttachmentType>
): Array<AttachmentType> {
  return attachments.filter(attachment => !attachment.error);
}
