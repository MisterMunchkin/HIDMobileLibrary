import { NativeModulesProxy } from "expo-modules-core";

import HIDMobileLibraryView, {
  HIDMobileLibraryViewProps,
} from "./HIDMobileLibraryView";

const { HIDMobileLibrary } = NativeModulesProxy;

export async function helloAsync(options: Record<string, string>) {
  return await HIDMobileLibrary.helloAsync(options);
}

export async function testAsync() {
  return "lmao it doesnt need native";
}

export { HIDMobileLibraryView, HIDMobileLibraryViewProps };
