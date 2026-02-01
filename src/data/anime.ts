// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

const localAnimeList: AnimeItem[] = [
	{
		title: "MyGo!!!",
		status: "completed",
		rating: 9.7,
		cover: "/assets/anime/mygo.webp",
		description: "gugugaga",
		episodes: "13 episodes",
		year: "2023",
		genre: ["music", "girl"],
		studio: "BanG Dream!",
		link: "https://www.bilibili.com/bangumi/media/md23679123",
		progress: 13,
		totalEpisodes: 13,
		startDate: "2025-07",
		endDate: "2026-01",
	},
	{
		title: "魔女之旅",
		status: "completed",
		rating: 9.7,
		cover: "/assets/anime/mnzl.webp",
		description: "a journey of a magic girl",
		episodes: "12 episodes",
		year: "2020",
		genre: ["magic"],
		studio: "C2C",
		link: "https://www.bilibili.com/bangumi/media/md28229881",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2024-07",
		endDate: "2025-09",
	},
];

export default localAnimeList;
