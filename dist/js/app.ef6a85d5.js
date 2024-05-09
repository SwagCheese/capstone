(function(e){function t(t){for(var a,s,r=t[0],l=t[1],c=t[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],a=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=i[0]))}return e}var a={},n={app:0},o=[];function s(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=a,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vuejs-portfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0380":function(e,t,i){},"0da2":function(e,t,i){},"11ad":function(e,t,i){"use strict";i("fb66")},1267:function(e,t,i){"use strict";i("443f")},"14a7":function(e,t,i){"use strict";i("646d")},1516:function(e,t,i){"use strict";i("b6e4")},2307:function(e,t,i){},"23d5":function(e,t,i){"use strict";i("c48c")},"2ecb":function(e,t,i){"use strict";i("639c")},"40ed":function(e,t,i){"use strict";i("f7c7")},"443f":function(e,t,i){},"45d3":function(e,t,i){"use strict";i("2307")},"53dc":function(e,t,i){"use strict";i("0da2")},"56d7":function(e,t,i){"use strict";i.r(t);var a=i("2b0e"),n=i("5f5b"),o=function(){var e=this,t=e._self._c;return t("transition",{staticClass:"wrapper",attrs:{mode:"out-in",name:"fade",tag:"div"}},[t("div",{staticClass:"wrapper",attrs:{id:"app"}},[t("TitlePage",{attrs:{title:"Capstone Website",subtitle:e.user.name,background:"./img/backgrounds/milky_way.jpg",separator:!1}}),t("Profile",{attrs:{content:e.user.description,user:e.user}}),t("TitlePage",{attrs:{title:"Driving Question",subtitle:e.driving_question,background:"./img/camping/night_sky_helm_creek.jpg"}}),t("Skills",{attrs:{skills:e.hobbies,fullPage:!0}}),t("ImageCarousel",{attrs:{images:e.hobbies.images}}),t("Effect",{attrs:{effects:["My hobbies have me to develop a sense of belonging and purpose","I have built self-confidence through my hobbies","My hobbies have provided me with opportunities to learn new skills and grow as a person","Some hobbies have led to long lasting interests and passions","Through clubs, I have formed connections with others who share my hobbies"]}}),t("TitlePage",{attrs:{title:"Potential Future Plans",subtitle:"These are all the career pathways I have considered for my future",background:"./img/backgrounds/northern_lights_banff.jpg"}}),t("CardGrid",{attrs:{cards:e.future}}),t("TitlePage",{attrs:{title:"Mentorship",subtitle:"My experience with my mentor",background:"./img/backgrounds/pump_peak.jpg"}}),t("Profile",{attrs:{content:e.mentor.description,user:e.mentor}}),t("Interview",{attrs:{interview:e.mentor.interview}}),t("TitlePage",{attrs:{title:"Achievements",subtitle:"My academic and personal achievements.",background:"./img/backgrounds/sitting_on_rock.jpg"}}),t("ImageCarousel",{attrs:{images:e.achievements}}),t("TitlePage",{attrs:{title:"Final Decision",subtitle:"My final decision for after high school",background:"./img/backgrounds/future.jpg"}}),t("br"),t("Title",{attrs:{title:"Final Decision",description:"My final decision for after high school"}}),t("DescribedImage",{attrs:{images:["./img/logos/ubc-logo-svg-vector.svg","./img/achievements/UBC_Acceptance.png","./img/future/UBC-Vancouver-campus.jpg","./img/achievements/UBC_Placement_Guarantee.png"],description:"I have chosen to attend the University of British Columbia for a degree in Applied Science (aka Engineering), and will be attending in the fall of 2024. I am excited to explore all that the school has to offer, including the beautiful campus, the amazing extracurriculars, and the large variety of clubs."}}),t("TitlePage",{attrs:{title:"Answer to the Driving Question",subtitle:e.driving_question,background:"./img/backgrounds/panorama_ridge.jpg"}}),t("TitlePage",{attrs:{title:"Extracurriculars have a positive impact on life",subtitle:"<div style='text-align: left'>\n                       <br/>\n                       <p>For the average person, extracurriculars can:</p>\n                       <ul style='line-height:1'>\n                           <li>Help develop a sense of belonging and purpose</li>\n                           <li>Build self-confidence</li>\n                           <li>Provide opportunities for personal growth</li>\n                           <li>Lead to new interests</li>\n                           <li>Help develop new skills</li>\n                           <li>Form connections with others who share their passions</li>\n                           <li>Result in increased motivation</li>\n                           <li>Give a sense of accomplishment</li>\n                       </ul>\n                       <br/>\n                       <p><strong>Overall, its important to remember to make time for the things you enjoy, as they can have many unforeseen benefits in the future.</strong></p>\n                       </div>",background:"./img/backgrounds/panorama_ridge.jpg"}}),t("Footer",{attrs:{user:e.user}})],1)])},s=[],r=function(){var e=this,t=e._self._c;return t("header",{staticClass:"header parallax",style:{backgroundImage:"url("+e.background+")"}},[t("div",{staticClass:"title"},[t("div",{staticClass:"wrapper-title"},[t("AnimateOnVisible",{attrs:{name:"fadeDown",duration:1}},[t("h1",{style:{padding:e.separator?"32px":0}},[e._v(e._s(e.title))])]),e.separator?t("hr"):e._e(),t("AnimateOnVisible",{attrs:{name:"fadeUp",duration:1}},[t("div",{staticClass:"subtitle",domProps:{innerHTML:e._s(e.subtitle.startsWith("<")?e.subtitle:"<p>"+e.subtitle+"</p>")}})])],1)])])},l=[],c={name:"TitlePage",props:{title:String,subtitle:String,background:String,separator:{type:Boolean,default:!0}}},d=c,u=(i("2ecb"),i("2877")),p=Object(u["a"])(d,r,l,!1,null,"7f7a3db5",null),g=p.exports,h=function(){var e=this,t=e._self._c;return t("section",{attrs:{id:"about"}},[t("AnimateOnVisible",{attrs:{name:"fadeDown",duration:1}},[t("Title",{attrs:{title:e.content.title,description:e.content.subtitle}})],1),t("AnimateOnVisible",{attrs:{name:"fadeRight",duration:1}},[t("div",{staticClass:"section-content"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row justify-content-center"},[t("Photo",{attrs:{user:e.user}})],1),t("div",{staticClass:"row justify-content-center",staticStyle:{padding:"0 10vw"}},[t("Presentation",{attrs:{presentation:e.content.presentation}})],1)])])])],1)},m=[],f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"title"},[t("h2",[e._v(e._s(e.title))]),t("div",{staticClass:"wrapper"},[t("div",{staticClass:"text-wrapper"},[e._v(" "+e._s(e.description)+" ")])])])},b=[],v={name:"Title",props:["title","description"]},w=v,y=(i("23d5"),Object(u["a"])(w,f,b,!1,null,"419b580c",null)),k=y.exports,_=function(){var e=this,t=e._self._c;return t("div",{staticClass:"paragraph"},[t("h3",[e._v(e._s(e.presentation.title))]),t("div",{staticClass:"begin"},[e._v(e._s(e.presentation.first))]),t("p",[e._v(e._s(e.presentation.second))])])},I=[],C={name:"Description",props:["presentation"]},j=C,S=(i("1516"),Object(u["a"])(j,_,I,!1,null,"365ebdba",null)),x=S.exports,T=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"photo"},[t("a",[t("img",{attrs:{src:e.user.photo,alt:"photo"}})])])])},P=[],A={name:"Photo",props:["user"]},O=A,M=(i("11ad"),Object(u["a"])(O,T,P,!1,null,"a503ba98",null)),V=M.exports,B={name:"Profile",props:["user","content"],components:{Title:k,Presentation:x,Photo:V}},F=B,H=(i("f5ab"),Object(u["a"])(F,h,m,!1,null,"0be390b1",null)),L=H.exports,D=function(){var e=this,t=e._self._c;return t("section",{style:{height:e.fullPage?"100%":"auto"},attrs:{id:"skills"}},[t("AnimateOnVisible",{attrs:{name:"fadeDown",duration:1}},[t("Title",{attrs:{title:e.skills.title,description:e.skills.description}})],1),t("div",{staticClass:"section-content"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row d-flex flex-wrap align-items-center"},e._l(e.skills.listed,(function(i,a){return t("div",{key:a,staticClass:"col-md-2 m-auto pb-4"},[t("AnimateOnVisible",{attrs:{name:"bounce"}},[t("img",{staticClass:"img-responsive mx-auto d-block",attrs:{id:"imgLogo",role:null==i.popup?"":"button",src:i.image,alt:i.title},on:{click:function(t){null!=i.popup&&e.$bvModal.show("modal-"+i.popup)}}}),t("div",{staticClass:"altCaption text-center",attrs:{id:"divAlt"}},[e._v(e._s(i.title))])])],1)})),0)])]),e._l(e.posts,(function(i,a){return t("b-modal",{key:a,attrs:{id:"modal-"+i.title,title:i.title,"hide-footer":!0}},[t("img",{staticClass:"img-fluid",attrs:{src:i.image,alt:i.title}}),t("p",[e._v(e._s(i.description))])])}))],2)},G=[],N={name:"Skills",components:{Title:k},props:["skills","posts","fullPage"]},E=N,W=(i("66a6"),Object(u["a"])(E,D,G,!1,null,"036c9406",null)),U=W.exports,J=function(){var e=this,t=e._self._c;return t("footer",{staticClass:"footer"},[t("div",[t("font-awesome-icon",{staticClass:"copyright-icon",attrs:{icon:"copyright"}}),e._v(" "+e._s((new Date).getFullYear())+" "+e._s(e.user.name)+" ")],1)])},q=[],R={name:"Footer",props:["user"]},K=R,z=(i("14a7"),Object(u["a"])(K,J,q,!1,null,"fb64b5de",null)),$=z.exports,Y=function(){var e=this,t=e._self._c;return t("AnimateOnVisible",{attrs:{name:"fade",duration:1}},[t("b-carousel",{staticStyle:{background:"black"},attrs:{id:"carousel-1",interval:0,controls:"",indicators:""}},e._l(e.images,(function(i,a){return t("b-carousel-slide",{key:a,staticClass:"carousel-slide",attrs:{"img-height":"50vh","img-width":"100vw","img-src":i.url}},[i.description?t("div",{staticStyle:{"background-color":"dimgrey","border-radius":"10px",padding:"10px","margin-bottom":"5px"}},[t("h1",[e._v(e._s(i.description))])]):e._e()])})),1)],1)},Q=[],X={name:"ImageCarousel",props:["images"]},Z=X,ee=(i("a1ac"),Object(u["a"])(Z,Y,Q,!1,null,"7296ac3a",null)),te=ee.exports,ie=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{margin:"2vh 0"}},[t("b-card-group",{staticClass:"justify-content-center"},e._l(e.cards,(function(i,a){return t("div",{key:a,staticClass:"card-outer",staticStyle:{margin:"2vh 1vw"}},[t("div",{staticClass:"card"},[t("b-card",{staticClass:"front",attrs:{"img-src":i.image,"img-height":426,"img-alt":"Image of"+e.cards.title}},[t("h1",[e._v(e._s(i.title))])]),t("b-card",{staticClass:"back"},[t("p",[e._v(e._s(i.description))])])],1)])})),0)],1)},ae=[],ne={name:"CardGrid",props:["cards"]},oe=ne,se=(i("6dbd"),Object(u["a"])(oe,ie,ae,!1,null,"3df0103e",null)),re=se.exports,le=function(){var e=this,t=e._self._c;return t("AnimateOnVisible",{attrs:{name:"fadeLeft",duration:1}},[t("div",{staticClass:"container-div"},[t("div",e._l(e.images,(function(e,i){return t("b-img",{key:i,staticClass:"image-contained",attrs:{src:e,fluid:"",thumbnail:""}})})),1),t("hr"),t("p",[e._v(e._s(e.description))])])])},ce=[],de={name:"DescribedImage",props:{images:{type:Array<String>String,required:!0},description:{type:String,required:!0}}},ue=de,pe=(i("1267"),Object(u["a"])(ue,le,ce,!1,null,"70afef92",null)),ge=pe.exports,he=function(){var e=this,t=e._self._c;return t("div",{staticClass:"outer"},[t("AnimateOnVisible",{attrs:{name:"fadeLeft",duration:1}},[t("div",{staticClass:"interview"},[t("b-img",{staticClass:"image-contained",attrs:{src:"./img/mentor.jpg"}}),t("div",[t("h1",[e._v("My Interview with Marvin")]),e._l(e.interview,(function(i,a){return t("div",{key:a},[t("h3",[e._v("Q: "+e._s(i.question))]),t("p",[e._v("A: "+e._s(i.answer))])])}))],2)],1)])],1)},me=[],fe={name:"Interview",props:["interview"]},be=fe,ve=(i("45d3"),Object(u["a"])(be,he,me,!1,null,"3e32651a",null)),we=ve.exports,ye=function(){var e=this,t=e._self._c;return t("div",{staticClass:"outer"},[t("AnimateOnVisible",{attrs:{name:"fadeLeft",duration:1}},[t("div",{staticClass:"interview"},[t("div",[t("h1",[e._v("How have my hobbies and extracurriculars affected me?")]),e._l(e.effects,(function(i,a){return t("ul",{key:a},[t("li",[e._v(e._s(i))])])}))],2),t("b-img",{staticClass:"image-contained",attrs:{src:"./img/camping/lost_lake_mountain_vertical.jpg"}})],1)])],1)},ke=[],_e={name:"Effect",props:["effects"]},Ie=_e,Ce=(i("40ed"),Object(u["a"])(Ie,ye,ke,!1,null,"40235f8e",null)),je=Ce.exports,Se={name:"App",components:{Effect:je,Interview:we,CardGrid:re,ImageCarousel:te,TitlePage:g,Profile:L,Skills:U,Footer:$,Title:k,DescribedImage:ge},data:()=>({driving_question:"How do extracurriculars and hobbies impact one's life?",user:{name:"Thomas Harrison",subtitle:"",city:"North Vancouver",photo:"./img/profile.png",description:{title:"About Me",subtitle:"",presentation:{title:"About myself",first:"I was born in Vancouver, and moved to North Vancouver at the age of 3. Later, I attended Dorothy Lynas Elementary School, where, around grade 5, I got hooked on coding simple games and programs on Khan Academy. I made many programs, most notably a 2D platformer and an interactive rubik's cube solving guide. These days, I'm more into cooking and hiking. I've been cooking professionally for the past three years at Scratch Kitchen, and I've been on countless hiking and camping trips. In fact, I have a trip planned for next week, starting on May 19th, where I will be camping near Mount Brunswich with some friends. In addition to these hobbies, I've also been playing Saxophone in the band since fourth grade. I mostly play the Alto Saxophone, but I have recently begun playing the Soprano Saxophone on a few songs as well."}}},mentor:{name:"Marvin Petalver",subtitle:"",city:"North Vancouver",photo:"./img/marvin.jpg",description:{title:"My Mentor",subtitle:"",presentation:{title:"Who is Marvin Petalver?",first:'Marvin is the head chef at my workplace, and has mentored me in many areas of life. He has taught me about many different cooking techniques from prep tasks to baking, as well as various life skills. He has also taught me about the importance of hard work and dedication. He has been a great mentor to me, and I am grateful for all that he has done for me. If Marvin had to give everyone one piece of advice, it would be "Black is always luckier than red".'}},interview:[{question:"Did you have any hobbies back in high school?",answer:"Back in high school, I liked listening to music and playing video games, but apart from that I didn't have anything I was truly passionate about. My love for cooking didn't develop until after I graduated."},{question:"What advice would you give to your past self?",answer:"If I could give my past self any advice, it would be not to worry so much about the future. I spent a lot of time stressing about what I was going to do after high school, and it wasn't until I started working in a kitchen that I found my passion. Sometimes it's better to just go with the flow and see where life takes you."},{question:"What is your favourite dish to cook?",answer:"My favourite dish to cook is a classic carbonara. Carbonara is simple yet delicious, and it's my go-to dish when I want something comforting and satisfying. It's a dish that never fails to impress."},{question:"How did you get into cooking?",answer:"I used to work a lot of different jobs, constantly moving from one to the next, never really finding something that I enjoyed. It wasn't until I started working in a kitchen that I found my passion. I loved the fast-paced environment, the creativity, and the sense of accomplishment that came with creating something delicious. From that moment on, I knew that cooking was what I wanted to do."}]},credits:[{name:"Catherine Yoell",role:"Mother",description:"For supporting me throughout my life, and helping me to succeed in all that I do."},{name:"Kevin Harrison",role:"Father",description:"For supporting me throughout my life, and helping me to succeed in all that I do."},{name:"Marvin Petalver",role:"Mentor",description:"For teaching me about cooking, as well as life skills. He has also taught me about the importance of hard work and dedication (and not to gamble)."}],coding_posts:[{title:"Khan Academy Games",description:"Over the course of a few years, I created many simple games and programs on Khan Academy. During that time I made 2D platformers, shooters, and more. I even made a program dedicated to teaching people to solve a Rubik's Cube! I would attribute my love of coding to Khan Academy, as it was the first place I ever learned to code.",image:"./img/projects/khanacademy.png",link:"https://khanacademy.org/profile/kevintheinspector"},{title:"Neural Network",description:"I created this Neural Network from scratch as a final project for my Computer Programming 12 course. It is able to identify black and white numbers on a 28x28 grid with 95% accuracy. While making this project, I learned the fundamentals of deep artificial neural networks and how they learn using backpropagation.",image:"./img/projects/neural_network.png",link:"https://github.com/SwagCheese/NeuralNetwork"},{title:"Indigenous Plants Website",description:"I made this website as a part of the BC First Peoples 12 Course. The website contains details on plants native to British Colombia, Canada. It includes 10 different pages for plants, each of which has a section for how to grow them, their uses in indigenous cultures, and their impact on the environment.",image:"./img/projects/bcplants.png",link:"http://bcplants.me"},{title:"Sololearn Certificates",description:"Through SoloLearn, I have completed courses on Java, JavaScript, C++, C, Python, and Web Development. I would recommend this website/app to anyone who wants to learn to code, however it is useless unless you work on projects outside of the website.",image:"./img/achievements/sololearn_collage.png",link:"https://www.sololearn.com/en/profile/25653916"},{title:"This Website",description:"I made this website using VueJS and BootstrapVue. I used VueJS to create the components and BootstrapVue to style them. I also used VueJS to create the animations and transitions on the website.",image:"./img/projects/this_website.png",link:""}],future:[{title:"University of British Columbia",description:"The University of British Columbia was my top choice for post-secondary education. I applied for both Applied Science (aka Engineering) and Bachelor of Science programmes.",image:"../img/future/ubc.jpg"},{title:"Simon Fraser University",description:"Simon Fraser University was my backup plan if I did not get accepted to UBC. I applied for the Computer Science program, and was accepted in January 2024.",image:"../img/future/sfu.jpg"},{title:"Gap Year",description:"I would like to travel to many different countries and experience their cultures and environment, but I also want to finish school as quickly as possible. As a result, I have decided not to take a gap year. I will be attending university in the fall of 2024.",image:"../img/future/travel.jpg"},{title:"Chef",description:"While I am passionate about cooking, I do not plan to become a chef. I have worked in a professional kitchen for 3 years, and I have learned enough about the culinary industry to know that being a chef is hard work. I plan to continue cooking, as it is one of my favourite hobbies, but I do not want to make it my career.",image:"../img/future/chef.jpg"},{title:"Musician",description:"While I am passionate about playing the saxophone, I do not plan to make it my career. As a musician, I would likely not make enough money to support myself, and as a result I will keep it as a hobby.",image:"../img/future/charlie_parker.jpg"},{title:"Self Taught Programmer",description:"While I do know a decent amount about programming, I believe that I still have much to learn. Self taught programmers are less likely to get hired than those with a degree, and I believe that a degree is important if I end up pursuing this path. Additionally, workers with a degree get paid more than those without.",image:"../img/future/it.jpg"}],hobbies:{title:"MY HOBBIES, PAST & PRESENT",description:"These are some of the hobbies I have engaged in over the years",images:[{url:"./img/camping/big_agnes_tent_on_seymour.jpg",description:"This photo is from a camping trip I went on with my friends in December 2023. We camped for one night, between the first and second peak of Mount Seymour. Our gear was not the best, and it quickly soaked through, but we still had fun."},{url:"./img/camping/black_tusk.jpg",description:"Here I can be seen hiking with a friend in an area known as the 'Cinder Flats'. The mountain in the background is Black Tusk, a famous dormant volcano in Garibaldi Provincial Park."},{url:"./img/camping/cheakamus_lake_bridge.jpg",description:"Here me and a friend are standing on a bridge over the Cheakamus River. This was taken on the last day of a 3 day through-hike from Garibaldi to Cheakamus Lake."},{url:"./img/camping/helm_creek.jpg",description:"This photo was taken on a camping trip to Helm Creek in September 2023. We arrived at the campsite after 20km of hiking, and enjoyed a refreshing swim in the cold creek."},{url:"./img/cooking/candy_village.jpg",description:"This village, which I created around Christmas in 2022, is made from a sweet cake and dusted it with icing sugar to look like snow. It was made using a specially shaped baking pan."},{url:"./img/cooking/knife_collection.jpg",description:"This is my collection of chef knives. In total, the four knives cost around $600. From left to right, the knives are: an 8 inch santoku, a 10 inch chef knife, a 9 inch chinese cleaver, and an 8 inch chef knife."},{url:"./img/band_concert_10.jpg",description:"This blurry photo was taken at a band concert in grade 10, during which I preformed a solo. I have done at least one solo every year since grade 4."},{url:"./img/peppers/2023_grow_light.jpg",description:"This is the setup I used to grow my peppers in 2023. I used a grow light fixture to grow 15 plants before moving them outside."},{url:"./img/peppers/two_dehydrator_racks.jpg",description:"These dehydrator racks are loaded with red Habaneros and yellow Scotch Bonnets. I grew these both of these chillis in my garden in 2023."},{url:"./img/peppers/2024_grow_setup.jpg",description:"This is what my pepper grow light setup looks like this year. As the weather is becoming warmer, the plants will soon be moved outdoors."},{url:"./img/cube_collection.jpg",description:"Back in grade 10, I was obsessed with Rubik's Cubes and amassed a collection of 22 cubes. While I can still solve the 3x3 cube, my time is nowhere near the 30 seconds it once was."},{url:"./img/chess_vs_me.jpg",description:"This is a photo of me playing chess against myself. I took it in grade 7 as part of a photography project. This led to a brief photography hobby, but I quickly lost interest."}],listed:[{image:"./img/hobby_icons/coding.png",title:"Coding"},{image:"./img/hobby_icons/cooking.png",title:"Cooking"},{image:"./img/hobby_icons/plants.png",title:"Gardening"},{image:"./img/hobby_icons/camping.png",title:"Hiking/Camping"},{image:"./img/hobby_icons/rubiks_cube.png",title:"Rubik's Cubes"},{image:"./img/hobby_icons/saxophone.png",title:"Saxophone"}]},achievements:[{url:"./img/achievements/ccc_honor_roll.jpg",description:"After getting 66/75 points on the 2023 Canadian Computing Competition, I earned a spot on the honor roll. I placed in position 136 out of 6242 competitors."},{url:"./img/achievements/SFU_Acceptance_resized.png",description:"I applied to the Computer Science programme at SFU and was accepted to in January 2024."},{url:"./img/achievements/UBC_Acceptance_resized.png",description:"I applied to both the Applied Science and Bachelor of Science programmes at UBC, and was accepted for Applied Sciences in February 2024."},{url:"./img/achievements/UBC_Placement_Guarantee_resized.png",description:"I have guaranteed second year placement provided that I achieve an 80% average."},{url:"./img/achievements/math_awards.jpg",description:"I have received awards for my performance in various math contests, including two school champion awards and a few certificates of distinction."}],coding_skills:{title:"PROGRAMMING SKILLS",description:"Here are some of the Programming Languages, Frameworks, and Tools that I have learned over the years.",listed:[{image:"./img/logos/java.png",title:"Java",popup:"Neural Network"},{image:"./img/logos/javascript.png",title:"JavaScript",popup:"Khan Academy Games"},{image:"./img/logos/p5.png",title:"p5.JS",popup:"Khan Academy Games"},{image:"./img/logos/nodejs.png",title:"Node.JS"},{image:"./img/logos/arduino.png",title:"Arduino"},{image:"./img/logos/flutter.png",title:"Flutter"},{image:"./img/logos/bash.png",title:"BASH"},{image:"./img/logos/linux.png",title:"GNU/Linux"},{image:"./img/logos/intellij.png",title:"IntelliJ"},{image:"./img/logos/swift.png",title:"Swift"},{image:"./img/logos/azure.png",title:"Microsoft Azure",popup:"Indigenous Plants Website"},{image:"./img/logos/python.png",title:"Python",popup:"Sololearn Certificates"},{image:"./img/logos/octocat.png",title:"Git/Github",popup:"Github"},{image:"./img/logos/vuejs.png",title:"VueJS",popup:"This website"},{image:"./img/logos/c.png",title:"C",popup:"Sololearn Certificates"},{image:"./img/logos/cplusplus.png",title:"C++",popup:"Sololearn Certificates"},{image:"./img/logos/css.png",title:"CSS",popup:"This website"},{image:"./img/logos/html.png",title:"HTML",popup:"This website"}]}})},xe=Se,Te=(i("53dc"),Object(u["a"])(xe,o,s,!1,null,"40187a74",null)),Pe=Te.exports,Ae=function(){var e=this,t=e._self._c;return t("div",[t("transition",{attrs:{name:e.name,appear:e.appear}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"}],style:{animationDuration:e.duration+"s",transitionDuration:e.duration+"s"}},[e._t("default")],2)])],1)},Oe=[];let Me=!1;try{const e=Object.defineProperty({},"passive",{get:()=>Me=!0});window.addEventListener("test",null,e)}catch(We){console.log("Passive not supported")}var Ve={props:{name:String,appear:{type:Boolean,default:!1},offsetTop:{type:Number,default:0},duration:{type:Number,default:1}},data:()=>({isVisible:!1}),methods:{inViewport(){const e=this.$el.getBoundingClientRect();return e.top<=window.innerHeight-this.offsetTop&&e.left<=window.innerWidth},detectVisibility(){this.isVisible=this.inViewport()}},mounted(){this.$nextTick(this.detectVisibility),window.addEventListener("scroll",this.detectVisibility,!!Me&&{passive:!0}),window.addEventListener("resize",this.detectVisibility,!!Me&&{passive:!0}),window.addEventListener("orientationchange",this.detectVisibility,!!Me&&{passive:!0})},destroyed(){window.removeEventListener("scroll",this.detectVisibility),window.removeEventListener("resize",this.detectVisibility),window.removeEventListener("orientationchange",this.detectVisibility)}},Be=Ve,Fe=Object(u["a"])(Be,Ae,Oe,!1,null,null,null),He=Fe.exports,Le=i("7cf2"),De=i("ecee"),Ge=i("c074"),Ne=i("f2d1"),Ee=i("ad3d");i("f9e3"),i("2dd8"),i("b7e3");a["default"].use(n["a"]),a["default"].use(Le["a"]),De["c"].add(Ge["a"],Ne["e"],Ne["a"],Ne["c"],Ne["d"],Ne["b"]),a["default"].component("font-awesome-icon",Ee["a"]),a["default"].component("AnimateOnVisible",He),a["default"].config.productionTip=!1,new a["default"]({render:e=>e(Pe)}).$mount("#app")},"639c":function(e,t,i){},"646d":function(e,t,i){},"66a6":function(e,t,i){"use strict";i("0380")},"6dbd":function(e,t,i){"use strict";i("b745")},"7c83":function(e,t,i){},a1ac:function(e,t,i){"use strict";i("7c83")},a229:function(e,t,i){},b6e4:function(e,t,i){},b745:function(e,t,i){},b7e3:function(e,t,i){},c48c:function(e,t,i){},f5ab:function(e,t,i){"use strict";i("a229")},f7c7:function(e,t,i){},fb66:function(e,t,i){}});
//# sourceMappingURL=app.ef6a85d5.js.map