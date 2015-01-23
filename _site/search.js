/** @jsx React.DOM */
var data = {};
var temp;

temp = {
  "id"    : "/csharp/2015/01/22/generics",
  "title"   : "Generics",
  "category": "csharp",
  "tags"    : "c# generics",
  "content" : "OverviewGenerics are amazing, here are some examples on how to use generics in C#. More info can be found here.ExamplesProperties 1 public class Result&lt;T&gt; { 2     public bool Success { get; set; } 3     public T Data { get; set; } 4 } 5  6 public class AnotherResult&lt;T, U&gt; { 7     public T Success { get; set; } 8     public U Data { get; set; } 9 }10 11 public class Program {12     public static void Main(string[] args) {13         var result = new Result&lt;int&gt; { Success=true, Data=5 };14         var result2 = new Result&lt;string&gt; { Success=false, Data=&quot;thingy&quot; };15         var result3 = new AnotherResult&lt;int, bool&gt; { Success=5, Data=false };16         17         Console.WriteLine(&quot;Success: {0} - Data: {1}&quot;, result.Success, result.Data);18         // Success: true - Data: 519         Console.WriteLine(&quot;Success: {0} - Data: {1}&quot;, result2.Success, result2.Data);20         // Success: false - Data: thingy21         Console.WriteLine(&quot;Success: {0} - Data: {1}&quot;, result3.Success, result3.Data);22         // Success: 5 - Data: false23     }24 }Methods 1 public class Result&lt;T&gt; { 2     public bool Success { get; set; } 3     public T Data { get; set; } 4 } 5  6 public class DoSomething { 7     public void DoIt&lt;T&gt;(Result&lt;T&gt; result) { 8         Console.WriteLine(&quot;Success: {0} - Data: {1}&quot;, result.Success, result.Data); 9     }10 }11 12 public class Program {13     public static void Main(string[] args) {14         var result = new Result&lt;int&gt; { Success=true, Data=5 };15         var doSomething = new DoSomething();16         doSomething.DoIt(result);17         // Success: true - Data: 518     }19 }",
  "date"    : "January 22, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/csharp/2015/01/22/extension-methods",
  "title"   : "Extension Methods",
  "category": "csharp",
  "tags"    : "c# extension",
  "content" : "OverviewThis is how you extend a class that already exists and that you don’t have access to. More info can be found here.ExamplesFirst declare a static class, then create a static method that has this in front of the first parameter… Done! 1 public class Extensions { 2     public static void SayHello(this Person person) { 3         Console.WriteLine(&quot;Hello, my name is {0} and I&#39;m {1}&quot;, person.Name, person.Age); 4     } 5  6     public static void SayThing(this Person person, string thing) { 7         Console.WriteLine(&quot;Hello {0} said {1}&quot;, thing, person.Name); 8     } 9 }10 11 public class Program {12     public static void Main(string[] args) {13        var person = new Person { Name=&quot;Tom&quot;, Age=5 };14        person.SayHello();         // Hello, my name is Tom and I&#39;m 515        person.SayThing(&quot;Random&quot;); // Hello Random said Tom16     }17 }",
  "date"    : "January 22, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/csharp/2015/01/22/attributes",
  "title"   : "Attributes",
  "category": "csharp",
  "tags"    : "c# attributes",
  "content" : "OverviewAttributes can be used to add more information about a particular class in C#. This is an example (and code) of where you would use one. More info can be found here.Assigning 1 // Lets create an attribute that only works on classes that are used for databases 2 [System.AttributeUsage(System.AttributeTargets.Class)] 3 public class DatabaseAttribute : Attribute { 4     private string _url; 5     private int _id; 6     public string comment; 7  8     public DatabaseAttribute(string url, int id) { 9         this._url = url;10         this._id = id;11         comment = &quot;&quot;;12     }13 14     public string SayUrl() {15         return &quot;My url is &quot; + url;16     }17 }18 19 [Database(&quot;https://....&quot;, 1, &quot;My mongo database class&quot;)]20 public class MongoDB {21     // ...22 }Retrieving 1 // Given the code above 2  3 public class Program { 4     // Get the attributes for MongoDB class, can have more than 1 5     System.Attribute[] attrs = System.Attribute.GetCustomAttributes(typeof(MongoDB)); // System.Type 6  7     // Display them 8     foreach (System.Attribute attr in attrs) { 9         if (attr is Database) {10             Database a = (Database)attr;11             System.Console.WriteLine(&quot;{0} - {1}&quot;, a.SayUrl(), a.comment);12         }13     }14 }15 16 // My url is https://.... - My mongo database class",
  "date"    : "January 22, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/csharp/2015/01/19/operator-overloading",
  "title"   : "Operator overloading",
  "category": "csharp",
  "tags"    : "c# csharp operator",
  "content" : "OverviewThis is how you overload an operator. More info can be found here.Normal 1 public static Complex operator +(Complex c1, Complex c2)  2 { 3   return new Complex(c1.real + c2.real, c1.imaginary + c2.imaginary); 4 } 5  6 class Test { 7     static void Main(){ 8         Complex num1 = new Complex(2,3); 9         Complex num2 = new Complex(3,4);10 11         // Add two Complex objects (num1 and num2) through the12         // overloaded plus operator:13         Complex sum = num1 + num2;14     } 15 }16 17 /*18  *  First complex number:  2 + 3i19  *  Second complex number: 3 + 4i20  *  The sum of the two numbers: 5 + 7i21  */Implicit and Explicit 1 // Implicit conversion from MyObject to string. Maps true to  2 // &quot;MyObject.Truthy&quot; and false to &quot;MyObject.Falsy&quot; 3 public static implicit operator string(MyObject x) { 4   return MyObject.value.ToString(); 5 } 6  7 // Implicit conversion from MyObject to int. 8 public static explicit operator int(MyObject x) { 9   return MyObject.value;10 }11 12 class Test {13     static void Main(){14         MyObject obj = new MyObject(5);15         Console.WriteLine(obj);         // implicit conversion to string16         Console.WriteLine( (int)obj );  // explicit conversion to int17     } 18 }19 20 /*21  *  522  *  523  */",
  "date"    : "January 19, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/swift/2015/01/18/uiview-transitions",
  "title"   : "UIView Transitions",
  "category": "swift",
  "tags"    : "ios ui transition",
  "content" : "OverviewIn this post, I’ll show you how to transition between 2 views on click.  1 // ### in viewDidLoad ### 2  3 let container = UIView() 4 let redSquare = UIView() 5 let blueSquare = UIView() 6  7 // set container frame and add to the screen 8 self.container.frame = CGRect(x: 60, y: 60, width: 200, height: 200) 9 self.view.addSubview(container)10 11 // set red square frame up12 // we want the blue square to have the same position as redSquare13 // so lets just reuse blueSquare.frame14 self.redSquare.frame = CGRect(x: 0, y: 0, width: 200, height: 200)15 self.blueSquare.frame = redSquare.frame16 17 // set background colors18 self.redSquare.backgroundColor = UIColor.redColor()19 self.blueSquare.backgroundColor = UIColor.blueColor()20 21 // for now just add the redSquare22 // we&#39;ll add blueSquare as part of the transition animation23 self.container.addSubview(self.redSquare)Ok, now we need to animate on click for it to look like this.1 // ### in click event ###2 3 // create a tuple to hold the views4 var views = (frontView: self.redSquare, backView: self.blueSquare)5 if self.redSquare.superview ==  nil {6   views = (frontView: self.blueSquare, backView: self.redSquare)7 }8 let transitionOptions = UIViewAnimationOptions.TransitionCurlUp9 UIView.transitionFromView(views.frontView, toView: views.backView, duration: 1.0, options: transitionOptions, completion: nil)",
  "date"    : "January 18, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/swift/2015/01/18/move-to-another-viewcontroller-programmatically",
  "title"   : "Move to another ViewController Programmatically",
  "category": "swift",
  "tags"    : "ios ui viewcontroller animation",
  "content" : "OverviewSo you have a ViewController in your storyboard and you want to be able to display it from code but don’t know how. The answer is the presentViewController function. 1 // we have to get the controller 2 // Make sure you add an Identified to your controller 3 // in the storyboard 4 var newController = self.storyboard?.instantiateViewControllerWithIdentifier(&quot;NewViewController&quot;) as NewViewController 5  6 // If you want to fade out or animate your current viewcontroller 7 // you have to use a CATransition 8 var transition = CATransition() 9 transition.duration = 1;10 transition.type = kCATransitionFade;11 transition.subtype = kCATransitionFromBottom;12 self.view.window?.layer.addAnimation(transition, forKey: kCATransition)13 14 // Now we display our new controller15 // The animation is false because the default animation is bad16 self.presentViewController(newController, animated: false, completion: nil)",
  "date"    : "January 18, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/python/2015/01/17/python-file-io",
  "title"   : "Python: File Input and Output",
  "category": "python",
  "tags"    : "io file",
  "content" : "This post is about file io in python. More information can be found here. 1 # reading a file in 1 shot 2 with open(&#39;filename.txt&#39;, &#39;r&#39;) as file: 3     content = file.read() 4  5 # reading a file, getting all the lines 6 with open(&#39;filename.txt&#39;, &#39;r&#39;) as file: 7     content = file.readlines() 8  9 # writing to a file/creating a file10 with open(&#39;filename.txt&#39;, &#39;w&#39;) as file:11     file.write(&#39;This is output&#39;)12 13 # appending to a file14 with open(&#39;filename.txt&#39;, &#39;ag&#39;) as file:15     file.write(&#39;This is output&#39;)",
  "date"    : "January 17, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/python/2015/01/17/generating-primes",
  "title"   : "Python Generating primes",
  "category": "python",
  "tags"    : "primes",
  "content" : "Code without comments1 def generatePrime(n):2     sieve = [True] * n3     for i in xrange(3, int(n**0.5)+1, 2):4         if sieve[i]:5             sieve[i*2::i] = [False] * len(sieve[i*2::i])6     return [2] + [i for i in xrange(3, n+1, 2) if sieve[i]]Code with comments 1 def generatePrime(n): 2     # create list of booleans length n 3     sieve = [True] * n 4     # go from 3 to sqrt(n) by 2 ex: [3, 5, 7, 9] 5     for i in xrange(3, int(n**0.5)+1, 2): 6         if sieve[i]: 7             # if i = 3 you&#39;d turn the following into False 8             # [6, 9, 12, 15....] 9             sieve[i*2::i] = [False] * len(sieve[i*2::i])10     # go through list, starting at 3, by 2. If the sieve at that index11     # is True, add it to the array12     return [2] + [i for i in xrange(3, n+1, 2) if sieve[i]]Step by Step. We will use the index number instead of boolean for clarification. 1 # Given parameter 30 2  3 # initial sieve 4 sieve = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29] 5  6 # index 3 7 # turn the following indecies false [9, 12, 15, 18, 21, 24, 27] 8 sieve = [0,1,2,3,4,5,6,7,8,False,10,11,False,13,14,False,16,17,False,19,20,False,22,23,False,25,26,False,28,29] 9 10 # index 511 # turn the following indecies false [10, 15, 20, 25]12 sieve = [0,1,2,3,4,5,6,7,8,False,False,11,False,13,14,False,16,17,False,19,False,False,22,23,False,False,26,False,28,29]13 14 # Go from 3 to 30 by 2. [3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]15 # If the value at that index is not False, add it to the list16 returnLst = [2] + [3, 5, 7, 11, 13, 17, 19, 23, 29]",
  "date"    : "January 17, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/python/2015/01/16/regular-expressions",
  "title"   : "Regular Expressions",
  "category": "python",
  "tags"    : "python regex",
  "content" : "OverviewIn this post, I will be talking about python’s regular expression module called re. I’ll mainly give examples. More information can be found here here.Examples 1 import re 2  3 # look for &#39;thing&#39; in the string &#39;that thing&#39; 4 match = re.search(r&#39;thing&#39;, &#39;that thing&#39;) 5 # match.group() == &#39;thing&#39; 6  7 # look for &#39;thig&#39; in the string &#39;that thing&#39; 8 match = re.search(r&#39;thig&#39;, &#39;that thing&#39;) 9 # match == None10 11 # . = any character except \n12 match = re.search(r&#39;..d+&#39;, &#39;abcdd&#39;)13 # match.group() == &#39;bcdd&#39;",
  "date"    : "January 16, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/csharp/2015/01/12/windows-8-development-managing-states",
  "title"   : "Windows 8 development: Managing States",
  "category": "csharp",
  "tags"    : "windows windows phone state",
  "content" : "OverviewA mobile app should aways keep track of the state. This means that if you write a message or complete a level it should be saved. The next time you go to that app, you should restart from where you left off. This feature is very easy to implement on the Windows Phone. More information can be found here.Frame StateThere are 2 very important methods to know about: OnLaunched and OnSuspending. We need to use SuspensionManager to save everything. If you used a BlankPage, you won’t have the SuspensionManager. Just create a BasicPage and it will prompt you to automatically create the some helped classes (including the SuspensionManager) for you.Inside OnLaunched, we will add the following line of code.1 ManagingState.Common.SuspensionManager.RegisterFrame(appFrame, &quot;appFrame&quot;);In OnSuspending, we have to save the state.1 // make sure you add async to the method signature2 await ManagingState.Common.SuspensionManager.SaveAsync();We also need to restore our state, we do this again in OnLaunched. A bit lower than the code we wrote to register the frame, we will check if the app was terminated and restore the state if it was.1 // make sure you add async to the method signature again2 await ManagingState.Common.SuspensionManager.RestoreAsync();Application StateAbove we saved what Frame or Page the user was on, but what if we want to store specific information that the user has entered? To accomplish this, we will use the local storage.Save the state.1 Windows.Storage.ApplicationDataContainer localStorage = Windows.Storage.ApplicationData.Current.LocalSettings;2 localStorage.Values[&quot;someKey&quot;] = &quot;I&#39;m saving this text for later&quot;;Restore the state in NavigationHelper_LoadState (it will be there if you chose BasicPage).1 // Again we get the storage2 Windows.Storage.ApplicationDataContainer localStorage = Windows.Storage.ApplicationData.Current.LocalSettings;3 4 if ( localStorage.Values.ContainsKey(&quot;someKey&quot;) ) {5   myLocalVariable = localStorage.Values[&quot;someKey&quot;].toString();6 }The other way to save Application state (which is much easier) is with NavigationHelper_SaveState and NavigationHelper_LoadState.Save State.1 e.PageState[&quot;someKey&quot;] = &quot;I&#39;m saving this text for later&quot;;Load State.1 if ( e.PageState != null &amp;&amp; e.PageState.ContainsKey(&quot;someKey&quot;) ) {2   myLocalVariable = e.PageState[&quot;someKey&quot;].toString();3 }",
  "date"    : "January 12, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/csharp/2015/01/11/windows-8-development-styling-xaml",
  "title"   : "Windows 8 development: styling xaml",
  "category": "csharp",
  "tags"    : "windows windows phone xaml styling",
  "content" : "OverviewIn this post, I will be talking about how to style xaml controls. Similar to css, we can create styles that can be reused for multiple controls throughout our solution. More information can be found here here.Local Style1 &lt;Page.Resources&gt;2   &lt;SolidColorBrush x:Key=&quot;MyBrush&quot; Color=&quot;Brown&quot; /&gt;3 &lt;/Page.Resources&gt;4 5 &lt;StackPanel&gt;6   &lt;TextBlock Text=&quot;Some text&quot; Foreground=&quot;{StaticResource MyBrush}&quot; /&gt;7 8   &lt;Button Content=&quot;Some text&quot; Background=&quot;{StaticResource MyBrush}&quot; /&gt;9 &lt;/StackPanel&gt;We first create a &lt;Page.Resources&gt; element. Inside we create a &lt;SolidColorBrush&gt; that we can reuse by using it’s key, MyBrush. To use it, we have to use the following syntax: {StaticResource MyBrush}.The style above can be applied to anything and it’s simple. Let’s create a more complicated style that can be applied only to buttons. 1 &lt;Page.Resources&gt; 2   &lt;Style TargetType=&quot;Button&quot; x:Key=&quot;MyButtonStyle&quot;&gt; 3     &lt;Setter Property=&quot;Background&quot; Value=&quot;Blue&quot; /&gt; 4     &lt;Setter Property=&quot;FontFamily&quot; Value=&quot;Arial Black&quot; /&gt; 5     &lt;Setter Property=&quot;FontSize&quot; Value=&quot;36&quot; /&gt; 6   &lt;/Style&gt; 7 &lt;/Page.Resources&gt; 8  9 &lt;StackPanel&gt;10   &lt;Button Content=&quot;My Brush Example&quot; Style=&quot;{StaticResource MyButtonStyle}&quot; /&gt;11 &lt;/StackPanel&gt;Keep in mind that if we now apply Background=Green to the Button directly, it will take precedence over the style. Even if we bind a color to it.Global StyleThe code above (Local) works only on the page where the &lt;Style&gt; was declared. To create a style which can be used anywhere, we have to create an &lt;Application.Resources&gt; tag inside App.xaml.1 &lt;Application.Resources&gt;2   &lt;Style TargetType=&quot;Button&quot; x:Key=&quot;MyButtonStyle&quot;&gt;3     &lt;Setter Property=&quot;Background&quot; Value=&quot;Blue&quot; /&gt;4     &lt;Setter Property=&quot;FontFamily&quot; Value=&quot;Arial Black&quot; /&gt;5     &lt;Setter Property=&quot;FontSize&quot; Value=&quot;36&quot; /&gt;6   &lt;/Style&gt;7 &lt;/Application.Resources&gt;ThemesOn the windows phone, people can set their own colors and backgrounds. By going in Settings, they can set specific themes that apply to tiles and to apps that take advantage of these settings. Let’s change the Background to the background chosen by the user in his settings.1 &lt;Application.Resources&gt;2   &lt;Style TargetType=&quot;Button&quot; x:Key=&quot;MyButtonStyle&quot;&gt;3     &lt;Setter Property=&quot;Background&quot; Value=&quot;{ThemeResource PhoneAccentBrush}&quot; /&gt;4     &lt;Setter Property=&quot;FontFamily&quot; Value=&quot;Arial Black&quot; /&gt;5     &lt;Setter Property=&quot;FontSize&quot; Value=&quot;36&quot; /&gt;6   &lt;/Style&gt;7 &lt;/Application.Resources&gt;We use the device menu to change the accent color to yellow and we change the theme to Light.",
  "date"    : "January 11, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/csharp/2015/01/11/windows-8-development-navigate-to-a-page",
  "title"   : "Windows 8 development: navigate to a page",
  "category": "csharp",
  "tags"    : "windows windows phone navigation",
  "content" : "OverviewIn mobile apps, we often navigate to different pages. In this post, we will see how to do that on the windows phone. More information can be found here.DetailsWe will have MainPage which will have a button whos click event takes us to a new page, Page2.MainPage xaml will have a button that will take you to the next page.1 &lt;Button Content=&quot;Go to Page2&quot; onClick=&quot;Button_Click&quot; /&gt;The click event for that button will look like this.1 // MainPage2 private void Button_Click(object sender, RoutedEventArgs e) {3   Frame.Navigate(typeof(Page2), &quot;This is extra data that I&#39;m sending to Page2&quot;);4 }On Page2, we can get the parameters passed when we changed pages in the OnNavigatedTo method.1 // Page22 protected override void OnNavigatedTo(NavigationEventArgs e) {3   Console.WriteLine( e.Parameter.ToString() );4 }",
  "date"    : "January 11, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/javascript/2015/01/05/ecmascript-6-feature-modules",
  "title"   : "EcmaScript 6 feature: modules",
  "category": "javascript",
  "tags"    : "es6 module export",
  "content" : "OverviewJavascript’s new version (EcmaScript 6) has some amazing new features. The feature discussed in this post is the modules feature.Modules allow you to load functions from other js files and use them. In NodeJS, we use modules.exports to make a function or variable available to other files. The other files can then use require('moduleName') to access them.More information can be found here.DetailsLets start out by creating a module cat that has 2 functions it exports: bite(victim) and lookCute()cat.js 1 function bite(victim){ 2   return `*cat bit ${victim}*`; 3   // notice the use of backtick and ${} for string templating 4 } 5  6 function distract(){ 7   return &#39;awww, that kitten is so cute&#39;; 8 } 9 10 // you can expose the function as is, or change the name11 export { bite, distract as lookCute }app1.js1 import { lookCute } from &#39;cat&#39;;2 console.log( lookCute() );app2.js1 import { bite, lookCute } from &#39;cat&#39;;2 console.log( lookCute() );  // &quot;awww, that kitten is so cute&quot;3 console.log( bite(&#39;Tom&#39;) ); // &quot;*cat bit Tom*&quot;Examplesexporter1.js1 export function blah(){2   return &#39;blah&#39;;3 }4 5 var aFunc = function(){6   console.log(&#39;does nothing&#39;);7 }8 export { aFunc }importer1.js1 import { blah, aFunc } from &#39;exporter1&#39;;2 aFunc();3 console.log( blah() );exporter2.js1 export default function(){2   return &quot;this is all I&#39;m exporting&quot;;3 }importer2.js1 import randomName from &#39;exporter2&#39;;2 randomName(); // when you import a default function, you choose the nameMore examples of es6 modules can be found here.",
  "date"    : "January  5, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/csharp/2015/01/03/c-60-feature-null-propogation",
  "title"   : "6.0 feature: Null Propogation",
  "category": "csharp",
  "tags"    : "null propogation",
  "content" : "OverviewC# 6.0 has some interesting new features. The feature discussed in this post is null propogation.Null propogation allows you to check if a property exists and if it does, execute code.More information can be found here.DetailsUsing the ? symbol, we can see if the preceding variable holds a null. If it does, the chain stops and the value returned is null. 1 // Before 2 if (obj != null &amp;&amp; obj.children != null) { 3   obj.children.Add( new Child() ); 4 } 5  6 // In 6.0 7 if (obj?.children != null) { 8   obj.children.Add( new Child() ); 9 }10 11 // 1. Is obj == null? If yes, stop and the chain == null12 // 2. Is children == null? If yes, stop and the chain == null",
  "date"    : "January  3, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/javascript/2015/01/02/ecmascript-6-feature-properties",
  "title"   : "EcmaScript 6 feature: enhanced properties",
  "category": "javascript",
  "tags"    : "es6 property deconstruct",
  "content" : "OverviewJavascript’s new version (EcmaScript 6) has some amazing new features. The one discussed in this post is enhanced properties.More information can be found here.ExamplesProperty shorthands1 let name = &quot;Jim&quot;;2 let age = 21;3 let person = { name, age }; // { name: &quot;Jim&quot;, age: 21 }Deconstructing1 let person = { name: &quot;Jim&quot;, age: 21 };2 let { name, age } = person;3 console.log(name);  // Jim4 console.log(age);   // 21Computed Property Keys 1 // Before 2 var key = &quot;myKey&quot;; 3 var obj = {}; 4 obj[key] = 5; 5  6 // Now 7 let key = &quot;myKey&quot;; 8 let keyNum = 1; 9 let obj = {10   [key] = 5;        // computed property name11   [key + keyNum](){ // computed method name12     return true;13   }14 };15 console.log( obj[&quot;myKey&quot;] );    // 516 console.log( obj[&quot;myKey1&quot;]() ); // true",
  "date"    : "January  2, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/javascript/2015/01/02/ecmascript-6-feature-generators-and-iterators",
  "title"   : "EcmaScript 6 feature: generators and iterators",
  "category": "javascript",
  "tags"    : "es6 iterator generator loop",
  "content" : "OverviewJavascript’s new version (EcmaScript 6) has some amazing new features. The ones discussed in this post is iterators and generators.More information can be found here.DetailsIteratorIterators allow you to go through every element inside an abstract data type the same way without having to know how it’s been implemented. Java has the Iterable interface which forces you to implement the next() and hasNext() methods. ES6 has only 1method, next() that has 2 return values.1 // Not at the end2 return { done:false, value:&quot;returnValue&quot; };3 4 // After last element5 return { done:true, value:&quot;optionalEndValue&quot; };To iterate over an object, you need the next() method and you need your object to be iterable. To make your object iterable you do the following.1 class MyObject {2   ...3   [Symbol.iterator](){4     ...5     // this iterator has the next function mentioned above6     return aIteratorYouCreated;7   }8 }Now that you have the iterator, you want to iterate over its elements. To do this, we use es6’s new for ... of loop.1 for (let value of iterable) {2   console.log(value);3 }4 5 // for arrays, we can use entries which have both index and value6 for (let [index, value] of someArray.entries() ) {7   console.log(`${index} - ${value}`);8 }GeneratorsGenerators are functions that allow you to pause and resume. They use the yield key instead of the return key.When the generator is called the first time, it runs until it hits the first yield and then stops. When called again, it will run until the next yield. It will continue this way until it finishes. Generators in python work the same way. That’s because ES6 got them from Python. 1 function* generatorFib(){ 2   prev = 0; 3   curr = 1; 4    5   yield 0; 6   yield 1; 7  8   while (true) { 9     temp = curr;10     curr += prev;11     prev = curr;12     yield curr;13 14     if (curr == 2) {15       break;16     }17   }18 }19 20 // first 5 fib numbers21 let fibs = generatorFib();22 fibs.next(); // { done:false, value: 0}23 fibs.next(); // { done:false, value: 1}24 fibs.next(); // { done:false, value: 1}25 fibs.next(); // { done:false, value: 2}26 fibs.next(); // { done:true }We can also iterate through a generator1 for (let fib of fibs) {2   console.log(fib);3 }4 // 05 // 16 // 17 // 2",
  "date"    : "January  2, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/javascript/2014/12/29/ecmascript-6-feature-template-strings",
  "title"   : "EcmaScript 6 feature: template strings",
  "category": "javascript",
  "tags"    : "es6 string",
  "content" : "OverviewJavascript’s new version (EcmaScript 6) has some amazing new features. The one discussed in this post is template strings.Template strings are similar to string interpolation in swift and python. It uses backticks instead of double or single quotes.More information can be found here.Examples 1 var first = &quot;Jake&quot; 2   , last = &quot;Daisy&quot;; 3  4 var name1 = &quot;My name is &quot; + first + &quot; &quot; + last; 5 var name2 = `My name is ${first} ${second}`; 6 // &quot;My name is Jake Daisy&quot; 7  8 var test1 = `Hello`; 9 // &#39;&quot;Hello&quot;&#39;10 11 var test2 = 512   , test3 = 6;13 14 `test2 + test3 = ${ test2 + test3 }`15 // &quot;test2 + test3 = 11&quot;",
  "date"    : "December 29, 2014"
};
data[temp.id] = temp;

