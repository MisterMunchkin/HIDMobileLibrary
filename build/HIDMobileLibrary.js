import { NativeModulesProxy } from "expo-modules-core";
import HIDMobileLibraryView from "./HIDMobileLibraryView";
const { HIDMobileLibrary } = NativeModulesProxy;
export async function helloAsync(options) {
    return await HIDMobileLibrary.helloAsync(options);
}
export async function testAsync() {
    return "lmao it doesnt need native";
}
export { HIDMobileLibraryView };
//# sourceMappingURL=HIDMobileLibrary.js.map