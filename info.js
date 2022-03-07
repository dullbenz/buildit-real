let info = {
  name: "Fuashi Lot-Bill Dulley",
  logo_name: "Fuashi",
  flat_picture: require("./src/assets/home-buildit.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I'm Fuashi Lot-Bill, An expert in Building Construction and Maintainance. With over 7 years of experience in Building Construction, My team and I are the best fit for all your construction needs",
  links: {
    linkedin: "https://www.linkedin.com/in/lot-bill-dulley-fuashi/",
    github: "https://github.com/dullbenz"
  },
  education: [
    {
      name: "Ecole Nationale Superieure Polytechnique",
      place: "Yaounde - Cameroon",
      date: "Sep, 2016 - currently",
      degree: "Masters in software engineering",
      gpa: "3.1/4.0",
      description:
        "",
      skills: [
        "Building Construction",
        "Roofing",
        "Site Preparation and Levelling",
        "Brick Masonry Work",
        "Electrical and Plumbing"
      ]
    },
    {
      name: "BGS Molyko",
      place: "Buea - Cameroon",
      date: "Sep, 2014 - June, 2016",
      degree: "General Certificate of Education, Advanced Level",
      gpa: "3.8/4.0",
      description:
        "",
    },
  ],
  experience: [
    {
      name: "Fuashi's Construction",
      place: "Yaounde - Cameroon",
      date: "July, 2015 - currently",
      position: "Chief Executive Officer",
      description:
        "",
      skills: ["Site Preparation", "Brick Masonry", "Roofing", "Plumbing", "Electricals", "Tiling"]
    }
  ],
  skills: [
    {
      title: "Roofing",
      info: [
        "Carpentary","Hammering","Alluminium sheeting"],
      icon: "roofing",
      isMaterial: true
    },
    {
      title: "Floors",
      info: [
        "Tiling","Soft Cementing","Hard Cementing"],
      icon: "grid_view",
      isMaterial: true,
      type: "material-icons-sharp cut-off-icon"
    },
    {
      title: "Foundation",
      info: ["Foundation tracing", "Site testing", "Brick Moulding", "Soil Reinforcement"],
      icon: "foundation",
      isMaterial: true,
      type: "material-icons-round"
    },
    {
      title: "Walls",
      info: ["Plastering", "Soft Plastering", "Sand Plastering", "Tiling"],
      icon: "fa-solid fa-igloo"
    },
  ],
  portfolio: [
    {
      name: "Hotel SINAHA Project",
      pictures: [
        {
          img: require("./src/assets/full/sinaha/sinaha0.jpg")
        },
        {
          img: require("./src/assets/full/sinaha/sinaha1.jpg")
        },
        {
          img: require("./src/assets/full/sinaha/sinaha2.jpg")
        },
      ],
      technologies: ["Building Construction", "Site Preparation", "Brick Masonry", "Electrical and Plumbing", "Tiling"],
      category: "construction",
      date: "Aug, 2020 - December, 2021",
      description:
        " Full reconstruction of the SINAHA hotel located opposite Polytechnique Yaounde. We started the project from ground up to completion coupled with some degree of furnishing "
    },
    {
      name: "Mountain Height Building Construction",
      pictures: [
        {
          img: require("./src/assets/full/mountain_height/cons0.jpg")
        },
        {
          img: require("./src/assets/full/mountain_height/cons1.jpg")
        },
        {
          img: require("./src/assets/full/mountain_height/cons2.jpg")
        }
      ],
      technologies: ["Site Preparation", "Brick Masonry", "Plastering", "Tiling"],
      category: "construction",
      date: "Aug, 2017 - May 2018",
      description:
        "The Mountain Height building located at Carrefour Biyemassi - Yaounde opposite General express is one of our very first projects which were carried successful and with great satisfaction from our client"
    },
    {
      name: "Hotel la residence wall work",
      pictures: [
        {
          img: require("./src/assets/walls/wall00.png")
        }
      ],
      technologies: ["Soft Plastering", "Plastering", "wall design"],
      category: "walls",
      date: "June 2018 - 3 weeks",
      description:
        "A top notch wall desing conceived for Hotel La Residence situated opposite Polytech Yaounde"
    },
    {
      name: "Eta Palace Hotel Walls",
      pictures: [
        {
          img: require("./src/assets/walls/wall0.jpg")
        }
      ],
      technologies: ["brick work"],
      category: "walls",
      date: "Aug 2016 - September 2016",
      description:
        "Interior redesign of Eta Palace Hotel - Buea walls"
    },
    {
      name: "HIMS Buea Exterior walls",
      pictures: [
        {
          img: require("./src/assets/walls/wall2.jpg")
        }
      ],
      technologies: ["concrete art"],
      category: "walls",
      date: "Aug 2019 - September 2019",
      description:
        "The project here was to build the fence and external walls of the classrooms for HIMS Buea. The standing fence is a masterpiece"
    },
    {
      name: "Roofing at Mr. Eret Roland's Residence",
      title: "Mr. Eret Roland's Residence",
      pictures: [
        {
          img: require("./src/assets/roofing/roland/roland0.jpg"),
          title: "Top View"
        },
        {
          img: require("./src/assets/roofing/roland/roland1.jpg"),
          title: "Side View"
        },
        {
          img: require("./src/assets/roofing/roland/roland2.jpg"),
          title: "Front View"
        }
      ],
      technologies: ["Alluminium sheeting", "Sheet manipulation","Carpentary","Hammering"],
      category: "roofing",
      date: "Apr, 2019 - May, 2019",
      description:
      "We provided a state of the art Roof Structure comprising of the most durable roofing sheets, plated with fortified stainless steel and carefully painted to the taste of the client."
    },
    {
      name: "New Layout Roofing at Nkol Bisson - Yaounde",
      title: "New Layout at Nkol Bisson",
      pictures: [
        {
          img: require("./src/assets/roofing/new_layout/general-view.jpg"),
          title: "General View"
        },
        {
          img: require("./src/assets/roofing/new_layout/side-view.jpg"),
          title: "Side View"
        },
        {
          img: require("./src/assets/roofing/new_layout/front-view.jpg"),
          title: "Front View"
        }
      ],
      technologies: ["Alluminium sheeting", "Sheet manipulation","Carpentary","Hammering"],
      category: "roofing",
      date: "Apr, 2020 - May, 2020",
      description:
      "Newly constructed house in new layout section of Nkol Bisson Roof snapshot"
    },
    {
      name: "St Peter and Paul Parish Buea town, Roofing",
      title: "St Peter and Paul Parish",
      pictures: [
        {
          img: require("./src/assets/roofing/bueatown_parish/church.jpg"),
          title: "Top View"
        }
      ],
      technologies: ["Alluminium sheeting", "Sheet manipulation","Carpentary","Hammering"],
      category: "roofing",
      date: "Jan, 2021 - May, 2021",
      description:
      "The Project for the roofing of this parish was quite challenging as we faced indadequate material but we conceived a solution to this problem which proved to efficient. Contact us to find out how we did it?"
    }
  ]
};

export default info;
