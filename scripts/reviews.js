import reviews from '../dataset/reviews.json' assert { type: 'json' };

export function renderReviews()
{
    let customerReviews = document.getElementById('customer_reviews');
    reviews.sort(sortByDate).forEach(review => {
        let stars = Array.from(Array(review.rating).keys()).map(key => key + 1);
        let starRating = ''
        stars.forEach(star => {
            starRating += `<img src="star.svg" alt="Star ${star}" class="star">`
        });
        let reviewHtml = 
        '<div class="col-md-5 my-2 my-lg-4">' +
            '<div class="review-card">' +
                '<div class="d-flex justify-content-between align-items-center">' +
                    '<div>' +
                        `<p class="mb-1 review-name">${review.name}</p>` +
                        '<div class="stars-and-reviews mb-2 d-flex align-items-center">' +
                            starRating +
                        '</div>' +
                    '</div>' +
                    '<div class="text-end">' +
                        '<p class="verified-css">' +
                            '<img src="verified.svg" alt="Verified" class="verified-icon me-1">' +
                            `${review.verified ? 'Verified Customer' : ''}` +
                            '<br>' +
                            `<span class="date-css">${review.date}</span>` +
                        '</p>' +
                    '</div>' +
                '</div>' +
                `<p class="mt-2 actual-review-css">${review.review}</p>` +
                '<p class="thumbs-up mt-1">' +
                    '<img src="thumbsup.svg" alt="Thumbs Up" class="me-2 thumbsup">' +
                    `<span class="recommend-friend-css">${review.recommend}</span>` +
                '</p>' +
            '</div>' +
        '</div>';
        customerReviews.innerHTML += reviewHtml;
    });
}

function sortByDate(a, b) {
    return new Date(b.date) - new Date(a.date);
}

export default renderReviews();
