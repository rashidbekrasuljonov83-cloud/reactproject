import React from "react";
import HeroHome from "../../components/HeroHome";
import WhyChoose from "../../components/WhyChoose";
import LatestPosts from "../../components/LatestPosts";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(`${BASE_URL}articles/`);

        if (!response.ok) {
          throw new Error("olib kelishda mummo");
        }
        let data = await response.json();
        toast.success("Muvaffaqiyatli olib kelindi");
      } catch (error) {
        toast.error("Xatolik yuz berdi");
      }
    }
    getPosts();
  }, []);

  return (
    <>
      <HeroHome />
      <WhyChoose />
      <LatestPosts />
    </>
  );
}
export default Home;