temp = {
  "id"    : "/javascript/2014/12/29/ecmascript-6-feature-class",
  "title"   : "EcmaScript 6 feature: class",
  "category": "javascript",
  "tags"    : "es6 class oop",
  "content" : "OverviewJavascript’s new version (EcmaScript 6) has some amazing new features. The one discussed in this post is the new class syntax.More information can be found here.Details 1 // OLD CLASS 2 var MyObject = function(params){ 3   this.p1 = params.p1; 4   this.p2 = params.p2; 5 }; 6 // I will go over the new string interpolation in another post 7 MyObject.prototype.summary = function(){ 8   return &quot;p1:&quot; + this.p1 + &quot; p2:&quot; + this.p2; 9 };10 11 12 // NEW CLASS13 class MyObject {14   constructor(p1, p2){15     this.p1 = p1;16     this.p2 = p2;17   }18   summary() {19     return &quot;p1:&quot; + this.p1 + &quot; p2:&quot; + this.p2;20   }21 }Examples 1 // Getters and Setters 2 class Person { 3   constructor(name){ 4     this._name = name; 5   } 6   get name(){ 7     return this._name; 8   } 9   set name(newName){10     if (newName) {11       this._name = newName;12     }13   }14 }15 16 let guy = new Person(&quot;Tom&quot;);17 console.log(guy.name);  // GET - Tom18 guy.name = &quot;Steve&quot;;     // SET19 console.log(guy.name);  // GET - Steve20 21 22 // Inheritance23 class Dev extends Person {24   static allDevs = []25   constructor(name, preferredLang) {26     super(name);27     this.lang = preferredLang;28     Dev.allDevs.push(name);29   }30   static numDevs() {31     return Dev.allDevs.length;32   }33 }",
  "date"    : "December 29, 2014"
};
data[temp.id] = temp;

