class Database {
    constructor()
    {
      this.demographicQuestions = [
        {
          questionText: "What is your age?",
          answerOptions: [
            { answerText: "19 and under" },
            { answerText: "20 to 29" },
            { answerText: "30 to 39" },
            { answerText: "40 to 49" },
            { answerText: "50 and over" }
          ]
        },
        {
          questionText: "What are your pronouns?",
          description:
            "We require the following information for the purposes of helping our staff use the most respectful language when addressing you, understanding our population better, and fulfilling our reporting requirements. ",
          answerOptions: [
            { answerText: "She/Her/Hers" },
            { answerText: "He/Him/His" },
            { answerText: "They/Them/Theirs" },
            { answerText: "Other" }
          ]
        },
        {
          questionText: "Were you born in Hawai'i?",
          answerOptions: [{ answerText: "Yes" }, { answerText: "No" }]
        },
        {
          questionText:
            "Have you lived in Hawai'i consistently from ages 1 - 18?",
          answerOptions: [{ answerText: "Yes" }, { answerText: "No" }]
        }
      ];


      this.multiSelect = [
        {
          questionText:
            "How do you describe your ethnicity? Select all that apply",
          answerOptions: [
            { answerText: "Indigenous Person(s)" },
            { answerText: "Asian" },
            { answerText: "Black / African American" },
            { answerText: "Pacific Islander" },
            { answerText: "Mixed Race" },
            { answerText: "Unknown" },
            { answerText: "Prefer to Self Describe" },
            { answerText: "Do not wish to answer" }
          ]
        }
      ]

      this.context = [
        "in the following questions regarding industries in Hawai'i, you will be asked to give an approval or disapproval rating.",
        "As reported by a 2018 NOAA ENOW study, Hawai'i's economy has a strong dependency on the ocean. Majority is still tourism based ocean recreation. We'll now gauge your approval ratings on ocean industries.",
        "The next few questions ask of your approval ratings on local agriculture",
        "Now here are some questions about military presence in Hawai'i ",
        "And finally, some architectural and arts & culture questions"
      ]
  
      this.approvalQuestions = [
        "Hawai'i depending on tourism to stimulate economy",
        "exploring industries other than tourism as economic stimulants",
        "tourists",
        "tourism",
        "/nothing should show here/",
        "the economic impacts of tourism",
        "the environmental impacts of tourism",
        "tourists purchasing products from local businesses",
        "tourists buying from local farmers markets",
        "tourists visiting Hawai’i for leisure",
        "tourists populating beaches",
        "profiting off of tourist-branded cultural activities i.e. Polynesian Cultural Center or Aulani",
        "a non-local buying a home in Hawai'i",
        "tourists visiting Hawai’i for business",
        "tourists visiting friends or family in the islands",
        "recreational fishing",
        "economic impacts of commercial fishing",
        "environmental impacts of commercial fishing",
        "recreational surfing",
        "competitive surfing",
        "cruises docking in Hawai'i",
        "/nothing should show here/",
        "growing non-native plants",
        "purchasing produce from local farmers markets vs. Walmart, Longs, Times, etc.",
        "military occupation",
        "mainland military families living in Hawai’i ",
        "local military families",
        "mainland military families renting civilian homes instead of on-base homes",
        "mainland military families stimulating economy",
        "statues of colonial settlers i.e. McKinley",
        "non-local businesses employing Hawai’i residents",
        "non-local business chains building on local land",
        "developments designed by mainland architects",
        "developments designed by local architects",
        "Studios filming TV Shows/Movies on the islands",
        "The portrayal of Hawai'i on fictional media", 
      ];

      this.tourismGroups = [
        "American West Coast Tourists",
        "American East Coast Tourists",
        "Japanese Tourists",
        "Canadian Tourists",
        "European Tourists",
      ]

      this.reviewQuestions = [
        "Your age",
        "Your pronouns",
        "Were you born in Hawai'i?",
        "Have you lived in Hawai'i consistently from ages 1 - 18?",
        "Ethnicity",
        "Hawai'i depending on tourism to stimulate economy",
        "exploring industries other than tourism as an economic stimulants",
        "tourists",
        "tourism",
        "Which tourist groups' spending, visiting, or environmental-care habits do you approve of most?",
        "the economic impacts of tourism",
        "the environmental impacts of tourism",
        "tourists purchasing products from local businesses",
        "tourists buying from local farmers markets",
        "tourists visiting Hawai’i for leisure",
        "tourists populating beaches",
        "profiting off of tourist-branded cultural activities i.e. Polynesian Cultural Center or Aulani",
        "a non-local buying a home in Hawai'i",
        "tourists visiting Hawai’i for business",
        "tourists visiting friends or family in the islands",
        "recreational fishing",
        "economic impacts of commercial fishing",
        "environmental impacts of commercial fishing",
        "recreational surfing",
        "competitive surfing",
        "cruises docking in Hawai'i",
        "growing non-native plants",
        "purchasing produce from a locals farmers market vs. Walmart, Longs, Times, etc.",
        "military occupation",
        "mainland military families living in Hawai’i ",
        "local military families",
        "mainland military families renting civilian homes instead of on-base homes",
        "mainland military families stimulating economy",
        "statues of colonial settlers i.e. McKinley",
        "non-local businesses employing Hawai’i residents",
        "non-local business chains building on local land",
        "developments designed by mainland architects",
        "developments designed by local architects",
        "Studios filming TV Shows/Movies on the islands",
        "The portrayal of Hawai'i on fictional media", 
      ];
  
      this.options = ["approve", "disapprove"];
      this.userResponses = [];
      this.totalSteps = this.demographicQuestions.length + this.context.length + this.approvalQuestions.length;
    }
  }
  
  const store = new Database();
  export default store;
  