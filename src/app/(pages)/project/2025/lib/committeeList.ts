const imgUrl = process.env.NEXT_PUBLIC_CDN;
const committeeList = [
	// Use 'https://...' when filling linkedin links

	{
		fname: "Imesha",
		lname: "Dilshani",
		email: "imesha@fossuok.org",
		position: "Community Lead",
		linkedin: "https://www.linkedin.com/in/imesha-dilshani-61862422b",
		picture: `${imgUrl}/images/images/blog/profile/imesha-dilshani.avif`,
	},
	{
		fname: "Sahan",
		lname: "Heshan",
		email: "sahan@fossuok.org",
		position: "Secretary",
		linkedin: "https://www.linkedin.com/in/sahan-samarathunga",
		picture: `${imgUrl}/images/summit25/oc/FOSS_Sahan_Heshan.webp`,
	},
	//chair
	{
		fname: "Chamudika",
		lname: "Hasanthi",
		email: "chamudika@fossuok.org",
		position: "Committee Chair",
		linkedin: "https://www.linkedin.com/in/chamudikahasanthi",
		picture: `${imgUrl}/images/summit25/oc/FOSS_Chamudika_Hasanthi.webp`,
	},
	{
		fname: "Wageesha",
		lname: "Narandeniya",
		email: "wageesha@fossuok.org",
		position: "Committee Chair",
		linkedin: "https://www.linkedin.com/in/wageesha-narandeniya",
		picture: `${imgUrl}/images/summit25/oc/FOSS_Wageesha_Narandeniya.webp`,
	},

	{
		fname: "Pathum",
		lname: "Madhusanka",
		email: "pathum@fossuok.org",
		position: "Event Supervisor",
		linkedin: "https://www.linkedin.com/in/pathummadhusanka",
		picture: `${imgUrl}/images/summit25/oc/FOSS_Pathum_Madhusanka.webp`,
	},

	{
		fname: "Udasri",
		lname: "Hasindu",
		email: "udasri@fossuok.org",
		position: "Event Coordinator",
		linkedin: "https://www.linkedin.com/in/udasri-hasindu",
		picture: `${imgUrl}/images/summit25/oc/FOSS_Udasri_Hasindu.webp`,
	},

	//sponsoring team
	{
		fname: "Hansani",
		lname: "Nimasha",
		email: "nimasha@fossuok.org",
		position: "Sponsor Team Supervisor",
		linkedin: "https://www.linkedin.com/in/nimasha-gunathilaka",
		picture: `${imgUrl}/images/summit25/oc/FOSS_Hansani_Nimasha.webp`,
	},
	{
		fname: "Sanjana",
		lname: "Dissanayaka",
		email: "sanjana@fossuok.org",
		position: "Sponsor Team Supervisor",
		linkedin: "https://www.linkedin.com/in/sanjana-dissanayake-b04963302",
		picture: `${imgUrl}/images/summit25/oc/FOSS_Sanjana_Dissanayaka.webp`,
	},
	// {
	//   fname: "Hiumie",
	//   lname: "Hungampola",
	//   email: "",
	//   position: "Sponsorship Team",
	//   linkedin: "http://www.linkedin.com/in/hiumie-hungampola-4340682b2",
	//   picture: `${imgUrl}/images/summit25/oc/FOSS_Hiumie_Hungampola.webp`,
	// },
	// {
	//   fname: "Hasindu",
	//   lname: "Shehan",
	//   email: "",
	//   position: "Sponsorship Team",
	//   linkedin: "https://www.linkedin.com/in/hasindu-liyanage-409153220",
	//   picture: `${imgUrl}/images/summit25/oc/FOSS_Hasindu_Shehan.webp`,
	// },
	// {
	//   fname: "Thurunu",
	//   lname: "Marasinghe",
	//   email: "",
	//   position: "Sponsorship Team",
	//   linkedin: "https://www.linkedin.com/in/thurunuym",
	//   picture: `${imgUrl}/images/summit25/oc/FOSS_Thurunu_Marasinghe.webp`,
	// },

	//logistic team
	// {
	//   fname: "Siluni",
	//   lname: "Gallaba",
	//   email: "",
	//   position: "Logistics Team",
	//   linkedin: "https://www.linkedin.com/in/siluni-gallaba-b17661356",
	//   picture: `${imgUrl}/images/summit25/oc/FOSS_Siluni_Gallaba.webp`,
	// },
	// {
	//   fname: "Mavithya",
	//   lname: "Mihirud",
	//   email: "",
	//   position: "Logistics Team",
	//   linkedin: "https://www.linkedin.com/in/mavithya-mihirud-29b522270",
	//   picture: `${imgUrl}/images/summit25/oc/FOSS_Mavithya_Mihirud.webp`,
	// },

	//designteam
	// {
	//   fname: "Induwara",
	//   lname: "Gamage",
	//   email: "",
	//   position: "Design Team Supervisor",
	//   linkedin: "https://www.linkedin.com/in/induwara-gamage-0777b5286",
	//   picture: `${imgUrl}/images/summit25/oc/FOSS_Induwara_Gamage.webp`,
	// },
	// {
	//   fname: "Kalavarthanan",
	//   lname: "Jogeswaran",
	//   email: "",
	//   position: "Design Team",
	//   linkedin: "https://www.linkedin.com/in/kalavarthanan-jogeswaran-3a2bb81aa",
	//   picture: `${imgUrl}/images/summit25/oc/FOSS_Kalavarthanan_Jogeswaran.webp`,
	// },
	// {
	//   fname: "Thanoban",
	//   lname: "Kamalendran",
	//   email: "",
	//   position: "Design Team",
	//   linkedin: "https://www.linkedin.com/in/kamalendran-thanoban",
	//   picture: `${imgUrl}/images/summit25/oc/FOSS_Thanoban_Kamalendran.webp`,
	// },

	//documentation
	// {
	//   fname: "Supuni",
	//   lname: "Punsarani",
	//   email: "",
	//   position: "Documentation Team Supervisor",
	//   linkedin: "https://www.linkedin.com/in/supuni-wannigama-b4896b25b",
	//   picture: `${imgUrl}/images/summit25/oc/FOSS_Supuni_Punsarani.webp`,
	// },
	// {
	//   fname: "Dulanjika",
	//   lname: "Bandara",
	//   email: "",
	//   position: "Documentation Team",
	//   linkedin: "https://www.linkedin.com/in/dulanjika bandara-9a72082a6",
	//   picture: `${imgUrl}/images/summit25/oc/FOSS_Dulanjika_Bandara.webp`,
	// },

	//accessability

	// {
	//   fname: "Oshani",
	//   lname: "Wickramathilaka",
	//   email: "",
	//   position: "Accessibility Team",
	//   linkedin: "https://www.linkedin.com/in/oshani-wickramathilake",
	//   picture: `${imgUrl}/images/summit25/oc/FOSS_Oshani_Wickramathilaka.webp`,
	// },

	//board member
	// {
	//   fname: "Saroath",
	//   lname: "Farvees",
	//   email: "",
	//   position: "FOSS Board Member",
	//   linkedin: "https://www.linkedin.com/in/saroath-farvees-713366291",
	//   picture: `${imgUrl}/images/summit25/oc/FOSS_Saroath_Farvees.webp`,
	// },

	//placeholders

	{
		fname: "Induwara",
		lname: "Gamage",
		email: "",
		position: "Design Team Lead",
		linkedin: "https://www.linkedin.com/in/induwara-gamage-0777b5286",
		picture: `${imgUrl}/images/summit25/oc/FOSS_Induwara_Gamage.webp`,
	},
];

export default committeeList;
