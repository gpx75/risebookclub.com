<script>
import BaseCard from "./BaseCard";
import Container from "./layout/Container";
export default {
    components: {
        BaseCard,
        Container,
    },
};
</script>
<template>
    <div class="pt-32 text-gray-600 dark:text-gray-300 md:pt-20" id="reviews">
        <container>
            <div class="mx-auto md:w-3/5">
                <h2 class="text-center text-3xl font-bold text-rise-700 dark:text-white md:text-4xl lg:text-5xl">Testimonials</h2>
                <h3 class="md:text-1xl bg-clip-text text-center font-cursive text-xl text-pink-flamingo-600 lg:text-2xl">Voices of Inspiration</h3>
                <p class="mt-4 text-center text-gray-600 dark:text-gray-300">Personal Stories of Growth and Transformation</p>
            </div>
            <div class="mt-12 grid gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
                <div class="space-y-6">
                    <div class="card border border-rise-100 bg-primary text-primary-content shadow-sm">
                        <div class="card-body">
                            <div class="flex gap-4">
                                <nuxt-img class="h-12 w-12 rounded-full" src="/images/avatars/avatar.webp" alt="user avatar" width="400" height="400" loading="lazy" />
                                <div>
                                    <h3 class="text-lg font-medium text-white dark:text-white">Raegan Mudd</h3>
                                    <p class="text-sm text-gray-100">HR Manager</p>
                                </div>
                            </div>
                            <p class="text-white">"This book club has been a wonderful experience! The themes are so intriguiing, that I am always excited to continue my reading journey each month, and I love that there is always a ready selection of title options to choose from. Easy! Another thing I enjoy about this book club is the diversity of the club memebers in interests and backgrounds. The monthly discussions are so rich and elevated, that I always walk away feeling revived and slightly more interesting!"</p>
                        </div>
                    </div>

                    <!-- <base-card>
                        <div class="flex gap-4">
                            <nuxt-img class="h-12 w-12 rounded-full" src="/images/giancarlo.jpeg" alt="user avatar" width="400" height="400" loading="lazy" />
                            <div>
                                <h3 class="text-lg font-medium text-gray-700 dark:text-white">Giancarlo PAPA</h3>
                                <p class="text-sm text-gray-500 dark:text-gray-300">Web Developer</p>
                            </div>
                        </div>
                        <p>"As a member of this wonderful book club, I've found each meeting to be a profound journey of discovery. The company is simply delightful; a warm and welcoming group of individuals who share a passion for reading and personal growth. What truly stands out to me is how much I've learned on both psychological and spiritual levels. Each book we delve into opens new doors of understanding, sparking insightful discussions and reflections. I leave every session feeling enriched, enlightened, and eager for the next. This club isn't just about reading books; it's about embarking on a journey of self-discovery and collective enlightenment."</p>
                    </base-card> -->
                </div>
                <div class="space-y-6">
                    <div class="card border border-pink-100 bg-primary text-primary-content shadow-sm">
                        <div class="card-body">
                            <div class="flex gap-4">
                                <nuxt-img class="h-12 w-12 rounded-full" src="/images/avatars/avatar-1.webp" alt="user avatar" width="400" height="400" loading="lazy" />
                                <div>
                                    <h3 class="text-lg font-medium text-white">Olga Vögeli</h3>
                                    <p class="text-sm text-gray-100">CFO</p>
                                </div>
                            </div>
                            <p class="text-white">"4 years ago, I was longing for connection with like-minded people and looking for a circle of trusted and motivated readers. I found all this & more at Rise Book Club and it give me a sense of feeling at home. The social events have been fun too! I cannot wait to see the next set of themes!."</p>
                        </div>
                    </div>
                    <div class="card border border-rise-100 bg-primary text-primary-content shadow-sm">
                        <div class="card-body">
                            <div class="flex gap-4">
                                <nuxt-img class="h-12 w-12 rounded-full" src="/images/Ksenia.jpeg" alt="user avatar" width="400" height="400" loading="lazy" />
                                <div>
                                    <h3 class="text-lg font-medium text-white">Ksenia Melnychuk</h3>
                                    <p class="text-sm text-gray-100">Project Manager</p>
                                </div>
                            </div>
                            <p class="text-white">"I wanted to try & keep reading books on a regular basis and learn about a variety of different books. Also to have interesting and meaningful discussions with people. This book club has delivered on all of the above and I have had such motivating discussions and positive experiences with the group."</p>
                        </div>
                    </div>
                    <!-- <base-card>
                        <div class="flex gap-4">
                            <nuxt-img class="h-12 w-12 rounded-full" src="/images/avatars/avatar-2.webp" alt="user avatar" width="400" height="400" loading="lazy" />
                            <div>
                                <h3 class="text-lg font-medium text-gray-700 dark:text-white">Michael Button</h3>
                                <p class="text-sm text-gray-500 dark:text-gray-300">Banker</p>
                            </div>
                        </div>
                        <p>"The book club has given me the opportunity to share a love of literature and reading with a unique group. I have heard so many different opinions on the same topic and I leave each meeting feeling just that little bit wiser. It is a great experience."</p>
                    </base-card> -->
                </div>
                <div class="space-y-6 sm:hidden lg:block">
                    <div class="shadow-full card border border-rise-100 bg-primary text-primary-content">
                        <!-- <figure><nuxt-img quality="80" src="images/bookbg.jpeg" alt="March" /></figure> -->
                        <div class="card-body">
                            <div class="flex gap-4">
                                <nuxt-img class="h-12 w-12 rounded-full" src="/images/sandra.jpeg" alt="user avatar" width="400" height="400" loading="lazy" />
                                <div>
                                    <h3 class="text-lg font-medium text-white">Sandra Dimitri</h3>
                                    <p class="text-sm text-gray-100">Bussiness Administrator</p>
                                </div>
                            </div>
                            <p class="text-white">"Joining the book club was the best decision I made. Through the club I was motivated to read more and on a consistent basis. I loved the monthly themes and the free choice of selecting a book. I couldn’t wait for our monthly meeting to share, discuss, socialise, cheer at each other and grow. I also enjoyed that members came from different walks of life and cultures. It was always fun and so enriching, and time passed always way too quick at each meeting!"</p>
                        </div>
                    </div>

                    <!-- <base-card>
                        <div class="flex gap-4">
                            <nuxt-img class="h-12 w-12 rounded-full" src="/images/avatars/avatar.webp" alt="user avatar" width="400" height="400" loading="lazy" />
                            <div>
                                <h3 class="text-lg font-medium text-gray-700 dark:text-white">Marylin Weber</h3>
                                <p class="text-sm text-gray-500 dark:text-gray-300">Accountant</p>
                            </div>
                        </div>
                        <p>"Joining this book club has been a transformative experience for me. As someone deeply passionate about spiritual development and the joy of reading, I've found a haven in this group. Each session is a celebration of wisdom and camaraderie, where we explore books that touch our souls and awaken our minds. The discussions are not just about the text; they delve into how each story resonates with our personal journeys. I've grown immensely, learning from the diverse perspectives of fellow members. This club is more than a group of book enthusiasts; it's a community that nurtures my love for spirituality and literature in the most beautiful way."</p>
                    </base-card> -->
                </div>
            </div>
        </container>
    </div>
</template>
