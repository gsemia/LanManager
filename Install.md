1. Having a look https://github.com/kyubisation/LanManager
2. Wonder how it builds
3. Find https://github.com/kyubisation/LanManager/blob/master/LanManager.sln and RAGE!!! Its Visual Studio Express 2012 for Web
4. Give in to the Rage and go to http://www.microsoft.com/de-ch/download/details.aspx?id=30669 to download Visual Studio Express 2012 for Web
5. Install tha shit Visual Studio Express 2012 for Web and WALK AWAY. Return to Point 38 later.. Or Stay and continue with Point 6 if you want to suffer.
6. It takes AGES to install!
7. Seriously.. how long can this take ?
8. Its still at Microsoft .Net Framework 4.5
9. Wasn't this already installed?
10. Visual Studio... STAAAAPPPP!
11. going back to point 5 to write some skipping advice
12. going to drink some ice tea
13. ITS STILL AT THAT FRAMEWORKS LANGUAGEPACK!!!
14. Ok Looking promissing.. its now installing the visual studio itself.. or at least a minimum version of it.
15. more shit being installed
16. oh look the real visual studio is being installed
18. this almost looks like 50% now.
19. Who told this thing to be german ??
20. Woops .. i did. I am gona have a bad time.
21. Weeee.. Web Deploy.. Whats this?
22. New stuff is being put on to my computer
23. OMG IIS!! STAAAAPPP. need Apache
24. ok.. ASP.NET crap comming in.
25. I could have gone to get a pizza during that time now.
26. I wonder what their excuse is for holding me back from coding for so long.
27. Eclipse installation is way faster. ok.. but then you tinker around with modules for ages.
28. SQL Server number#234 is being installed (or at least feels like it)
29. looks like 90% now. I hope this thing does not need a reboot. i would hate it for that.
30. still some more SQL Servers.
31. Some Helpfull helpers :)
32. More language packs
33. AND WE ARE BACK TO .NET Language Packs.
34. ok it looks like 100%
35. and its done!!!
36. Registration needed? Whats this NSA Crap ? why do they need to know my name ?
37. I give in. Registering Visual Studio.
38. downloading the GIT Plugin from http://visualstudiogallery.msdn.microsoft.com/abafc7d6-dcaa-40f4-8a5e-d6724bdb980c
39. This thing tells me that i need an update. it shows me a fancy unclickable, unselectable url.. WAY TO GO MICROSOFT... WAY TO GO!! Why wasn't this installed in the first place?
40. downloading the update 2 from here: http://support.microsoft.com/kb/2797912/de .. as usual.. to many links on the KB Article. can't find the download link.
41. found it .. it was almost at the top. For your convinience: http://www.microsoft.com/de-de/download/details.aspx?id=39305
42. Patching Visual Studio with update 2. I hope this includes Update 1 :)
43. It seams like it dows and we are back at waiting for the installation
44. ...
45. ...
...
..
.
..
...
51. and we are back in business. I think this installed like 20 language packs and 50 .Net Versions again. Not to mention the SQL Servers.
52. Trying again to install the Git plugin
53. now we are talking
54. clicking "Verbindung mit Team Foundation Server herstellen"
55. on the other side of my big screen.. click "Local Git Repositories -> Clone 
56. using git@github.com:gsemia/LanManager.git
57. using a better local folder path
58. of corse... this git plugin does not support this kind of link.
59 . using https: https://github.com/gsemia/LanManager.git
60. and its working
61. click on the LanManager.git Repo
62. click open
63. it warns me that it requires a 3rd-party git commandline tool.
64. well clicking install twice. and downloading msysgitVS.exe
65. Installation is painless
66. BAAAHH... no it isn't :)
67. installing Webplattform-installer 4.5
68. proceeding
69. progressing
70. at least its doing something
71. uh.. fancy advertisement for Windows Azure.
72. restarting visual studio just to be on the save side.
73. go back to the repository
74. go to branches
75. create a branch of the Master Branch.
76. open the project by opening the sln file
77. its missing the typescript plugin
78. downloading it from http://www.microsoft.com/en-us/download/details.aspx?id=34790
79. it tells me to stop the visual studio.. good tool..
80. its installing.
81. wow... THIS SMARTASS THINGY NOW NEEDS A REBOOT WHAT DID IT DO?? CHANGE SYSTEM DRIVERS???
82. Clicking "no" as every goot IT Guy usualy does. This crap works anyway.. hopefully.. *crossing fingers* *nottellingthecustomer*
83. Starting visual studio again.
84. open Lan Manager again
85. and at this point contact your best friend who actually knows what to do.
86. He will tell you to use XAMPP and Netbeans for PHP
87. getting XAMPP from http://www.apachefriends.org/de/xampp-windows.html#628 now. and install it.
88. Get the mysql Workbench http://dev.mysql.com/downloads/tools/workbench/ and install it.
89. Get NetBeans from <GOOGLE IT YOURSELF you lacy bastard>
90. Get the nuGet Plugin for Visal Studio
91. Get Composer and configure it in NetBeans
92. Build the Project in Visual Studio at least once
93. Copy the whole app folder to your apache root (or do it as i did and checkout the whole stuff there anyway)
94. load the CREATE.sql into the mysql server which should run on localhost: 3306 with username "root" with no password.
95. Put in some more MAGIC (Aka: Help from the original Author)
96. And it Works! http://localhost/LanManager/app/index.php