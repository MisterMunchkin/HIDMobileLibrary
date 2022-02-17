package com.cardexchangesolutions.hidmobilelibrary

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class HIDMobileLibraryModule : Module() {
  override fun definition() = ModuleDefinition {
    name("HIDMobileLibrary")

    function("helloAsync") { options: Map<String, String> ->
      return "Hello 👋";
    }

    viewManager {
      view { context -> 
        HIDMobileLibraryView(context) 
      }

      prop("name") { view: HIDMobileLibraryView, prop: String ->
        println(prop)
      }
    }
  }
}
