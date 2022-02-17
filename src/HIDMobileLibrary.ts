import { NativeModulesProxy } from 'expo-modules-core';

import HIDMobileLibraryView, { HIDMobileLibraryViewProps } from './HIDMobileLibraryView'

const { HIDMobileLibrary } = NativeModulesProxy;

export async function helloAsync(options: Record<string, string>) {
  return await HIDMobileLibrary.helloAsync(options);
}

export {
  HIDMobileLibraryView,
  HIDMobileLibraryViewProps
};
