export default [{
    id: "AAAAAA",
    label: "Do you own a car?",
    type: "radio",
    subInputs: [{
      id: "BBBBBB",
      label: "What is your car's model?",
      type: "text",
      predicate: {
        condition: "equals",
        value: "yes"
      },
      subInputs: [{
          id: "CCCCCCC",
          label: "What color is your Ford?",
          type: "text",
          predicate: {
            condition: "equals",
            value: "Ford"
          }
        },
        {
          id: "DDDDDDD",
          label: "How many wheels on your Ford?",
          type: "number",
          predicate: {
            condition: "equals",
            value: "Ford"
          },
          subInputs: [{
            id: "FFFFFFFFFF",
            label: "Is your Ford road legal?",
            type: "radio",
            predicate: {
              condition: "greaterThan",
              value: "4"
            }
          }]
        },
        {
          id: "GGGGGGGGGGGG",
          label: "Has your Toyota been recalled?",
          type: "radio",
          predicate: {
            condition: "equals",
            value: "Toyota"
          }
        }
      ]
    }]
  },
  {
    id: "HHHHHHHHHH",
    label: "What year was your building built?",
    type: "number"
  },
  {
    id: "IIIIIIIIII",
    label: "What's your company name?",
    type: "text"
  }
];