temp = {
  "id"    : "/javascript/2014/12/29/ecmascript-6-feature-arrow",
  "title"   : "EcmaScript 6 feature: arrow",
  "category": "javascript",
  "tags"    : "es6 function",
  "content" : "OverviewJavascript’s new version (EcmaScript 6) has some amazing new features. The one discussed in this post is the arrow symbol =&gt;.The arrow symbol is used to create shorter functions and to fix the scoped this. More information can be found here.DetailsThe arrow symbol can help shorten functions. 1 var dogs = [ 2   &quot;Jake&quot;, 3   &quot;Daisy&quot;, 4   &quot;Honey&quot; 5 ]; 6  7 var length1 = dogs.map(function(s){ return s.length }); 8 // [4, 5, 5] 9 10 var length2 = dogs.map( s =&gt; s.length );11 // [4, 5, 5]It can also help with the scoped this variable. 1 // Before 1 2 function Dog1(){ 3   var that = this; // We have to cache &#39;this&#39; 4   that.treats = 0; 5   setInterval(function eatTreat(){ 6     that.treats++; 7   }, 1000); 8 } 9 10 // Before 211 function Dog2(){12   this.treats = 0;13   setInterval(function eatTreat(){14     this.treats++;15   }.bind(this), 1000); // We have to bind &#39;this&#39; to the function16 }17 18 // Now19 function Dog3(){20   this.treats = 0;21   setInterval(() =&gt; { // &#39;this&#39; refers to Dog3&#39;s &#39;this&#39;22     this.treats++;23   }, 1000);24 }Examples 1 var biggestNum = (a, b) =&gt; (a &gt; b)? a : b; 2 biggestNum(4, 5);   // 5 3 biggestNum(10, 2);  // 10 4  5  6 var myList = [&quot;Nami&quot;, &quot;Luffy&quot;, &quot;Zoro&quot;]; 7 var findIdx = (lst, val) =&gt; { 8   for(var i=0; i &lt; lst.length; ++i){ 9     if (lst[i] == val) return i;10   }11   return -1;12 }13 findIdx(myList, &quot;Luffy&quot;); // 114 findIdx(myList, &quot;Robin&quot;); // -1",
  "date"    : "December 29, 2014"
};
data[temp.id] = temp;

