(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(5),n=s.n(r),i=s(4),d=s.n(i),o=s(6),j=s(2),u=s(0),l=function(e){var t=e.tempInfo,s=Object(c.useState)(""),a=Object(j.a)(s,2),r=a[0],n=a[1],i=t.temp,d=t.humidity,o=t.pressure,l=t.weatherMood,h=t.name,b=t.speed,m=t.country,x=t.sunrise,p=t.sunset;Object(c.useEffect)((function(){var e=new Date;if(l)switch(l){case"Clouds":e.getHours()>O.getHours()&&e.getHours()<g.getHours()?n("wi-night-cloudy"):n("wi-day-cloudy");break;case"Haze":e.getHours()>O.getHours()&&e.getHours()<g.getHours()?n("wi-night-fog"):n("wi-day-cloudy");break;case"Clear":e.getHours()>O.getHours()&&e.getHours()<g.getHours()?n("wi-night-clear"):n("wi-day-cloudy");break;case"Mist":e.getHours()>O.getHours()&&e.getHours()<g.getHours()?n(n("wi-night-cloudy-windy")):n("wi-day-cloudy");break;case"Rain":e.getHours()>O.getHours()&&e.getHours()<g.getHours()?n(n("wi-night-rain")):n("wi-day-rain");break;default:n("wi-stars")}}),[l]);var O=new Date(1e3*p),w="".concat(O.getHours(),":").concat(O.getMinutes()),g=new Date(1e3*x);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("article",{className:"widget",children:[Object(u.jsx)("div",{className:"weatherIcon",children:Object(u.jsx)("i",{className:"wi ".concat(r)})}),Object(u.jsxs)("div",{className:"weatherInfo",children:[Object(u.jsx)("div",{className:"temperature",children:Object(u.jsxs)("span",{children:[i,"\xb0"]})}),Object(u.jsxs)("div",{className:"description",children:[Object(u.jsx)("div",{className:"weatherCondition",children:l}),Object(u.jsxs)("div",{className:"place",children:[h,", ",m]})]})]}),Object(u.jsxs)("div",{className:"date",children:[" ",(new Date).toLocaleString()," "]}),Object(u.jsxs)("div",{className:"extra-temp",children:[Object(u.jsxs)("div",{className:"temp-info-minmax",children:[Object(u.jsxs)("div",{className:"two-sided-section",children:[Object(u.jsx)("p",{children:Object(u.jsx)("i",{className:"wi wi-sunset"})}),Object(u.jsxs)("p",{className:"extra-info-leftside",children:[" ",w," PM",Object(u.jsx)("br",{})," sunset "]})]}),Object(u.jsxs)("div",{className:"two-sided-section",children:[Object(u.jsx)("p",{children:Object(u.jsx)("i",{className:"wi wi-humidity"})}),Object(u.jsxs)("p",{className:"extra-info-leftside",children:[" ",d," ",Object(u.jsx)("br",{})," Humidity"]})]})]}),Object(u.jsxs)("div",{className:"weather-extra-info",children:[Object(u.jsxs)("div",{className:"two-sided-section",children:[Object(u.jsx)("p",{children:Object(u.jsx)("i",{className:"wi wi-rain"})}),Object(u.jsxs)("p",{className:"extra-info-leftside",children:[" ",o," ",Object(u.jsx)("br",{})," pressure"]})]}),Object(u.jsxs)("div",{className:"two-sided-section",children:[Object(u.jsx)("p",{children:Object(u.jsx)("i",{className:"wi wi-strong-wind"})}),Object(u.jsxs)("p",{className:"extra-info-leftside",children:[" ",b," ",Object(u.jsx)("br",{})," speed"]})]})]})]})]})})},h=function(){var e=Object(c.useState)("Ranaghat"),t=Object(j.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)({}),n=Object(j.a)(r,2),i=n[0],h=n[1],b=function(){var e=Object(o.a)(d.a.mark((function e(){var t,c,a,r,n,i,o,j,u,l,b,m,x,p;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(s,"&units=metric&appid=93810d7614bc26803c9e049f7236182d"),e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,r=a.main,n=r.temp,i=r.humidity,o=r.pressure,j=a.weather[0].main,u=a.name,l=a.wind.speed,b=a.sys,m=b.country,x=b.sunset,p=b.sunrise,h({temp:n,humidity:i,pressure:o,weatherMood:j,name:u,speed:l,country:m,sunrise:p,sunset:x}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){document.title="Expert Weather | ".concat(s)}),[s]),Object(c.useEffect)((function(){b()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"wrap",children:Object(u.jsxs)("div",{className:"search",children:[Object(u.jsx)("input",{type:"search",placeholder:"search ...",autoFocus:!0,id:"search",value:s,onChange:function(e){return a(e.target.value)},className:"searchTerm"}),Object(u.jsx)("button",{className:"searchButton",type:"button",onClick:b,children:"Search \ud83d\udd0d"})]})}),Object(u.jsx)(l,{tempInfo:i})]})};var b=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h,{})})};s(13);n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e384c24f.chunk.js.map