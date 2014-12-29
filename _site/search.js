var data = {};
var temp;

temp = {
  "id"    : "/javascript/2014/12/29/ecmascript-6-feature-template-strings",
  "title"   : "EcmaScript 6 feature: template strings",
  "category": "javascript",
  "tags"    : "es6",
  "content" : "OverviewJavascript’s new version (EcmaScript 6) has some amazing new features. The one discussed in this post is template strings.Template strings are similar to string interpolation in swift and python. It uses backticks instead of double or single quotes.More information can be found here.Examples 1 var first = &quot;Jake&quot; 2   , last = &quot;Daisy&quot;; 3  4 var name1 = &quot;My name is &quot; + first + &quot; &quot; + last; 5 var name2 = `My name is ${first} ${second}`; 6 // &quot;My name is Jake Daisy&quot; 7  8 var test1 = `Hello`; 9 // &#39;&quot;Hello&quot;&#39;10 11 var test2 = 512   , test3 = 6;13 14 `test2 + test3 = ${ test2 + test3 }`15 // &quot;test2 + test3 = 11&quot;"
};
data[temp.id] = temp;

temp = {
  "id"    : "/javascript/2014/12/29/ecmascript-6-feature-class",
  "title"   : "EcmaScript 6 feature: class",
  "category": "javascript",
  "tags"    : "es6",
  "content" : "OverviewJavascript’s new version (EcmaScript 6) has some amazing new features. The one discussed in this post is the new class syntax.More information can be found here.Details 1 // OLD CLASS 2 var MyObject = function(params){ 3   this.p1 = params.p1; 4   this.p2 = params.p2; 5 }; 6 // I will go over the new string interpolation in another post 7 MyObject.prototype.summary = function(){ 8   return &quot;p1:&quot; + this.p1 + &quot; p2:&quot; + this.p2; 9 };10 11 12 // NEW CLASS13 class MyObject {14   constructor(p1, p2){15     this.p1 = p1;16     this.p2 = p2;17   }18   summary() {19     return &quot;p1:&quot; + this.p1 + &quot; p2:&quot; + this.p2;20   }21 }Examples 1 // Getters and Setters 2 class Person { 3   constructor(name){ 4     this._name = name; 5   } 6   get name(){ 7     return this._name; 8   } 9   set name(newName){10     if (newName) {11       this._name = newName;12     }13   }14 }15 16 let guy = new Person(&quot;Tom&quot;);17 console.log(guy.name); // Tom18 guy.name = &quot;Steve&quot;;19 console.log(guy.name); // Steve20 21 22 // Inheritance23 class Dev extends Person {24   static allDevs = []25   constructor(name, preferredLang) {26     super(name);27     this.lang = preferredLang;28     Dev.allDevs.push(name);29   }30   static numDevs() {31     return Dev.allDevs.length;32   }33 }"
};
data[temp.id] = temp;

temp = {
  "id"    : "/javascript/2014/12/29/ecmascript-6-feature-arrow",
  "title"   : "EcmaScript 6 feature: arrow",
  "category": "javascript",
  "tags"    : "es6",
  "content" : "OverviewJavascript’s new version (EcmaScript 6) has some amazing new features. The one discussed in this post is the arrow symbol =&gt;.The arrow symbol is used to create shorter functions and to fix the scoped this. More information can be found here.DetailsThe arrow symbol can help shorten functions. 1 var dogs = [ 2   &quot;Jake&quot;, 3   &quot;Daisy&quot;, 4   &quot;Honey&quot; 5 ]; 6  7 var length1 = dogs.map(function(s){ return s.length }); 8 // [4, 5, 5] 9 10 var length2 = dogs.map( s =&gt; s.length );11 // [4, 5, 5]It can also help with the scoped this variable. 1 // Before 1 2 function Dog1(){ 3   var that = this; // We have to cache &#39;this&#39; 4   that.treats = 0; 5   setInterval(function eatTreat(){ 6     that.treats++; 7   }, 1000); 8 } 9 10 // Before 211 function Dog2(){12   this.treats = 0;13   setInterval(function eatTreat(){14     this.treats++;15   }.bind(this), 1000); // We have to bind &#39;this&#39; to the function16 }17 18 // Now19 function Dog3(){20   this.treats = 0;21   setInterval(() =&gt; { // &#39;this&#39; refers to Dog3&#39;s &#39;this&#39;22     this.treats++;23   }, 1000);24 }Examples 1 var biggestNum = (a, b) =&gt; (a &gt; b)? a : b; 2 biggestNum(4, 5);   // 5 3 biggestNum(10, 2);  // 10 4  5  6 var myList = [&quot;Nami&quot;, &quot;Luffy&quot;, &quot;Zoro&quot;]; 7 var findIdx = (lst, val) =&gt; { 8   for(var i=0; i &lt; lst.length; ++i){ 9     if (lst[i] == val) return i;10   }11   return -1;12 }13 findIdx(myList, &quot;Luffy&quot;); // 114 findIdx(myList, &quot;Robin&quot;); // -1"
};
data[temp.id] = temp;

