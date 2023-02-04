export type GreetProgram = {
  version: "0.1.0";
  name: "greet_program";
  instructions: [
    {
      name: "greet";
      accounts: [
        {
          name: "sender";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        }
      ];
    }
  ];
  events: [
    {
      name: "GreetEvent";
      fields: [
        {
          name: "name";
          type: "string";
          index: false;
        },
        {
          name: "sender";
          type: "publicKey";
          index: false;
        }
      ];
    }
  ];
};

export const IDL: GreetProgram = {
  version: "0.1.0",
  name: "greet_program",
  instructions: [
    {
      name: "greet",
      accounts: [
        {
          name: "sender",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
      ],
    },
  ],
  events: [
    {
      name: "GreetEvent",
      fields: [
        {
          name: "name",
          type: "string",
          index: false,
        },
        {
          name: "sender",
          type: "publicKey",
          index: false,
        },
      ],
    },
  ],
};
