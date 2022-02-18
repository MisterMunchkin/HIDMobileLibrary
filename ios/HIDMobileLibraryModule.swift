import ExpoModulesCore
import CoreMedia

public class HIDMobileLibraryModule: Module {
  public func definition() -> ModuleDefinition {
      name("HIDMobileLibrary")

    function("helloAsync") { (options: [String: String]) in
      return "Hello 👋";
    }

//      This will consume an appId needed for each company and an optional description.
//      This will be an async method that will be called during react-native startup and will       execute
//      The applicationStartup on the sdk.
//      If endpointSetupComplete returns false, then we should return false to react-native so      they can
//      Setup a form with a 16-digit invitation code.
    function("startupAsync") { (appId: String, desciption: String?) -> Bool in
        return true
    }
     
//      This will be called after user has input the 16-digit invitation code. This calls           endpointSetup in Native sdk. This will return true if the setup has been completed
    function("endpointSetupAsync") { (invitationCode: String) -> String in
      return "yes"
    }

//      Will allow to synchronize with tsm after mobile ID has been delivered.
    function("endpointUpdateAsync") { () -> String in
      return "yes"
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