temp = {
  "id"    : "/other/2014/12/24/my-first-post",
  "title"   : "My first post",
  "category": "other",
  "tags"    : "",
  "content" : "It took me a while to get this blog up because I was trying to understand how Jekyll works.The site built fine locally but it didn’t seem to want to build on github. The reason was that I was trying to make a blog folder and put all the Jekyll files in there.Long story short, put your jekyll files in the root of the repo so that github doesn’t spam you with build fail emails."
};
data[temp.id] = temp;

temp = {
  "id"    : "/swift/2014/12/24/ios-uitableview-and-uisearchbar",
  "title"   : "iOS: UITableView and UISearchBar",
  "category": "swift",
  "tags"    : "ios ui",
  "content" : "OverviewWhile working on an iOS app, I needed to have a TableView that was searchable. After looking it up, I found out thatI could use a Table View and add a Search Bar and Search Display.ControlsTableView will display the data, we just have to supply the functions that tell the table view what to show.The Search Bar doesn’t do anything except alert us when the search query was changed… We have to implementthe search functionality ourselves. The search display is the dropdown that appears with suggestions once you type somethingin the search bar.DirectionsFirst we drag and drop a UIViewController to our storyboard.Then we drag and drop a Table View inside that ViewController and a Search Bar and Search Display above the TableView.Note: Search Bar and Search Display is 1 control.Now we need the implementation. Create a file that is a subclass of UIViewController and add the following protocols.1 class YourViewController: UIViewController, UITableViewDataSource, UITableViewDelegate, UISearchBarDelegate, UISearchDisplayDelegateWe have to implement the following functions now. 1 // How many rows to display 2 func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -&gt; Int 3  4 // What to display for a particular row 5 func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -&gt; UITableViewCell 6  7 // How many sections (only 1 in our case) 8 func numberOfSectionsInTableView(tableView: UITableView) -&gt; Int { 9 10 // the searchString has changed, we have to update our array11 func searchDisplayController(controller: UISearchDisplayController, shouldReloadTableForSearchString searchString: String!) -&gt; Bool 12 13 // the searchString has changed, we have to update our array14 func searchDisplayController(controller: UISearchDisplayController!, shouldReloadTableForSearchScope searchOption: Int) -&gt; BoolTableView functions 1 func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -&gt; Int { 2   if (tableView == self.searchDisplayController?.searchResultsTableView) { 3       return searchResults.count 4   } else { 5       return data.count 6   } 7 } 8  9 func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -&gt; UITableViewCell {10   let cell = myTableView.dequeueReusableCellWithIdentifier(&quot;cell&quot;) as UITableViewCell11         12   if (tableView == self.searchDisplayController?.searchResultsTableView) {13       cell.textLabel?.text = searchResults[indexPath.row]14   } else {15       cell.textLabel?.text = data[indexPath.row]16   }17   return cell18 }19 20 func numberOfSectionsInTableView(tableView: UITableView) -&gt; Int {21   return 122 }There are 2 important things to note.       On line 2 and 12, we’re checking if the tableView that is callingthis function is the searchDisplay tableView or not. We need to check to be able to return the right data.        On line 10, we’re using myTableView. The searchDisplay TableView doesn’t actually have a prototype cell so we’re usingthe one from our main tableView.  SearchBar functions 1 func searchDisplayController(controller: UISearchDisplayController, shouldReloadTableForSearchString searchString: String!) -&gt; Bool { 2   filterContentForSearchText(searchString) 3   return true 4 } 5  6 func searchDisplayController(controller: UISearchDisplayController!, shouldReloadTableForSearchScope searchOption: Int) -&gt; Bool { 7   filterContentForSearchText(self.searchDisplayController!.searchBar.text) 8   return true 9 }10 11 func filterContentForSearchText(searchText:String) {12     let temp = data.reduce([], combine: +) // to flatten array13     searchResults = temp.filter {14         var ret = false15         if $0.lowercaseString.rangeOfString(searchText) != nil {16             ret = true17         }18         return ret19     }20 }"
};
data[temp.id] = temp;


// init lunr
var idx = lunr(function () {
  this.field('title', 10);
  this.field('tags');
  this.field('category');
  this.field('content');
})
// add each document to be index
for(var index in data) {
  idx.add(data[index]);
  delete data[index].content;
}

function search() {
  var result = idx.search($("#search input").val());
  var list = [];
  if(result && result.length > 0) {
    for(var i=0; i < result.length; ++i){
      list.push(data[result[i].ref]);
    }
  }
  searchList = list;
}

$(function() {
  $("#search input").keyup(function(e) {
    search();
  });
});