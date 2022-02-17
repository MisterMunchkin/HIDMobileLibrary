import { NativeModulesProxy } from 'expo-modules-core';
import HIDMobileLibraryView from './HIDMobileLibraryView';
const { HIDMobileLibrary } = NativeModulesProxy;
export async function helloAsync(options) {
    return await HIDMobileLibrary.helloAsync(options);
}
export { HIDMobileLibraryView };
//# sourceMappingURL=HIDMobileLibrary.js.map