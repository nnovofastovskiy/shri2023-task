(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7251:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6715)}])},6715:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return o}});var l=t(1527),s=t(959);function a(e){let i=(0,s.useRef)(),{onSize:t}=e;return(0,s.useEffect)(()=>{let e=i.current.offsetWidth,l=i.current.offsetHeight;t&&t({width:e,height:l})}),(0,l.jsx)("li",{ref:i,className:"event"+(e.slim?" event_slim":""),children:(0,l.jsxs)("button",{className:"event__button",children:[(0,l.jsx)("span",{className:"event__icon event__icon_".concat(e.icon),role:"img","aria-label":e.iconLabel}),(0,l.jsx)("h4",{className:"event__title",children:e.title}),e.subtitle&&(0,l.jsx)("span",{className:"event__subtitle",children:e.subtitle})]})})}let n={all:{title:"Все",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]},kitchen:{title:"Кухня",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}]},hall:{title:"Зал",items:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}]},lights:{title:"Лампочки",items:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}]},cameras:{title:"Камеры",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]}};for(let e=0;e<6;++e)n.all.items=n.all.items.concat(n.all.items);let c=Object.keys(n);function o(){let e=(0,s.useRef)(),i=(0,s.useRef)(!1),[t,o]=(0,s.useState)(""),[r,h]=(0,s.useState)(!1);(0,s.useEffect)(()=>{t||i.current||(i.current=!0,o(new URLSearchParams(location.search).get("tab")||"all"))},[t]);let d=[],_=e=>{d.push(e)};return(0,s.useEffect)(()=>{let i=d.reduce((e,i)=>e+i.width,0);d.reduce((e,i)=>e+i.height,0);let t=i>e.current.offsetWidth;t!==r&&h(t)},[r,d]),(0,l.jsxs)("main",{className:"main",children:[(0,l.jsxs)("section",{className:"section main__general",children:[(0,l.jsx)("h2",{className:"section__title section__title-header section__main-title",children:"Главное"}),(0,l.jsxs)("div",{className:"hero-dashboard",children:[(0,l.jsxs)("div",{className:"hero-dashboard__primary",children:[(0,l.jsx)("h3",{className:"hero-dashboard__title",children:"Привет, Геннадий!"}),(0,l.jsx)("p",{className:"hero-dashboard__subtitle",children:"Двери и окна закрыты, сигнализация включена."}),(0,l.jsxs)("ul",{className:"hero-dashboard__info",children:[(0,l.jsxs)("li",{className:"hero-dashboard__item",children:[(0,l.jsx)("div",{className:"hero-dashboard__item-title",children:"Дома"}),(0,l.jsxs)("div",{className:"hero-dashboard__item-details",children:["+23",(0,l.jsx)("span",{className:"a11y-hidden",children:"\xb0"})]})]}),(0,l.jsxs)("li",{className:"hero-dashboard__item",children:[(0,l.jsx)("div",{className:"hero-dashboard__item-title",children:"За окном"}),(0,l.jsxs)("div",{className:"hero-dashboard__item-details",children:["+19",(0,l.jsx)("span",{className:"a11y-hidden",children:"\xb0"}),(0,l.jsx)("div",{className:"hero-dashboard__icon hero-dashboard__icon_rain",role:"img","aria-label":"Дождь"})]})]})]})]}),(0,l.jsxs)("ul",{className:"hero-dashboard__schedule",children:[(0,l.jsx)(a,{icon:"temp",iconLabel:"Температура",title:"Philips Cooler",subtitle:"Начнет охлаждать в 16:30"}),(0,l.jsx)(a,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"}),(0,l.jsx)(a,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})]})]})]}),(0,l.jsxs)("section",{className:"section main__scripts",children:[(0,l.jsx)("h2",{className:"section__title section__title-header",children:"Избранные сценарии"}),(0,l.jsxs)("ul",{className:"event-grid",children:[(0,l.jsx)(a,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Выключить весь свет в доме и во дворе"}),(0,l.jsx)(a,{slim:!0,icon:"schedule",iconLabel:"Расписание",title:"Я ухожу"}),(0,l.jsx)(a,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Включить свет в коридоре"}),(0,l.jsx)(a,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Набрать горячую ванну",subtitle:"Начнётся в 18:00"}),(0,l.jsx)(a,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Сделать пол тёплым во всей квартире"})]})]}),(0,l.jsxs)("section",{className:"section main__devices",children:[(0,l.jsxs)("div",{className:"section__title",children:[(0,l.jsx)("h2",{className:"section__title-header",children:"Избранные устройства"}),(0,l.jsx)("select",{className:"section__select",defaultValue:"all",onInput:e=>{o(e.target.value)},children:c.map(e=>(0,l.jsx)("option",{value:e,children:n[e].title},e))}),(0,l.jsx)("ul",{role:"tablist",className:"section__tabs",children:c.map(e=>(0,l.jsx)("li",{role:"tab","aria-selected":e===t?"true":"false",tabIndex:e===t?"0":void 0,className:"section__tab"+(e===t?" section__tab_active":""),id:"tab_".concat(e),"aria-controls":"panel_".concat(e),onClick:()=>o(e),children:n[e].title},e))})]}),(0,l.jsxs)("div",{className:"section__panel-wrapper",ref:e,children:[c.map(e=>(0,l.jsx)("div",{role:"tabpanel",className:"section__panel"+(e===t?"":" section__panel_hidden"),"aria-hidden":e===t?"false":"true",id:"panel_".concat(e),"aria-labelledby":"tab_".concat(e),children:(0,l.jsx)("ul",{className:"section__panel-list",children:n[e].items.map((e,i)=>(0,l.jsx)(a,{...e,onSize:_},i))})},e)),r&&(0,l.jsx)("div",{className:"section__arrow",onClick:()=>{let i=e.current.querySelector(".section__panel:not(.section__panel_hidden)");i&&i.scrollTo({left:i.scrollLeft+400,behavior:"smooth"})}})]})]})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7251)}),_N_E=e.O()}]);