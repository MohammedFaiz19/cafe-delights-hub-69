import { Star, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
interface Review {
  name: string;
  rating: number;
  time: string;
  headline?: string;
  text: string;
  ratings?: {
    food: number;
    service: number;
    atmosphere: number;
  };
  extraInfo?: string[];
  photos?: string[];
}
const reviews: Review[] = [{
  name: "Umar Shariff",
  rating: 5,
  time: "4 months ago",
  headline: "A Must-Visit Gem!",
  text: "Visited Sunroof Café & Restaurant today and I'm truly impressed! The ambience is magical with romantic lighting and soothing music. Tried three types of momos (Schezwuan, BBQ, and Pan Fried) – each one a flavor bomb. The white sauce pasta was top-notch, creamy and authentic. Also had \"Drums of Heaven\" – juicy, perfectly spiced, and unforgettable. This place nails both vibe and taste. Highly recommended!",
  ratings: {
    food: 5,
    service: 5,
    atmosphere: 5
  },
  photos: ["photo1", "photo2", "photo3"]
}, {
  name: "Shaikh Hafizur Rahman",
  rating: 5,
  time: "1 month ago",
  text: "Food tastes authentic. One of the best Chinese food I've tasted in Mysore. Price is also reasonable. It's a hidden gem in Rajiv Nagar. Definitely visiting again.",
  ratings: {
    food: 5,
    service: 4,
    atmosphere: 4
  },
  extraInfo: ["Suitable for all group sizes", "No wait"]
}, {
  name: "Saran Raj",
  rating: 5,
  time: "1 month ago",
  text: "Friendly staff, the food was nice & lovely ambience. Drums of Heaven, creamy Alfredo pasta, momos, momo soup — must try. Best place to hang out with friends and family.",
  ratings: {
    food: 5,
    service: 5,
    atmosphere: 5
  }
}];
const RatingBar = ({
  label,
  value
}: {
  label: string;
  value: number;
}) => <div className="flex items-center gap-2 text-sm">
    <span className="text-gray-400 w-24">{label}</span>
    <div className="flex-1 max-w-[120px] h-2 bg-gray-700 rounded-full overflow-hidden">
      <div className="h-full bg-yellow-500 rounded-full" style={{
      width: `${value / 5 * 100}%`
    }} />
    </div>
  </div>;
const GoogleReviews = () => {
  const googleReviewsUrl = "https://www.google.com/search?sca_esv=f5688d6b1e23e673&sxsrf=AE3TifPe-WppqIl0CcKU5WlTKGumfIcH-g:1764400926360&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Ew5JCK277PnLvBuZGUT49feLAReWAZW2pJEMyPv6lVcnmrGyZlBhLLh_Vs-kjX97uXAgLdOpofit5VLwtcW862mFHJSL-LAW1RqAYjAmEB21Bq51PQ%3D%3D&q=Sunroof+Cafe+%26+Restaurant+Reviews&sa=X&ved=2ahUKEwjg29PT6ZaRAxXLyDgGHZ-MIdkQ0bkNegQIMxAD&biw=1536&bih=695&dpr=1.25";
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };
  return <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-5xl font-bold gradient-text mb-4">
          What People Are Saying
        </h2>
      </div>

      {/* View More on Google Button */}
      <div className="flex justify-center mb-12">
        
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {reviews.map((review, index) => <div key={index} className="bg-[#1e1e1e] rounded-2xl p-6 text-white shadow-xl border border-gray-800">
            {/* Profile Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {getInitials(review.name)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base truncate">{review.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-500 text-yellow-500' : 'fill-gray-600 text-gray-600'}`} />)}
                </div>
                <p className="text-xs text-gray-400 mt-1">{review.time}</p>
              </div>
            </div>

            {/* Headline */}
            {review.headline && <h4 className="font-bold text-base mb-2">{review.headline}</h4>}

            {/* Review Text */}
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {review.text}
            </p>

            {/* Rating Bars */}
            {review.ratings && <div className="space-y-2 mb-4 py-3 border-t border-gray-700">
                <RatingBar label="Food" value={review.ratings.food} />
                <RatingBar label="Service" value={review.ratings.service} />
                <RatingBar label="Atmosphere" value={review.ratings.atmosphere} />
              </div>}

            {/* Extra Info */}
            {review.extraInfo && <div className="flex flex-wrap gap-2 mb-4">
                {review.extraInfo.map((info, i) => <span key={i} className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                    {info}
                  </span>)}
              </div>}

            {/* Photos Placeholder */}
            {review.photos && <div className="grid grid-cols-3 gap-2 mb-4">
                {review.photos.map((_, i) => {})}
              </div>}

            {/* Actions */}
            <div className="flex items-center gap-4 pt-3 border-t border-gray-800">
              <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                <Heart className="w-4 h-4" />
                <span className="text-xs">Helpful</span>
              </button>
              <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-xs">Share</span>
              </button>
            </div>
          </div>)}
      </div>
    </section>;
};
export default GoogleReviews;