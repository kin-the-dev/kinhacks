// JavaScript Document
$(document).ready(function(e) {
   /* Todo:
 • Merge this with Node.js, almost done
 • Webpages in a database/more editable version
 • Add cookies to track previous commands? (You can press up and down to browse previous commands this session)
*/
   var faviconnumber = 1;
	function favicon() {
		favicon = favicon == 1 ? 2 : 1;
		$('.favicon').attr('href','favicon' + favicon + ".png");
	}
   console.clear();
   var commandlist = [ /*Can be populated with various methods*/
      ["Dortware 1.4.0", "https://www.mediafire.com/file/p4wpnopmw18t2u6/Dortware_1.4.0.zip/file"],
      ["Remix 1.6.3", "https://www.mediafire.com/file/ur4gkg013nsaa08/Remix.zip/file"],
      ["Crystalware Reloaded b8", "https://www.mediafire.com/file/mjanm3lcstzapkt/Crystalware_Reloaded_b8.zip/file"],
	   ["Rise b4.4", "https://www.mediafire.com/file/i4dosarpdvpi5ew/Rise_b4.4.zip/file"],
      ["NEXT PAGE", "do '/crack2'"],
   ];
   var previouscommands = [];
   var currentcommand = 0;
   var pages = [ /*Can be populated with various methods*/
      ["index", "Welcome to Koya.io", "Simply, this is just a sandbox in which to add to; no real point - a couple of features that I plan to add though:", "URL shortner and open tracker, just enter a URL into the command line and press enter and you will get 2 links - 1 which looks like [http://koya.io/XXXXXX](http://koya.io/XXXXXX) and another [http://koya.io/u/XXXXXX](http://koya.io/u/XXXXXX) : they will both forward but the second will show a preview of the full url so they know where you are going.", "You can also save small messages with `/msg <string <160 chars>` and you will get a url like [http://koya.io/XXXXXX](http://koya.io/XXXXXX)","Pressing Ctrl+v will paste the short text or image and you will get a link.", "There will be accounts but likely given out rather than being able to register them whenever, this is a personal site so idk."],
      ["about", "About Koya.io", "Personal power website for Finn 'Koya' Shackleton.", "Will include some features which too are mainly for personal use: Link shortner, image host, pastebin and any sandbox testing", "The colours have been taken from [https://github.com/Poorchop/darktooth-theme-ports/tree/8c852e8edde8df57d831dc8631493b0565fadbbc/hexchat-darktooth](Poorchop's Darktooth HexChat theme)", "In the process of turning the website into a server sided thing, currently what you can read is in the [http://koya.io/scripts.js](JavaScript file)!"],
	  ["connect", "Connect with Koya",
	  "[mailto:_@koya.io](Email _@koya.io)",
	  "[skype:finn.shackleton](Skype)",
	  "[^http://steamcommunity.com/id/bananabutterscotchmaplepancakes](Steam) < Always available",
	  "[^https://codepen.io/OfficialAntarctica](Codepen)",
	  "[^http://everybodyedits.com/profiles/bbmp](Everybody Edits)"]
   ];
   var pageindex = ["index", "about", "connect"];
   var currentpage = "landing";
   var url = "http://koya.io/"
      /*
         Custom Text Syntax
         Links:      
            [URLPATH](NAME) - regular
            [^URLPATH](NAME) - open in new tab
            
         Styles:
            *TEXT* - bold text
            E! - Text is an error/notification
            A! - spaces are converted to non-breaking spaces (it's for ascii art - after all, this is a text based website)
      */

   function init() {
      setInterval(time);
      console.clear();
      console.log(new Date().getTime());
      log("Website", "A! _____ __ _____");
      log("Website", "A!|  |  |__|  _  |");
      log("Website", "A!|    -|  | | | |");
      log("Website", "A!|__|__|__|_| |_|");
      log("Website", '[^http://kinhacks.design/](*kin hacks*)');
      log("Website", "");
      log("Website", "");
	  urlvars();
      log("Website", "Welcome to my website!");
      log("Website", "for info on applying & purchasing my clients type '/apply'");
      log("Website", "for info on downloading cracked clients type '/crack'");
      log("Website", "if you need help contact us with '/contact'");
      log("Website", "view changes with '/changelog'");
      log("Website", "view alt shops with '/alts'");
	  setInterval(favicon,500);
   }

   function urlvars() {
	   var pagelocs = window.location.pathname.replace("/","").split("/");
	   var pageloc = pagelocs[0];
	   console.log(pageloc);
	   //alert();
		if(pageloc != "") {
            if ($.inArray(pageloc, pageindex) >= 0) {
               currentpage = pageloc;
            }
		}
		if(pageloc != "") {
            if ($.inArray(pageloc, pageindex) >= 0) {
               currentpage = pageloc;
               loadpage($.inArray(pageloc, pageindex));
            } else {
               //Un-note next line to show 404 errors with wrong urls
               //log("Client", "404 - The page '" + pageloc + "' does not exist. To "); 
            }
		}
		if(pageloc == "") {
      		log("Client", "What would you like to access?");	
		}
   }
   function getParam(name){
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec (window.location.href);
		if (results == null) {
			return "";
		}
		else  {
			return results[1];
		}
	}

   function log(name, information) {
      var d = new Date();
      var hours = ((d.getHours() < 10) ? "0" : "") + d.getHours();
      var minutes = ((d.getMinutes() < 10) ? "0" : "") + d.getMinutes();
      var seconds = ((d.getSeconds() < 10) ? "0" : "") + d.getSeconds();
      var colour = "whitet";
      var textcolour = "";
      var postcolour = "";

      switch (name[0]) {
         case "!":
            postcolour = " important";
            name = name.substr(1);
            break;
      }
      switch (name) {
         case "Website":
            colour = "redt";
            break;
         case "Server":
            colour = "bluet";
            break;
         case "Client":
            colour = "bluet";
            break;
         case "User":
            colour = "greent";
            postcolour = " selft";
            break;
         case "xyro b1":
            colour = "redt";
            postcolour = " selft";
            break;
         case "liqour":
            colour = "bluet";
            postcolour = " selft";
            break;
         case "crack":
            colour = "creamt";
            postcolour = " selft";
            break;
      }
      if (information[0] == "A" && information[1] == "!") {
         information = information.substr(2);
         information = information.replace(/ /g, '\u00A0');
      }
      if (information[0] == "E" && information[1] == "!") {
         information = information.substr(2);
         postcolour = " important";
      }

      while (information.indexOf("](") >= 0) { //URL parser

         var NAMEregExp = /\(([^)]+)\)/;
         var uname = NAMEregExp.exec(information)[1];

         var URLregExp = /\[([^)]+)\]/;
         var url = URLregExp.exec(information)[1];
         var newpage = false;
         if (url[0] == "^") {
            newpage = true;
            url = url.substr(1);
         }
         var start = information.indexOf("[");
         var end = information.indexOf(")");
         if (newpage) {
            information = information.replace(information.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '" target="_blank">' + uname + '</a>');
         } else {
            information = information.replace(information.substring(start, end + 1), "").splice(start, 0, '<a href="' + url + '">' + uname + '</a>');
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working

      }
      var tobold = true;
      var boldnumber = 0;
      for (var i = 0; i < information.length; i++) {
         if (information[i] == "*" && information[i - 1] != "*" && information[i + 1] != "*") {
            boldnumber++;
         }
      }
      while (information.indexOf("*") >= 0) { //Bold parser
         var pos = information.indexOf("*");
         information = information.replace("*", "");
         if (tobold) {
            information = information.splice(pos, 0, '<b>');
         } else {
            information = information.splice(pos, 0, '</b>');
         }
         tobold = !tobold;
         if (tobold && boldnumber <= 1) {
            break;
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working
      }
      var tounderline = true;
      var underlinenumber = 0;
      for (var i = 0; i < information.length; i++) {
         if (information[i] == "*" && information[i - 1] != "*" && information[i + 1] != "*") {
            underlinenumber++;
         }
      }
      while (information.indexOf("**") >= 0) { //Bold parser
         var pos = information.indexOf("**");
         information = information.replace("**", "");
         if (tounderline) {
            information = information.splice(pos, 0, '<u>');
         } else {
            information = information.splice(pos, 0, '</u>');
         }
         tounderline = !tounderline;
         if (tounderline && underlinenumber <= 1) {
            break;
         }
         //information = '<a href="' + url + '">' + uname + '</a>'; //working
      } /**/
      $(".stream").append('<div class="line">' +
         '<p class="time">[' + hours + ":" + minutes + ":" + seconds + ']</p>' +
         '<p class="name ' + colour + '">' + name + '</p>' +
         '<p class="information' + postcolour + '">' + information + '</p>' +
         '</div>');
      $(document).scrollTop($(document).height() - $(window).height());
   }
	var timestring = "";
   function time() {
      var d = new Date();
      var hours = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      if (hours < 10) {
         hours = "0" + hours;
      }
      if (minutes < 10) {
         minutes = "0" + minutes;
      }
      if (seconds < 10) {
         seconds = "0" + seconds;
      }
	  var temptimestring = "[" + hours + ":" + minutes + ":" + seconds + "]";
	  if (temptimestring != timestring) {
		  timestring = temptimestring;
      	$(".editline .time").text(timestring);
	  }
   }

   var ctrldown = false;
   $(".editline .edit").keydown(function(e) {
      var text = $(".editline .edit").text();
      console.log(e.which);
      if (e.which == 13 && text !== "" && !ctrldown) {
         var commands = text.split(' ');
         var output = "";
         if (commands[0] == "help") {
            text = "/" + text;
         }
         $(".editline .edit").text("");
         log("User", text);

         previouscommands[currentcommand] = text;
         currentcommand = previouscommands.length;
         $(".editline .edit").keydown(35);
         cmd(commands[0], text, commands);
         /*Add mod commands*/
         //modcmd(commands[0], text, commands);
         /*Add mod commands*/

      }
      if (e.which == 38) { //up
         if (currentcommand > 0) {
            currentcommand--;
            $(".editline .edit").text(previouscommands[currentcommand]);
         }
      }
      if (e.which == 40) { //down

         if (currentcommand < previouscommands.length) {
            currentcommand++;
            $(".editline .edit").text(previouscommands[currentcommand]);
         }
      }
   });

   function cmd(command, words, word) {
      switch (word[0]) {
         case "crack":
         case "/crack":
            for (var i = 0; i < commandlist.length; i++) {
               output = commandlist[i][0] + " : " + commandlist[i][1];
               //console.log(command[i][0]);
               log("Client", output);
            }
            break;
		 case "/gl":
			//window.location.href = "http://koya.io" + (currentpage == "landing" ? "" : "/" + currentpage);
			window.history.pushState(currentpage, 'InpagePage', (currentpage == "landing" ? "/" : "/" + currentpage));
			break;
         case "/clear":
            $(".stream").text("");
            break;
         case "/nav":
            if ($.inArray(word[1], pageindex) >= 0) {
               currentpage = word[1];
               log("Website", "You are now in " + currentpage);
               loadpage($.inArray(word[1], pageindex));
            } else {
               log("Client", "'" + word[1] + "' does not exist.");
            }
            break;
         case "":
            $.each(pageindex, function(id, content) {
               log("xyro b1 & liqour", "> dsad");
               log("custom crack", "> dsad");
            });
            break;
         case "/apply":
            if (word.length >= 30000) {
            } else {
               log("xyro b1", "> https://bit.ly/39CtmiM");
               log("liqour", "> https://bit.ly/39CtmiM");
               log("crack", "> https://bit.ly/3sSgmgg")
            }
            break;
         case "/contact":
            if (word.length >= 30000) {
            } else {
               log("Client", "> Email me at kin@kinhacks.design");
               log("Client", "> Join my Guilded server for live support! guilded.gg/kinhacks");
            }
            break;
         case "/davidlopez":
            if (word.length >= 30000) {
            } else {
               log("Client", "https://www.youtube.com/watch?v=j7QI1_CGw5k");
            }
	    break;
	  case "/crack2":
	     if (word.length >= 30000) {
	     } else {
		log("Client", "Azura : https://workupload.com/file/6XVnJVADxSJ password: intentcrack");
		log("Client", "Sigma 4.11 (dev/prem) (no miner) : https://www.mediafire.com/file/xzvvfqg2aqcggnj/Sigma.zip/file");
		log("Client", "ZeroDay b20.1 (mac & windows): https://www.mediafire.com/file/qd7andd9ljh09ac/ZeroDay.zip/file");
		log("Client", "Pulsive b13.7: https://www.mediafire.com/file/k19c1p47v9265s3/pulsive.zip/file");
			    }
			   break;
	  case "/changelog":
	     if (word.length >= 30000) {
	     } else {
		log("Client", "4/2/2021 > Website was released");
		log("Client", "4/3/2021 > Updated website, added more cracked clients and added /contact");
		log("Client", "4/4/2021 > Updated website, cracked newest version of rise & added changelog");
		log("Client", "4/5/2021 > Updated website, added /alts");
			    }
			   break;
	  case "/alts":
	     if (word.length >= 30000) {
	     } else {
		log("Client", "FREE > https://freealts.pw");
		log("Client", "CHEAP & CAUTION > https://alts.lol");
		log("Client", "CHEAP & CAUTION > https://sellix.io/swgold");
		log("Client", "TRUSTFUL > https://fastalts.com/");
		log("Client", "TRUSTFUL > https://shop.thealtening.com/");
		log("Client", "[MESSAGE] Any purchases from the stores with caution are not my responsibility if you get scammed, if you have alt shops or have proved that an alt shop with caution is legit then please message me with '/contact.'");
		log("Client", "[MESSAGE] If you own an alt shop please contact me with '/contact' so you can be on the list or we can be partnered");
			    }
			   break;
         default:
            output = "Unrecognised command '" + word[0] + "'.";
            log("Client", output);
      }
   }

   function loadpage(i) {
      $.each(pages[i], function(id, content) {
         if (content != pageindex[i]) {
            log("Website", content);
         }
      });
   }
   var loginreturn = false;

   function loginemptyreturn() {
      //log("Client", "ER2");
      if (!loginreturn) {
         log("Client", "E![LOGIN] No Return Recieved");
      }
   }
   String.prototype.splice = function(idx, rem, str) {
      return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
   };
   init();
});