temp = {
  "id"    : "/other/2014/12/24/my-first-post",
  "title"   : "My first post",
  "category": "other",
  "tags"    : "",
  "content" : "It took me a while to get this blog up because I was trying to understand how Jekyll works.The site built fine locally but it didn’t seem to want to build on github. The reason was that I was trying to make a blog folder and put all the Jekyll files in there.Long story short, put your jekyll files in the root of the repo so that github doesn’t spam you with build fail emails.",
  "date"    : "December 24, 2014"
};
data[temp.id] = temp;

temp = {
  "id"    : "/swift/2014/12/24/ios-uitableview-and-uisearchbar",
  "title"   : "UITableView and UISearchBar",
  "category": "swift",
  "tags"    : "ios ui",
  "content" : "OverviewWhile working on an iOS app, I needed to have a TableView that was searchable. After looking it up, I found out thatI could use a Table View and add a Search Bar and Search Display.ControlsTableView will display the data, we just have to supply the functions that tell the table view what to show.The Search Bar doesn’t do anything except alert us when the search query was changed… We have to implementthe search functionality ourselves. The search display is the dropdown that appears with suggestions once you type somethingin the search bar.DirectionsFirst we drag and drop a UIViewController to our storyboard.Then we drag and drop a Table View inside that ViewController and a Search Bar and Search Display above the TableView.Note: Search Bar and Search Display is 1 control.Now we need the implementation. Create a file that is a subclass of UIViewController and add the following protocols.1 class YourViewController: UIViewController, UITableViewDataSource, UITableViewDelegate, UISearchBarDelegate, UISearchDisplayDelegateWe have to implement the following functions now. 1 // How many rows to display 2 func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -&gt; Int 3  4 // What to display for a particular row 5 func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -&gt; UITableViewCell 6  7 // How many sections (only 1 in our case) 8 func numberOfSectionsInTableView(tableView: UITableView) -&gt; Int { 9 10 // the searchString has changed, we have to update our array11 func searchDisplayController(controller: UISearchDisplayController, shouldReloadTableForSearchString searchString: String!) -&gt; Bool 12 13 // the searchString has changed, we have to update our array14 func searchDisplayController(controller: UISearchDisplayController!, shouldReloadTableForSearchScope searchOption: Int) -&gt; BoolTableView functions 1 func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -&gt; Int { 2   if (tableView == self.searchDisplayController?.searchResultsTableView) { 3       return searchResults.count 4   } else { 5       return data.count 6   } 7 } 8  9 func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -&gt; UITableViewCell {10   let cell = myTableView.dequeueReusableCellWithIdentifier(&quot;cell&quot;) as UITableViewCell11         12   if (tableView == self.searchDisplayController?.searchResultsTableView) {13       cell.textLabel?.text = searchResults[indexPath.row]14   } else {15       cell.textLabel?.text = data[indexPath.row]16   }17   return cell18 }19 20 func numberOfSectionsInTableView(tableView: UITableView) -&gt; Int {21   return 122 }There are 2 important things to note.       On line 2 and 12, we’re checking if the tableView that is callingthis function is the searchDisplay tableView or not. We need to check to be able to return the right data.        On line 10, we’re using myTableView. The searchDisplay TableView doesn’t actually have a prototype cell so we’re usingthe one from our main tableView.  SearchBar functions 1 func searchDisplayController(controller: UISearchDisplayController, shouldReloadTableForSearchString searchString: String!) -&gt; Bool { 2   filterContentForSearchText(searchString) 3   return true 4 } 5  6 func searchDisplayController(controller: UISearchDisplayController!, shouldReloadTableForSearchScope searchOption: Int) -&gt; Bool { 7   filterContentForSearchText(self.searchDisplayController!.searchBar.text) 8   return true 9 }10 11 func filterContentForSearchText(searchText:String) {12     let temp = data.reduce([], combine: +) // to flatten array13     searchResults = temp.filter {14         var ret = false15         if $0.lowercaseString.rangeOfString(searchText) != nil {16             ret = true17         }18         return ret19     }20 }",
  "date"    : "December 24, 2014"
};
data[temp.id] = temp;


// init lunr
var idx = lunr(function () {
  this.field('title', 10);
  this.field('category', 8);
  this.field('tags', 5);
  this.field('date', 4);  
  this.field('content');
})
// add each document to be index
for(var index in data) {
  idx.add(data[index]);
  delete data[index].content;
  delete data[index].date;
}

function search() {
  var result = idx.search($("#search input").val());
  var list = [];
  if(result && result.length > 0) {
    for(var i=0; i < result.length; ++i){
      list.push(data[result[i].ref]);
    }
  }
  React.renderComponent(<SearchPostApp data={list} />,document.getElementById('searchResults'));
}

$(function() {
  $("#search input").keyup(function(e) {
    search();
  });
});