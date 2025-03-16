const testimonials = [
  "The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.",
  "My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.",
  "Jeramy and his team at the Lorem Ipsum Company whipped my website into shape just in time for tax season. I was excited by the results and am proud to direct clients to my website once again.",
  "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you'll definitely get the 5-star treatment from the Lorem Ipsum Company!",
  "I went hunting for examples of the best customer testimonial pages I could find.",
  "This page is a creative and thoughtful way of sharing positive customer feedback and testimonials.",
  "The layout is like a choose-your-own-adventure giving the potential customer options on how they prefer to digest these stories.",
];
const authors = [
  "Roland Weedon",
  "Kelsi Gordon",
  "Seth Gewirtz",
  "Tasha Zuzalek",
  "Ruskin Bond.",
  "Jhumpa Lahiri.",
  "Vikram Seth.",
];

const imgsarry = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
];

const profileImage = document.querySelector(".profile-image");
const aboutEl = document.querySelector(".about");
const authorEl = document.querySelector(".author");

let count = 0;

changingProfile();

function changingProfile() {
  if (count < imgsarry.length) {
    profileImage.src = imgsarry[count];
    aboutEl.innerText = testimonials[count];
    authorEl.innerText = authors[count];
    count++;
  }
  setTimeout(changingProfile, 3000);
}
