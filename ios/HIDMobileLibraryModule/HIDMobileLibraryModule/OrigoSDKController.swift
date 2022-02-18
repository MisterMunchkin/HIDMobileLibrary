//
//  OrigoSDK.swift
//  HIDMobileLibraryModule
//
//  Created by Robin Dalmy Tubungbanua on 2/19/22.
//

import Foundation
import OrigoSDK

class OrigoSDKController: NSObject, OrigoKeysManagerDelegate {
    func origoKeysDidStartup() {
        <#code#>
    }

    func origoKeysDidFail(toStartup error: Error) {
        <#code#>
    }

    func origoKeysDidSetupEndpoint() {
        <#code#>
    }

    func origoKeysDidFail(toSetupEndpoint error: Error) {
        <#code#>
    }
}

