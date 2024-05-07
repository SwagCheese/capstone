<template>
    <transition class="wrapper" mode="out-in" name="fade" tag="div">
        <div id="app" class="wrapper">
            <!-- Main Title -->
            <TitlePage title="Capstone Website" :subtitle="user.name" background="./img/backgrounds/milky_way.jpg" :separator="false"/>
            
            <!-- About Me -->
            <Profile :content="user.description" :user="user"/>
            
            <!-- Driving Question -->
            <TitlePage title="Driving Question" :subtitle="driving_question" background="./img/camping/night_sky_helm_creek.jpg"/>
            
            <!-- My Hobbies -->
            <Skills :skills="hobbies" :fullPage="true"/>
            
            <!-- Hobby Picture Slider -->
            <ImageCarousel :images="hobbies.images"/>
            
            <!-- Coding Languages -->
<!--            <Skills :skills="coding_skills" :posts="coding_posts"/>-->
            <!-- Coding Projects -->
<!--            <CollapseCard :posts="coding_posts"/>-->
            
            <!-- Future Goals -->
            <TitlePage title="Potential Future Plans" subtitle="These are all the career pathways I have considered for my future" background="./img/backgrounds/northern_lights_banff.jpg"/>
            
            <!-- Timeline of my future -->
            <CardGrid :cards="future" />
            
            <!-- Mentorship -->
            <TitlePage title="Mentorship" subtitle="My experience with my mentor" background="./img/backgrounds/pump_peak.jpg"/>
            
            <!-- Profile of my mentor -->
            <Profile :content="mentor.description" :user="mentor"/>
            
            <!-- Mentor Interview -->
            <Interview :interview="mentor.interview"/>
            
            <!-- Achievements -->
            <TitlePage title="Achievements" subtitle="My academic and personal achievements." background="./img/backgrounds/sitting_on_rock.jpg"/>
  
            <!-- Achievements Picture Slider -->
            <ImageCarousel :images="achievements"/>
            
            <!-- Final Decision for After High School -->
            <TitlePage title="Final Decision" subtitle="My final decision for after high school" background="./img/backgrounds/future.jpg"/>
            <br>
            <Title title="Final Decision" description="My final decision for after high school"/>
            <DescribedImage
                    :images='["./img/logos/ubc-logo-svg-vector.svg", "./img/achievements/UBC_Acceptance.png", "./img/future/UBC-Vancouver-campus.jpg", "./img/achievements/UBC_Placement_Guarantee.png"]'
                    description="I have chosen to attend the University of British Columbia for a degree in Applied Science (aka Engineering), and will be attending in the fall of 2024. I am excited to explore all that the school has to offer, including the beautiful campus, the amazing extracurriculars, and the large variety of clubs."
            />
            
            <!-- Answer to Driving Question -->
            <TitlePage title="Answer to the Driving Question" :subtitle="driving_question" background="./img/backgrounds/panorama_ridge.jpg"/>
            <TitlePage title="Extracurriculars have a positive impact on life"
                       subtitle="<div style='text-align: left'>
                       <br/>
                       <p>For the average person, extracurriculars can:</p>
                       <ul style='line-height:1'>
                           <li>Help develop a sense of belonging and purpose</li>
                           <li>Build self-confidence</li>
                           <li>Provide opportunities for personal growth</li>
                           <li>Lead to new interests</li>
                           <li>Help develop new skills</li>
                           <li>Form connections with others who share their passions</li>
                           <li>Result in increased motivation</li>
                           <li>Give a sense of accomplishment</li>
                       </ul>
                       <br/>
                       <p><strong>Overall, its important to remember to make time for the things you enjoy, as they can have many unforeseen benefits in the future.</strong></p>
                       </div>"
                        background="./img/backgrounds/panorama_ridge.jpg"/>
            <!-- Credits and Thanks -->
<!--            <Credits :people="credits"/>-->
            <!-- Footer -->
            <Footer :user="user"/>
        </div>
    </transition>
</template>

<script>
import TitlePage from "./components/TitlePage.vue";
import Profile from "./components/Profile.vue";
import Skills from "./components/Skills.vue";
import Footer from "./components/Footer.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";
import CardGrid from "@/components/CardGrid.vue";
import Title from "@/components/Title.vue";
import DescribedImage from "@/components/DescribedImage.vue";
import Interview from "@/components/Interview.vue";

