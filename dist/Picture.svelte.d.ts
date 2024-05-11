/** @typedef {typeof __propDef.props}  PictureProps */
/** @typedef {typeof __propDef.events}  PictureEvents */
/** @typedef {typeof __propDef.slots}  PictureSlots */
export default class Picture extends SvelteComponent<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PictureProps = typeof __propDef.props;
export type PictureEvents = typeof __propDef.events;
export type PictureSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
