/** @typedef {typeof __propDef.props}  FxParallaxProps */
/** @typedef {typeof __propDef.events}  FxParallaxEvents */
/** @typedef {typeof __propDef.slots}  FxParallaxSlots */
export default class FxParallax extends SvelteComponent<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FxParallaxProps = typeof __propDef.props;
export type FxParallaxEvents = typeof __propDef.events;
export type FxParallaxSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
