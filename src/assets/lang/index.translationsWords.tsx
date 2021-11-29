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
    forms: {
      name: string;
      phone: string;
      email: string;
      message: string;
      buttonSend: string;
      clausureRodo: string;
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
    forms: {
      name: string;
      phone: string;
      email: string;
      message: string;
      buttonSend: string;
      clausureRodo: string;
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
    forms: {
      name: "Imię",
      phone: "Telefon",
      email: "email",
      message: "Twoja wiadomosć",
      buttonSend: "wyślij",
      clausureRodo:
        "wyrażam zgodę na przetwarzanie przez UXU moich danych osobowych, zawartych w formularzu kontaktowym, w celu udzielenia odpowiedzi na przesłane przeze mnie zapytanie.",
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
    forms: {
      name: "name",
      phone: "phone",
      email: "email",
      message: "Your message",
      buttonSend: "send",
      clausureRodo: "exercising consent to the processing of my personal data by UXU, processing in the contact form in order to obtain a response",
    },
  },
};

export default translationsWords;
