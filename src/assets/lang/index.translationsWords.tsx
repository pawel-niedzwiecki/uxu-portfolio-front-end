interface translationsWordsTemplate {
  pl: {
    section: {
      start: {
        content: {
          h2: string;
          h1: string;
          scrambler: any[];
        };
        modal: {
          button: string;
          h1: string;
          h2: string;
        };
        link: {
          portfolio: string;
          history: string;
          contact: string;
        };
      };
      portfolio: {
        title: string;
        link: string;
      };
      history: {
        title: string;
      };
      contact: {
        title: string;
      };
    };
  };
  en: {
    section: {
      start: {
        content: {
          h2: string;
          h1: string;
          scrambler: any[];
        };
        modal: {
          button: string;
          h1: string;
          h2: string;
        };
        link: {
          portfolio: string;
          history: string;
          contact: string;
        };
      };
      portfolio: {
        title: string;
        link: string;
      };
      history: {
        title: string;
      };
      contact: {
        title: string;
      };
    };
  };
}

const translationsWords: translationsWordsTemplate = {
  pl: {
    section: {
      start: {
        content: {
          h2: "Hej!, mam na imię Paweł",
          h1: "jestem programistom",
          scrambler: ["JavaScript", "Node.js", "SQL"],
        },
        modal: {
          button: "Porozmawiajmy o Twoim pomyśle",
          h1: "Hej! przedstaw się",
          h2: "Poniewaz fajne pomysły zaczynają się od tej wiasomosći",
        },
        link: {
          portfolio: "portfolio",
          history: "moja historia",
          contact: "kontakt",
        },
      },
      portfolio: {
        title: "portfolio",
        link: "Wszystko",
      },
      history: {
        title: "Moja historia",
      },
      contact: {
        title: "Contact",
      },
    },
  },
  en: {
    section: {
      start: {
        content: {
          h2: "Hey!, my name is Paweł",
          h1: "I am programmer",
          scrambler: ["JavaScript", "Node.js", "SQL"],
        },
        modal: {
          button: "let's talk about You idea",
          h1: "Hey! Introduce yourself",
          h2: "Because best project come start from this message",
        },
        link: {
          portfolio: "portfolio",
          history: "my history",
          contact: "contact",
        },
      },
      portfolio: {
        title: "portfolio",
        link: "All",
      },
      history: {
        title: "My history",
      },
      contact: {
        title: "Contact",
      },
    },
  },
};

export default translationsWords;
