"use strict";(self.webpackChunkbash_script_reference=self.webpackChunkbash_script_reference||[]).push([[174],{7523:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>t});const a=JSON.parse('{"id":"arrays","title":"Arrays","description":"Declaring Arrays ARRAY=(...)","source":"@site/docs/004-arrays.md","sourceDirName":".","slug":"/arrays","permalink":"/bash-script-reference/docs/arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/seeker-3/bash-script-reference/tree/main/docs/004-arrays.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"referenceSidebar","previous":{"title":"Strings","permalink":"/bash-script-reference/docs/strings"},"next":{"title":"Associative Arrays","permalink":"/bash-script-reference/docs/associative-arrays"}}');var s=n(6070),i=n(5658);const l={},c="Arrays",o={},t=[{value:"Declaring Arrays <code>ARRAY=(...)</code>",id:"declaring-arrays-array",level:2},{value:"Indexing Arrays <code>${ARRAY[i]}</code>",id:"indexing-arrays-arrayi",level:2},{value:"Array Expansion to Separate Strings <code>${ARRAY[@]}</code>",id:"array-expansion-to-separate-strings-array",level:2},{value:"Array Expansion to a Single String <code>${ARRAY[*]}</code>",id:"array-expansion-to-a-single-string-array",level:2},{value:"Array Keys <code>${!ARRAY[@]}</code>",id:"array-keys-array",level:2},{value:"Array Length <code>#</code>",id:"array-length-",level:2},{value:"Array Concatenation <code>ARRAY2=(&quot;${ARRAY[@]}&quot; &quot;${ARRAY[@]}&quot;)</code>",id:"array-concatenation-array2array-array",level:2},{value:"Array Slices <code>${ARRAY[@]:start:length}</code>",id:"array-slices-arraystartlength",level:2},{value:"Array Iteration <code>for ... in ${ARRAY[@]}</code>",id:"array-iteration-for--in-array",level:2},{value:"Splitting Strings into Arrays",id:"splitting-strings-into-arrays",level:2},{value:"Practical Uses of Arrays",id:"practical-uses-of-arrays",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"arrays",children:"Arrays"})}),"\n",(0,s.jsxs)(r.h2,{id:"declaring-arrays-array",children:["Declaring Arrays ",(0,s.jsx)(r.code,{children:"ARRAY=(...)"})]}),"\n",(0,s.jsx)(r.p,{children:"Arrays in bash are defined by using parenthesis and elements are delimited by whitespace. Arrays in bash cannot be multi-dimensional."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"ARRAY=(1 hello 3 world)\n\n# or multiline\nARRAY=(\n  1\n  hello\n  3\n  world\n)\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"indexing-arrays-arrayi",children:["Indexing Arrays ",(0,s.jsx)(r.code,{children:"${ARRAY[i]}"})]}),"\n",(0,s.jsx)(r.p,{children:"Arrays are zero indexed and can be accessed like this and support negative indexing."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'ARRAY=(1 hello 3 world)\necho "${ARRAY[0]}"  # 1\necho "${ARRAY[1]}"  # hello\necho "${ARRAY[-1]}" # world\n'})}),"\n",(0,s.jsx)(r.p,{children:"Set an element in an array like this."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'ARRAY[0]=2\necho "${ARRAY[0]}" # 2\n'})}),"\n",(0,s.jsxs)(r.h2,{id:"array-expansion-to-separate-strings-array",children:["Array Expansion to Separate Strings ",(0,s.jsx)(r.code,{children:"${ARRAY[@]}"})]}),"\n",(0,s.jsxs)(r.p,{children:["To get the whole array, use the ",(0,s.jsx)(r.code,{children:"@"})," symbol. Referencing the array by itself will only return the first element."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"ARRAY=(1 hello 3 world)\necho \"${ARRAY[@]}\" # '1' 'hello' '3' 'world'\necho \"$ARRAY\"      # 1\n"})}),"\n",(0,s.jsx)(r.p,{children:"If you do not quote the array, the individual elements will be expanded (not recommended)."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"ARRAY=(1 'hello world' 3 world)\necho \"${ARRAY[@]}\" # '1' 'hello world' '3' 'world'\necho ${ARRAY[@]}   # '1' 'hello' 'world' '3' 'world'\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"array-expansion-to-a-single-string-array",children:["Array Expansion to a Single String ",(0,s.jsx)(r.code,{children:"${ARRAY[*]}"})]}),"\n",(0,s.jsxs)(r.p,{children:["Convert the array to a string with the elements separated by spaces using the ",(0,s.jsx)(r.code,{children:"*"})," symbol."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"ARRAY=(1 'hello world' 3 world)\necho \"${ARRAY[*]}\" # '1 hello 3 world'\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"array-keys-array",children:["Array Keys ",(0,s.jsx)(r.code,{children:"${!ARRAY[@]}"})]}),"\n",(0,s.jsxs)(r.p,{children:["Get the keys of an array using the ",(0,s.jsx)(r.code,{children:"!"})," symbol."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"ARRAY=(1 'hello world' 3 world)\necho \"${!ARRAY[@]}\" # 0 1 2 3\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"array-length-",children:["Array Length ",(0,s.jsx)(r.code,{children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["Get the length of an array using the ",(0,s.jsx)(r.code,{children:"#"})," symbol."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"ARRAY=(1 'hello world' 3 world)\necho \"${#ARRAY[@]}\" # 4\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"array-concatenation-array2array-array",children:["Array Concatenation ",(0,s.jsx)(r.code,{children:'ARRAY2=("${ARRAY[@]}" "${ARRAY[@]}")'})]}),"\n",(0,s.jsx)(r.p,{children:"Concatenate arrays by spreading them them."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"ARRAY=(1 hello 3 world)\nARRAY2=(\"${ARRAY[@]}\" x y \"${ARRAY[@]}\")\necho \"${ARRAY[@]}\" # '1' 'hello' '3' 'world' 'x' 'y' '1' 'hello' '3' 'world'\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"array-slices-arraystartlength",children:["Array Slices ",(0,s.jsx)(r.code,{children:"${ARRAY[@]:start:length}"})]}),"\n",(0,s.jsxs)(r.p,{children:["Slice arrays by using the syntax ",(0,s.jsx)(r.code,{children:"${ARRAY[@]:start:length}"})," or ",(0,s.jsx)(r.code,{children:"${ARRAY[@]:start}"}),". Array slices ",(0,s.jsx)(r.strong,{children:"do not"})," support negative indexing."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"ARRAY=(0 1 2 3 4 5 6 7 8 9)\necho \"${ARRAY[@]:1:3}\" # '1' '2' '3'\necho \"${ARRAY[@]:5}\"   # '5' '6' '7' '8' '9'\n\n# Or as a string\necho \"${ARRAY[*]:1:3}\" # '1 2 3'\necho \"${ARRAY[*]:5}\"   # '5 6 7 8 9'\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"array-iteration-for--in-array",children:["Array Iteration ",(0,s.jsx)(r.code,{children:"for ... in ${ARRAY[@]}"})]}),"\n",(0,s.jsxs)(r.p,{children:["Iterate over an array using the ",(0,s.jsx)(r.code,{children:"@"})," symbol."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'for x in "${ARRAY[@]}"; do\n  echo "$x"\ndone\n'})}),"\n",(0,s.jsx)(r.h2,{id:"splitting-strings-into-arrays",children:"Splitting Strings into Arrays"}),"\n",(0,s.jsxs)(r.p,{children:["Split a string into an array using ",(0,s.jsx)(r.code,{children:"read"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"STRING='1 2 3'\nread -ra ARRAY <<<\"$STRING\"\necho \"${ARRAY[@]}\" # '1' '2' '3'\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Split lines into an array using ",(0,s.jsx)(r.code,{children:"mapfile"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"FILE='1\n2\n3'\nmapfile -t ARRAY <<<\"$FILE\"\necho \"${ARRAY[@]}\" # '1' '2' '3'\n"})}),"\n",(0,s.jsx)(r.h2,{id:"practical-uses-of-arrays",children:"Practical Uses of Arrays"}),"\n",(0,s.jsx)(r.p,{children:"Bash arrays can either be used to hold a command's arguments or a command plus its arguments. Here are some examples:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'ARGS=(1 2 3)\n\necho "${ARGS[@]}" # 1 2 3\n'})}),"\n",(0,s.jsx)(r.p,{children:"or"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'CMD=(echo 1 2 3)\n\n"${CMD[@]}" # 1 2 3\n'})}),"\n",(0,s.jsxs)(r.p,{children:["You could also do this with an ",(0,s.jsx)(r.code,{children:"alias"})," but I typically prefer arrays when scripting and aliases for my rc files."]}),"\n",(0,s.jsxs)(r.p,{children:["If you have a command that takes many options, using an array can be a much tidier way to write it since the only way to break up a long command is to use the ",(0,s.jsx)(r.code,{children:"\\"})," to escape newlines."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'COMMAND_ARGS=(\n  -x thing1\n  -x thing2\n  -x thing3\n  -y other-thing\n  --option1\n  --option2\n)\n\ncommand "${COMMAND_ARGS[@]}"\n'})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5658:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>c});var a=n(758);const s={},i=a.createContext(s);function l(e){const r=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:r},e.children)}}}]);