export default {
    name: "App",
    components: {
        Interview,
        CardGrid,
        ImageCarousel,
        TitlePage,
        Profile,
        Skills,
        Footer,
        Title,
        DescribedImage
    },
    data: () => ({
        driving_question: "How do extracurriculars and hobbies impact one's life?",
        user: {
            name: "Thomas Harrison",
            subtitle: "",
            city: "North Vancouver",
            photo: "./img/profile.png",
            description: {
                title: "About Me",
                subtitle: "",
                presentation: {
                    title: "About myself",
                    first:
                        "I was born in Vancouver, and moved to North Vancouver at the age of 3. " +
                        "Later, I attended Dorothy Lynas Elementary School, where, around grade 5, I got hooked on coding simple games and programs on Khan Academy. " +
                        "I made many programs, most notably a 2D platformer and an interactive rubik's cube solving guide. " +
                        "These days, I'm more into cooking and hiking. " +
                        "I've been cooking professionally for the past three years at Scratch Kitchen, and I've been on countless hiking and camping trips. " +
                        "In fact, I have a trip planned for next week, starting on May 19th, where I will be camping near Mount Brunswich with some friends. " +
                        "In addition to these hobbies, I've also been playing Saxophone in the band since fourth grade. " +
                        "I mostly play the Alto Saxophone, but I have recently begun playing the Soprano Saxophone on a few songs as well.",
                }
            }
        },
        mentor: {
            name: "Marvin Petalver",
            subtitle: "",
            city: "North Vancouver",
            photo: "./img/mentor.jpg", //todo change this
            description: {
                title: "My Mentor",
                subtitle: "",
                presentation: {
                    title: "Who is Marvin Petalver?",
                    first: "Marvin is the head chef at my workplace, and has mentored me in many areas of life. He has taught me about many different cooking techniques from prep tasks to baking, as well as various life skills. He has also taught me about the importance of hard work and dedication. He has been a great mentor to me, and I am grateful for all that he has done for me. If Marvin had to give everyone one piece of advice, it would be \"Black is always luckier than red\".",
                }
            },
            interview: [
                {
                    question: "Did you have any hobbies back in high school?",
                    answer: "Back in high school, I liked listening to music and playing video games, but apart from that I didn't have anything I was truly passionate about. My love for cooking didn't develop until after I graduated."
                },
                {
                    question: "What advice would you give to your past self?",
                    answer: "If I could give my past self any advice, it would be not to worry so much about the future. I spent a lot of time stressing about what I was going to do after high school, and it wasn't until I started working in a kitchen that I found my passion. Sometimes it's better to just go with the flow and see where life takes you."
                },
                {
                    question: "What is your favourite dish to cook?",
                    answer: "My favourite dish to cook is a classic carbonara. Carbonara is simple yet delicious, and it's my go-to dish when I want something comforting and satisfying. It's a dish that never fails to impress."
                },
                {
                    question: "How did you get into cooking?",
                    answer: "I used to work a lot of different jobs, constantly moving from one to the next, never really finding something that I enjoyed. It wasn't until I started working in a kitchen that I found my passion. I loved the fast-paced environment, the creativity, and the sense of accomplishment that came with creating something delicious. From that moment on, I knew that cooking was what I wanted to do."
                }
            ]
        },
        credits: [
            {
                name: "Catherine Yoell",
                role: "Mother",
                description: "For supporting me throughout my life, and helping me to succeed in all that I do."
            },
            {
                name: "Kevin Harrison",
                role: "Father",
                description: "For supporting me throughout my life, and helping me to succeed in all that I do."
            },
            {
                name: "Marvin Petalver",
                role: "Mentor",
                description: "For teaching me about cooking, as well as life skills. He has also taught me about the importance of hard work and dedication (and not to gamble)."
            },
        ],
        coding_posts: [
            {
                title: "Khan Academy Games",
                description: "Over the course of a few years, I created many simple games and programs on Khan Academy. During that time I made 2D platformers, shooters, and more. I even made a program dedicated to teaching people to solve a Rubik's Cube! I would attribute my love of coding to Khan Academy, as it was the first place I ever learned to code.",
                image: "./img/projects/khanacademy.png",
                link: "https://khanacademy.org/profile/kevintheinspector"
            },
            {
                title: "Neural Network",
                description: "I created this Neural Network from scratch as a final project for my Computer Programming 12 course. It is able to identify black and white numbers on a 28x28 grid with 95% accuracy. While making this project, I learned the fundamentals of deep artificial neural networks and how they learn using backpropagation.",
                image: "./img/projects/neural_network.png",
                link: "https://github.com/SwagCheese/NeuralNetwork"
            },
            {
                title: "Indigenous Plants Website",
                description: "I made this website as a part of the BC First Peoples 12 Course. The website contains details on plants native to British Colombia, Canada. It includes 10 different pages for plants, each of which has a section for how to grow them, their uses in indigenous cultures, and their impact on the environment.",
                image: "./img/projects/bcplants.png",
                link: "http://bcplants.me"
            },
            {
                title: "Sololearn Certificates",
                description: "Through SoloLearn, I have completed courses on Java, JavaScript, C++, C, Python, and Web Development. I would recommend this website/app to anyone who wants to learn to code, however it is useless unless you work on projects outside of the website.",
                image: "./img/achievements/sololearn_collage.png",
                link: "https://www.sololearn.com/en/profile/25653916"
            },
            {
                title: "This Website",
                description: "I made this website using VueJS and BootstrapVue. I used VueJS to create the components and BootstrapVue to style them. I also used VueJS to create the animations and transitions on the website.",
                image: "./img/projects/this_website.png",
                link: ""
            }
        ],
        future: [
            {
                title: "University of British Columbia",
                description: "The University of British Columbia was my top choice for post-secondary education. I applied for both Applied Science (aka Engineering) and Bachelor of Science programmes.",
                image: "../img/future/ubc.jpg",
            },
            {
                title: "Simon Fraser University",
                description: "Simon Fraser University was my backup plan if I did not get accepted to UBC. I applied for the Computer Science program, and was accepted in January 2024.",
                image: "../img/future/sfu.jpg",
            },
            {
                title: "Gap Year",
                description: "I would like to travel to many different countries and experience their cultures and environment, but I also want to finish school as quickly as possible. As a result, I have decided not to take a gap year. I will be attending university in the fall of 2024.",
                image: "../img/future/travel.jpg"
            },
            {
                title: "Chef",
                description: "While I am passionate about cooking, I do not plan to become a chef. I have worked in a professional kitchen for 3 years, and I have learned enough about the culinary industry to know that being a chef is hard work. I plan to continue cooking, as it is one of my favourite hobbies, but I do not want to make it my career.",
                image: "../img/future/chef.jpg",
            },
            {
                title: "Musician",
                description: "While I am passionate about playing the saxophone, I do not plan to make it my career. As a musician, I would likely not make enough money to support myself, and as a result I will keep it as a hobby.",
                image: "../img/future/charlie_parker.jpg",
            },
            {
                title: "Self Taught Programmer",
                description: "While I do know a decent amount about programming, I believe that I still have much to learn. Self taught programmers are less likely to get hired than those with a degree, and I believe that a degree is important if I end up pursuing this path. Additionally, workers with a degree get paid more than those without.",
                image: "../img/future/it.jpg"
            }
        ],
        hobbies: {
            title: "MY HOBBIES, PAST & PRESENT",
            description: "These are some of the hobbies I have engaged in over the years",
            images: [
                {
                    url: "./img/camping/big_agnes_tent_on_seymour.jpg",
                    description: "This photo is from a camping trip I went on with my friends in December 2023. We camped for one night, between the first and second peak of Mount Seymour. Our gear was not the best, and it quickly soaked through, but we still had fun."
                },
                {
                    url: "./img/camping/black_tusk.jpg",
                    description: "Here I can be seen hiking with a friend in an area known as the 'Cinder Flats'. The mountain in the background is Black Tusk, a famous dormant volcano in Garibaldi Provincial Park."
                },
                {
                    url: "./img/camping/cheakamus_lake_bridge.jpg",
                    description: "Here me and a friend are standing on a bridge over the Cheakamus River. This was taken on the last day of a 3 day through-hike from Garibaldi to Cheakamus Lake."
                },
                {
                    url: "./img/camping/helm_creek.jpg",
                    description: "This photo was taken on a camping trip to Helm Creek in September 2023. We arrived at the campsite after 20km of hiking, and enjoyed a refreshing swim in the cold creek."
                },
                {
                    url: "./img/cooking/candy_village.jpg",
                    description: "This village, which I created around Christmas in 2022, is made from a sweet cake and dusted it with icing sugar to look like snow. It was made using a specially shaped baking pan."
                },
                {
                    url: "./img/cooking/knife_collection.jpg",
                    description: "This is my collection of chef knives. In total, the four knives cost around $600. From left to right, the knives are: an 8 inch santoku, a 10 inch chef knife, a 9 inch chinese cleaver, and an 8 inch chef knife."
                },
                {
                    url: "./img/band_concert_10.jpg",
                    description: "This blurry photo was taken at a band concert in grade 10, during which I preformed a solo. I have done at least one solo every year since grade 4."
                },
                {
                    url: "./img/peppers/2023_grow_light.jpg",
                    description: "This is the setup I used to grow my peppers in 2023. I used a grow light fixture to grow 15 plants before moving them outside."
                },
                {
                    url: "./img/peppers/two_dehydrator_racks.jpg",
                    description: "These dehydrator racks are loaded with red Habaneros and yellow Scotch Bonnets. I grew these both of these chillis in my garden in 2023."
                },
                {
                    url: "./img/peppers/2024_grow_setup.jpg",
                    description: "This is what my pepper grow light setup looks like this year. As the weather is becoming warmer, the plants will soon be moved outdoors."
                },
                {
                    url: "./img/cube_collection.jpg",
                    description: "Back in grade 10, I was obsessed with Rubik's Cubes and amassed a collection of 22 cubes. While I can still solve the 3x3 cube, my time is nowhere near the 30 seconds it once was."
                },
                {
                    url: "./img/chess_vs_me.jpg",
                    description: "This is a photo of me playing chess against myself. I took it in grade 7 as part of a photography project. This led to a brief photography hobby, but I quickly lost interest."
                }
            ],
            listed: [
                {
                    image: "./img/hobby_icons/coding.png",
                    title: "Coding",
                },
                {
                    image: "./img/hobby_icons/cooking.png",
                    title: "Cooking"
                },
                {
                    image: "./img/hobby_icons/plants.png",
                    title: "Gardening"
                },
                {
                    image: "./img/hobby_icons/camping.png",
                    title: "Hiking/Camping"
                },
                {
                    image: "./img/hobby_icons/rubiks_cube.png",
                    title: "Rubik's Cubes"
                },
                {
                    image: "./img/hobby_icons/saxophone.png",
                    title: "Saxophone"
                },
            ]
        },
        achievements:  [
            {
                url: "./img/achievements/ccc_honor_roll.jpg",
                description: "After getting 66/75 points on the 2023 Canadian Computing Competition, I earned a spot on the honor roll. I placed in position 136 out of 6242 competitors."
            },
            {
                url: "./img/achievements/SFU_Acceptance_resized.png",
                description: "I applied to the Computer Science programme at SFU and was accepted to in January 2024."
            },
            {
                url: "./img/achievements/UBC_Acceptance_resized.png",
                description: "I applied to both the Applied Science and Bachelor of Science programmes at UBC, and was accepted for Applied Sciences in February 2024."
            },
            {
                url: "./img/achievements/UBC_Placement_Guarantee_resized.png",
                description: "I have been guaranteed second year placement provided that I achieve an 80% average."
            },
            {
                url: "./img/achievements/math_awards.jpg",
                description: "I have received awards for my performance in various math contests, including two school champion awards and a few certificates of distinction."
            }
        ],
        coding_skills: {
            title: "PROGRAMMING SKILLS",
            description: "Here are some of the Programming Languages, Frameworks, and Tools that I have learned over the years.",
            listed: [
                {
                    image: "./img/logos/java.png",
                    title: "Java",
                    popup: "Neural Network"
                },
                {
                    image: "./img/logos/javascript.png",
                    title: "JavaScript",
                    popup: "Khan Academy Games"
                },
                {
                    image: "./img/logos/p5.png",
                    title: "p5.JS",
                    popup: "Khan Academy Games"
                },
                {
                    image: "./img/logos/nodejs.png",
                    title: "Node.JS",
                },
                {
                    image: "./img/logos/arduino.png",
                    title: "Arduino"
                },
                {
                    image: "./img/logos/flutter.png",
                    title: "Flutter"
                },
                {
                    image: "./img/logos/bash.png",
                    title: "BASH"
                },
                {
                    image: "./img/logos/linux.png",
                    title: "GNU/Linux"
                },
                {
                    image: "./img/logos/intellij.png",
                    title: "IntelliJ"
                },
                {
                    image: "./img/logos/swift.png",
                    title: "Swift"
                },
                {
                    image: "./img/logos/azure.png",
                    title: "Microsoft Azure",
                    popup: "Indigenous Plants Website"
                },
                {
                    image: "./img/logos/python.png",
                    title: "Python",
                    popup: "Sololearn Certificates"
                },
                {
                    image: "./img/logos/octocat.png",
                    title: "Git/Github",
                    popup: "Github"
                },
                {
                    image: "./img/logos/vuejs.png",
                    title: "VueJS",
                    popup: "This website"
                },
                {
                    image: "./img/logos/c.png",
                    title: "C",
                    popup: "Sololearn Certificates"
                },
                {
                    image: "./img/logos/cplusplus.png",
                    title: "C++",
                    popup: "Sololearn Certificates"
                },
                {
                    image: "./img/logos/css.png",
                    title: "CSS",
                    popup: "This website"
                },
                {
                    image: "./img/logos/html.png",
                    title: "HTML",
                    popup: "This website"
                }
            ]
        }
    })
};
</script>

<style lang="scss" scoped>
@import "./styles/constants.scss";

#app {
  font-family: Montserrat-Regular, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper {
  height: 100%;
}
</style>
