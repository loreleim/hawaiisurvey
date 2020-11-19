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
        "in the following questions regarding industries in Hawai'i, you will be asked to give an approval or disapproval rating."
      ]
  
      this.approvalQuestions = [
        "tourism as the only viable industry in Hawai’i",
        "industries other than tourism to stimulate economy",
        "tourists",
        "tourism",
        "recreational fishing",
        "economic impacts of commericial fishing",
        "environmental impacts of commericial fishing",
        "recreational surfing",
        "competitive surfing",
        "cruises",
        "economic impacts of tourism",
        "environmental impacts of tourism",
        "American West Coast Tourists",
        "American East Coast Tourists",
        "Japanese Tourists",
        "Canadian Tourists",
        "European Tourists",
        "tourists purchasing products from local businesses",
        "tourists buying local farmers markets",
        "tourists visiting Hawai’i for leisure",
        "tourists populating beaches",
        "a non-local buying a home in Hawai'i",
        "tourists visiting Hawai’i for business",
        "tourists visiting friends or family in the islands",
        "tourists staying at local hotels",
        "tourists staying at mainland owned chains such as Marriott, Hilton, etc.",
        "non-local businesses employing Hawai’i residents",
        "non-local business chains building on local land",
        "profiting off of cultural activities i.e. PCC, Aulani",
        "romanticization of Hawaiian culture",
        "growing native plants",
        "growing non-native plants",
        "accessibility of native plant saplings or seeds",
        "purchasing produce from a locals farmers market",
        "military occupation",
        "mainland military families living in Hawai’i ",
        "local military families",
        "mainland military families renting civilian homes instead of on-base homes",
        "mainland military families stimulating economy",
        "statues of colonial settlers i.e. McKinley",
        "developments designed by mainland architects",
        "developments designed by local architects",
        "Statues of Native Hawaiians",
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
  