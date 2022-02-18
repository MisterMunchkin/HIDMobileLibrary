import ExpoModulesCore

public class HIDMobileLibraryModule: Module {
  public func definition() -> ModuleDefinition {
    name("HIDMobileLibrary")

    function("helloAsync") { (options: [String: String]) in
        HIDMobileLibraryModule
      return "Hello 👋";
    }

    viewManager {
      view {
        HIDMobileLibraryView()
      }

      prop("name") { (view: HIDMobileLibraryView, prop: String) in
        print(prop)
      }
    }
  }

  
}
