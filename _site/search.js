/** @jsx React.DOM */
var data = {};
var temp;

temp = {
  "id"    : "/csharp/2015/01/12/windows-8-development-managing-states",
  "title"   : "Windows 8 development: Managing States",
  "category": "csharp",
  "tags"    : "windows windows phone state",
  "content" : "OverviewA mobile app should aways keep track of the state. This means that if you write a message or complete a level it should be saved. The next time you go to that app, you should restart from where you left off. This feature is very easy to implement on the Windows Phone. More information can be found here.DetailsThere are 2 very important methods to know about: OnLaunched and OnSuspending. We need to use SuspensionManager to save everything. If you used a BlankPage, you won’t have the SuspensionManager. Just create a BasicPage and it will prompt you to automatically create the some helped classes (including the SuspensionManager) for you.Inside OnLaunched, we will add the following line of code.1 ManagingState.Common.SuspensionManager.RegisterFrame(appFrame, &quot;appFrame&quot;);In OnSuspending, we have to save the state.1 // make sure you add async to the method signature2 await ManagingState.Common.SuspensionManager.SaveAsync();",
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
  "id"    : "/csharp/2015/01/08/windows-8-development-xaml-controls",
  "title"   : "Windows 8 development: xaml controls",
  "category": "csharp",
  "tags"    : "windows windows phone xaml control",
  "content" : "OverviewWindows 8.1 use the MVVM pattern for their apps. For their View, they use xaml. This post is about the different types of xaml controls. More information can be found here.Examples 1 &lt;!-- Button control with Click event --&gt; 2 &lt;Button x:Name=&quot;myButton&quot; Click=&quot;myButton_Click&quot; /&gt; 3  4 &lt;!-- Acts like an html table --&gt; 5 &lt;Grid /&gt; 6  7 &lt;!-- Holds &lt;ColumnDefinition&gt; controls, lives in Grid --&gt; 8 &lt;Grid.ColumnDefinitions&gt;&lt;/Grid.ColumnDefinitions&gt; 9 10 &lt;!-- Holds &lt;RowDefinition&gt; controls, lives in Grid --&gt;11 &lt;Grid.RowDefinitions&gt;&lt;/Grid.RowDefinitions&gt;12 13 &lt;!-- Rectangle --&gt;14 &lt;Rectangle Fill=&quot;Blue&quot; Height=&quot;100&quot; Width=&quot;100&quot; /&gt;15 16 &lt;!-- acts like a stack of controls (like floating left or top in case of Vertical orientation) --&gt;17 &lt;StackPanel Orientation=&quot;Horizontal&quot; /&gt;18 19 &lt;!-- holds text, if needs to be in Grid iff assigned grid properties --&gt;20 &lt;TextBlock Grid.Row=&quot;0&quot; /&gt;",
  "date"    : "January  8, 2015"
};
data[temp.id] = temp;

temp = {
  "id"    : "/csharp/2015/01/07/windows-8-development-xaml-properties",
  "title"   : "Windows 8 Development: xaml properties",
  "category": "csharp",
  "tags"    : "windows windows phone xaml",
  "content" : "OverviewWindows 8.1 use the MVVM pattern for their apps. For their View, they use xaml, this post is about the different types of xaml properties.More information can be found here.Examples 1 &lt;!-- variable name to be used in code --&gt; 2 &lt;Button x:Name=&quot;myButton&quot; /&gt; 3  4 &lt;!-- background color --&gt; 5 &lt;Button Background=&quot;Blue&quot; /&gt; 6  7 &lt;!-- text on the button --&gt; 8 &lt;Button Content=&quot;This is the text you&#39;ll see&quot; /&gt; 9 10 &lt;!-- font size in pixels --&gt;11 &lt;Button FontSize=&quot;42&quot; /&gt;12 13 &lt;!-- align Left or Right --&gt;14 &lt;Button HorizontalAlighment=&quot;Left&quot; /&gt;15 16 &lt;!-- Margin &lt;left,top,right,bottom&gt; vs css&#39; &lt;top,right,bottom,left&gt; --&gt;17 &lt;Button Margin=&quot;0,20,0,5&quot; /&gt;18 19 &lt;!-- align Top or Down --&gt;20 &lt;Button VerticalAlighment=&quot;Top&quot; /&gt;21 22 &lt;!-- Height and Width in pixels --&gt;23 &lt;Button Height=&quot;100&quot; Width=&quot;100&quot; /&gt;24 25 &lt;!-- text to be displayed --&gt;26 &lt;Label Text=&quot;Hello, XAML!&quot; /&gt;27 28 &lt;!-- text color  --&gt;29 &lt;Label TextColor=&quot;Aqua&quot; /&gt;",
  "date"    : "January  7, 2015"
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