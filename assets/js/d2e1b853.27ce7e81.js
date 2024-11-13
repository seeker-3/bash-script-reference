"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[249],{4819:(s,n,e)=>{e.r(n),e.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"running-scripts","title":"Running Scripts","description":"Running Scripts as Files","source":"@site/docs/017-running-scripts.md","sourceDirName":".","slug":"/running-scripts","permalink":"/bash-script-reference/docs/running-scripts","draft":false,"unlisted":false,"editUrl":"https://github.com/seeker-3/bash-script-reference/tree/main/docs/017-running-scripts.md","tags":[],"version":"current","sidebarPosition":17,"frontMatter":{},"sidebar":"referenceSidebar","previous":{"title":"Strict Mode","permalink":"/bash-script-reference/docs/strict-mode"},"next":{"title":"Bonus","permalink":"/bash-script-reference/docs/bonus"}}');var r=e(6070),t=e(5658);const c={},a="Running Scripts",h={},o=[{value:"Running Scripts as Files",id:"running-scripts-as-files",level:2},{value:"Running Scripts as Strings",id:"running-scripts-as-strings",level:2},{value:"Running Script Strings through STDIN",id:"running-script-strings-through-stdin",level:3},{value:"Running Script Strings with <code>bash -c</code>",id:"running-script-strings-with-bash--c",level:3},{value:"Running Script Strings with Process Substitution <code>bash &lt;(...)</code>",id:"running-script-strings-with-process-substitution-bash-",level:3}];function l(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",pre:"pre",...(0,t.R)(),...s.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"running-scripts",children:"Running Scripts"})}),"\n",(0,r.jsx)(n.h2,{id:"running-scripts-as-files",children:"Running Scripts as Files"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bash script.bash\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"chmod u+x script.bash\n./script.bash\n"})}),"\n",(0,r.jsx)(n.h2,{id:"running-scripts-as-strings",children:"Running Scripts as Strings"}),"\n",(0,r.jsx)(n.h3,{id:"running-script-strings-through-stdin",children:"Running Script Strings through STDIN"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bash <script.bash\necho 'echo hello world!' | bash # hello world\nbash <<<'echo hello world!' # hello world\ncat script.bash | bash\ncurl -fsSL https://example.com/script.bash | bash\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"running-script-strings-with-bash--c",children:["Running Script Strings with ",(0,r.jsx)(n.code,{children:"bash -c"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'bash -c "echo Hello world!"\nbash -c "$(curl -fsSL https://example.com/script.bash)"\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"running-script-strings-with-process-substitution-bash-",children:["Running Script Strings with Process Substitution ",(0,r.jsx)(n.code,{children:"bash <(...)"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bash <(cat script.bash)\nbash <(curl -fsSL https://example.com/script.bash)\n"})})]})}function u(s={}){const{wrapper:n}={...(0,t.R)(),...s.components};return n?(0,r.jsx)(n,{...s,children:(0,r.jsx)(l,{...s})}):l(s)}},5658:(s,n,e)=>{e.d(n,{R:()=>c,x:()=>a});var i=e(758);const r={},t=i.createContext(r);function c(s){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof s?s(n):{...n,...s}}),[n,s])}function a(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:c(s.components),i.createElement(t.Provider,{value:n},s.children)}}}]);