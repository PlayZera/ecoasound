"use client";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Review {
  id: string;
  songName: string;
  artist: string;
  rating: number;
  text: string;
  userId: string;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const querySnapshot = await getDocs(collection(db, "reviews"));
      const reviewsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Review[];
      setReviews(reviewsData);
    };
    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Reviews</h1>
        <Link
          href="/reviews/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Nova Review
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg">{review.songName}</h3>
            <p className="text-gray-600">{review.artist}</p>
            <div className="flex my-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${i < review.rating ? "text-blue-600" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-700 italic">"{review.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}