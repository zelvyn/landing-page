import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtistProfile } from "./ArtistProfile";

// Mock data - replace with actual API calls
const getArtistData = async (username: string) => {
  // Simulate API call
  const artists = {
    alexchen: {
      id: "1",
      name: "Alex Chen",
      username: "alexchen",
      bio: "Digital artist specializing in cyberpunk and futuristic themes. Creating immersive worlds through code and creativity.",
      avatar: "/avatars/alex.jpg",
      coverImage: "/covers/alex-cover.jpg",
      location: "San Francisco, CA",
      website: "https://alexchen.art",
      socialLinks: {
        twitter: "https://twitter.com/alexchen",
        instagram: "https://instagram.com/alexchen",
        discord: "alexchen#1234",
      },
      stats: {
        followers: 12500,
        following: 340,
        artworks: 89,
        sales: 156,
      },
      artworks: [
        {
          id: "1",
          title: "Digital Dreams",
          image: "/artworks/digital-dreams.jpg",
          price: 2500,
          likes: 142,
          isLiked: false,
        },
        {
          id: "2",
          title: "Cyber City",
          image: "/artworks/cyber-city.jpg",
          price: 3200,
          likes: 89,
          isLiked: true,
        },
        {
          id: "3",
          title: "Neon Reflections",
          image: "/artworks/neon-reflections.jpg",
          price: 1800,
          likes: 203,
          isLiked: false,
        },
        {
          id: "4",
          title: "Future Landscape",
          image: "/artworks/future-landscape.jpg",
          price: 4500,
          likes: 156,
          isLiked: false,
        },
        {
          id: "5",
          title: "Digital Portrait",
          image: "/artworks/digital-portrait.jpg",
          price: 2200,
          likes: 98,
          isLiked: true,
        },
        {
          id: "6",
          title: "Abstract Code",
          image: "/artworks/abstract-code.jpg",
          price: 1500,
          likes: 67,
          isLiked: false,
        },
      ],
    },
  };

  return artists[username as keyof typeof artists] || null;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}): Promise<Metadata> {
  const { username } = await params;
  const artist = await getArtistData(username);

  if (!artist) {
    return {
      title: "Artist Not Found",
    };
  }

  return {
    title: `${artist.name} (@${artist.username})`,
    description: artist.bio,
    openGraph: {
      title: `${artist.name} - Digital Artist on Zelvyn`,
      description: artist.bio,
      images: [
        {
          url: artist.avatar,
          width: 400,
          height: 400,
          alt: `${artist.name}'s profile picture`,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary",
      title: `${artist.name} (@${artist.username})`,
      description: artist.bio,
      images: [artist.avatar],
    },
  };
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const artist = await getArtistData(username);

  if (!artist) {
    notFound();
  }

  return <ArtistProfile artist={artist} />;
}
