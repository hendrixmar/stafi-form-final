export const json = {
  showProgressBar: "auto",
  progressBarType: "pages",
  progressBarShowPageNumbers: true,
  progressBarShowPageTitles: true,
  logo: "https://i0.wp.com/getstafi.com/wp-content/uploads/2022/05/getstafi_stafi-logo-az-512.png?fit=512%2C189&ssl=1",
  logoWidth: "auto",
  logoHeight: "80px",
  logoFit: "cover",
  completedHtmlOnCondition: [
    {
      expression: "{nps-score} <= 6 or {rebuy} = false",
      html: {
        default:
          "Thanks for your feedback! We highly value all ideas and suggestions from our customers, whether they're positive or critical. In the future, our team might reach out to you to learn more about how we can further improve our product so that it exceeds your expectations.",
        fr: "Merci pour vos commentaires! Nous accordons une grande importance à toutes les idées et suggestions de nos clients, qu'elles soient positives ou critiques. À l'avenir, notre équipe pourrait vous contacter pour en savoir plus sur la façon dont nous pouvons encore améliorer notre produit afin qu'il dépasse vos attentes.",
      },
    },
    {
      expression: "{nps-score} = 6 or {nps-score} = 7",
      html: {
        default:
          "Thanks for your feedback. Our goal is to create the best possible product, and your thoughts, ideas, and suggestions play a major role in helping us identify opportunities to improve.",
        fr: "Merci pour vos commentaires. Notre objectif est de créer le meilleur produit possible, et vos réflexions, idées et suggestions jouent un rôle majeur pour nous aider à identifier les opportunités d'amélioration.",
      },
    },
    {
      expression: "{nps-score} >= 8",
      html: {
        default:
          "Thanks for your feedback. It's great to hear that you're a fan of our product. Your feedback helps us discover new opportunities to improve it and make sure you have the best possible experience.",
        fr: "Merci pour vos commentaires. Nous sommes ravis d'entendre que vous avez apprécié notre produit. Vos commentaires nous aident à découvrir de nouvelles opportunités pour l'améliorer et vous assurer la meilleure expérience possible.",
      },
    },
  ],
  pages: [
    {
      name: "TELL US ABOUT YOUR BUSINESS",
      elements: [
        {
          name: "person-form",
          type: "text",
          title: "Person filling the form",
          inputType: "text",
          isRequired: true,
        },
        {
          name: "company-name",
          type: "text",
          title: "Company Name",
          inputType: "text",
          isRequired: true,
        },
        {
          name: "website",
          type: "text",
          title: "Website",
          inputType: "text",
          isRequired: true,
        },
        {
          name: "office-address",
          description: "Address and directions to reach your office:.",
          type: "text",
          title: "Office Address",
          inputType: "text",
          isRequired: true,
        },
        {
          name: "business-nature",
          type: "text",
          title: "What is the nature of your business",
          inputType: "text",
          isRequired: true,
        },
        {
          name: "number-employees",
          type: "text",
          title: "How many employees do you have?",
          inputType: "text",
          isRequired: true,
        },
        {
          name: "operating-hours",
          type: "text",
          title: "What are your operating hours?",
          inputType: "text",
          isRequired: true,
        },
      ],
    },
    {
      name: "HOW WOULD YOU LIKE US TO HELP",
      elements: [
        {
          name: "service-need",
          type: "text",
          title: "What service do you need Stafi Live to provide?",
          description: "Basic reception/ Scheduling/ Transferring Calls",
          inputType: "text",
          isRequired: true,
        },
        {
          name: "when-need",
          type: "text",
          title: "When do you need Stafi Live?",
          description: "24/7, after hours and weekends, business hours.",
          inputType: "text",
          isRequired: true,
        },
        {
          name: "volume-call",
          type: "text",
          title: "What is your average daily call volume?",
          inputType: "text",
          isRequired: true,
        },
      ],
    },
    {
      name: "RULES OF ENGAGEMENT",
      elements: [
        {
          type: "radiogroup",
          name: "transfer-call",
          description:
            "If yes please provide the following information for each one",
          title: {
            default:
              "Do you want us to transfer calls to specific team members?",
          },
          choices: [
            {
              value: "yes",
              text: {
                default: "Sure!",
                fr: "Bien sur!",
              },
            },
            {
              value: "no",
              text: {
                default: "No",
                fr: "Non merci.",
              },
            },
          ],
        },
        {
          type: "paneldynamic",
          name: "vacation-info",
          title: "Do you want us to transfer calls to specific team members?",
          visibleIf: "{transfer-call} = 'yes'",
          panelCount: 1,
          maxPanelCount: 10,
          confirmDelete: true,
          templateElements: [
            {
              type: "text",
              name: "name-team-member",
              title: "Name",
            },

            {
              type: "text",
              name: "phone-team-member",
              title: "Phone",
            },

            {
              type: "text",
              name: "email-team-member",
              title: "Email",
            },
            {
              type: "text",
              name: "position-team-member",
              title: "Position",
            },
            {
              type: "text",
              name: "position-team-member",
              title: "Reasons to reach out",
            },
            {
              type: "text",
              name: "available-team-member",
              title: "Availability to reach out",
            },
            {
              type: "text",
              name: "position-team-member",
              title: "If they do not answer what should we do?",
            },
            {
              type: "text",
              name: "position-team-member",
              title: "After business hours what should we do?",
            },
            {
              type: "radiogroup",
              name: "send-text-team-member",
              title:
                "Would you like us to send a text message to this point of contact?",
              choices: [
                {
                  value: "yes",
                  text: {
                    default: "Sure!",
                    fr: "Bien sur!",
                  },
                },
                {
                  value: "no",
                  text: {
                    default: "No",
                    fr: "Non merci.",
                  },
                },
              ],
            },
            {
              type: "text",
              name: "when-text-message",
              visibleIf: "{send-text-team-member} = 'yes'",
              title: {
                default: "Provide a link:",
              },
              validators: [
                {
                  type: "website",
                },
              ],
              placeholder: {
                default: "Enter your website",
              },
            },
          ],
        },
        {
          type: "text",
          name: "handle-new-client",
          title: "How do you want us to handle calls from new clients?",
          visibleIf: "{transfer-call} = 'yes'",
        },
        {
          type: "text",
          name: "handle-existing-client",
          title: "How do you want us to handle calls from existing clients?",
          visibleIf: "{transfer-call} = 'yes'",
        },
        {
          type: "text",
          name: "other-scenarios",
          title: "How do you want us to handle calls from other scenarios?",
          visibleIf: "{transfer-call} = 'yes'",
        },
        {
          type: "text",
          name: "urgent-calls",
          title: "How should urgent calls be handled?",
          visibleIf: "{transfer-call} = 'yes'",
        },
        {
          type: "text",
          name: "urgent-call-definition",
          title: "What would you define as urgent?",
          visibleIf: "{transfer-call} = 'yes'",
        }
      ],
    },
    {
      name: "CURIOUS ABOUT YOU",
      elements: [
        {
          name: "who-handle",
          type: "text",
          title: "How do you currently handle incoming calls?",
          description: "Basic reception/ Scheduling/ Transferring Calls",
          inputType: "text",
          isRequired: true,
        },
        {
          name: "greeting-template",
          type: "text",
          title:
            "Do you agree with the following greeting or would you like to make any changes?",
          defaultValue: "Hi! Thank you for calling [Company Name].?",
          inputType: "text",
          isRequired: true,
        },
        {
          name: "volume-call",
          type: "text",
          title: "What is your average daily call volume?",
          inputType: "text",
          isRequired: true,
        },
      ],
    },
    {
      name: "ADDING VALUE TO YOUR BUSINESS",
      elements: [
        {
          type: "radiogroup",
          name: "appointments",
          title: {
            default: "Would you like us to schedule appointments for you?",
          },
          choices: [
            {
              value: "yes",
              text: {
                default: "Sure!",
                fr: "Bien sur!",
              },
            },
            {
              value: "no",
              text: {
                default: "No",
                fr: "Non merci.",
              },
            },
          ],
        },
        {
          type: "text",
          name: "email",
          visibleIf: "{appointments} = 'yes'",
          title: {
            default: "Provide a link:",
          },
          validators: [
            {
              type: "website",
            },
          ],
          placeholder: {
            default: "Enter your website",
          },
        },
        {
          type: "text",
          name: "languages-available",
          visibleIf: "{appointments} = 'yes'",
          title: {
            default: "Appointments are available in what languages?",
          },
          validators: [
            {
              type: "email",
            },
          ],
          placeholder: {
            default: "Enter your email here",
          },
        },
        {
          type: "text",
          name: "appointments-free-paid",
          visibleIf: "{appointments} = 'yes'",
          title: {
            default: "Are they free or paid appointments?",
          },
          validators: [
            {
              type: "email",
            },
          ],
          placeholder: {
            default: "Enter your email here",
          },
        },
      ],
    },
    {
      name: "GETTING YOU INFORMED",
      elements: [
        {
          type: "radiogroup",
          name: "receive-information",
          title: {
            default: "How would you like to receive the information from the calls?",
          },
          choices: [
            {
              value: "email-information",
              text: {
                default: "Email",
              },
            },
            {
              value: "stafi-live-interface",
              text: {
                default: "Stafi Live",
                
              },
            },
          ],
        },

        {
          type: "text",
          name: "email-send-information",
          visibleIf: "{receive-information} = 'email-information'",
          isRequired: true,
          title: {
            default: "Email",
          },
          
        },
        
        {
          type: "text",
          name: "email-send-information",
          visibleIf: "{receive-information} = 'stafi-live-interface'",
          isRequired: true,
          title: {
            default: "Which email/User ID would you prefer to use for accessing our Stafi Live interface? ",
          },
          
        },
      ]
    },
    
  ],
  showPrevButton: false,
  showQuestionNumbers: "off",
  completeText: {
    fr: "Envoyer",
  },
  widthMode: "static",
  width: "1000px",
};
