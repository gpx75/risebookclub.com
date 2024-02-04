<script>
import BaseFaq from "./BaseFaq";

export default {
    components: {
        BaseFaq,
    },
};
</script>

<template>
    <div class="mt-20 flex flex-col gap-12 md:mt-32 lg:flex-row" id="faq">
        <div class="text-center lg:w-5/12 lg:pl-12 lg:text-left">
            <h2 class="text-3xl font-bold text-rise-700 dark:text-white md:text-3xl lg:text-4xl">Frequently Asked Questions</h2>
            <h3 class="mt-4 font-cursive text-2xl text-pink-flamingo-600">Find answers here</h3>
        </div>
        <div class="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800 lg:w-7/12">
            <base-faq id="faq-1" question="Who is Rise Book Club for?">
                <p class="pb-6 text-base text-gray-600 dark:text-gray-400">This book club is for curious and conscious people, who want to awaken their mind & spirit, within our vibrant and open community. Are you interested in empowering your own personal development journey? Do you enjoy reading - of course! But you also enjoy sharing and discussing the books you read with other people. In short, you get to choose a book, read-it and meet other people in the community! Then you accelerate your reading, learning, growth, connections & transformation. We have been doing this since 2019 and it works!.</p>
            </base-faq>
            <base-faq id="faq-2" question="What types of books do you discuss?">
                <div class="pb-6 text-base text-gray-600 dark:text-gray-400">
                    <p>The core concept of Rise Book Club is to encourage each other to build on the monthly themes. We focus on non-fiction books in the following areas for personal development: Spirituality & Mindfulness, Health & Wellbeing, Relationships & Connection, then Work & Finance. Our members do not all read the same book each month! Instead, we work on a yearly curriculum, which is based on a new theme every month. The beauty is you get to select a book that you're curious about to read. Then you get to share this with other members who will listen to your personal feedback, ask questions and value your suggestions and recommendations.</p>
                    <!-- <ul class="mt-4 list-outside list-disc pl-4">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul> -->
                </div>
            </base-faq>
            <base-faq id="faq-3" question="What can I expect from Rise Book Club?">
                <p class="pb-6 text-base text-gray-600 dark:text-gray-400">You can expect to read more and have a structured curated reading schedule, based on our monthly themes. Read 1 non-fiction book and attend 1 meeting a month. Meetings are the last Friday of ever month starting at 18.30 GMT on Zoom. We start our discussions socially with a “Meet, Greet & Eat format”, an overview of the theme and then we get into the core book discussion.</p>
            </base-faq>
            <base-faq id="faq-4" question="How can I become a member?">
                <p class="pb-6 text-base text-gray-600 dark:text-gray-400">Register for 6 months or 12 months subscriptions and your first meeting is free. Complete the contacting form if you have any further questions.</p>
            </base-faq>
            <base-faq id="faq-5" question="Non- member options?">
                <p class="pb-6 text-base text-gray-600 dark:text-gray-400">If you are interested in an individual theme and only want to attend one meeting, then the cost is $25</p>
            </base-faq>
            <base-faq id="faq-6" question="What’s the cancellation & refund policy?">
                <p class="pb-6 text-base text-gray-600 dark:text-gray-400">All applications will be reviewed & the book club has the right to deny participation, without further explanation. Membership cancellation is within 14 days of fee payment, by written notice. No further refunds thereafter.</p>
            </base-faq>
            <base-faq id="faq-6" question="What’s a welcome meeting?">
                <p class="pb-6 text-base text-gray-600 dark:text-gray-400">Everyone is welcome to attend their first meeting for free to meet the group and kick start their reading on the monthly themes. It’s ideal if you have a book to share, but if you don’t have enough time, then you’re welcome to come along and share your life experience on the topic, Please complete the contact form to request a welcome meeting.</p>
            </base-faq>
            <base-faq id="faq-6" question="How do I select a book?">
                <p class="pb-6 text-base text-gray-600 dark:text-gray-400">We will also share some guidance on how to select the best book for you and offer a reading list with recommended titles. However, you are free to choose your own book! Recommended book lists, book summaries & discussion highlights are provided to all members.</p>
            </base-faq>
            <base-faq id="faq-6" question="What’s a typical meeting like?">
                <p class="pb-6 text-base text-gray-600 dark:text-gray-400">Firstly, we socialise, and get to meet everyone joining the discussion. We have an introduction to the monthly themes and then an overview of the selected books for discussion. We check-in on actions, learnings and follow-up from the previous meeting and then go straight to the book discussion. Each member gets to present their book and answer any questions from the group. Then we wrap up with any actions we are committed to take, based on the books shared. All members receive a written book review summary, after each meeting.</p>
            </base-faq>
            <base-faq id="faq-6" question="What happens when I have not finished reading my book?">
                <p class="pb-6 text-base text-gray-600 dark:text-gray-400">This can happen. No problem! You can still attend the next upcoming meeting and share what you have read so far or even your life experience on the theme. Everyone takes at least one book break during the year! Book breaks are allowed and you can also choose another meduim to share such as an article, blog, paper etc.</p>
            </base-faq>
            <base-faq id="faq-6" question="What is your privacy policy?">
                <p class="pb-6 text-base text-gray-600 dark:text-gray-400">Respect confidentiality and privacy. No spam. No sales here.</p>
            </base-faq>
        </div>
    </div>
</template>
