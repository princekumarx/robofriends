(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,a,n){},15:function(e,a,n){},16:function(e,a,n){},18:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(7),o=n.n(i),l=(n(14),n(1)),s=n(2),c=n(4),m=n(3),u=n(5);n(15);var h=function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:" bg-light-green green tc  dib grow br3 pa2 ma2"},r.a.createElement("img",{className:"bb b--white-90 ma1",src:"https://robohash.org/".concat(t,"/bgset_bg1/?size=200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,"  ",n)))},d=function(e){var a=e.robots;return r.a.createElement("div",null,a.map((function(e,n){return r.a.createElement(h,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})})))},b=function(e){var a=e.holdup;return r.a.createElement("div",{className:" pa2"},r.a.createElement("input",{onChange:a,className:" pa3 ba bg-light-green",type:"search",placeholder:"serch robots"}))},f=(n(16),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),p=(n(17),function(e){function a(e){var n;return Object(l.a)(this,a),(n=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={hasError:!1},n}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0}),console.log("error ".concat(e," info ").concat(a))}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"oops! there is something wrong"):this.props.children}}]),a}(t.Component)),g=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(m.a)(a).call(this))).Holdup=function(a){e.setState({searchfield:a.target.value})},e.state={robots:f,searchfield:""},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLocaleLowerCase().includes(e.state.searchfield.toLocaleLowerCase())}));return r.a.createElement("div",{className:"t"},r.a.createElement("h1",{className:"f2  "},"RoboFriends"),r.a.createElement(b,{holdup:this.Holdup}),r.a.createElement(p,null,r.a.createElement(d,{robots:a})))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,n){e.exports=n(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.26b551e4.chunk.js.map