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
    position: "Sponsorship Team Lead",
    linkedin: "https://www.linkedin.com/in/nimasha-gunathilaka",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Hansani_Nimasha.webp`,
  },
  {
    fname: "Sanjana",
    lname: "Dissanayaka",
    email: "sanjana@fossuok.org",
    position: "Sponsorship Team Lead",
    linkedin: "https://www.linkedin.com/in/sanjana-dissanayake-b04963302",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Sanjana_Dissanayaka.webp`,
  },
  {
    fname: "Induwara",
    lname: "Gamage",
    email: "empty",
    position: "Design Team Lead",
    linkedin: "https://www.linkedin.com/in/induwara-gamage-0777b5286",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Induwara_Gamage.webp`,
  },
  {
    fname: "Supuni",
    lname: "Punsarani",
    email: "empty",
    position: "Documentation Team Lead",
    linkedin: "https://www.linkedin.com/in/supuni-wannigama-b4896b25b",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Supuni_Punsarani.webp`,
  },
  //sponsorship team
  {
    fname: "Thurunu",
    lname: "Marasinghe",
    email: "empty",
    position: "Sponsorship Team",
    linkedin: "https://www.linkedin.com/in/thurunuym",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Thurunu_Marasinghe.webp`,
  },
  {
    fname: "Hiumie",
    lname: "Hungampola",
    email: "empty",
    position: "Sponsorship Team",
    linkedin: "http://www.linkedin.com/in/hiumie-hungampola-4340682b2",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Hiumie_Hungampola.webp`,
  },
  {
    fname: "Hasindu",
    lname: "Shehan",
    email: "empty",
    position: "Sponsorship Team",
    linkedin: "https://www.linkedin.com/in/hasindu-liyanage-409153220",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Hasindu_Shehan.webp`,
  },
  {
    fname: "Nirusha",
    lname: "Wimalasiri ",
    email: "empty",
    position: "Sponsorship Team",
    linkedin: "https://www.linkedin.com/in/nirusha-wimalasiri-312343316",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Nirusha_Wimalasiri.webp`,
  },
  {
    fname: "Havindu",
    lname: "Hesara ",
    email: "empty",
    position: "Sponsorship Team",
    linkedin: "https://www.linkedin.com/in/havindu-fonseka-46b8b3283",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Havindu_Hesara.webp`,
  },

  //logistic team
  {
    fname: "Siluni",
    lname: "Gallaba",
    email: "empty",
    position: "Logistics Team",
    linkedin: "https://www.linkedin.com/in/siluni-gallaba-b17661356",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Siluni_Gallaba.webp`,
  },
  {
    fname: "Mavithya",
    lname: "Mihirud",
    email: "empty",
    position: "Logistics Team",
    linkedin: "https://www.linkedin.com/in/mavithya-mihirud-29b522270",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Mavithya_Mihirud.webp`,
  },
  {
    fname: "Vimukthi",
    lname: "Paranagama",
    email: "empty",
    position: "Logistics Team",
    linkedin: "https://www.linkedin.com/in/vimukthi-paranagama-3a54b0293",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Vimukthi_Paranagama.webp`,
  },

  //designteam
  {
    fname: "Pasindu ",
    lname: "Wickramasinghe",
    email: "empty",
    position: "Design Team",
    linkedin: "https://www.linkedin.com/in/pasinduwickrama",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Pasindu_Wickramasinghe.webp`,
  },
  {
    fname: "Kalavarthanan",
    lname: "Jogeswaran",
    email: "empty",
    position: "Design Team",
    linkedin: "https://www.linkedin.com/in/kalavarthanan-jogeswaran-3a2bb81aa",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Kalavarthanan_Jogeswaran.webp`,
  },
  {
    fname: "Thamara",
    lname: "Bhagya",
    email: "empty",
    position: "Design Team",
    linkedin: "http://linkedin.com/in/thamarabhagya107",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Thamara_Bhagya.webp`,
  },
  {
    fname: "Thanoban",
    lname: "Kamalendran",
    email: "empty",
    position: "Design Team",
    linkedin: "https://www.linkedin.com/in/kamalendran-thanoban",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Thanoban_Kamalendran.webp`,
  },

  //documentation
  {
    fname: "Akila",
    lname: "Fernando ",
    email: "empty",
    position: "Documentation Team",
    linkedin: "https://www.linkedin.com/in/akila-fernando-b809b0297",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Akila_Fernando.webp`,
  },
  {
    fname: "Sahani",
    lname: "Amami ",
    email: "empty",
    position: "Documentation Team",
    linkedin: "https://www.linkedin.com/in/sahani-amami-94304632a",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Sahani_Amami.webp`,
  },

  // accessability

  {
    fname: "Oshani",
    lname: "Wickramathilaka",
    email: "empty",
    position: "Accessibility Team",
    linkedin: "https://www.linkedin.com/in/oshani-wickramathilake",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Oshani_Wickramathilaka.webp`,
  },

  //board member
  {
    fname: "Pawan",
    lname: "Perera",
    email: "empty",
    position: "FOSS Board Member",
    linkedin: "www.linkedin.com/in/pawan-perera",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Pawan_Perera.webp`,
  },
  {
    fname: "Chames",
    lname: "Dinuka",
    email: "empty",
    position: "FOSS Board Member",
    linkedin: "www.linkedin.com/in/chamesdinuka",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Chames_Dinuka.webp`,
  },
  {
    fname: "Nishanthan",
    lname: "Ramkumar",
    email: "empty",
    position: "FOSS Board Member",
    linkedin: "www.linkedin.com/in/nishanthan03",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Nishanthan_Ramkumar.webp`,
  },
  {
    fname: "Dulanjika",
    lname: "Bandara",
    email: "empty",
    position: "FOSS Board Member",
    linkedin: "https://www.linkedin.com/in/dulanjika bandara-9a72082a6",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Dulanjika_Bandara.webp`,
  },
  {
    fname: "Saroath",
    lname: "Farvees",
    email: "empty",
    position: "FOSS Board Member",
    linkedin: "https://www.linkedin.com/in/saroath-farvees-713366291",
    picture: `${imgUrl}/images/summit25/oc/FOSS_Saroath_Farvees.webp`,
  },

  //placeholders
  {
    fname: "Coming",
    lname: "Soon",
    email: "empty",
    position: "Committee Member",
    linkedin: "https://www.linkedin.com",
    picture: `${imgUrl}/images/summit25/ods25.webp`,
  },
  {
    fname: "Coming",
    lname: "Soon",
    email: "empty",
    position: "FOSS Board Member",
    linkedin: "https://www.linkedin.com",
    picture: `${imgUrl}/images/summit25/ods25.webp`,
  },
];

export default committeeList;
