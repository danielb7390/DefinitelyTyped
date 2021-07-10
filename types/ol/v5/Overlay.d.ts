import { Coordinate } from './coordinate';
import { EventsKey } from './events';
import Event from './events/Event';
import { Extent } from './extent';
import BaseObject, { ObjectEvent } from './Object';
import OverlayPositioning from './OverlayPositioning';
import { Pixel } from './pixel';
import PluggableMap from './PluggableMap';
import { Size } from './size';

export interface Options {
    id?: number | string | undefined;
    element?: HTMLElement | undefined;
    offset?: number[] | undefined;
    position?: Coordinate | undefined;
    positioning?: OverlayPositioning | undefined;
    stopEvent?: boolean | undefined;
    insertFirst?: boolean | undefined;
    autoPan?: boolean | undefined;
    autoPanAnimation?: PanOptions | undefined;
    autoPanMargin?: number | undefined;
    className?: string | undefined;
}
export interface PanOptions {
    duration?: number | undefined;
    easing?: ((p0: number) => number) | undefined;
}
export default class Overlay extends BaseObject {
    constructor(options: Options);
    protected autoPan: boolean;
    protected autoPanAnimation: PanOptions;
    protected autoPanMargin: number;
    protected element: HTMLElement;
    protected id: number | string;
    protected insertFirst: boolean;
    protected mapPostrenderListenerKey: EventsKey;
    protected options: Options;
    protected rendered: any;
    protected stopEvent: boolean;
    protected getRect(element: HTMLElement | undefined, size: Size | undefined): Extent;
    protected handleElementChanged(): void;
    protected handleMapChanged(): void;
    protected handleOffsetChanged(): void;
    protected handlePositionChanged(): void;
    protected handlePositioningChanged(): void;
    protected panIntoView(): void;
    protected render(): void;
    protected setVisible(visible: boolean): void;
    protected updatePixelPosition(): void;
    protected updateRenderedPosition(pixel: Pixel, mapSize: Size | undefined): void;
    getElement(): HTMLElement | undefined;
    getId(): number | string | undefined;
    getMap(): PluggableMap | undefined;
    getOffset(): number[];
    getOptions(): Options;
    getPosition(): Coordinate | undefined;
    getPositioning(): OverlayPositioning;
    setElement(element: HTMLElement | undefined): void;
    setMap(map: PluggableMap | undefined): void;
    setOffset(offset: number[]): void;
    setPosition(position: Coordinate | undefined): void;
    setPositioning(positioning: OverlayPositioning): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:element', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:element', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:element', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:map', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:map', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:map', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:offset', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:offset', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:offset', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:position', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:positioning', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:positioning', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:positioning', listener: (evt: ObjectEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
