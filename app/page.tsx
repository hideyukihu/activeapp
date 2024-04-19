"use client";

import Image from "next/image";
import db from "./firebase";
import { useEffect, useState } from "react";
import { collection, getDocs, DocumentData } from "firebase/firestore"; // Import DocumentData

export default function Home() {
  const [posts, setPosts] = useState<DocumentData[]>([]); // Specify type as DocumentData[]

  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      setPosts(snapShot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>ACTIVE APP</h1>
      <div>
        {posts.map((post, index) => (
          <div key={index}> {/* Add key to each div */}
            <h1>{post.title}</h1>
            <h1>{post.text}</h1>
          </div>
        ))}
      </div>
    </main>
  );
}
