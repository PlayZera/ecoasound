"use client";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../../lib/firebase";
import { useRouter } from "next/navigation";

export default function CreateReview() {
  const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [rating, setRating] = useState(3);
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) return;

    await addDoc(collection(db, "reviews"), {
      userId: auth.currentUser.uid,
      songName,
      artist,
      rating,
      text,
      createdAt: new Date(),
    });
    router.push("/reviews");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">Nova Review</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nome da música"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
          className="w-full p-2 border border-gray-200 rounded"
          required
        />
        <input
          type="text"
          placeholder="Artista"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="w-full p-2 border border-gray-200 rounded"
          required
        />
        <div className="flex items-center">
          <label className="mr-4">Nota:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-2xl ${star <= rating ? "text-blue-600" : "text-gray-300"}`}
            >
              ★
            </button>
          ))}
        </div>
        <textarea
          placeholder="Escreva sua review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border border-gray-200 rounded h-32"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Publicar
        </button>
      </form>
    </div>
  );
}