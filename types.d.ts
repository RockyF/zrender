/**
 * Created by rockyl on 2020/8/26.
 */

interface TransformableOpts {
	position?: number[];
	rotation?: number;
	scale?: number[];
	origin?: number[];
}

interface ElementOpts extends TransformableOpts {
	culling?: boolean;
	cursor?: string;
	draggable?: boolean;
	invisible?: boolean;
	progressive?: number;
	rectHover?: boolean;
	silent?: boolean;

	style?: {
		fill?: string;
		stroke?: string;
		opacity?: number;
		lineDash?: number[];
		lineDashOffset?: number;
		shadowBlur?: number;
		shadowColor?: string;
		shadowOffsetX?: number;
		shadowOffsetY?: number;
		lineWidth?: number;
		strokeNoScale?: boolean;
		text?: string;
		font?: string;
		fontStyle?: string;
		fontWeight?: string;
		fontSize?: string;
		fontFamily?: string;
		textFill?: string;
		textStroke?: string;
		textWidth?: number;
		textHeight?: number;
		textLineWidth?: number;
		textLineHeight?: number;
		textPosition?: string | number[];
		textRect?: any;
		textOffset?: number[];
		textAlign?: string;
		textVerticalAlign?: string;
		textDistance?: number;
		textShadowColor?: string;
		textShadowBlur?: number;
		textShadowOffsetX?: number;
		textShadowOffsetY?: number;
		textBoxShadowColor?: string;
		textBoxShadowBlur?: number;
		textBoxShadowOffsetX?: number;
		textBoxShadowOffsetY?: number;
		transformText?: boolean;
		textRotation?: number;
		textOrigin?: string;
		textBackgroundColor?: string;
		textBorderColor?: string;
		textBorderWidth?: number;
		textBorderRadius?: number;
		textPadding?: number | number[];
		rich?: any;
		blend?: string;
		zlevel?: number;
		z?: number;
		z2?: number;
		truncate?: {
			outerWidth?: number;
			outerHeight?: number;
			ellipsis?: string;
			placeholder?: string;
		}
	}
}

interface InitOpts {
	renderer?: string;
	devicePixelRatio?: number;
	width?: number | string;
	height?: number | string;
}

interface ResizeOpts {
	width?: number | string;
	height?: number | string;
}

export function init(canvas, opts?: InitOpts): Zrender;

export class Zrender extends Group{
	resize(opts?: ResizeOpts);
}

export class Transformable {
	constructor(opts?: TransformableOpts);

	position?: number[];
	rotation?: number;
	scale?: number[];
	origin?: number[];

	transformCoordToGlobal(x, y);

	transformCoordToLocal(x, y);

	decomposeTransform();

	getGlobalScale();
}

export class Eventful {
	isSilent(event: string): boolean;

	off(event: string, handler?: Function): this;

	on(event: string, handler: Function, context?: any): this;

	one(event: string, handler: Function, context?: any): this;

	trigger(event: string, params?): this;
}

export class Animator {
	delay(time);

	done(callback);

	during(callback);

	isPaused();

	pause();

	resume();

	start(easing);

	stop(forwardToLast);

	when(time, props);
}

export class Animatable {
	animate(path: string, loop?: boolean): Animator;

	animateTo(target: any, time?: number, delay?: number, easing?: string, callback?: Function, forceAnimate?: boolean);

	stopAnimation(forwardToLast?: boolean): this;

}

export class Element extends Transformable, Eventful, Animatable {
	constructor(opts?: ElementOpts);

	parent: Element;
	__zr: Zrender;

	attr(key, value);
	attr(opts?: ElementOpts);

	hide();

	show();
}

export class Group extends Element {
	silent: boolean;

	add(child: Element);

	addBefore(child: Element, nextSibling: Element);

	childAt(idx);

	childCount();

	childOfName(name);

	children();

	dirty();

	eachChild(cb, context?);

	getBoundingRect(includeChildren?);

	remove(child);

	removeAll();
}

export class Displayable extends Element {
	ignore: boolean;

	getBoundingRect();

	rectContain(x, y);

	contain(x, y);

	dirty();
}

export class Arc extends Displayable {

}

export class BezierCurve extends Displayable {

}

export class Circle extends Displayable {

}

export class CompoundPath extends Displayable {

}

export class Droplet extends Displayable {

}

export class Ellipse extends Displayable {

}

export class Heart extends Displayable {

}

export class Image extends Displayable {

}

export class Isogon extends Displayable {

}

export class Line extends Displayable {

}

export class Path extends Displayable {
	static extend(props: any);
}

export class Polygon extends Displayable {

}

export class Polyline extends Displayable {

}

export class Rect extends Displayable {

}

export class Rose extends Displayable {

}

export class Sector extends Displayable {

}

export class Star extends Displayable {

}

export class Text extends Displayable {

}

export class Trochoid extends Displayable {

}
