// =========================== Dynamic api data ===========================
const data = [
  {
    rating: 5,
    percent: 75,
  },
  {
    rating: 4,
    percent: 50,
  },
  {
    rating: 3,
    percent: 30,
  },
  {
    rating: 2,
    percent: 90,
  },
  {
    rating: 1,
    percent: 20,
  },
];

//  =========================== Set Active Element ===========================
function setActive(element) {
  // Get all links
  const links = document.querySelectorAll(".topMenue__link");

  // Remove the active class from all links
  links.forEach((link) => link.classList.remove("topMenue__link--active"));

  // Add the active class to the clicked link
  element.classList.add("topMenue__link--active");
}

// =========================== create progress element ===========================

function createProgressElement() {
  data.forEach((element, index) => {
    let ratingContainer = `
        <div class="ratingContainer">
            <label for="file" class="ratingContainer--title"> ${
              element.rating
            } ${index === data.length - 1 ? "star&ensp;" : "stars"}</label>
            <span class="ratingContainer--progress">
                <span class="ratingContainer--progressValue" style="width: ${
                  element.percent
                }%">
                </span>
            </span>
            <span class="ratingContainer--percentage"> ${
              element.percent
            }% </span>
        </div>
        `;
    document.querySelector(".totalReviews__starsPercentage").innerHTML +=
      ratingContainer;
  });
}
createProgressElement();

//  =========================== rating progress bar ===========================
document.querySelector(
  ".averageRating--ratingInner"
).style.width = `${data[0].percent}%`;

// =========================== user react ===========================
function userReact(react) {
  const likeButton = document.getElementById("likeButton");
  const dislikeButton = document.getElementById("dislikeButton");
  const likeCountElement = likeButton.querySelector(".likeCounts");
  const dislikeCountElement = dislikeButton.querySelector(".disLikeCounts");

  let likeCount = parseInt(likeCountElement.innerHTML);
  let dislikeCount = parseInt(dislikeCountElement.innerHTML);

  if (react === "like") {
    if (likeButton.classList.contains("active")) {
      // If like is active, remove like
      likeButton.classList.remove("active");
      likeCountElement.innerHTML = --likeCount;
    } else {
      // If dislike is active, remove dislike and adjust counts
      if (dislikeButton.classList.contains("active")) {
        dislikeButton.classList.remove("active");
        dislikeCountElement.innerHTML = --dislikeCount;
      }
      // Add like
      likeButton.classList.add("active");
      likeCountElement.innerHTML = ++likeCount;
    }
  } else if (react === "dislike") {
    if (dislikeButton.classList.contains("active")) {
      // If dislike is active, remove dislike
      dislikeButton.classList.remove("active");
      dislikeCountElement.innerHTML = --dislikeCount;
    } else {
      // If like is active, remove like and adjust counts
      if (likeButton.classList.contains("active")) {
        likeButton.classList.remove("active");
        likeCountElement.innerHTML = --likeCount;
      }
      // Add dislike
      dislikeButton.classList.add("active");
      dislikeCountElement.innerHTML = ++dislikeCount;
    }
  }
}

