// flow-typed signature: 39c7223c0805a2653b8e64e8ffc8f1d3
// flow-typed version: <<STUB>>/react-popper-tooltip_v2.9.1/flow_v0.110.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'react-popper-tooltip'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'react-popper-tooltip' {
  import type { Node } from 'react';

  declare type Placement =
    | 'auto-start'
    | 'auto'
    | 'auto-end'
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-end'
    | 'bottom'
    | 'bottom-start'
    | 'left-end'
    | 'left'
    | 'left-start';

  declare type TriggerTypes = 'none' | 'click' | 'right-click' | 'hover' | 'focus';
  declare type RefHandler = (ref: HTMLElement | null) => void;
  declare type Modifiers = {+[string]: mixed};

  declare type GetTriggerPropsArg = {
    onTouchEnd?: (event: SyntheticEvent<>) => void;
    onClick?: (event: SyntheticEvent<>) => void;
    onContextMenu?: (event: SyntheticEvent<>) => void;
    onMouseEnter?: (event: SyntheticEvent<>) => void;
    onMouseLeave?: (event: SyntheticEvent<>) => void;
    onMouseMove?: (event: SyntheticEvent<>) => void;
    onFocus?: (event: SyntheticEvent<>) => void;
    onBlur?: (event: SyntheticEvent<>) => void;
    [key: string]: any;
  };
  declare type GetTooltipPropsArg = {
    style?: { [key: string]: any };
    onMouseEnter?: (event: SyntheticEvent<>) => void;
    onMouseLeave?: (event: SyntheticEvent<>) => void;
    [key: string]: any;
  };
  declare type GetArrowPropsArg = {
    style?: { [key: string]: any };
    [key: string]: any;
  };

  declare type ChildrenArg ={
    triggerRef: RefHandler;
    getTriggerProps(arg?: GetTriggerPropsArg): GetTriggerPropsArg;
  };
  declare type TooltipArg ={
    arrowRef: RefHandler;
    tooltipRef: RefHandler;
    placement: Placement;
    getArrowProps: (arg?: GetArrowPropsArg) => GetArrowPropsArg;
    getTooltipProps: (arg?: GetTooltipPropsArg) => GetTooltipPropsArg;
  };

  declare export type Props = {
    /**
     * Tooltip placement w.r.t. trigger
     *  @default right
     */
    +placement: Placement;
    /**
     * Trigger
     */
    children: (arg: ChildrenArg) => Node,
    /**
     * Tooltip
     */
    tooltip: (arg: TooltipArg) => Node;

    /**
     * Whether to close the tooltip when it's trigger is out of the boundary
     * @default true
     */
    +closeOnOutOfBoundaries?: boolean,
    /**
     * Whether tooltip is shown by default
     * @default false
     */
    +defaultTooltipShown?: boolean,
    /**
     * Delay in hiding the tooltip
     * @default 0
     */
    +delayHide?: number,
    /**
     * Delay in showing the tooltip
     * @default 0
     */
    +delayShow?: number,
    /**
     * Whether to make the tooltip spawn at cursor position
     * @default false
     */
    +followCursor?: boolean,
    /**
     * Function that can be used to obtain a tooltip element reference
     */
    getTooltipRef?: RefHandler;
    /**
     * Function that can be used to obtain a trigger element reference
     */
    getTriggerRef?: RefHandler;
    /**
     * Modifiers passed directly to the underlying popper.js instance
     * For more information, refer to Popper.js’ modifier docs:
     * @link https://popper.js.org/popper-documentation.html#modifiers
     */
    +modifiers?: Modifiers;
    /**
     * Element to be used as portal container
     * @default document.body
     */
    +portalContainer?: HTMLElement,
    /**
     * Used to create controlled tooltip
     */
    +tooltipShown?: boolean,
    /**
     * Event that triggers the tooltip
     * @default hover
     */
    +trigger?: TriggerTypes,
    /**
     * Whether to use React$createPortal for creating tooltip
     * @default true // for browser environments
     */
    +usePortal?: boolean,
    /**
     * Called when the visibility of the tooltip changes
     * @default no-op
     */
    onVisibilityChange?: (tooltipShown: boolean) => void;
  };

  declare export default class TooltipTrigger extends React$Component<Props>{ }
}