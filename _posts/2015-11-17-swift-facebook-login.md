---
layout: post
title: "Swift: Facebook Login"
description: "This is a quick post on how to integrate [facebook login](https://developers.facebook.com/docs/ios/getting-started/) with your app in swift. I followed a video tutorial from [VeaSoftware](https://www.veasoftware.com/tutorials/2015/6/11/facebook-login-in-swift-xcode-63-ios-83-tutorial) on integrating the Facebook login button and I highly recommend it. This post will be a summary of his video. "
category: swift
tags: [ios, fb, login, facebook]
---
{% include JB/setup %}

<!-- Overview -->
<h3>Overview</h3>

This is a quick post on how to integrate [Facebook Login](https://developers.facebook.com/docs/ios/getting-started/) with your app in swift. I followed a video tutorial from [VeaSoftware](https://www.veasoftware.com/tutorials/2015/6/11/facebook-login-in-swift-xcode-63-ios-83-tutorial) on integrating the Facebook login button and I highly recommend it. This post will be a summary of his video. 

<!-- Content -->
<h3>Content</h3>

<!-- Step 1 -->
<h4>Step 1</h4>

Download the [Facebook SDK](https://origincache.facebook.com/developers/resources/?id=facebook-ios-sdk-current.zip)



<br /><br /><br />
<!-- Step 2 -->
<h4>Step 2</h4>

Add the Facebook SDK to your Xcode Project like [this](https://developers.facebook.com/docs/ios/getting-started/#addSDK). Make sure to uncheck "Copy items if needed".

![Drop]({{ ASSET_PATH }}images/2015-11-17-swift-facebook-login1.gif)




<br /><br /><br />
<!-- Step 3 -->
<h4>Step 3</h4>

[Configure XCode](https://developers.facebook.com/docs/ios/getting-started/#xcode) with the new .plist entries.

1. In Xcode right-click your `.plist` file and choose "Open As Source Code".
2. Copy & Paste the XML snippet into the body of your file (`<dict>...</dict>`).
3. Replace:
    - `fb{your-app-id}` with your Facebook App ID and the prefix `fb`. E.g.: `fb123456`.
    - `{your-app-id}` with your Facebook App ID.
    - `{your-app-name}` with the `Display Name` you configured in the [app dashboard](https://developers.facebook.com/apps).

<!-- Code _______________________________________-->
{% highlight xml linenos %}
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>fb{your-app-id}</string>
    </array>
  </dict>
</array>
<key>FacebookAppID</key>
<string>{your-app-id}</string>
<key>FacebookDisplayName</key>
<string>{your-app-name}</string>
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->



<br /><br /><br />
<!-- Step 4 -->
<h4>Step 4</h4>

If you're using iOS 9, read [this](https://developers.facebook.com/docs/ios/ios9).



<br /><br /><br />
<!-- Step 5 -->
<h4>Step 5</h4>

Supply Facebook with your Bundle Identifier



<br /><br /><br />
<!-- Step 6 -->
<h4>Step 6</h4>

Now to the fun part. This is this code that will display the button.

<!-- Code _______________________________________-->
{% highlight swift linenos %}
import UIKit
import FBSDKCoreKit
import FBSDKLoginKit

class LoginViewController: UIViewController, FBSDKLoginButtonDelegate {
    override func viewDidLoad() {
        super.viewDidLoad()

        if (FBSDKAccessToken.currentAccessToken() == nil) {
            print("Already logged in")
        } else {
            createAndDisplayLoginButton()    
        }
    }

    func createAndDisplayLoginButton() {
        let loginButton = FBSDKLoginButton()
        loginButton.readPermissions = ["public_profile", "email", "user_friends"]
        loginButton.center = self.view.center
        loginButton.delete = self

        self.view.addSubview(loginButton)
    }


    // MARK: - Facebook events

    func loginButton(loginButton: FBSDKLoginButton!, 
                didCompleteWithResult result: FBSDKLoginManagerLoginResult!, 
                error: NSError!) {
        if (error == nil) {
            print("Logged in")
        } else {
            print(error.localizedDescription)
        }
    }

    func loginButtonDidLogOut(loginButton: FBSDKLoginButton!) {
        print("User logged out")
    }
}
{% endhighlight %}
<!-- /Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-->