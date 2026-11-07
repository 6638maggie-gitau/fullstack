


function Ratings({ reviews = [] }) {
  const totalReviews = reviews.length;

  const averageRating =
    totalReviews > 0
      ? reviews.reduce((total, review) => total + review.rating, 0) /
        totalReviews
      : 0;

  const roundedRating = averageRating.toFixed(1);

  return (
    <section className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Guest Ratings
      </h2>

      <div className="flex items-center gap-3 mb-5">
        <span className="text-4xl font-bold">
          {roundedRating}
        </span>

        <div>
          <div className="text-yellow-500 text-xl">
            {"★".repeat(Math.round(averageRating))}
            {"☆".repeat(5 - Math.round(averageRating))}
          </div>

          <p className="text-gray-500 text-sm">
            Based on {totalReviews} reviews
          </p>
        </div>
      </div>

      {[5, 4, 3, 2, 1].map((star) => {
        const count = reviews.filter(
          (review) => review.rating === star
        ).length;

        const percentage =
          totalReviews > 0 ? (count / totalReviews) * 100 : 0;

        return (
          <div key={star} className="flex items-center gap-3 mb-2">
            <span className="w-12 text-sm">{star} stars</span>

            <div className="bg-gray-200 rounded-full h-2 flex-1">
              <div
                className="bg-yellow-400 h-2 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <span className="text-sm text-gray-500 w-8">
              {count}
            </span>
          </div>
        );
      })}
    </section>
  );
}

export default Ratings;
