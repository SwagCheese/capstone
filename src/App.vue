<template>
    <transition class="wrapper" mode="out-in" name="fade" tag="div">
        <div id="app" class="wrapper">
            <!-- Main Title -->
            <TitlePage title="Capstone Presentation" :subtitle="user.name" background="./img/backgrounds/milky_way.jpg" :separator="false"/>
            
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
            
            <!-- Achievements -->
            <TitlePage title="Achievements" subtitle="My academic and personal achievements." background="./img/backgrounds/sitting_on_rock.jpg"/>
  
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
            <TitlePage title="Extracurriculars have a positive impact on motivation"
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

export default {
    name: "App",
    components: {
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
        driving_question: "How do extracurricular activities impact one's life?",
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
                    first: "Throughout my life I've been interested in many different topics. When I was very young, this meant learning about dinosaurs and construction equipment. Later, around grade 5, I became interested in coding simple games on khan academy. Nowadays, I am drawn more towards cooking and hiking. For the last 3 years, I have worked as a cook in a professional kitchen. I have also been on many hiking and camping trips, and even have one planned for one week from now, on May 19th. Alongside these interests, I also play both the Soprano and Alto Saxophone in band, and have been doing so since grade 4.",
                }
            }
        },
        mentor: {
            name: "Marvin Petalver",
            subtitle: "",
            city: "North Vancouver",
            photo: "./img/mentor.jpg",
            description: {
                title: "My Mentor",
                subtitle: "",
                presentation: {
                    title: "Who is Marvin Petalver?",
                    first: "Marvin is the head chef at my workplace, and has mentored me in many areas of life. He has taught me about many different cooking techniques from prep tasks to baking, as well as various life skills. He has also taught me about the importance of hard work and dedication. He has been a great mentor to me, and I am grateful for all that he has done for me. If Marvin had to give everyone one piece of advice, it would be \"Black is always luckier than red\".",
                }
            }
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
                image: "../img/future/saxophone.jpg",
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
                    description: "This photo is from a camping trip I went on with my friends in December 2023. We camped for one night, between the first and second peak of Mount Seymour. Our gear was not the best, as it quickly soaked through, but we still had a great time."
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
                    description: "I created this village from cake and dusted it with icing sugar to look like snow."
                },
                {
                    url: "./img/cooking/knife_collection.jpg",
                    description: "This is my collection of chef knives. In total, the four knives cost around $600. From left to right, the knives are: an 8 inch santoku, a 10 inch chef knife, a 9 inch chinese cleaver, and an 8 inch chef knife."
                },
                {
                    url: "./img/band_concert_10.jpg",
                    description: "This image was taken at a band concert in grade 10. I am the one standing up in the middle of the front row, preforming a solo."
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
            ],
            achievements:  [
                {
                    url: "./img/achievements/ccc_honor_roll.jpg",
                    description: "After getting 66/75 points on the 2023 Canadian Computing Competition, I earned a spot on the honor roll. I placed in position 136 out of 6242 competitors."
                },
                {
                    url: "./img/achievements/sfu_acceptance.png",
                    description: "I applied to the Computer Science programme at SFU and was accepted to in January 2024."
                },
                {
                    url: "./img/achievements/UBC_Acceptance.png",
                    description: "I applied to both the Applied Science and Bachelor of Science programmes at UBC, and was accepted for Applied Sciences in February 2024."
                },
                {
                    url: "./img/achievements/UBC_Placement_Guarantee.png",
                    description: "I was offered a placement guarantee for the second year of UBC's Applied Science programme. This means that I am guaranteed a spot in the program of my choice, as long as I maintain an 80% average in my first year courses."
                },
                {
                    url: "./img/achievements/sololearn_collage.png",
                    description: "I have completed courses on Java, JavaScript, C++, C, and Web Development through SoloLearn, a free website."
                },
                {
                    url: "./img/achievements/math_awards.jpg",
                    description: "I have received awards for my performance in various math contests, including two school champion awards and a few certificates of distinction."
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
