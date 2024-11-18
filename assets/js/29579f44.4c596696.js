"use strict";(self.webpackChunkbash_script_reference=self.webpackChunkbash_script_reference||[]).push([[105],{5050:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"referenceSidebar":[{"type":"link","label":"Reference Intro","href":"/bash-script-reference/docs/intro","docId":"intro","unlisted":false},{"type":"link","label":"Your First Bash Script","href":"/bash-script-reference/docs/hello-world","docId":"hello-world","unlisted":false},{"type":"link","label":"Basics","href":"/bash-script-reference/docs/basics","docId":"basics","unlisted":false},{"type":"link","label":"Strings","href":"/bash-script-reference/docs/strings","docId":"strings","unlisted":false},{"type":"link","label":"Arrays","href":"/bash-script-reference/docs/arrays","docId":"arrays","unlisted":false},{"type":"link","label":"Associative Arrays","href":"/bash-script-reference/docs/associative-arrays","docId":"associative-arrays","unlisted":false},{"type":"link","label":"Functions","href":"/bash-script-reference/docs/functions","docId":"functions","unlisted":false},{"type":"link","label":"Word Splitting (Biggest Footgun)","href":"/bash-script-reference/docs/word-splitting","docId":"word-splitting","unlisted":false},{"type":"link","label":"Special Parameters $@","href":"/bash-script-reference/docs/special-parameters","docId":"special-parameters","unlisted":false},{"type":"link","label":"Pipes","href":"/bash-script-reference/docs/pipes","docId":"pipes","unlisted":false},{"type":"link","label":"Redirects","href":"/bash-script-reference/docs/redirects","docId":"redirects","unlisted":false},{"type":"link","label":"Subshells","href":"/bash-script-reference/docs/subshells","docId":"subshells","unlisted":false},{"type":"link","label":"Globbing","href":"/bash-script-reference/docs/globbing","docId":"globbing","unlisted":false},{"type":"link","label":"Control Flow","href":"/bash-script-reference/docs/control-flow","docId":"control-flow","unlisted":false},{"type":"link","label":"Conditionals","href":"/bash-script-reference/docs/conditionals","docId":"conditionals","unlisted":false},{"type":"link","label":"Arithmetic ((x+=y))","href":"/bash-script-reference/docs/arithmetic","docId":"arithmetic","unlisted":false},{"type":"link","label":"Parameter Expansions ${VAR...}","href":"/bash-script-reference/docs/parameter-expansions","docId":"parameter-expansions","unlisted":false},{"type":"link","label":"Brace Expansions","href":"/bash-script-reference/docs/brace-expansions","docId":"brace-expansions","unlisted":false},{"type":"link","label":"Tilde Expansion ~","href":"/bash-script-reference/docs/tilde-expansions","docId":"tilde-expansions","unlisted":false},{"type":"link","label":"Strict Mode","href":"/bash-script-reference/docs/strict-mode","docId":"strict-mode","unlisted":false},{"type":"link","label":"Running Scripts","href":"/bash-script-reference/docs/running-scripts","docId":"running-scripts","unlisted":false},{"type":"link","label":"Bonus","href":"/bash-script-reference/docs/bonus","docId":"bonus","unlisted":false},{"type":"link","label":"Full Reference","href":"/bash-script-reference/docs/full-reference","docId":"full-reference","unlisted":false}]},"docs":{"arithmetic":{"id":"arithmetic","title":"Arithmetic ((x+=y))","description":"Bash only supports integer arithmetic. The (( )) construct is used to evaluate arithmetic expressions. The $ is not required to use variables inside the expression.","sidebar":"referenceSidebar"},"arrays":{"id":"arrays","title":"Arrays","description":"Declaring Arrays ARRAY=(...)","sidebar":"referenceSidebar"},"associative-arrays":{"id":"associative-arrays","title":"Associative Arrays","description":"Associative arrays are similar to arrays except they use keys instead of indexes so nearly all the same array operations apply. However, associative arrays do not support an easy way to concatenated/union them together like arrays, and reading them from a string is not as straight forward. Like Arrays, associative arrays cannot be multidimensional.","sidebar":"referenceSidebar"},"basics":{"id":"basics","title":"Basics","description":"Comments","sidebar":"referenceSidebar"},"bonus":{"id":"bonus","title":"Bonus","description":"Adding Color to Your Bash Scripts","sidebar":"referenceSidebar"},"brace-expansions":{"id":"brace-expansions","title":"Brace Expansions","description":"Ranges {start..stop..step}","sidebar":"referenceSidebar"},"conditionals":{"id":"conditionals","title":"Conditionals","description":"(())","sidebar":"referenceSidebar"},"control-flow":{"id":"control-flow","title":"Control Flow","description":"Control flow in bash works very differently to other languages. Instead of branching on true or false, bash will branch on the exit status of a command. A successful command with an exit status of 0 is true, and a failed command with a non-zero exit status of 1..255 is false.","sidebar":"referenceSidebar"},"full-reference":{"id":"full-reference","title":"Full Reference","description":"- Full Reference","sidebar":"referenceSidebar"},"functions":{"id":"functions","title":"Functions","description":"Functions are a way to group commands together and reuse them. They behave like commands and can take arguments and return exit codes.","sidebar":"referenceSidebar"},"globbing":{"id":"globbing","title":"Globbing","description":"Globbing is a basic pattern matching feature that lets you match strings or files.","sidebar":"referenceSidebar"},"hello-world":{"id":"hello-world","title":"Your First Bash Script","description":"This file will walk you through the basics of what you need to know to get started.","sidebar":"referenceSidebar"},"intro":{"id":"intro","title":"Reference Intro","description":"Welcome! This is a reference guide for bash script. I think bash is a very fun and powerful tool with a lot of hidden gems, but it is a difficult language to learn with the current resources available due to them being either inaccessible or incomplete. My goal with the guide is to make bash more accessible and list all of the essential features as well as some personal tips and best practices.","sidebar":"referenceSidebar"},"parameter-expansions":{"id":"parameter-expansions","title":"Parameter Expansions ${VAR...}","description":"- ${parameter:-word} default value","sidebar":"referenceSidebar"},"pipes":{"id":"pipes","title":"Pipes","description":"Pipes are an extremely powerful feature of the shell. They allow you to take the output of one command and use it as the input to another command. This allows you to chain commands together to perform complex operations.","sidebar":"referenceSidebar"},"redirects":{"id":"redirects","title":"Redirects","description":"Read a File into STDIN <","sidebar":"referenceSidebar"},"running-scripts":{"id":"running-scripts","title":"Running Scripts","description":"Hashbang/Shebang #!","sidebar":"referenceSidebar"},"special-parameters":{"id":"special-parameters","title":"Special Parameters $@","description":"Special parameters are readonly variables that are set by the shell. They are used to read positional arguments to the script and to introspect processes.","sidebar":"referenceSidebar"},"strict-mode":{"id":"strict-mode","title":"Strict Mode","description":"","sidebar":"referenceSidebar"},"strings":{"id":"strings","title":"Strings","description":"The only primitive datatype in bash is a string (numbers are really just strings!). There are several different ways to define strings.","sidebar":"referenceSidebar"},"subshells":{"id":"subshells","title":"Subshells","description":"Subshells ()","sidebar":"referenceSidebar"},"tilde-expansions":{"id":"tilde-expansions","title":"Tilde Expansion ~","description":"When place unquoted and at the beginning of a string, ~ will expand to the home directory of the current user.","sidebar":"referenceSidebar"},"word-splitting":{"id":"word-splitting","title":"Word Splitting (Biggest Footgun)","description":"","sidebar":"referenceSidebar"}}}}')}}]);