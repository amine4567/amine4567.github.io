const animeData = [
    {
        id: "dragonBall",
        fullName: "Dragon Ball"
    },
    {
        id: "attackOnTitan",
        fullName: "Attack on Titan"
    },
    {
        id: "fullMetalAlchemist",
        fullName: "Fullmetal Alchemist"
    },
    {
        id: "hunterXHunter",
        fullName: "Hunter × Hunter"
    },
    {
        id: "deathNote",
        fullName: "Death Note"
    },
    {
        id: "violetEvergarden",
        fullName: "Violet Evergarden"
    },
    {
        id: "monogatari",
        fullName: "Monogatari"
    },
    {
        id: "gundam",
        fullName: "Gundam"
    },
    {
        id: "codeGeass",
        fullName: "Code Geass"
    },
    {
        id: "fruitsBasket",
        fullName: "Fruits Basket"
    },
    {
        id: "onePiece",
        fullName: "One Piece"
    },
    {
        id: "haikyu",
        fullName: "Haikyu!!"
    },
    {
        id: "cowboyBebop",
        fullName: "Cowboy Bebop"
    },
    {
        id: "haruhiSuzumiya",
        fullName: "Haruhi Suzumiya"
    },
    {
        id: "neonGenesisEvangelion",
        fullName: "Neon Genesis Evangelion"
    },
    {
        id: "onePunchMan",
        fullName: "One Punch Man"
    },
    {
        id: "pingPongAnimation",
        fullName: "Ping Pong the Animation"
    },
    {
        id: "nana",
        fullName: "Nana"
    },
    {
        id: "gurrenLagann",
        fullName: "Gurren Lagann"
    },
    {
        id: "demonSlayer",
        fullName: "Demon Slayer"
    },
    {
        id: "yourLieInApril",
        fullName: "Your Lie in April"
    },
    {
        id: "steinsGate",
        fullName: "STEINS;GATE"
    },
    {
        id: "ghostInTheShell",
        fullName: "Ghost in the Shell"
    },
    {
        id: "swordArtOnline",
        fullName: "Sword Art Online"
    },
    {
        id: "yuYuHakusho",
        fullName: "YuYu Hakusho"
    },
    {
        id: "jojo",
        fullName: "JoJo's Bizarre Adventure"
    },
    {
        id: "madokaMagica",
        fullName: "Madoka Magica"
    },
    {
        id: "fate",
        fullName: "Fate"
    },
    {
        id: "konosuba",
        fullName: "KonoSuba"
    },
    {
        id: "revolutionaryGirlUtena",
        fullName: "Revolutionary Girl Utena"
    },
    {
        id: "karekano",
        fullName: "KareKano"
    },
    {
        id: "hajimeNoIppo",
        fullName: "Hajime no Ippo"
    },
    {
        id: "ouranKoukouHostClub",
        fullName: "Ouran Koukou Host Club"
    },
    {
        id: "hellsing",
        fullName: "Hellsing"
    },
    {
        id: "anohana",
        fullName: "Anohana"
    },
    {
        id: "inuyasha",
        fullName: "Inuyasha"
    },
    {
        id: "spiritedAway",
        fullName: "Spirited Away"
    },
    {
        id: "natsumeYuujinchou",
        fullName: "Natsume Yuujinchou"
    },
    {
        id: "myHeroAcademia",
        fullName: "My Hero Academia"
    },
    {
        id: "serialExperimentsLain",
        fullName: "Serial Experiments Lain"
    },
    {
        id: "foodWars",
        fullName: "Food Wars"
    },
    {
        id: "beastars",
        fullName: "BEASTARS"
    },
    {
        id: "durarara",
        fullName: "Durarara!!"
    },
    {
        id: "rurouniKenshin",
        fullName: "Rurouni Kenshin"
    },
    {
        id: "killLaKill",
        fullName: "Kill la Kill"
    },
    {
        id: "dragonMaid",
        fullName: "Miss Kobayashi's Dragon Maid"
    },
    {
        id: "akira",
        fullName: "Akira"
    },
    {
        id: "oregairu",
        fullName: "Oregairu"
    },
    {
        id: "yuriOnIce",
        fullName: "Yuri!!! On ICE"
    },
    {
        id: "flcl",
        fullName: "FLCL"
    },
    {
        id: "spaceDandy",
        fullName: "Space Dandy"
    },
    {
        id: "caseClosed",
        fullName: "Case Closed"
    },
    {
        id: "noGameNoLife",
        fullName: "No Game No Life"
    },
    {
        id: "aggretsuko",
        fullName: "Aggretsuko"
    },
    {
        id: "yourName",
        fullName: "Your Name"
    },
    {
        id: "lupin3",
        fullName: "Lupin III"
    },
    {
        id: "kaguyaSama",
        fullName: "Kaguya-sama"
    },
    {
        id: "sailorMoon",
        fullName: "Sailor Moon"
    },
    {
        id: "erased",
        fullName: "ERASED"
    },
    {
        id: "soulEater",
        fullName: "Soul Eater"
    },
    {
        id: "reZero",
        fullName: "Re:Zero"
    },
    {
        id: "bananaFish",
        fullName: "Banana Fish"
    },
    {
        id: "kon",
        fullName: "K-On!"
    },
    {
        id: "uruseiYatsura",
        fullName: "Urusei Yatsura"
    },
    {
        id: "Future Diary",
        fullName: "Future Diary"
    },
    {
        id: "Laid-Back Camp",
        fullName: "Laid-Back Camp"
    },
    {
        id: "ssssGridman",
        fullName: "SSSS. GRIDMAN"
    },
    {
        id: "domesticGirlfriend",
        fullName: "Domestic Girlfriend"
    },
    {
        id: "loveLive",
        fullName: "Love Live!"
    },
    {
        id: "psychoPass",
        fullName: "Psycho-Pass"
    },
    {
        id: "whenTheyCry",
        fullName: "When They Cry"
    },
    {
        id: "bleach",
        fullName: "Bleach"
    },
    {
        id: "newGame",
        fullName: "New Game!"
    },
    {
        id: "Zombieland Saga",
        fullName: "Zombieland Saga"
    },
    {
        id: "jujutsuKaisen",
        fullName: "Jujutsu Kaisen"
    },
    {
        id: "yuGiOh",
        fullName: "Yu-Gi-Oh!"
    },
    {
        id: "mobPsycho100",
        fullName: "Mob Psycho 100"
    },
    {
        id: "tatamiGalaxy",
        fullName: "The Tatami Galaxy"
    },
    {
        id: "danganronpa",
        fullName: "Danganronpa"
    },
    {
        id: "luckyStar",
        fullName: "Lucky☆Star"
    },
    {
        id: "bananya",
        fullName: "Bananya"
    },
    {
        id: "symphogear",
        fullName: "Symphogear"
    },
    {
        id: "tokyoGhoul",
        fullName: "Tokyo Ghoul"
    },
    {
        id: "madeInAbyss",
        fullName: "Made in Abyss"
    },
    {
        id: "shirobako",
        fullName: "Shirobako"
    },
    {
        id: "familiarOfZero",
        fullName: "The Familiar of Zero"
    },
    {
        id: "gto",
        fullName: "GTO"
    },
    {
        id: "slamDunk",
        fullName: "Slam Dunk"
    },
    {
        id: "Pokemon",
        fullName: "Pokemon"
    },
    {
        id: "toradora",
        fullName: "Toradora!"
    },
    {
        id: "clannad",
        fullName: "Clannad"
    },
    {
        id: "blackButler",
        fullName: "Black Butler"
    },
    {
        id: "monster",
        fullName: "Monster"
    },
    {
        id: "oreImo",
        fullName: "OreImo"
    },
    {
        id: "nichijou",
        fullName: "Nichijou"
    },
    {
        id: "kakegurui",
        fullName: "Kakegurui"
    },
    {
        id: "gintama",
        fullName: "Gintama"
    },
    {
        id: "teekyu",
        fullName: "Teekyu"
    },
    {
        id: "naruto",
        fullName: "Naruto"
    },
    {
        id: "perfectBlue",
        fullName: "Perfect Blue"
    }
]