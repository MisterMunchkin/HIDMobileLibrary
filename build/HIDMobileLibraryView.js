import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
const NativeView = requireNativeViewManager('HIDMobileLibrary');
export default class HIDMobileLibraryView extends React.Component {
    render() {
        return React.createElement(NativeView, { name: this.props.name });
    }
}
//# sourceMappingURL=HIDMobileLibraryView.js.map