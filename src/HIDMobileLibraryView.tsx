import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

export type HIDMobileLibraryViewProps = {
  name: number;
};

type HIDMobileLibraryViewState = {}

const NativeView: React.ComponentType<HIDMobileLibraryViewProps> =
  requireNativeViewManager('HIDMobileLibrary');

export default class HIDMobileLibraryView extends React.Component<HIDMobileLibraryViewProps, HIDMobileLibraryViewState> {
  render() {
    return <NativeView name={this.props.name} />;
  }
}
