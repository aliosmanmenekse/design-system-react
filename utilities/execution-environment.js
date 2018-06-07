/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

const canUseDOM = !!(
	typeof window !== 'undefined' &&
	window.document &&
	window.document.createElement
);
const canUseEventListeners =
	canUseDOM && !!(window.addEventListener || window.attachEvent);
const canUseViewport = canUseDOM && !!window.screen;

export { canUseDOM, canUseEventListeners, canUseViewport };
