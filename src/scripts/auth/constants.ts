const surahs = [
	{ number: 1, name: "الفاتحة", type: "Makiyyah", ayat: 7, juz: [1] },
	{
		number: 2,
		name: "البقرة",
		type: "Madaniyyah",
		ayat: 286,
		juz: [1, 2, 3],
	},
	{
		number: 3,
		name: "آل عمران",
		type: "Madaniyyah",
		ayat: 200,
		juz: [3, 4],
	},
	{
		number: 4,
		name: "النساء",
		type: "Madaniyyah",
		ayat: 176,
		juz: [4, 5, 6],
	},
	{ number: 5, name: "المائدة", type: "Madaniyyah", ayat: 120, juz: [6, 7] },
	{ number: 6, name: "الأنعام", type: "Makiyyah", ayat: 165, juz: [7, 8] },
	{ number: 7, name: "الأعراف", type: "Makiyyah", ayat: 206, juz: [8, 9] },
	{ number: 8, name: "الأنفال", type: "Madaniyyah", ayat: 75, juz: [9, 10] },
	{
		number: 9,
		name: "التوبة",
		type: "Madaniyyah",
		ayat: 129,
		juz: [10, 11],
	},
	{ number: 10, name: "يونس", type: "Makiyyah", ayat: 109, juz: [11] },
	{ number: 11, name: "هود", type: "Makiyyah", ayat: 123, juz: [11, 12] },
	{ number: 12, name: "يوسف", type: "Makiyyah", ayat: 111, juz: [12, 13] },
	{ number: 13, name: "الرعد", type: "Madaniyyah", ayat: 43, juz: [13] },
	{ number: 14, name: "إبراهيم", type: "Makiyyah", ayat: 52, juz: [13, 14] },
	{ number: 15, name: "الحجر", type: "Makiyyah", ayat: 99, juz: [14] },
	{ number: 16, name: "النحل", type: "Makiyyah", ayat: 128, juz: [14, 15] },
	{ number: 17, name: "الإسراء", type: "Makiyyah", ayat: 111, juz: [15] },
	{ number: 18, name: "الكهف", type: "Makiyyah", ayat: 110, juz: [15, 16] },
	{ number: 19, name: "مريم", type: "Makiyyah", ayat: 98, juz: [16] },
	{ number: 20, name: "طه", type: "Makiyyah", ayat: 135, juz: [16] },
	{ number: 21, name: "الأنبياء", type: "Makiyyah", ayat: 112, juz: [17] },
	{ number: 7, name: "الأعراف", type: "Makiyyah", ayat: 206, juz: [8, 9] },
	{ number: 8, name: "الأنفال", type: "Madaniyyah", ayat: 75, juz: [9, 10] },
	{
		number: 9,
		name: "التوبة",
		type: "Madaniyyah",
		ayat: 129,
		juz: [10, 11],
	},
	{ number: 10, name: "يونس", type: "Makiyyah", ayat: 109, juz: [11] },
	{ number: 11, name: "هود", type: "Makiyyah", ayat: 123, juz: [11, 12] },
	{ number: 12, name: "يوسف", type: "Makiyyah", ayat: 111, juz: [12, 13] },
	{ number: 13, name: "الرعد", type: "Madaniyyah", ayat: 43, juz: [13] },
	{ number: 14, name: "إبراهيم", type: "Makiyyah", ayat: 52, juz: [13, 14] },
	{ number: 15, name: "الحجر", type: "Makiyyah", ayat: 99, juz: [14] },
	{ number: 16, name: "النحل", type: "Makiyyah", ayat: 128, juz: [14, 15] },
	{ number: 17, name: "الإسراء", type: "Makiyyah", ayat: 111, juz: [15] },
	{ number: 18, name: "الكهف", type: "Makiyyah", ayat: 110, juz: [15, 16] },
	{ number: 19, name: "مريم", type: "Makiyyah", ayat: 98, juz: [16] },
	{ number: 20, name: "طه", type: "Makiyyah", ayat: 135, juz: [16] },
	{ number: 21, name: "الأنبياء", type: "Makiyyah", ayat: 112, juz: [17] },
	{ number: 22, name: "الحج", type: "Madaniyyah", ayat: 78, juz: [17, 18] },
	{ number: 23, name: "المؤمنون", type: "Makiyyah", ayat: 118, juz: [18] },
	{ number: 24, name: "النور", type: "Madaniyyah", ayat: 64, juz: [18, 19] },
	{ number: 25, name: "الفرقان", type: "Makiyyah", ayat: 77, juz: [19] },
	{
		number: 26,
		name: "الشعراء",
		type: "Makiyyah",
		ayat: 227,
		juz: [19, 20],
	},
	{ number: 27, name: "النمل", type: "Makiyyah", ayat: 93, juz: [20] },
	{ number: 28, name: "القصص", type: "Makiyyah", ayat: 88, juz: [20, 21] },
	{ number: 29, name: "العنكبوت", type: "Makiyyah", ayat: 69, juz: [21] },
	{ number: 30, name: "الروم", type: "Makiyyah", ayat: 60, juz: [21] },
	{ number: 31, name: "لقمان", type: "Makiyyah", ayat: 34, juz: [21] },
	{ number: 32, name: "السجدة", type: "Makiyyah", ayat: 30, juz: [21, 22] },
	{ number: 33, name: "الأحزاب", type: "Madaniyyah", ayat: 73, juz: [22] },
	{ number: 34, name: "سبأ", type: "Makiyyah", ayat: 54, juz: [22, 23] },
	{ number: 35, name: "فاطر", type: "Makiyyah", ayat: 45, juz: [23] },
	{ number: 36, name: "يس", type: "Makiyyah", ayat: 83, juz: [23] },
	{ number: 37, name: "الصافات", type: "Makiyyah", ayat: 182, juz: [23] },
	{ number: 38, name: "ص", type: "Makiyyah", ayat: 88, juz: [23, 24] },
	{ number: 39, name: "الزمر", type: "Makiyyah", ayat: 75, juz: [24] },
	{ number: 40, name: "غافر", type: "Makiyyah", ayat: 85, juz: [24, 25] },
	{ number: 41, name: "فصلت", type: "Makiyyah", ayat: 54, juz: [25] },
	{ number: 42, name: "الشورى", type: "Makiyyah", ayat: 53, juz: [25] },
	{ number: 43, name: "الزخرف", type: "Makiyyah", ayat: 89, juz: [25] },
	{ number: 44, name: "الدخان", type: "Makiyyah", ayat: 59, juz: [25, 26] },
	{ number: 45, name: "الجاثية", type: "Makiyyah", ayat: 37, juz: [26] },
	{ number: 46, name: "الأحقاف", type: "Makiyyah", ayat: 35, juz: [26] },
	{ number: 47, name: "محمد", type: "Madaniyyah", ayat: 38, juz: [26, 27] },
	{ number: 48, name: "الفتح", type: "Madaniyyah", ayat: 29, juz: [27] },
	{ number: 49, name: "الحجرات", type: "Madaniyyah", ayat: 18, juz: [27] },
	{ number: 50, name: "ق", type: "Makiyyah", ayat: 45, juz: [27] },
	{ number: 51, name: "الذاريات", type: "Makiyyah", ayat: 60, juz: [27] },
	{ number: 52, name: "الطور", type: "Makiyyah", ayat: 49, juz: [27] },
	{ number: 53, name: "النجم", type: "Makiyyah", ayat: 62, juz: [27] },
	{ number: 54, name: "القمر", type: "Makiyyah", ayat: 55, juz: [27] },
	{ number: 55, name: "الرحمن", type: "Madaniyyah", ayat: 78, juz: [27] },
	{ number: 56, name: "الواقعة", type: "Makiyyah", ayat: 96, juz: [27, 28] },
	{ number: 57, name: "الحديد", type: "Madaniyyah", ayat: 29, juz: [28] },
	{ number: 58, name: "المجادلة", type: "Madaniyyah", ayat: 22, juz: [28] },
	{ number: 59, name: "الحشر", type: "Madaniyyah", ayat: 24, juz: [28] },
	{ number: 60, name: "الممتحنة", type: "Madaniyyah", ayat: 13, juz: [28] },
	{ number: 61, name: "الصف", type: "Madaniyyah", ayat: 14, juz: [28] },
	{ number: 62, name: "الجمعة", type: "Madaniyyah", ayat: 11, juz: [28] },
	{ number: 63, name: "المنافقون", type: "Madaniyyah", ayat: 11, juz: [28] },
	{ number: 64, name: "التغابن", type: "Madaniyyah", ayat: 18, juz: [28] },
	{ number: 65, name: "الطلاق", type: "Madaniyyah", ayat: 12, juz: [28] },
	{
		number: 66,
		name: "التحريم",
		type: "Madaniyyah",
		ayat: 12,
		juz: [28, 29],
	},
	{ number: 67, name: "الملك", type: "Makiyyah", ayat: 30, juz: [29] },
	{ number: 68, name: "القلم", type: "Makiyyah", ayat: 52, juz: [29] },
	{ number: 69, name: "الحاقة", type: "Makiyyah", ayat: 52, juz: [29] },
	{ number: 70, name: "المعارج", type: "Makiyyah", ayat: 44, juz: [29] },
	{ number: 71, name: "نوح", type: "Makiyyah", ayat: 28, juz: [29] },
	{ number: 72, name: "الجن", type: "Makiyyah", ayat: 28, juz: [29] },
	{ number: 73, name: "المزمل", type: "Makiyyah", ayat: 20, juz: [29] },
	{ number: 74, name: "المدثر", type: "Makiyyah", ayat: 56, juz: [29] },
	{ number: 75, name: "القيامة", type: "Makiyyah", ayat: 40, juz: [29] },
	{ number: 76, name: "الإنسان", type: "Madaniyyah", ayat: 31, juz: [29] },
	{ number: 77, name: "المرسلات", type: "Makiyyah", ayat: 50, juz: [29] },
	{ number: 78, name: "النبأ", type: "Makiyyah", ayat: 40, juz: [30] },
	{ number: 79, name: "النازعات", type: "Makiyyah", ayat: 46, juz: [30] },
	{ number: 80, name: "عبس", type: "Makiyyah", ayat: 42, juz: [30] },
	{ number: 81, name: "التكوير", type: "Makiyyah", ayat: 29, juz: [30] },
	{ number: 82, name: "الانفطار", type: "Makiyyah", ayat: 19, juz: [30] },
	{ number: 83, name: "المطففين", type: "Makiyyah", ayat: 36, juz: [30] },
	{ number: 84, name: "الانشقاق", type: "Makiyyah", ayat: 25, juz: [30] },
	{ number: 85, name: "البروج", type: "Makiyyah", ayat: 22, juz: [30] },
	{ number: 86, name: "الطارق", type: "Makiyyah", ayat: 17, juz: [30] },
	{ number: 87, name: "الأعلى", type: "Makiyyah", ayat: 19, juz: [30] },
	{ number: 88, name: "الغاشية", type: "Makiyyah", ayat: 26, juz: [30] },
	{ number: 89, name: "الفجر", type: "Makiyyah", ayat: 30, juz: [30] },
	{ number: 90, name: "البلد", type: "Makiyyah", ayat: 20, juz: [30] },
	{ number: 91, name: "الشمس", type: "Makiyyah", ayat: 15, juz: [30] },
	{ number: 92, name: "الليل", type: "Makiyyah", ayat: 21, juz: [30] },
	{ number: 93, name: "الضحى", type: "Makiyyah", ayat: 11, juz: [30] },
	{ number: 94, name: "الشرح", type: "Makiyyah", ayat: 8, juz: [30] },
	{ number: 95, name: "التين", type: "Makiyyah", ayat: 8, juz: [30] },
	{ number: 96, name: "العلق", type: "Makiyyah", ayat: 19, juz: [30] },
	{ number: 97, name: "القدر", type: "Makiyyah", ayat: 5, juz: [30] },
	{ number: 98, name: "البينة", type: "Madaniyyah", ayat: 8, juz: [30] },
	{ number: 99, name: "الزلزلة", type: "Madaniyyah", ayat: 8, juz: [30] },
	{ number: 100, name: "العاديات", type: "Makiyyah", ayat: 11, juz: [30] },
	{ number: 101, name: "القارعة", type: "Makiyyah", ayat: 11, juz: [30] },
	{ number: 102, name: "التكاثر", type: "Makiyyah", ayat: 8, juz: [30] },
	{ number: 103, name: "العصر", type: "Makiyyah", ayat: 3, juz: [30] },
	{ number: 104, name: "الهمزة", type: "Makiyyah", ayat: 9, juz: [30] },
	{ number: 105, name: "الفيل", type: "Makiyyah", ayat: 5, juz: [30] },
	{ number: 106, name: "قريش", type: "Makiyyah", ayat: 4, juz: [30] },
	{ number: 107, name: "الماعون", type: "Makiyyah", ayat: 7, juz: [30] },
	{ number: 108, name: "الكوثر", type: "Makiyyah", ayat: 3, juz: [30] },
	{ number: 109, name: "الكافرون", type: "Makiyyah", ayat: 6, juz: [30] },
	{ number: 110, name: "النصر", type: "Madaniyyah", ayat: 3, juz: [30] },
	{ number: 111, name: "المسد", type: "Makiyyah", ayat: 5, juz: [30] },
	{ number: 112, name: "الإخلاص", type: "Makiyyah", ayat: 4, juz: [30] },
	{ number: 113, name: "الفلق", type: "Makiyyah", ayat: 5, juz: [30] },
	{ number: 114, name: "الناس", type: "Makiyyah", ayat: 6, juz: [30] },
];

export { surahs };
