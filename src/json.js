export const json = {
  showProgressBar: "auto",
  progressBarType: "pages",
  progressBarShowPageNumbers: true,
  progressBarShowPageTitles: true,
  logo: "https://i0.wp.com/getstafi.com/wp-content/uploads/2022/05/getstafi_stafi-logo-az-512.png?fit=512%2C189&ssl=1",
  logoWidth: "auto",
  logoHeight: "80px",
  logoFit: "cover",
  pages: [
    {
      name: "INTRODUCTION",
      elements: [

      ],
    },

    {
      name: "TELL US ABOUT YOUR BUSINESS",
      elements: [
        {
          name: "person-form",
          type: "text",
          title: "Person filling the form",
          inputType: "text",
          isRequired: true,
          maxLength: 50

        },
        {
          name: "company-name",
          type: "text",
          title: "Company Name",
          inputType: "text",
          isRequired: true,
          maxLength: 50

        },
        {
          name: "website",
          type: "text",
          title: "Website",
          inputType: "text",
          isRequired: true,
          maxLength: 100

        },
        {
          name: "office-address",
          description: "Address and directions to reach your office:.",
          type: "text",
          title: "Office Address",
          inputType: "text",
          isRequired: true,
          maxLength: 100

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
          type: "number",
          title: "How many employees do you have?",
          inputType: "number",
          isRequired: true,
          validators: [{
            "type": "numeric",
            "text": "Value must be within the range of 0 to 100",
            "minValue": 1,
            "maxValue": 100
          }]
        },
        {
          name: "operating-hours-open",
          title: "Open hours",
          type: "text",
          inputType: "time",
          isRequired: true,
        },
        {
          name: "operating-hours-close",
          type: "text",
          title: "Close hours",
          inputType: "time",
          isRequired: true,
          validators: [
            {
              type: "expression",
              expression: "{operating-hours-open} < {operating-hours-close}",
              text: "End time must be later than start time."
            }
          ]
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
          inputType: "number",
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
              type: "email",
              name: "email-team-member",
              title: "Email member",
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
              maxLength: 500

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
          type: "radiogroup",
          title:
            "Do you agree with the following greeting or would you like to make any changes?",
          description: "Hi! Thank you for calling [Company Name]. My name is [Agent\'s Name]. Please, be aware that this call may be monitored or recorded for quality assurance purposes.  How can I assist you today?",
          inputType: "text",
          isRequired: true,
          choices: [
            {
              value: "yes",
              text: {
                default: "Yes",
              },
            },
            {
              value: "no",
              text: {
                default: "No",
              },
            },
          ],
        },
        {
          type: "text",
          name: "greeting-own-template",
          visibleIf: "{greeting-template} = 'no'",
          title: {
            default: "Write your own template:",
          },
          validators: [
            {
              type: "website",
            },
          ],
          placeholder: {
            default: "Enter your website",
          },
        }
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
          name: "website-link",
          inputType: "website",
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
              type: "text",
            },
          ],
          placeholder: {
            default: "Enter your language seperated by commas",
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
              type: "text",
            },
          ],

        },
      ],
    },
    {
      name: "GETTING YOU INFORMED",
      elements: [
        {
          type: "checkbox",
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
          visibleIf: "{receive-information} contains 'email-information'",
          isRequired: true,
          title: {
            default: "Email",
          },
          
        },
        
        {
          type: "text",
          name: "email-send-information",
          visibleIf: "{receive-information} contains 'stafi-live-interface'",
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
