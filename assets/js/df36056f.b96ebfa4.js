"use strict";(self.webpackChunkneuroreality_edu=self.webpackChunkneuroreality_edu||[]).push([[143],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),g=o,u=p["".concat(s,".").concat(g)]||p[g]||m[g]||r;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6982:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540);const o=function(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1931:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(6540),o=n(8555);const r=function(){const e=(0,a.useContext)(o.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=n(53);const l="tabItem_vU9c",s="tabItemActive_cw6a";const d=function(e){const{lazy:t,block:n,defaultValue:o,values:d,groupId:c,className:p}=e,m=a.Children.toArray(e.children),g=d??m.map((e=>({value:e.props.value,label:e.props.label}))),u=o??m.find((e=>e.props.default))?.props.value,{tabGroupChoices:y,setTabGroupChoices:h}=r(),[v,f]=(0,a.useState)(u),N=[];if(null!=c){const e=y[c];null!=e&&e!==v&&g.some((t=>t.value===e))&&f(e)}const b=e=>{const t=e.currentTarget,n=N.indexOf(t),a=g[n].value;f(a),null!=c&&(h(c,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:o}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:i}=window;return t>=0&&o<=i&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},w=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=N.indexOf(e.target)+1;t=N[n]||N[0];break}case"ArrowLeft":{const n=N.indexOf(e.target)-1;t=N[n]||N[N.length-1];break}}t?.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},p)},g.map((e=>{let{value:t,label:n}=e;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.A)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:e=>N.push(e),onKeyDown:w,onFocus:b,onClick:b},n??t)}))),t?(0,a.cloneElement)(m.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},8555:(e,t,n)=>{n.d(t,{A:()=>a});const a=(0,n(6540).createContext)(void 0)},4499:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(8168),o=(n(6540),n(5680)),r=n(1931),i=n(6982);const l={sidebar_position:3},s=void 0,d={unversionedId:"Robotic-Wikis/Kinova-Gen3/Running the Files",id:"Robotic-Wikis/Kinova-Gen3/Running the Files",isDocsHomePage:!1,title:"Running the Files",description:"1. The Config File",source:"@site/docs/Robotic-Wikis/Kinova-Gen3/Running the Files.md",sourceDirName:"Robotic-Wikis/Kinova-Gen3",slug:"/Robotic-Wikis/Kinova-Gen3/Running the Files",permalink:"/HFI-wiki/docs/Robotic-Wikis/Kinova-Gen3/Running the Files",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Robotic-Wikis/Kinova-Gen3/Running the Files.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/HFI-wiki/docs/Robotic-Wikis/Kinova-Gen3/Getting Started"},next:{title:"Twist Controller",permalink:"/HFI-wiki/docs/Robotic-Wikis/Kinova-Gen3/Controllers/Twist Controller"}},c=[{value:"1. The Config File",id:"1-the-config-file",children:[]},{value:"2. The Driver File",id:"2-the-driver-file",children:[]},{value:"3. The Keyboard Teleoperation File",id:"3-the-keyboard-teleoperation-file",children:[]}],p={toc:c},m="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"1-the-config-file"},"1. The Config File"),(0,o.yg)("p",null,"The config is a .yaml file which the driver uses to configure the robot and its motions.The description of its contents are explained below."),(0,o.yg)(r.A,{groupId:"config-kinova-yaml",mdxType:"Tabs"},(0,o.yg)(i.A,{value:"connection",label:"Connection Configs",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"IP: # The IPv4 address of the Robot\nusername: # The user name for connecting to the robot (default is admin)\npassword: # The password for the given username to connect to the robot (default is admin)\n")),(0,o.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"If configurations such as safety boundaries are modified for a certain user, it needs to be ensured that the relevant user's name is password is set before the connection to the robot is established.")))),(0,o.yg)(i.A,{value:"modes",label:"Mode Configs",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'mode: #Desired Mode from valid_modes\nvalid_modes: ["default", "sim", "test"]\n\n# "default" mode refers to using robot at its full capablity\n# "sim"     mode refers to using simulation\n# "test"    mode refers to using the robot at a lower speed\n')),(0,o.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"Except for default, not all modes are available for each controller. Please refer to the individual controller's documentation for verification if the given controller is supported in the desired mode. "))),(0,o.yg)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"DO NOT modify the valid_modes values. There is an assertion checker in ",(0,o.yg)("em",{parentName:"p"},"utilities.py")," that verifies if the desired mode is a valid mode. ")))),(0,o.yg)(i.A,{value:"controller",label:"Controller Configs",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'controller: #Desired controller from valid_controllers\nvalid_controllers: ["default", "twist", "joint_velocity","null_space","QP"]     \n\n# default           controller is the ROS2 joint_trajectory controller\n# twist             controller is the end-effector twist controller\n# joint_velocity    controller is the joint velocity controller\n# null_space        controller is the null space controller\n# QP                controller is the quadratic programming controller\n')),(0,o.yg)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"DO NOT modify the valid_controllers values. There is an assertion checker in ",(0,o.yg)("em",{parentName:"p"},"utilities.py")," that verifies if the desired controller is a valid controller. ")))),(0,o.yg)(i.A,{value:"topic",label:"Topic Configs",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"topic: #The topic name the driver will subscribe to\n")),(0,o.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"Topic names start with a ",(0,o.yg)("em",{parentName:"p"},'"/"')," and the fist character must be a letter. No special characters are allowed."))),(0,o.yg)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"Some topic names are reserved internally for the Kinova Gen3 by ROS2 and will be flagged as invalid. The list of such topic names are"),(0,o.yg)("pre",{parentName:"div"},(0,o.yg)("code",{parentName:"pre"},'"/rosout",\n"/rosout_agg",\n"/clicked_point",\n"/dynamic_joint_states",\n"/fault_controller/transition_event",\n"/goal_pose",\n"/initialpose",\n"/joint_state_broadcaster/transition_event",\n"/joint_states",\n"/joint_trajectory_controller/controller_state",\n"/joint_trajectory_controller/joint_trajectory",\n"/joint_trajectory_controller/state",\n"/joint_trajectory_controller/transition_event",\n"/parameter_events",\n"/robot_description",\n"/robotiq_gripper_controller/transition_event",\n"/tf",\n"/tf_static",\n"/twist_controller/commands",\n"/twist_controller/transition_event"\n')))))),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"2-the-driver-file"},"2. The Driver File"),(0,o.yg)("p",null,"The driver file subscribes to the topic passed in the ",(0,o.yg)("em",{parentName:"p"},"config.yaml")," file. The message on this topic is the desired pose in the co-ordinate frame of the robot's base-link. The expected message type on this topic is ",(0,o.yg)("strong",{parentName:"p"},"PoseStamped")," which upon subscription is passed to the selected controller to move the robot to the desired pose."),(0,o.yg)(r.A,{groupId:"driver-kinova",mdxType:"Tabs"},(0,o.yg)(i.A,{value:"high-level",label:"High Level Servoing Mode",mdxType:"TabItem"},(0,o.yg)("p",null,"To run the robot in High Level Servoing mode"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"source ~/ros2_ws/install/setup.bash\nros2 run kinova_driver driver.py\n"))),(0,o.yg)(i.A,{value:"low-level",label:"Low Level Servoing Mode",mdxType:"TabItem"},(0,o.yg)("p",null,"To run the robot in Low Level Servoing mode"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"source ~/ros2_ws/install/setup.bash\nros2 run kinova_driver driver.py\n")),(0,o.yg)("p",null,"and in a new terminal"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"ros2 launch kortex_bringup gen3.launch.py   robot_ip:=<ip-address-of-robot>\n"))),(0,o.yg)(i.A,{value:"simulation",label:"Simulation Mode",mdxType:"TabItem"},(0,o.yg)("p",null,"To run the robot in simulation mode"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"source ~/ros2_ws/install/setup.bash\nros2 run kinova_driver driver.py\n")),(0,o.yg)("p",null,"and in a new terminal"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"ros2 launch kortex_bringup gen3.launch.py   robot_ip:=XXX.XXX.X.XX  use_fake_hardware:=true\n")))),(0,o.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"Remember to check whether the mode is supported by your desired controller."))),(0,o.yg)("br",null),(0,o.yg)("h3",{id:"3-the-keyboard-teleoperation-file"},"3. The Keyboard Teleoperation File"),(0,o.yg)("p",null,"To move the robot around using the keyboard, we have provided the ",(0,o.yg)("em",{parentName:"p"},"teleop.py"),"  file. To run this file, you need to be the sudo user to allow access to keyboard inputs."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo su\nsource /home/<your-username>/.bashrc\nsource /home/<your-username>/ros2_ws/install/setup.bash\nros2 run kinova_driver teleop.py\n")),(0,o.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"You may need to install the ",(0,o.yg)("em",{parentName:"p"},"keyboard")," library if you have not already done so. "),(0,o.yg)("pre",{parentName:"div"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo su\npip3 install keyboard\n")))),(0,o.yg)("br",null),(0,o.yg)("p",null,"You may now use the keyboard for teleoperating the robot. The teleoperation key legend is as follows (all with respect to baselink's co-ordinate frame)"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Key"),(0,o.yg)("th",{parentName:"tr",align:null},"Action"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"w"),(0,o.yg)("td",{parentName:"tr",align:null},"move along +ve x-axis")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"x"),(0,o.yg)("td",{parentName:"tr",align:null},"move along -ve x-axis")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"d"),(0,o.yg)("td",{parentName:"tr",align:null},"move along +ve y-axis")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"a"),(0,o.yg)("td",{parentName:"tr",align:null},"move along -ve y-axis")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"q"),(0,o.yg)("td",{parentName:"tr",align:null},"move along +ve z-axis")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"z"),(0,o.yg)("td",{parentName:"tr",align:null},"move along -ve z-axis")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"c"),(0,o.yg)("td",{parentName:"tr",align:null},"rotate gripper to face down")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"v"),(0,o.yg)("td",{parentName:"tr",align:null},"rotate gripper to face sideways")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"s"),(0,o.yg)("td",{parentName:"tr",align:null},"stop execution of teleop node")))),(0,o.yg)("hr",null),(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"The ",(0,o.yg)("em",{parentName:"p"},"utilities.py")," file is there to avoid code repeatability and is only used by other files for the said purpose. The contents of the controller files are discussed in their respective sections, however, some useful tips if you are planning to create a new script for interfacing with the robot and desire to use the High Level Servoing mode are"),(0,o.yg)("p",{parentName:"div"},"1) You can use the utilities.py file directly or refer to it for creating a connection with the robot's base."),(0,o.yg)("p",{parentName:"div"},"2) The Kinova Gen3 API is not suited for python 3.10 and higher. Unfortunately python 3.10 is the default python version for ROS2 Humble. The work around for this is your kortex libraries must be imported after the following lines"),(0,o.yg)("pre",{parentName:"div"},(0,o.yg)("code",{parentName:"pre",className:"language-python"},'import sys\nif sys.version_info.major == 3 and sys.version_info.minor >= 10:\n    import collections\n    setattr(collections, "MutableMapping", collections.abc.MutableMapping)\n    setattr(collections,"MutableSequence", collections.abc.MutableSequence)\n\n\n#from kortex_api....\n')))),(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("h5",{id:"authors"},"Authors"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/s-m-asjad.png"},"Syed Mohammad Asjad")," "),(0,o.yg)("br",null),(0,o.yg)("h5",{id:"issues"},"Issues?"),(0,o.yg)("p",null,"Please report issues to ",(0,o.yg)("em",{parentName:"p"},(0,o.yg)("a",{parentName:"em",href:"mailto:hfisoftware@case.edu"},"hfisoftware@case.edu"))))}g.isMDXComponent=!0},53:(e,t,n)=>{function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}n.d(t,{A:()=>o});const o=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}}}]);