const MODULES = [
  {
    id: "vorgeschichte",
    step: "1",
    title: "Pulverfass Jugoslawien",
    era: "1914 bis 1989",
    intro:
      "Die Station behandelt die Voraussetzungen des Zerfalls: Staatsgründung, Gewalt im Zweiten Weltkrieg, Tito-Herrschaft, Föderalismus und die Krise der 1980er Jahre.",
    goal:
      "Du kannst erklären, warum Jugoslawien unter Tito stabil blieb und warum diese Stabilität nach 1980 rasch brüchig wurde.",
    route:
      "Sieh zuerst Folge 1. Arbeite danach mit den Fragen und nutze die Textquellen gezielt für Tito, Föderalismus und die Krise der 1980er Jahre. Die Playlist-Videos dienen als Ergänzung.",
    teacherNote:
      "Die Station eignet sich als gemeinsamer Einstieg in die Vorgeschichte des Zerfalls oder als vorbereitender Hausauftrag vor der Kriegsphase.",
    teacherToolkit: {
      duration: "35 bis 45 Minuten",
      socialForms: [
        "Einzelarbeit mit kurzer Sicherung im Tandem",
        "Leitbegriffe im Plenum clustern",
        "Transferfrage als Schreibauftrag mit anschließendem Vergleich"
      ],
      assessmentFocus: [
        "Titos Herrschaft nicht mit echter Konfliktlösung verwechseln",
        "Föderale Ordnung als spannungsreiche Konstruktion erkennen",
        "Historische Langzeitlinien und aktuelle politische Instrumentalisierung verbinden"
      ],
      misconceptions: [
        "Jugoslawien sei erst 1991 plötzlich instabil geworden",
        "Ethnische Unterschiede allein erklärten den Krieg",
        "Titos Staat sei ein harmonischer Vielvölkerstaat gewesen"
      ],
      product:
        "Begriffsnetz zu Stabilisierung und Zerfall oder ein begründeter Kurzkommentar zur Vorgeschichte.",
      extension:
        "Mit einer Debattenfrage arbeiten: War Jugoslawien unter Tito ein tragfähiger Staat oder nur ein eingefrorener Konfliktraum?"
    },
    visual: {
      src: "assets/module-images/sarajevo-may-1996.png",
      alt: "Skyline von Sarajevo mit sichtbaren Kriegsschäden im Mai 1996",
      sourceLabel: "Sarajevo_may_1996.png"
    },
    visualDossierTitle: "Bildquellen zur Vorgeschichte",
    visualDossierIntro:
      "Die Bilder zeigen Sarajevo 1914, Gewalt im Zweiten Weltkrieg, den Bruch mit Stalin und Gazimestan 1989.",
    visualDossier: [
      {
        src: "assets/module-images/assassination-at-sarajevo.jpg",
        alt: "Historische Darstellung des Attentats von Sarajevo 1914",
        title: "Sarajevo 1914",
        caption: "Historienbild des Attentats auf Erzherzog Franz Ferdinand und Sophie am 28. Juni 1914 in Sarajevo.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild markiert den frühesten Erinnerungsort der Station und gehört direkt zur Chronologiefrage."
      },
      {
        src: "assets/module-images/jasenovac-prisoners-enter-the-camp.jpg",
        alt: "Historische Aufnahme aus dem Kontext des Lagers Jasenovac",
        title: "Ustascha-Terror und Kriegsgewalt",
        caption: "Fotografie aus dem Umfeld des Ustascha-Lagers Jasenovac im Zweiten Weltkrieg.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild konkretisiert die Gewaltgeschichte, auf die sich spätere Nationalisten in Serbien, Kroatien und Bosnien immer wieder bezogen."
      },
      {
        src: "assets/module-images/joseph-stalin-1943-v2.jpg",
        alt: "Porträt von Josef Stalin",
        title: "Bruch mit Stalin 1948",
        caption: "Porträt von Josef Stalin als Bezugspunkt für den Bruch zwischen Belgrad und Moskau im Jahr 1948.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild markiert Jugoslawiens Sonderstellung zwischen Ost und West.",
        imageFit: "contain",
        imagePosition: "center top",
        imageBackground: "rgba(241, 236, 228, 0.95)"
      },
      {
        src: "assets/module-images/gazimestan-monument.jpg",
        alt: "Gazimestan-Denkmal auf dem Amselfeld",
        title: "Amselfeld als politischer Erinnerungsort",
        caption: "Das Denkmal am Amselfeld wurde 1989 zum Schauplatz der Gazimestan-Rede von Slobodan Milošević.",
        whyItMatters:
          "Arbeitsnutzen: Es verbindet Vorgeschichte und Zerfallsphase und hilft bei Frage 3, den Schritt von Erinnerung zu Mobilisierung zu erklären."
      }
    ],

    textDossierTitle: "Altaras lesen: Familiengeschichte als Quelle",
    textDossierIntro:
      "Die Auszüge aus Adriana Altaras' Erinnerungsbuch zeigen keine Gesamtgeschichte Jugoslawiens, sondern die Erfahrungen einer jüdischen Familie zwischen Vorkriegszeit, Verfolgung und Partisanenkampf.",
    textDossier: [
      {
        title: "Split vor der deutschen Besatzung",
        context:
          "Der Vater erinnert sich an Split als Zufluchtsort und an Hilfe bei Flucht und Versteck.",
        quote:
          "„Split! Das war eine Perle an der Adria. Die Dalmatier? Wie Italiener! Laut, fröhlich und vor allem keine Antisemiten. Man hat uns geholfen auszureisen, hat uns versteckt, und wir sind gemeinsam in die Berge.“",
        source: "Adriana Altaras, Titos Brille, Erinnerung des Vaters an Split.",
        task: "Halte fest, welche Informationen das Zitat über Ort, Hilfe und den späteren Bruch enthält.",
        questionId: "mq-vorgeschichte-5"
      },
      {
        title: "Lebenslauf und Zäsur",
        context:
          "Im Lebenslauf des Vaters stehen Studium, Flucht und Widerstand unmittelbar nebeneinander.",
        quote:
          "„Am 12. Oktober 1918 wurde ich ... in Split (Jugoslawien) geboren. ... Im selben Jahr Immatrikulation an der medizinischen Fakultät in Zagreb. Am 5. April gelingt es mir, nach Split zu fliehen, einen Tag vor der deutschen Okkupation. ... Gleichzeitig schließe ich mich Titos Partisanenarmee an.“",
        source: "Adriana Altaras, Titos Brille, Lebenslauf des Vaters.",
        task: "Ordne die genannten Orte und Rollenwechsel der historischen Lage zwischen 1936 und 1944 zu.",
        questionId: "mq-vorgeschichte-6"
      },
      {
        title: "Jüdischer Arzt im Widerstand",
        context:
          "Die Passage verbindet Verfolgung, Krieg und improvisierten Alltag bei den Partisanen.",
        quote:
          "„Bei den Partisanen natürlich schon. Ärzte, auch so unerfahrene wie ich, bekamen sofort zu tun!“",
        source: "Adriana Altaras, Titos Brille, Erinnerung an den Partisaneneinsatz.",
        task: "Arbeite heraus, was der Satz über die Lage jüdischer Ärzte und über die Kriegsbedingungen zeigt.",
        questionId: "mq-vorgeschichte-7"
      }
    ],
    actorFocus: {
      title: "Tito",
      intro:
        "In dieser Station steht Tito im Mittelpunkt."
    },
    actors: [
      {
        name: "Josip Broz Tito",
        role: "Staats- und Parteichef Jugoslawiens, 1945 bis 1980",
        lens: "Unter seiner Führung wurde Jugoslawien föderal organisiert, blockfrei positioniert und autoritär zusammengehalten.",
        whyHere:
          "Für diese Station ist Tito zentral, weil sich an ihm Stabilisierung, Repression und ungelöste nationale Spannungen zugleich erklären lassen.",
        imageSrc: "assets/module-images/josip-broz-tito-uniform-portrait.jpg",
        imageAlt: "Josip Broz Tito im Uniformporträt",
        imagePosition: "center top"
      }
    ],
    miniQuestions: [
      {
        id: "mq-vorgeschichte-1",
        title: "Stabilisierung und Repression",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Welche zwei Herrschaftsmittel Titos müssen zusammen genannt werden, wenn du die Stabilität Jugoslawiens erklärst?",
        help: "Nenne nicht nur Tito, sondern mindestens zwei konkrete Mittel seiner Herrschaft.",
        placeholder: "Tito hielt Jugoslawien zusammen durch ...",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-bpb-history", "r-vorgeschichte-bpb-tito", "r-vorgeschichte-pdf"],
        conceptGroups: [
          {
            label: "autoritäre Parteiherrschaft",
            variants: ["autoritär", "parteiherrschaft", "einparteienstaat", "kommunistische partei", "diktatorisch"]
          },
          {
            label: "Repression oder Überwachung",
            variants: ["repression", "unterdrückung", "ueberwachung", "überwachung", "geheimdienst", "gegner ausschalten"]
          },
          {
            label: "föderaler Ausgleich zwischen Teilrepubliken",
            variants: ["föderal", "foederal", "teilrepubliken", "autonomie", "ausgleich", "machtbalance"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Zur Stabilisierung gehörten autoritäre Parteiherrschaft und Repression gegen Gegner. Zugleich balancierte Tito die Teilrepubliken föderal aus."
      },
      {
        id: "mq-vorgeschichte-2",
        title: "Altlasten vor 1990",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Welche ältere Gewalterfahrung aus dem Zweiten Weltkrieg blieb politisch wirksam und wurde später erneut aufgegriffen?",
        help: "Nenne ein konkretes Beispiel und den Charakter dieser Erinnerung.",
        placeholder: "Politisch wirksam blieb vor allem ...",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-bpb-history", "r-vorgeschichte-bpb-tito", "r-vorgeschichte-pdf"],
        conceptGroups: [
          {
            label: "Ustascha-Terror, Jasenovac oder Kriegsgewalt",
            variants: ["ustascha", "ustascha-terror", "jasenovac", "lager", "zweiter weltkrieg", "kriegsgewalt"]
          },
          {
            label: "Trauma oder Erinnerung blieb erhalten",
            variants: ["trauma", "erinnerung", "gedaechtnis", "gedächtnis", "verletzung", "nachwirkung"]
          },
          {
            label: "spätere politische Aktivierung",
            variants: ["mobilisieren", "instrumentalisieren", "später wieder aufgreifen", "nationalisten", "propaganda", "aktivieren"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Vor allem die Gewalterfahrungen aus dem Ustascha-Staat und aus Jasenovac blieben als kollektive Traumata präsent. Diese Erinnerung konnte später politisch mobilisiert und nationalistisch aufgeladen werden."
      },
      {
        id: "mq-vorgeschichte-3",
        title: "Föderation und reale Macht",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Was ist der Unterschied zwischen föderaler Ordnung auf dem Papier und realer Machtverteilung in Jugoslawien?",
        help: "Verbinde Staatsaufbau mit tatsächlicher politischer Steuerung.",
        placeholder: "Auf dem Papier war Jugoslawien föderal, in der Praxis ...",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-bpb-history", "r-vorgeschichte-bpb-tito", "r-vorgeschichte-yt-2"],
        conceptGroups: [
          {
            label: "föderale Struktur mit Republiken oder Autonomien",
            variants: ["föderal", "foederal", "republiken", "autonomie", "teilrepubliken", "bundesstaat"]
          },
          {
            label: "reale Macht bei Partei, Zentrum oder Tito",
            variants: ["partei", "zentrum", "belgrad", "tito", "führung", "macht lag"]
          },
          {
            label: "Spannungen blieben ungelöst",
            variants: ["ungelöst", "konflikt", "spannung", "nicht gelöst", "nur kontrolliert", "eingefroren"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Auf dem Papier war Jugoslawien ein föderaler Staat mit Republiken und Autonomien. In der Praxis wurde die Macht stark durch Partei und Führung gesteuert, sodass Konflikte kontrolliert, aber nicht gelöst wurden."
      },
      {
        id: "mq-vorgeschichte-4",
        title: "Rückgriff 1989/90",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Warum konnten Politiker 1989/90 auf ältere Konfliktlinien und Erinnerungsorte zurückgreifen?",
        help: "Nenne einen Grund aus der Vorgeschichte und einen aus der Krise der späten 1980er Jahre.",
        placeholder: "Der Rückgriff gelang, weil ...",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-bpb-history", "r-vorgeschichte-bpb-tito", "r-vorgeschichte-yt-1", "r-vorgeschichte-yt-2"],
        conceptGroups: [
          {
            label: "ältere Konflikte oder Erinnerungen waren nicht verschwunden",
            variants: ["nicht verschwunden", "alte konflikte", "erinnerung", "traumata", "vergangenheit", "langzeitlinie"]
          },
          {
            label: "Krise nach Tito oder Ende der Stabilisierung",
            variants: ["nach tito", "1980", "krise", "wirtschaftskrise", "stabilisierung endet", "machtvakuum"]
          },
          {
            label: "Nationalismus oder symbolische Mobilisierung",
            variants: ["nationalismus", "mobilisierung", "symbolpolitik", "mythen", "amselfeld", "instrumentalisierung"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Der Rückgriff gelang, weil ältere Konflikte und Traumata nie wirklich aufgearbeitet worden waren. In der Krise nach Tito konnten Politiker diese Erinnerungen nationalistisch mobilisieren und für aktuelle Machtpolitik nutzen."
      },
      {
        id: "mq-vorgeschichte-5",
        title: "Split im Erinnerungsbuch",
        type: "short-text",
        challenge: "Textarbeit",
        prompt: "Nenne zwei konkrete Aussagen aus dem Altaras-Zitat zu Split vor dem deutschen Einmarsch.",
        help: "Arbeite direkt am Zitat. Gesucht sind Informationen aus dem Text, keine freie Deutung.",
        placeholder: "Im Zitat wird Split als ... beschrieben, außerdem ...",
        conceptGroups: [
          {
            label: "Split erscheint als Ort an der Adria oder in Dalmatien",
            variants: ["split", "adria", "dalmatien", "meer", "hafen"]
          },
          {
            label: "Hilfe bei Flucht oder Verstecken",
            variants: ["geholfen", "auszureisen", "versteckt", "hilfe", "flucht", "verstecken"]
          },
          {
            label: "Bruch mit dem Kommen der Deutschen",
            variants: ["deutschen kamen", "deutsche", "einmarsch", "besatzung", "danach änderte sich", "bruch"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Im Zitat erscheint Split als dalmatinische Stadt an der Adria. Zugleich sagt der Vater, dass Juden Hilfe bei Flucht und Verstecken erhielten, bevor sich die Lage mit dem Kommen der Deutschen grundlegend änderte."
      },
      {
        id: "mq-vorgeschichte-6",
        title: "Lebenslauf und Zäsur",
        type: "short-text",
        challenge: "Textarbeit",
        prompt: "Welche drei Stationen nennt der Lebenslauf des Vaters zwischen 1936 und 1944?",
        help: "Nenne Orte oder Rollenwechsel aus dem Zitat.",
        placeholder: "Genannt werden ...",
        conceptGroups: [
          {
            label: "Studium in Zagreb",
            variants: ["zagreb", "medizinische fakultät", "studium", "immatrikulation"]
          },
          {
            label: "Flucht nach Split kurz vor der deutschen Okkupation",
            variants: ["split", "flucht", "okkupation", "deutsche", "5. april"]
          },
          {
            label: "Partisanen oder Promotion in Bari",
            variants: ["partisanen", "partisanenarmee", "bari", "promotion", "promovieren"]
          }
        ],
        successThreshold: 3,
        modelAnswer:
          "Genannt werden das Studium in Zagreb, die Flucht nach Split kurz vor der deutschen Okkupation und der Anschluss an Titos Partisanen; 1944 folgt die Promotion in Bari."
      },
      {
        id: "mq-vorgeschichte-7",
        title: "Arzt bei den Partisanen",
        type: "short-text",
        challenge: "Textarbeit",
        prompt: "Was zeigt der Satz über den Einsatz \"bei den Partisanen\" über die Lage jüdischer Ärzte im Krieg?",
        help: "Verbinde Ausgrenzung im Verfolgungssystem mit der neuen Rolle im Widerstand.",
        placeholder: "Der Satz zeigt, dass ...",
        conceptGroups: [
          {
            label: "im regulären System ausgeschlossen oder verfolgt",
            variants: ["nicht im krankenhaus", "durfte nicht arbeiten", "ausgeschlossen", "als jude", "verfolgt", "verboten"]
          },
          {
            label: "bei den Partisanen sofort gebraucht",
            variants: ["partisanen", "sofort zu tun", "gebraucht", "widerstand", "arzt"]
          },
          {
            label: "Kriegslage war improvisiert und von Mangel geprägt",
            variants: ["unerfahren", "not", "improvisiert", "kriegsalltag", "mangel", "notlage"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Der Satz zeigt, dass jüdische Ärzte im Verfolgungssystem ausgeschlossen waren, im Widerstand aber sofort gebraucht wurden. Zugleich macht er die improvisierte Notlage des Krieges sichtbar."
      }
    ],
    resources: [
      {
        id: "r-vorgeschichte-doku-1",
        bucket: "Pflichtquelle: zuerst bearbeiten",
        type: "Video",
        title: "Balkan in Flammen, Folge 1: Pulverfass Jugoslawien",
        focus: "Vorgeschichte, Tito, föderale Ordnung, Nationalismus und Aufstieg Miloševićs",
        link: "https://www.dropbox.com/scl/fi/mbvt6nif4o3njrb2noijk/Balkan-in-Flammen-Pulverfass-Jugoslawien-Staffel-1-Folge-1.mp4?rlkey=5glwor40fqn3j8hcfpz0yzpwo&st=tj8dx0a7&dl=0",
        tags: ["Dropbox", "Pflicht", "Dokumentation"],
        selectionNote: "Hauptquelle der Station.",
        didacticUse: "Für Frage 1 bis 4."
      },
      {
        id: "r-vorgeschichte-pdf",
        bucket: "Arbeitsblatt: für Begriffe und Vertiefung",
        type: "PDF",
        title: "Arbeitsblatt Vorgeschichte",
        focus: "Dreiteiliger Fragenreader mit Leitfragen zu Vorgeschichte, Krieg und Nachordnung",
        link: "assets/materials/balkan-in-flammen-fragen.pdf",
        tags: ["lokal", "Reader", "Fragen"],
        selectionNote: "Die Aufgaben aus dem Reader sind in die Fragen übernommen.",
        didacticUse: "Für Frage 5 und 6 sowie zum Wiederholen von Begriffen."
      },
      {
        id: "r-vorgeschichte-yt-1",
        bucket: "Vertiefung: Chronologie und Kontext",
        type: "Video",
        title: "YouTube-Playlist, Video 1",
        focus: "Überblick zur Vorgeschichte des Zerfalls",
        link: "https://www.youtube.com/watch?v=_HGCHTueg-Q&list=PL8991DFCF33730589",
        tags: ["YouTube", "Vertiefung"],
        selectionNote: "Nur nötig, wenn die lange Vorgeschichte noch unscharf bleibt.",
        didacticUse: "Besonders hilfreich für die Chronologiefrage und die Transferantwort."
      },
      {
        id: "r-vorgeschichte-yt-2",
        bucket: "Vertiefung: Struktur des Vielvölkerstaats",
        type: "Video",
        title: "YouTube-Playlist, Video 2",
        focus: "Ergänzung zu Nationalismus, Krise und Radikalisierung",
        link: "https://www.youtube.com/watch?v=q8uG0o0b4wQ&list=PL8991DFCF33730589&index=2",
        tags: ["YouTube", "Vertiefung"],
        selectionNote: "Ergänzung, wenn föderale Struktur und Nationalismus noch nicht klar genug sind.",
        didacticUse: "Vor allem für Frage 2 und die Abwägung in Frage 4."
      },
      {
        id: "r-vorgeschichte-bpb-history",
        bucket: "Textquelle: Überblick",
        type: "Website",
        title: "bpb: Kleine Geschichte Jugoslawiens",
        focus: "Überblick von der Staatsgründung 1918 bis zur Krise der 1980er Jahre",
        link: "https://www.bpb.de/shop/zeitschriften/apuz/256921/kleine-geschichte-jugoslawiens/",
        tags: ["bpb", "Text"],
        selectionNote: "Geeignet für Fragen zu Föderalismus, Tito und Zerfall.",
        didacticUse: "Vor allem für Frage 1, 2, 4 und 6."
      },
      {
        id: "r-vorgeschichte-bpb-tito",
        bucket: "Textquelle: Tito",
        type: "Website",
        title: "bpb: Mythos Tito",
        focus: "Personenkult, Herrschaft und Nachwirkung Titos",
        link: "https://www.bpb.de/shop/zeitschriften/apuz/256927/mythos-tito/?p=all",
        tags: ["bpb", "Text"],
        selectionNote: "Ergänzt die Station um die Frage nach Titos Rolle.",
        didacticUse: "Vor allem für Frage 1, 5 und 6."
      },
    ],
    questions: [
      {
        id: "q-vorgeschichte-1",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Erkläre knapp, wie Tito die ethnischen Spannungen innerhalb Jugoslawiens über Jahrzehnte kontrollierte.",
        help:
          "Die Sofortkorrektur sucht mehrere Sinnschichten. Nenne nicht nur Tito als Person, sondern auch Mittel seiner Herrschaft.",
        placeholder: "Tito stabilisierte Jugoslawien, indem ...",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-bpb-history", "r-vorgeschichte-bpb-tito", "r-vorgeschichte-pdf"],
        conceptGroups: [
          {
            label: "autoritäre Führung oder Parteiherrschaft",
            variants: [
              "autoritär",
              "einparteienstaat",
              "parteiherrschaft",
              "diktatorisch",
              "starker fuehrer",
              "kommunistische partei"
            ]
          },
          {
            label: "Repression, Geheimdienst oder Unterdrueckung",
            variants: [
              "repression",
              "unterdrückung",
              "geheimdienst",
              "überwachung",
              "goli otok",
              "gegner ausschalten"
            ]
          },
          {
            label: "föderales Austarieren der Teilrepubliken",
            variants: [
              "föderal",
              "teilrepubliken",
              "autonomie",
              "ausgleich",
              "balancieren",
              "machtbalance"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Tito hielt Jugoslawien mit autoritärer Parteiherrschaft, Repression gegen Gegner und einem föderal austarierten System zusammen. Die Spannungen verschwanden dadurch nicht, wurden aber politisch kontrolliert und unterdrückt."
      },
      {
        id: "q-vorgeschichte-2",
        type: "short-text",
        challenge: "Strukturverständnis",
        prompt:
          "Warum wirkte die föderale Struktur Jugoslawiens stabil, obwohl sie langfristig konfliktanfällig blieb?",
        help:
          "Sofortkorrektur erkennt auch Synonyme. Verbinde Staatsaufbau mit wirtschaftlichen und nationalen Spannungen.",
        placeholder: "Die föderale Struktur wirkte stabil, weil ...",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-bpb-history", "r-vorgeschichte-bpb-tito", "r-vorgeschichte-pdf", "r-vorgeschichte-yt-2"],
        conceptGroups: [
          {
            label: "Stabilität war teilweise nur politisch erzwungen",
            variants: [
              "erzwungen",
              "nur scheinbar stabil",
              "unterdrückt",
              "oberflaechlich",
              "eingefroren",
              "nicht gelöst"
            ]
          },
          {
            label: "regionale oder wirtschaftliche Ungleichheit",
            variants: [
              "ungleichheit",
              "wirtschaftlich",
              "reiche und arme regionen",
              "tourismus",
              "nord sued",
              "ungleiche entwicklung"
            ]
          },
          {
            label: "nationalistische Interessen blieben erhalten",
            variants: [
              "nationalismus",
              "ethnische spannungen",
              "serbisch",
              "kroatisch",
              "slowenisch",
              "volksgruppen"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Föderation wirkte stabil, weil Tito Konflikte politisch kontrollierte und nach aussen Einigkeit inszenierte. Gleichzeitig blieben wirtschaftliche Ungleichheiten und nationale Interessen bestehen, sodass die Ordnung nach seinem Tod zunehmend fragil wurde."
      },
      {
        id: "q-vorgeschichte-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die Entwicklungsschritte so, dass die lange Vorgeschichte des Zerfalls sichtbar wird.",
        help:
          "Beginne mit dem Attentat von Sarajevo und ende mit dem Symboljahr 1990.",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-bpb-history", "r-vorgeschichte-bpb-tito", "r-vorgeschichte-pdf", "r-vorgeschichte-yt-1"],
        items: [
          {
            id: "sarajevo-1914",
            label: "Das Attentat von Sarajevo macht den Balkan zum Auslöser einer gesamteuropäischen Krise.",
            detail: "1914 wird die Region zum Schauplatz eines weltpolitischen Umbruchs.",
            imageSrc: "assets/module-images/assassination-at-sarajevo.jpg",
            imageAlt: "Historische Aufnahme zum Attentat von Sarajevo 1914"
          },
          {
            id: "ustasa-ww2",
            label: "Im Zweiten Weltkrieg verstaerken Ustascha-Terror und Besatzung die interethnischen Traumata.",
            detail: "Gewalterfahrungen prägen das kollektive Gedächtnis über Jahrzehnte.",
            imageSrc: "assets/module-images/jasenovac-prisoners-enter-the-camp.jpg",
            imageAlt: "Historische Aufnahme aus dem Kontext des Ustascha-Terrors"
          },
          {
            id: "tito-1945",
            label: "Titos Partisanen setzen sich durch und bauen das sozialistische Jugoslawien auf.",
            detail: "Nach 1945 entsteht ein neuer Vielvölkerstaat unter kommunistischer Führung.",
            imageSrc: "assets/module-images/josip-broz-tito-uniform-portrait.jpg",
            imageAlt: "Josip Broz Tito als Führungsfigur des neuen Jugoslawiens"
          },
          {
            id: "stalin-1948",
            label: "Der Bruch mit Stalin macht Jugoslawien zu einem Sonderfall zwischen Ost und West.",
            detail: "1948 verändert sich die internationale Stellung des Staates grundlegend.",
            imageSrc: "assets/module-images/joseph-stalin-1943-v2.jpg",
            imageAlt: "Porträt von Josef Stalin als Bezugspunkt für den Bruch von 1948",
            imageFit: "contain",
            imagePosition: "center top",
            imageBackground: "rgba(241, 236, 228, 0.95)"
          },
          {
            id: "amselfeld-1989",
            label: "Milošević mobilisiert 1989 mit nationaler Symbolpolitik auf dem Amselfeld.",
            detail: "Geschichte wird offen für gegenwärtige Machtpolitik instrumentalisiert.",
            imageSrc: "assets/module-images/gazimestan-monument.jpg",
            imageAlt: "Gazimestan-Denkmal auf dem Amselfeld"
          },
          {
            id: "zagreb-1990",
            label: "Das Fußballspiel Dinamo Zagreb gegen Roter Stern Belgrad wird 1990 zum Symbol der Eskalation.",
            detail: "Die gesellschaftliche Polarisierung schlägt sichtbar in offene Konfrontation um.",
            imageSrc: "assets/module-images/stadion-maksimir-zagreb-v2.jpg",
            imageAlt: "Stadion Maksimir in Zagreb als Schauplatz des symbolischen Eskalationsmoments"
          }
        ],
        correctOrder: [
          "sarajevo-1914",
          "ustasa-ww2",
          "tito-1945",
          "stalin-1948",
          "amselfeld-1989",
          "zagreb-1990"
        ],
        explanation:
          "Die Reihenfolge zeigt, dass der Zerfall Jugoslawiens nicht aus dem Nichts kam. Langzeitkonflikte, Kriegsgewalt, autoritäre Stabilisierung und nationale Mobilisierung griffen ineinander."
      },
      {
        id: "q-vorgeschichte-4",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Beurteile, ob die Vorgeschichte Jugoslawiens den Krieg später fast zwangsläufig machte oder ob erst politische Akteure der späten 1980er und frühen 1990er Jahre die Eskalation auslösten. Begründe mit Materialbezügen.",
        help:
          "Wichtig ist eine klare These: historische Altlasten allein reichen nicht als Erklärung, aber sie dürfen auch nicht ausgeblendet werden.",
        placeholder: "Die Vorgeschichte schuf Voraussetzungen, doch ...",
        teacherPrompt:
          "Achte darauf, dass Lernende zwischen Strukturbedingungen und politischer Zuspitzung unterscheiden.",
        commonPitfall:
          "Häufig wird nur auf uralte Feindschaften verwiesen, ohne die Rolle von Propaganda, Machtkampf und Krisenpolitik zu gewichten.",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-bpb-history", "r-vorgeschichte-bpb-tito", "r-vorgeschichte-pdf", "r-vorgeschichte-yt-1", "r-vorgeschichte-yt-2"],
        minWords: 120,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance"],
          targetHits: 5
        },
        sourceHints: ["tito", "amselfeld", "nationalismus", "foederation", "sarajevo", "goli otok"],
        rubric: [
          { concept: "Langzeitkonflikte oder historische Traumata", keywords: ["vorgeschichte", "traumata", "zweiter weltkrieg", "ustascha", "1914", "langfristig"] },
          { concept: "autoritäre Stabilisierung unter Tito", keywords: ["tito", "repression", "unterdrückung", "föderal", "stabilisierung", "kommunistisch"] },
          { concept: "politische Instrumentalisierung durch Eliten", keywords: ["milosevic", "nationalismus", "propaganda", "mobilisierung", "machtkampf", "elite"] },
          { concept: "Abwägung zwischen Struktur und Handlung", keywords: ["nicht automatisch", "nicht zwangsläufig", "einerseits", "andererseits", "zugleich", "während"] },
          { concept: "historisches Urteil", keywords: ["deshalb", "entscheidend", "insgesamt", "meine these", "ich bewerte"] }
        ],
        modelAnswer:
          "Die Vorgeschichte machte Gewalt möglich, aber nicht unausweichlich. Titos Staat hielt Konflikte durch Repression und Balancepolitik zusammen, ohne sie zu lösen. Erst als politische Akteure wie Milošević historische Traumata und nationalistische Symbole bewusst mobilisierten, wurden alte Konfliktlinien in konkrete Kriegspolitik übersetzt."
      },
      {
        id: "q-vorgeschichte-5",
        type: "short-text",
        challenge: "Vertiefung",
        prompt:
          "Erkläre knapp, was das Beispiel Goli Otok über Titos Repressionsapparat zeigt.",
        help:
          "Gesucht ist keine Lagergeschichte im Detail, sondern die politische Aussage dieses Beispiels über Herrschaft und Abschreckung.",
        placeholder: "Goli Otok zeigt, dass ...",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-bpb-history", "r-vorgeschichte-bpb-tito", "r-vorgeschichte-pdf"],
        conceptGroups: [
          {
            label: "politische Gegner oder Abweichler wurden verfolgt",
            variants: ["abweichler", "gegner", "dissidenten", "opposition", "verfolgt", "stalinisten"]
          },
          {
            label: "Repression diente der Abschreckung und Kontrolle",
            variants: ["abschreckung", "kontrolle", "einschuechterung", "einschüchterung", "herrschaftssicherung", "angst"]
          },
          {
            label: "Stabilität beruhte auch auf Gewalt oder Zwang",
            variants: ["gewalt", "zwang", "repression", "nicht freiwillig", "unterdrueckung", "unterdrückung"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Goli Otok zeigt, dass Titos Staat politische Gegner und Abweichler hart verfolgte. Die Stabilität Jugoslawiens beruhte also nicht nur auf Ausgleich, sondern auch auf Abschreckung, Kontrolle und Zwang."
      },
      {
        id: "q-vorgeschichte-6",
        type: "open-analysis",
        challenge: "Vertiefung",
        prompt:
          "Warum war Titos Bruch mit Stalin 1948 weltpolitisch bedeutsam, und welche Folgen hatte er für Jugoslawiens Sonderstellung? Begründe mit Materialbezügen.",
        help:
          "Eine gute Antwort verbindet den Ost-West-Konflikt mit der besonderen internationalen Stellung Jugoslawiens.",
        placeholder: "Der Bruch mit Stalin war weltpolitisch bedeutsam, weil ...",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-bpb-history", "r-vorgeschichte-bpb-tito", "r-vorgeschichte-pdf", "r-vorgeschichte-yt-1"],
        minWords: 100,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "nuance"],
          targetHits: 4
        },
        sourceHints: ["stalin", "1948", "sonderfall", "ost und west", "jugoslawien"],
        rubric: [
          { concept: "Konflikt mit Stalin oder Sowjetunion", keywords: ["stalin", "sowjetunion", "bruch", "1948", "moskau"] },
          { concept: "Sonderstellung zwischen Ost und West", keywords: ["sonderfall", "ost und west", "unabhaengig", "unabhängig", "blockfrei", "eigenständig"] },
          { concept: "Folgen für internationale Politik", keywords: ["weltpolitisch", "internationale stellung", "hilfe", "westen", "kalter krieg"] },
          { concept: "Folgen für Jugoslawiens Innenordnung", keywords: ["herrschaft", "repression", "kontrolle", "tito", "stabilisierung"] }
        ],
        modelAnswer:
          "Der Bruch mit Stalin war weltpolitisch bedeutsam, weil Jugoslawien damit nicht einfach Teil des sowjetischen Blocks blieb, sondern eine Sonderstellung zwischen Ost und West einnahm. Das erhöhte seinen außenpolitischen Spielraum, stärkte Tito aber innenpolitisch auch als autoritäre Führungsfigur, die ihre Eigenständigkeit mit harter Kontrolle absicherte."
      }
    ]
  },
  {
    id: "zerfall",
    step: "2",
    title: "Vom Nationalismus zum Krieg",
    era: "1989 bis 1992",
    intro:
      "Die Station behandelt die Zuspitzung von der Staatskrise zum Krieg: Nationalismus, Propaganda, Slowenien, Kroatien und die Reaktion Europas.",
    goal:
      "Du kannst erklären, wie politische Entscheidungen, Medien und militärische Gewalt den Zerfall 1989 bis 1992 beschleunigten.",
    route:
      "Arbeite zuerst mit Folge 2. Nutze danach die Fragen und die APuZ-Texte zu Kriegsursachen und internationaler Politik. Die Playlist-Videos dienen zur Wiederholung.",
    teacherNote:
      "Didaktisch stark ist hier der Wechsel zwischen politischer Akteursanalyse und der Frage nach dem Versagen europäischer Krisenprävention.",
    teacherToolkit: {
      duration: "40 bis 50 Minuten",
      socialForms: [
        "Einzelarbeit mit Zwischenstopp zur Chronologie",
        "Partnervergleich zur Propagandafrage",
        "Plenumsdiskussion zur Rolle Europas"
      ],
      assessmentFocus: [
        "Nationalismus als politisch genutztes Instrument verstehen",
        "Medienpropaganda als Eskalationsfaktor einordnen",
        "Anerkennungspolitik und Nichtstun Europas differenziert beurteilen"
      ],
      misconceptions: [
        "Der Krieg sei plötzlich ausgebrochen",
        "Medien seien nur Begleitung und nicht Teil der Eskalation gewesen",
        "Europa habe gar keine Handlungsoptionen gehabt"
      ],
      product:
        "Kurzkommentar zur Frage, ob politisches Zögern oder vorschnelle Anerkennung schwerer wog.",
      extension:
        "Die Station laesst sich gut mit einer Kartenarbeit zu Slowenien, Kroatien und Bosnien verbinden."
    },
    visualDossierTitle: "Bildquellen zur Zuspitzung",
    visualDossierIntro:
      "Die Bilder zeigen Gazimestan 1989, den Krieg in Slowenien, die Ausschreitungen von Zagreb und die Zerstörung Vukovars.",
    visualDossier: [
      {
        src: "assets/module-images/gazimestan-monument.jpg",
        alt: "Gazimestan-Denkmal auf dem Amselfeld",
        title: "Gazimestan 1989",
        caption: "Das Gazimestan-Denkmal am Amselfeld wurde 1989 zum Schauplatz einer zentralen Mobilisierungsrede Miloševićs.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild markiert den Übergang von Erinnerungspolitik zu nationalistischer Mobilisierung."
      },
      {
        src: "assets/module-images/slovenian-war-map-cropped.jpg",
        alt: "Darstellung des Zehn-Tage-Kriegs in Slowenien",
        title: "Zehn-Tage-Krieg in Slowenien",
        caption: "Kartendarstellung des kurzen Krieges in Slowenien 1991.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild zeigt, dass der Zerfall nicht überall dieselbe Kriegslogik hatte."
      },
      {
        src: "assets/module-images/stadion-maksimir-zagreb-v2.jpg",
        alt: "Stadion Maksimir in Zagreb",
        title: "Stadion Maksimir, Zagreb",
        caption: "Panorama des Stadions Maksimir in Zagreb, dem Ort der Ausschreitungen beim Spiel Dinamo Zagreb gegen Roter Stern Belgrad im Mai 1990.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild gehört zur Chronologiefrage und markiert einen symbolischen Eskalationsort vor dem offenen Krieg."
      },
      {
        src: "assets/module-images/vukovar-water-tower.jpg",
        alt: "Wasserturm von Vukovar",
        title: "Vukovar 1991",
        caption: "Der beschädigte Wasserturm von Vukovar steht für die Belagerung und Zerstörung der Stadt im Herbst 1991.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild ist zentral für Frage 6, also für die internationale Wahrnehmung des Kroatienkriegs."
      }
    ],
    actorFocus: {
      title: "Akteure 1989 bis 1992",
      intro:
        "Im Mittelpunkt stehen Milošević und Tuđman."
    },
    actors: [
      {
        name: "Slobodan Milošević",
        role: "Präsident Serbiens von 1989 bis 1997, danach Präsident der Bundesrepublik Jugoslawien",
        lens: "Er trieb die Beschneidung der Kosovo-Autonomie, die serbische Zentralisierung und eine nationalistische Medienpolitik voran.",
        whyHere:
          "Für diese Station ist er zentral, weil sich an ihm Machtgewinn, Symbolpolitik und Eskalationsstrategie konkret benennen lassen.",
        imageSrc: "assets/module-images/milosevic-in-hague.jpg",
        imageAlt: "Slobodan Milošević im Gerichtssaal in Den Haag",
        imagePosition: "center top"
      },
      {
        name: "Franjo Tuđman",
        role: "Präsident Kroatiens ab 1990 und Führungsfigur des kroatischen Staatsprojekts",
        lens: "Er verband die Unabhängigkeitsstrategie Kroatiens mit nationaler Symbolpolitik und staatlichem Machtaufbau.",
        whyHere:
          "Er ist hier wichtig, weil der Zerfall 1990 bis 1992 als Konkurrenz politischer Projekte und nicht als anonymer 'Ethnienkonflikt' verstanden werden soll.",
        imageSrc: "assets/module-images/franjo-tudjman-1995.jpg",
        imageAlt: "Franjo Tuđman im Jahr 1995",
        imagePosition: "center top"
      }
    ],
    miniQuestions: [
      {
        id: "mq-zerfall-1",
        title: "Milošević und Tuđman",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Worin unterschieden sich die Politikziele von Milošević und Tuđman?",
        help: "Vergleiche die politischen Projekte, nicht die Biografien.",
        placeholder: "Milošević zielte auf ..., Tuđman dagegen auf ...",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-apuz-causes", "r-zerfall-apuz-policy", "r-zerfall-pdf"],
        conceptGroups: [
          {
            label: "serbische Zentralisierung oder großserbische Politik",
            variants: ["zentralisierung", "grossserbien", "großserbien", "serbische dominanz", "belgrad", "serbische macht"]
          },
          {
            label: "kroatische Unabhängigkeit oder Staatsgründung",
            variants: ["unabhängigkeit", "unabhaengigkeit", "eigener staat", "kroatischer staat", "staatsgründung", "abspaltung"]
          },
          {
            label: "nationale Mobilisierung oder Symbolpolitik",
            variants: ["nationalismus", "symbolpolitik", "geschichte", "vergangenheit", "mobilisierung", "propaganda"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Milošević setzte auf serbische Zentralisierung beziehungsweise großserbische Politik, Tuđman auf kroatische Unabhängigkeit und Staatsgründung. Beide arbeiteten mit nationalistischer Mobilisierung und historischen Symbolen."
      },
      {
        id: "mq-zerfall-2",
        title: "Fernsehen und Feindbilder",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Wie verdichteten Fernsehen und Propaganda die Eskalation des Zerfalls?",
        help: "Nenne mindestens zwei Wirkungen der Medienpolitik.",
        placeholder: "Fernsehen und Propaganda wirkten eskalierend, weil ...",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-apuz-causes", "r-zerfall-apuz-policy", "r-zerfall-yt-4"],
        conceptGroups: [
          {
            label: "Feindbilder oder Angst wurden verstärkt",
            variants: ["feindbilder", "feindbild", "angst", "hass", "bedrohung", "panik"]
          },
          {
            label: "Mobilisierung der eigenen Bevölkerung",
            variants: ["mobilisierung", "aufhetzen", "anhänger", "unterstützung", "massen", "nationalistisch"]
          },
          {
            label: "Gewalt oder Krieg wurden legitimiert",
            variants: ["legitimieren", "rechtfertigen", "krieg", "gewalt", "einsatz", "notwendig darstellen"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Fernsehen und Propaganda verdichteten Feindbilder, erzeugten Angst und mobilisierten die eigene Bevölkerung. Zugleich wurden Gewalt und Krieg als notwendig oder gerechtfertigt dargestellt."
      },
      {
        id: "mq-zerfall-3",
        title: "Unterschiedliche Konfliktlogiken",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Warum folgten Slowenien, Kroatien und Bosnien nicht derselben Konfliktlogik?",
        help: "Vergleiche die drei Räume knapp, statt nur eine Chronologie aufzuzählen.",
        placeholder: "Die Konflikte unterschieden sich, weil ...",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-apuz-causes", "r-zerfall-apuz-policy", "r-zerfall-yt-3"],
        conceptGroups: [
          {
            label: "Slowenien als kurzer Konflikt",
            variants: ["slowenien", "kurz", "zehn tage", "kurzer krieg", "begrenzter konflikt"]
          },
          {
            label: "Kroatien mit Frontkrieg und serbischen Gebieten",
            variants: ["kroatien", "vukovar", "frontkrieg", "krajina", "serbische gebiete", "territorium"]
          },
          {
            label: "Bosnien als multiethnischer Raum mit besonders komplexer Kriegslogik",
            variants: ["bosnien", "multiethnisch", "dreiseitig", "belagerung", "ethnische säuberung", "komplex"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Slowenien erlebte nur einen kurzen begrenzten Krieg. In Kroatien ging es stärker um Fronten und um serbisch kontrollierte Gebiete, während Bosnien als multiethnischer Raum besonders komplexe und gewaltsame Kriegslogiken entwickelte."
      },
      {
        id: "mq-zerfall-4",
        title: "Europa und Diplomatie",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Wo zögerte die europäische Diplomatie, und wo lösten Entscheidungen neue Folgen aus?",
        help: "Nenne eine Form des Zögerns und eine Entscheidung mit Folgen.",
        placeholder: "Europa zögerte bei ..., und Folgen hatte besonders ...",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-apuz-causes", "r-zerfall-apuz-policy", "r-zerfall-pdf", "r-zerfall-yt-4"],
        conceptGroups: [
          {
            label: "Zögern oder Uneinigkeit Europas",
            variants: ["zögern", "uneinig", "zu spät", "nicht eingreifen", "abwartend", "diplomatie"]
          },
          {
            label: "Anerkennung oder politische Entscheidung mit Folgen",
            variants: ["anerkennung", "entscheidung", "1991", "deutschland", "europa", "folgen"]
          },
          {
            label: "Konflikt wurde dadurch verschärft oder verändert",
            variants: ["verschärft", "eskalation", "neue folgen", "krise", "krieg", "druck"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Europa zögerte lange und reagierte uneinheitlich auf die Eskalation. Zugleich hatten Entscheidungen wie die Anerkennungspolitik unmittelbare Folgen, weil sie Konflikte politisch veränderten und teilweise weiter verschärften."
      },
      {
        id: "mq-zerfall-5",
        title: "Führungsfiguren verorten",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Wofür steht Milošević in dieser Station, und wofür steht Tuđman?",
        help: "Ordne beide Personen ihren politischen Projekten zu.",
        placeholder: "Milošević steht für ..., Tuđman steht für ...",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-apuz-causes", "r-zerfall-apuz-policy", "r-zerfall-pdf"],
        conceptGroups: [
          {
            label: "Milošević als serbische Zentralisierungsfigur",
            variants: ["milošević", "milosevic", "serbische zentralisierung", "serbischer nationalismus", "belgrad", "kosovo-autonomie"]
          },
          {
            label: "Tuđman als kroatische Staatsgründungsfigur",
            variants: ["tuđman", "tudjman", "kroatische unabhängigkeit", "kroatischer staat", "souveränität", "staatsprojekt"]
          },
          {
            label: "beide als Akteure nationalistischer Zuspitzung",
            variants: ["nationalistische zuspitzung", "nationalismus", "mobilisierung", "symbolpolitik", "führungsfiguren", "zuspitzung"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Milošević steht hier für serbische Zentralisierung und nationalistische Zuspitzung aus Belgrad. Tuđman steht für das kroatische Staatsprojekt und die Unabhängigkeitsstrategie Kroatiens."
      }
    ],
    resources: [
      {
        id: "r-zerfall-doku-2",
        bucket: "Pflichtquelle: zuerst bearbeiten",
        type: "Video",
        title: "Balkan in Flammen, Folge 2: Ein Land zerfaellt",
        focus: "Nationalismus, Propaganda, Kroatienkrieg, Bosnien und internationale Reaktionen",
        link: "https://www.dropbox.com/scl/fi/euklg1q25mcmsqurroa9n/Balkan-in-Flammen-Ein-Land-zerf-llt-Staffel-1-Folge-2.mp4?rlkey=480olq20vrdtf0g3a5fnomrmr&st=69p85xwk&dl=0",
        tags: ["Dropbox", "Pflicht", "Dokumentation"],
        selectionNote: "Hauptquelle der Station.",
        didacticUse: "Für Frage 1 bis 4."
      },
      {
        id: "r-zerfall-pdf",
        bucket: "Arbeitsblatt: für Vukovar und Europa",
        type: "PDF",
        title: "Arbeitsblatt Zerfall",
        focus: "Leitfragen zu Propaganda, Kriegsausbruch, Voelkerarmee, Vukovar und Bosnien",
        link: "assets/materials/balkan-in-flammen-fragen.pdf",
        tags: ["lokal", "Reader"],
        selectionNote: "Das Arbeitsblatt ergänzt die Doku um Leitfragen zu Vukovar und zur europäischen Reaktion.",
        didacticUse: "Vor allem für Frage 5 und 6 sowie zur Absicherung der Chronologie."
      },
      {
        id: "r-zerfall-yt-3",
        bucket: "Vertiefung: Chronologie 1990 bis 1992",
        type: "Video",
        title: "YouTube-Playlist, Video 3",
        focus: "Überblick zur Staatskrise 1990/91",
        link: "https://www.youtube.com/watch?v=Fm-pdnVz8EY&list=PL8991DFCF33730589&index=3",
        tags: ["YouTube", "Vertiefung"],
        selectionNote: "Nur nötig, wenn die Abfolge von Zagreb, Slowenien, Vukovar und Bosnien noch unscharf ist.",
        didacticUse: "Besonders für die Chronologiefrage geeignet."
      },
      {
        id: "r-zerfall-yt-4",
        bucket: "Vertiefung: Propaganda und Europa",
        type: "Video",
        title: "YouTube-Playlist, Video 4",
        focus: "Ergänzung zu Kriegsausbruch und internationaler Politik",
        link: "https://www.youtube.com/watch?v=sT_09hb1kzQ&list=PL8991DFCF33730589&index=4",
        tags: ["YouTube", "Vertiefung"],
        selectionNote: "Ergänzung, wenn Propaganda und europäische Reaktionen genauer gewichtet werden sollen.",
        didacticUse: "Hilft vor allem bei Frage 2, 4 und 5."
      },
      {
        id: "r-zerfall-apuz-causes",
        bucket: "Textquelle: Ursachen",
        type: "Website",
        title: "APuZ 37/1993: Ursachen des Krieges in Ex-Jugoslawien",
        focus: "APuZ-Text zu Vorgeschichte und Ursachen des Krieges in Ex-Jugoslawien",
        link: "https://www.bpb.de/shop/zeitschriften/apuz/archiv/536642/ursachen-des-krieges-in-ex-jugoslawien/",
        tags: ["APuZ", "Text"],
        selectionNote: "Für die Frage nach Ursachen und politischen Konfliktlinien.",
        didacticUse: "Vor allem für Frage 1 bis 3."
      },
      {
        id: "r-zerfall-apuz-policy",
        bucket: "Textquelle: internationale Politik",
        type: "Website",
        title: "APuZ 37/1993: Jugoslawienpolitik am Wendepunkt",
        focus: "APuZ-Text zur internationalen Jugoslawienpolitik 1993",
        link: "https://www.bpb.de/shop/zeitschriften/apuz/archiv/536643/jugoslawienpolitik-am-wendepunkt/",
        tags: ["APuZ", "Text"],
        selectionNote: "Für die Frage nach Zögern, Fehleinschätzungen und europäischer Politik.",
        didacticUse: "Vor allem für Frage 4 und 5."
      },
    ],
    questions: [
      {
        id: "q-zerfall-1",
        type: "short-text",
        challenge: "Akteursanalyse",
        prompt:
          "Erkläre knapp, wie sich Milošević und Tuđman in Zielen und politischer Strategie unterschieden.",
        help:
          "Die Sofortkorrektur erwartet keine Biographien, sondern einen historischen Vergleich ihrer Politik.",
        placeholder: "Milošević und Tuđman unterschieden sich vor allem darin, dass ...",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-apuz-causes", "r-zerfall-apuz-policy", "r-zerfall-pdf"],
        conceptGroups: [
          {
            label: "serbische Zentralisierung oder Großserbien bei Milošević",
            variants: [
              "großserbien",
              "serbischer nationalismus",
              "zentralisieren",
              "serbische dominanz",
              "serbische macht",
              "belgrad"
            ]
          },
          {
            label: "kroatische Unabhängigkeit oder Staatsgründung bei Tuđman",
            variants: [
              "unabhaengigkeit",
              "kroatischer nationalismus",
              "eigener staat",
              "kroatische souveränität",
              "abspaltung",
              "staatsgruendung"
            ]
          },
          {
            label: "historische Symbolpolitik oder Instrumentalisierung von Vergangenheit",
            variants: [
              "geschichtsbilder",
              "historische symbole",
              "traumata",
              "vergangenheit",
              "instrumentalisieren",
              "propaganda"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Milošević verfolgte eine serbisch dominierte Zentralisierung beziehungsweise großserbische Politik, während Tuđman auf einen eigenständigen kroatischen Nationalstaat zielte. Beide arbeiteten mit historischer Symbolpolitik und nationaler Mobilisierung."
      },
      {
        id: "q-zerfall-2",
        type: "short-text",
        challenge: "Medienanalyse",
        prompt:
          "Warum war Propaganda, vor allem über das Fernsehen, ein zentraler Eskalationsfaktor?",
        help:
          "Nenne mindestens zwei Wirkungen. Synonyme für Feindbild, Angst, Mobilisierung und Legitimierung werden erkannt.",
        placeholder: "Propaganda war zentral, weil ...",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-apuz-causes", "r-zerfall-apuz-policy", "r-zerfall-pdf", "r-zerfall-yt-4"],
        conceptGroups: [
          {
            label: "Feindbilder und Angst wurden verstärkt",
            variants: [
              "feindbild",
              "angst",
              "hass",
              "bedrohung",
              "demonisieren",
              "gegnerbild"
            ]
          },
          {
            label: "Gewalt oder Mobilisierung wurde legitimiert",
            variants: [
              "legitimieren",
              "mobilisieren",
              "aufhetzen",
              "rechtfertigen",
              "Unterstützung für Krieg",
              "gewalt vorbereiten"
            ]
          },
          {
            label: "komplexe Konflikte wurden national vereinfacht",
            variants: [
              "vereinfachen",
              "wir gegen sie",
              "nationalistisch",
              "polarisiert",
              "schwarz weiss",
              "vereinseitigen"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Propaganda verstärkte Angst und Feindbilder, polarisierte die Gesellschaft in nationale Lager und schuf Zustimmung für Gewalt. Fernsehen wirkte dabei nicht nur informierend, sondern mobilisierend und legitimierend."
      },
      {
        id: "q-zerfall-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die Zuspitzung des Zerfalls von 1990 bis 1992 in eine schlüssige Reihenfolge.",
        help:
          "Beginne mit dem Fußballspiel von Zagreb und ende mit dem Beginn der Belagerung Sarajevos.",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-apuz-causes", "r-zerfall-apuz-policy", "r-zerfall-pdf", "r-zerfall-yt-3"],
        items: [
          {
            id: "zagreb-1990",
            label: "Das Fußballspiel in Zagreb im Mai 1990 wird zum Symbol der eskalierenden Polarisierung.",
            detail: "Gesellschaftliche Gewalt ist bereits vor dem offenen Krieg sichtbar.",
            imageSrc: "assets/module-images/stadion-maksimir-zagreb-v2.jpg",
            imageAlt: "Stadion Maksimir in Zagreb"
          },
          {
            id: "slowenien-1991",
            label: "Der Zehn-Tage-Krieg in Slowenien zeigt 1991 die militärische Krise des Bundesstaats.",
            detail: "Der schnelle Konflikt legt Schwachstellen der jugoslawischen Volksarmee offen.",
            imageSrc: "assets/module-images/slovenian-war-map-cropped.jpg",
            imageAlt: "Darstellung des Zehn-Tage-Kriegs in Slowenien"
          },
          {
            id: "vukovar-1991",
            label: "Die Belagerung und Zerstörung Vukovars radikalisiert den Kroatienkrieg im Herbst 1991.",
            detail: "Das Bild des Krieges verändert sich international deutlich.",
            imageSrc: "assets/module-images/vukovar-water-tower.jpg",
            imageAlt: "Wasserturm von Vukovar als Symbol der Zerstörung"
          },
          {
            id: "anerkennung-1991",
            label: "Deutschland und weitere Staaten erkennen Kroatien und Slowenien Ende 1991 beziehungsweise Anfang 1992 an.",
            detail: "Außenpolitik greift nun offen in die Zerfallslage ein.",
            imageSrc: "assets/module-images/franjo-tudjman-1995.jpg",
            imageAlt: "Franjo Tuđman als Repräsentant des kroatischen Staatsprojekts"
          },
          {
            id: "referendum-bosnien-1992",
            label: "Bosnien-Herzegowina stimmt 1992 über die Unabhängigkeit ab.",
            detail: "Damit verschiebt sich der Konfliktschwerpunkt nach Bosnien.",
            imageSrc: "assets/module-images/alija-izetbegovic.jpg",
            imageAlt: "Alija Izetbegović als Repräsentant des unabhängigen Bosnien-Herzegowina"
          },
          {
            id: "sarajevo-1992",
            label: "Mit dem Beginn der Belagerung Sarajevos wird der Bosnienkrieg weltweit sichtbar.",
            detail: "Der Krieg trifft nun eine multiethnische Hauptstadt mit voller Härte.",
            imageSrc: "assets/module-images/sarajevo-siege-shelling-destruction.jpg",
            imageAlt: "Zerstörungen in Sarajevo während der Belagerung"
          }
        ],
        correctOrder: [
          "zagreb-1990",
          "slowenien-1991",
          "vukovar-1991",
          "anerkennung-1991",
          "referendum-bosnien-1992",
          "sarajevo-1992"
        ],
        explanation:
          "Die Chronologie zeigt, wie aus Polarisierung, gescheiterter Bundesgewalt, internationaler Anerkennung und Bosniens Unabhängigkeit ein neuer und noch komplexerer Krieg entstand."
      },
      {
        id: "q-zerfall-4",
        type: "open-analysis",
        challenge: "Transfer",
        prompt:
          "Bewerte die Rolle Europas zu Beginn des Zerfalls: Überwog politisches Zögern oder richteten einzelne Entscheidungen wie die Anerkennung Kroatiens und Sloweniens zusätzlichen Schaden an? Begründe mit Materialbezügen.",
        help:
          "Eine starke Antwort verbindet Diplomatie, Nichtstun, Anerkennungspolitik und Kriegsfolgen miteinander.",
        placeholder: "Europas Rolle war widerspruechlich, weil ...",
        teacherPrompt:
          "Die Antwort sollte nicht monokausal sein. Beides kann zugleich gelten: zu spät reagieren und dann mit riskanten Entscheidungen handeln.",
        commonPitfall:
          "Häufig wird nur verurteilt oder entschuldigt, ohne die unterschiedlichen Phasen europäischer Politik zu unterscheiden.",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-apuz-causes", "r-zerfall-apuz-policy", "r-zerfall-pdf", "r-zerfall-yt-3", "r-zerfall-yt-4"],
        minWords: 130,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance"],
          targetHits: 5
        },
        sourceHints: ["europa", "anerkennung", "vukovar", "slowenien", "kroatien", "bosnien"],
        rubric: [
          { concept: "Zögern oder Unentschlossenheit Europas", keywords: ["zögern", "untätig", "uneinheitlich", "spät", "diplomatie", "nicht eingegriffen"] },
          { concept: "Anerkennungspolitik als Eingriff", keywords: ["anerkennung", "slowenien", "kroatien", "deutschland", "europäische staaten", "früh"] },
          { concept: "Folgen für die Kriegsdynamik", keywords: ["eskalation", "folge", "krieg", "konsequenz", "zuspitzung", "gewalt"] },
          { concept: "Differenzierung statt Einzelfaktor", keywords: ["einerseits", "andererseits", "zugleich", "während", "nicht nur", "mehrere faktoren"] },
          { concept: "historisches Urteil", keywords: ["ich bewerte", "entscheidend", "insgesamt", "deshalb", "meine these"] }
        ],
        modelAnswer:
          "Europa reagierte zunächst zu zögerlich und uneinheitlich auf die Zuspitzung. Zugleich wirkten einzelne Entscheidungen wie die Anerkennungspolitik nicht befriedend, sondern griffen in einen bereits eskalierenden Konflikt ein. Entscheidend ist deshalb weniger eine einfache Schuldzuweisung als die Einsicht, dass Unentschlossenheit und riskante Intervention nebeneinanderstanden."
      },
      {
        id: "q-zerfall-5",
        type: "short-text",
        challenge: "Vertiefung",
        prompt:
          "Warum blieb die europäische Staatengemeinschaft zu Beginn des Zerfalls zunächst weitgehend untätig?",
        help:
          "Gesucht sind politische Gründe, nicht bloß ein moralisches Urteil. Synonyme für Uneinigkeit, Fehleinschätzung und fehlende Eingriffsbereitschaft werden erkannt.",
        placeholder: "Europa blieb zunächst untätig, weil ...",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-apuz-causes", "r-zerfall-apuz-policy", "r-zerfall-pdf", "r-zerfall-yt-4"],
        conceptGroups: [
          {
            label: "Uneinigkeit oder fehlende gemeinsame Linie",
            variants: ["uneinigkeit", "uneinheitlich", "keine gemeinsame linie", "gespalten", "diplomatisch zerstritten", "europa uneins"]
          },
          {
            label: "Konflikt wurde unterschätzt oder falsch gelesen",
            variants: ["unterschaetzt", "unterschätzt", "fehleinschaetzung", "falsch eingeschätzt", "als innenproblem", "nicht ernst genug"]
          },
          {
            label: "fehlende Bereitschaft zum entschlossenen Eingreifen",
            variants: ["nicht eingreifen", "zoegern", "zögern", "keine intervention", "keine handlungsbereitschaft", "abwartend"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Europa blieb zunächst weitgehend untätig, weil die Staaten uneins waren, die Dynamik des Zerfalls unterschätzten und nicht bereit waren, früh entschlossen einzugreifen. Der Konflikt wurde lange eher verwaltet als politisch klar beantwortet."
      },
      {
        id: "q-zerfall-6",
        type: "open-analysis",
        challenge: "Vertiefung",
        prompt:
          "Warum wurde Vukovar zu einem internationalen Symbol des Kroatienkriegs, und was änderte dieses Bild an der Wahrnehmung des Konflikts? Begründe mit Materialbezügen.",
        help:
          "Verbinde militärische Gewalt, mediale Wirkung und internationale Wahrnehmung.",
        placeholder: "Vukovar wurde zum Symbol, weil ...",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-apuz-causes", "r-zerfall-apuz-policy", "r-zerfall-pdf"],
        minWords: 100,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "nuance"],
          targetHits: 4
        },
        sourceHints: ["vukovar", "belagerung", "zerstoerung", "medien", "kroatienkrieg"],
        rubric: [
          { concept: "Belagerung oder massive Zerstörung", keywords: ["belagerung", "zerstoerung", "artillerie", "stadt", "vukovar"] },
          { concept: "mediale oder symbolische Wirkung", keywords: ["bild", "symbol", "medien", "wahrnehmung", "international"] },
          { concept: "Veränderung der Konfliktwahrnehmung", keywords: ["eskalation", "brutalitaet", "brutalität", "nicht mehr ignorierbar", "sichtbar"] },
          { concept: "historisches Urteil", keywords: ["deshalb", "entscheidend", "zeigt", "macht deutlich", "insgesamt"] }
        ],
        modelAnswer:
          "Vukovar wurde zum Symbol, weil die Belagerung und Zerstörung der Stadt die Brutalität des Krieges sichtbar machten. In den Medien stand Vukovar für einen Konflikt, der nicht mehr als bloße Staatskrise gelesen werden konnte, sondern als offener Krieg mit massiver Gewalt gegen Städte und Bevölkerung."
      }
    ]
  },
  {
    id: "bosnienkrieg",
    step: "3",
    title: "Bosnienkrieg, Sarajevo und Srebrenica",
    era: "1992 bis 1995",
    intro:
      "Die Station behandelt den Bosnienkrieg: ethnische Säuberungen, Sarajevo, das UN-Scheitern und Srebrenica.",
    goal:
      "Du kannst zentrale Formen der Gewalt im Bosnienkrieg erklären und Sarajevo, Srebrenica sowie die internationale Reaktion einordnen.",
    route:
      "Nutze Folge 3 als Hauptquelle. Arbeite den Überblickstext zum Bosnienkrieg gezielt mit und verwende die Sarajevo-Bilder für die Bildfragen.",
    teacherNote:
      "Die Station verlangt besonders sorgsame Begleitung, weil sie mit Massengewalt, Belagerung und Genozid arbeitet. Bilddeutung und Begriffssicherung sollten klar voneinander getrennt werden.",
    teacherToolkit: {
      duration: "45 bis 60 Minuten",
      socialForms: [
        "Ruhige Einzelarbeit mit klaren Arbeitsphasen",
        "Partnervergleich nur nach der Bilddeutung",
        "Plenumssicherung zu Sarajevo, Srebrenica und UN-Mandat"
      ],
      assessmentFocus: [
        "ethnische Säuberung als gezielte Kriegsstrategie verstehen",
        "Sarajevo nicht nur als Opferbild, sondern als Symbolraum deuten",
        "UN-Versagen, Srebrenica und NATO-Intervention miteinander verknüpfen"
      ],
      misconceptions: [
        "Bosnienkrieg sei nur ein chaotischer Bürgerkrieg ohne Planung gewesen",
        "Srebrenica sei ein isoliertes Einzelereignis",
        "Sarajevo stehe nur für Zerstörung und nicht auch für multiethnisches Zusammenleben"
      ],
      product:
        "Bildgestützte Transferantwort oder kommentierte Chronologie der Eskalation 1992 bis 1995.",
      extension:
        "Mit einer Zusatzfrage arbeiten: Warum wurde gerade Sarajevo weltweit zu einem Bild des Krieges?"
    },
    visual: {
      src: "assets/module-images/sarajevo-grbavica.jpeg",
      alt: "Zerstörte Gebäude im Sarajevoer Stadtteil Grbavica nach dem Krieg",
      sourceLabel: "Sarajevo_Grbavica.jpeg"
    },
    visualDossierTitle: "Bildquellen zum Bosnienkrieg",
    visualDossierIntro:
      "Die Bilder zeigen Belagerung, zerstörten Stadtraum, Srebrenica und die militärische Wende von 1995.",
    visualDossier: [
      {
        src: "assets/module-images/sarajevo-siege-shelling-destruction.jpg",
        alt: "Zerstörungen in Sarajevo während der Belagerung",
        title: "Belagerung von Sarajevo",
        caption: "Zerstörungen in Sarajevo während der Belagerung der Stadt von 1992 bis 1995.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild markiert Sarajevo als zentralen Kriegs- und Erinnerungsort."
      },
      {
        src: "assets/module-images/bombing-republika-srpska.jpg",
        alt: "Luftoperationen gegen bosnisch-serbische Stellungen 1995",
        title: "NATO-Luftangriffe 1995",
        caption: "Bild aus dem Kontext der NATO-Luftangriffe gegen bosnisch-serbische Stellungen im Jahr 1995.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild gehört in diese Station, weil es die internationale Kriegswende 1995 markiert."
      },
      {
        src: "assets/module-images/sarajevo-grbavica.jpeg",
        alt: "Zerstörte Gebäude im Stadtteil Grbavica in Sarajevo",
        title: "Sarajevo als zerstörter Stadtraum",
        caption: "Fotografie zerstörter Wohnhäuser im Sarajevoer Stadtteil Grbavica nach der Belagerung.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild dient direkt der Bildanalysefrage zu Belagerung, Zivilbevölkerung und Nachkriegsspuren."
      },
      {
        src: "assets/module-images/srebrenica-memorial.jpg",
        alt: "Gedenkstätte von Srebrenica",
        title: "Srebrenica als Erinnerungsort",
        caption: "Aufnahme der Gedenkstätte Potočari bei Srebrenica, die an den Genozid von Juli 1995 erinnert.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild verbindet die Chronologiefrage mit der späteren Erinnerung an Srebrenica."
      }
    ],
    actorFocus: {
      title: "Akteure des Bosnienkriegs",
      intro:
        "Die Porträts ordnen die wichtigsten politischen und militärischen Akteure."
    },
    actors: [
      {
        name: "Alija Izetbegović",
        role: "Vorsitzender des Staatspräsidiums von Bosnien-Herzegowina",
        lens: "Er repräsentiert den international anerkannten bosnischen Staat während Belagerung, Krieg und Verhandlungen.",
        whyHere:
          "Er gehört in diese Station, weil Bosnienkrieg und Sarajevo nicht nur aus Täter-, sondern auch aus Staatsperspektive erklärt werden müssen.",
        imageSrc: "assets/module-images/alija-izetbegovic.jpg",
        imageAlt: "Alija Izetbegović im Porträt",
        imagePosition: "center top"
      },
      {
        name: "Radovan Karadžić",
        role: "politischer Führer der bosnischen Serben und Präsident der Republika Srpska",
        lens: "Er steht für die politische Planung der Abspaltung, der Belagerungspolitik und der ethnischen Homogenisierung.",
        whyHere:
          "Er ist hier wichtig, weil an ihm die politische Ebene von Kriegführung, Separatismus und Srebrenica sichtbar wird.",
        imageSrc: "assets/module-images/radovan-karadzic-1994.jpg",
        imageAlt: "Radovan Karadžić im März 1994",
        imagePosition: "center top"
      },
      {
        name: "Ratko Mladić",
        role: "militärischer Kommandeur der bosnisch-serbischen Streitkräfte",
        lens: "Er steht für die operative Gewaltlogik des Krieges, von der Belagerung Sarajevos bis zu Srebrenica.",
        whyHere:
          "Er gehört in diese Station, weil Frage 6 ausdrücklich politische und militärische Verantwortung unterscheiden lässt.",
        imageSrc: "assets/module-images/ratko-mladic-1993.jpg",
        imageAlt: "Ratko Mladić im Jahr 1993",
        imagePosition: "center top"
      },
      {
        name: "Biljana Plavšić",
        role: "führende Politikerin der Republika Srpska, später deren Präsidentin",
        lens: "Sie steht für die politische Breite der bosnisch-serbischen Führung jenseits der bekannteren Figuren Karadžić und Mladić.",
        whyHere:
          "Sie bleibt in der Station, damit die politische Führung der Republika Srpska nicht auf zwei Einzelpersonen verkürzt wird.",
        imageSrc: "assets/module-images/biljana-plavsic.jpeg",
        imageAlt: "Biljana Plavšić im Porträt",
        imagePosition: "center top"
      }
    ],
    miniQuestions: [
      {
        id: "mq-bosnien-1",
        title: "Militär und Zivilbevölkerung",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Wie hingen militärische Strategie und Gewalt gegen Zivilistinnen und Zivilisten im Bosnienkrieg zusammen?",
        help: "Beschreibe nicht nur Gewalt, sondern ihren strategischen Zusammenhang.",
        placeholder: "Die Gewalt gegen Zivilisten hing mit der Strategie zusammen, weil ...",
        sourceIds: ["r-bosnien-doku-3", "r-bosnien-yt-5"],
        conceptGroups: [
          {
            label: "Belagerung, Beschuss oder militärischer Druck",
            variants: ["belagerung", "beschuss", "militärisch", "druck", "front", "strategie"]
          },
          {
            label: "Zivilbevölkerung wurde gezielt getroffen",
            variants: ["zivilisten", "zivilbevölkerung", "gezielt", "terror", "angriffe auf städte", "beschossen"]
          },
          {
            label: "Vertreibung oder Kontrolle von Räumen",
            variants: ["vertreibung", "territorium", "gebiete", "kontrolle", "ethnische säuberung", "raumgewinn"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Gewalt gegen Zivilisten war nicht bloß Begleiterscheinung, sondern Teil der Strategie. Durch Belagerung, Beschuss und Terror sollten Räume kontrolliert, Menschen vertrieben und politische Ziele militärisch erzwungen werden."
      },
      {
        id: "mq-bosnien-2",
        title: "Sarajevo als Symbol",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Warum wurde Sarajevo weltweit zu einem Symbol des Bosnienkriegs?",
        help: "Nenne konkrete Merkmale der Stadt und der Belagerung.",
        placeholder: "Sarajevo wurde zum Symbol, weil ...",
        sourceIds: ["r-bosnien-doku-3", "r-bosnien-bild-1", "r-bosnien-bild-2"],
        conceptGroups: [
          {
            label: "Belagerung der Hauptstadt",
            variants: ["belagerung", "hauptstadt", "sarajevo", "eingeschlossen", "jahrelang", "stadt"]
          },
          {
            label: "sichtbare Gewalt gegen Alltagsleben",
            variants: ["alltag", "zivilisten", "scharfschützen", "beschuss", "märkte", "wohngebiete"]
          },
          {
            label: "internationale Öffentlichkeit",
            variants: ["weltweit", "medien", "öffentlichkeit", "symbol", "international", "fernsehen"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Sarajevo wurde zum Symbol, weil die belagerte Hauptstadt über Jahre sichtbar machte, wie ziviles Alltagsleben unter Beschuss geriet. Die internationale Medienöffentlichkeit nahm diese Gewalt besonders stark wahr."
      },
      {
        id: "mq-bosnien-3",
        title: "Ethnische Säuberung konkret",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Was bedeutete 'ethnische Säuberung' im Kriegsalltag konkret?",
        help: "Nenne konkrete Handlungen, nicht nur den Oberbegriff.",
        placeholder: "Konkret bedeutete ethnische Säuberung ...",
        sourceIds: ["r-bosnien-doku-3", "r-bosnien-wiki", "r-bosnien-pdf"],
        conceptGroups: [
          {
            label: "Vertreibung oder Deportation",
            variants: ["vertreibung", "deportation", "verjagen", "zwangsumsiedlung", "entfernen", "aus ihren gebieten"]
          },
          {
            label: "Gewaltmittel wie Lager, Terror, Vergewaltigung oder Mord",
            variants: ["lager", "terror", "vergewaltigung", "mord", "gewalt", "massaker"]
          },
          {
            label: "Ziel war ethnisch homogene Gebiete",
            variants: ["homogene gebiete", "ethnisch homogen", "nur eine gruppe", "territorium", "säubern", "gebietskontrolle"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Im Kriegsalltag bedeutete ethnische Säuberung Vertreibung, Deportation und massive Gewalt bis hin zu Lagern, Vergewaltigungen und Mord. Ziel war die Herstellung ethnisch kontrollierter oder homogener Gebiete."
      },
      {
        id: "mq-bosnien-4",
        title: "Srebrenica und UN-Scheitern",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Warum erhöhten Srebrenica und das Scheitern der UN 1995 den Druck auf die NATO?",
        help: "Verbinde Massaker, Schutzversprechen und internationale Reaktion.",
        placeholder: "Der Druck auf die NATO stieg, weil ...",
        sourceIds: ["r-bosnien-doku-3", "r-bosnien-pdf", "r-bosnien-yt-6"],
        conceptGroups: [
          {
            label: "Srebrenica als Massaker oder Genozid",
            variants: ["srebrenica", "massaker", "genozid", "tausende", "1995", "ermordet"]
          },
          {
            label: "UN-Schutzversprechen scheiterte",
            variants: ["un", "schutzgebiet", "scheitern", "blauhelme", "nicht geschützt", "versagen"]
          },
          {
            label: "dadurch wuchs Interventionsdruck auf die NATO",
            variants: ["nato", "interventionsdruck", "luftangriffe", "eingreifen", "reagieren", "internationaler druck"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Nach Srebrenica wurde sichtbar, dass selbst ein von der UN geschützter Raum nicht geschützt wurde. Das Massaker und das UN-Versagen erhöhten deshalb den politischen Druck auf die NATO, militärisch zu reagieren."
      },
      {
        id: "mq-bosnien-5",
        title: "Akteure einordnen",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Welche Personen dieser Station stehen für den bosnischen Staat, und welche für die bosnisch-serbische politische oder militärische Führung?",
        help: "Ordne die Personen knapp ihren Rollen zu.",
        placeholder: "Für den bosnischen Staat steht ..., für die bosnisch-serbische Führung stehen ...",
        sourceIds: ["r-bosnien-doku-3", "r-bosnien-wiki", "r-bosnien-pdf"],
        conceptGroups: [
          {
            label: "Izetbegović als Präsident Bosnien-Herzegowinas",
            variants: ["izetbegović", "izetbegovic", "präsident", "bosnischer staat", "bosnien-herzegowina", "regierung"]
          },
          {
            label: "Karadžić als politische Führung der Republika Srpska",
            variants: ["karadžić", "karadzic", "politische führung", "republika srpska", "präsident", "bosnisch-serbisch"]
          },
          {
            label: "Mladić als militärischer Kommandeur",
            variants: ["mladić", "mladic", "militär", "kommandeur", "armee", "bosnisch-serbische streitkräfte"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Alija Izetbegović steht für den international anerkannten bosnischen Staat. Radovan Karadžić steht für die politische Führung der Republika Srpska, Ratko Mladić für deren militärische Kriegsführung."
      }
    ],
    resources: [
      {
        id: "r-bosnien-doku-3",
        bucket: "Pflichtquelle: zuerst bearbeiten",
        type: "Video",
        title: "Balkan in Flammen, Folge 3: Jugoslawien in Trümmern",
        focus: "Bosnienkrieg, Srebrenica, NATO, Dayton, Kosovo und Langzeitfolgen",
        link: "https://www.dropbox.com/scl/fi/zsqgssv5j9utgjbosmyjb/Balkan-in-Flammen-Jugoslawien-in-Tr-mmern-Staffel-1-Folge-3.mp4?rlkey=xcgmhvo7qf3x0kx0u3zxpg1pu&st=txldgppw&dl=0",
        tags: ["Dropbox", "Pflicht", "Dokumentation"],
        selectionNote: "Hauptquelle der Station.",
        didacticUse: "Für Frage 1 bis 3 und die Transferaufgaben."
      },
      {
        id: "r-bosnien-wiki",
        bucket: "Referenztext: für Daten und Begriffe",
        type: "Website",
        title: "Wikipedia: Bosnienkrieg",
        focus: "Daten, Kriegsparteien, Verlauf, Belagerung Sarajevos, Srebrenica und Dayton",
        link: "https://de.wikipedia.org/wiki/Bosnienkrieg",
        tags: ["Wikipedia", "Referenz"],
        selectionNote: "Die Seite dient hier als Nachschlagehilfe für Begriffe, Daten und Kriegsparteien, nicht als Lesetext am Stück.",
        didacticUse: "Vor allem für Frage 1, 3, 5 und 6."
      },
      {
        id: "r-bosnien-pdf",
        bucket: "Arbeitsblatt: für Sarajevo und Srebrenica",
        type: "PDF",
        title: "Arbeitsblatt Bosnienkrieg",
        focus: "Fragen zu Sarajevo, Omarska, sexueller Gewalt, Srebrenica und internationaler Reaktion",
        link: "assets/materials/balkan-in-flammen-fragen.pdf",
        tags: ["lokal", "Reader"],
        selectionNote: "Das Arbeitsblatt wurde in die Station integriert und ergänzt die Doku um Leitfragen.",
        didacticUse: "Besonders für Frage 4 bis 6."
      },
      {
        id: "r-bosnien-yt-5",
        bucket: "Vertiefung: Gewaltformen und Lager",
        type: "Video",
        title: "YouTube-Playlist, Video 5",
        focus: "ergänzender Impuls zum Bosnienkrieg und seiner Gewaltlogik",
        link: "https://www.youtube.com/watch?v=Koy2LRZCT3Y&list=PL8991DFCF33730589&index=5",
        tags: ["YouTube", "Vertiefung"],
        selectionNote: "Nur nötig, wenn Gewaltformen und Kriegslogik noch genauer ausgearbeitet werden sollen.",
        didacticUse: "Hilft besonders bei Frage 1 und 5."
      },
      {
        id: "r-bosnien-yt-6",
        bucket: "Vertiefung: Kriegswende 1995",
        type: "Video",
        title: "YouTube-Playlist, Video 6",
        focus: "zusätzliche Perspektive auf internationale Intervention und Kriegswende",
        link: "https://www.youtube.com/watch?v=2Imx42AjXj0&list=PL8991DFCF33730589&index=6",
        tags: ["YouTube", "Vertiefung"],
        selectionNote: "Ergänzung für die Phase von Srebrenica über NATO bis Dayton.",
        didacticUse: "Vor allem für Frage 3, 5 und 6."
      },
      {
        id: "r-bosnien-bild-1",
        bucket: "Bildquelle: für Frage 4",
        type: "Bild",
        title: "Sarajevo Grbavica",
        focus: "Zerstörter Stadtraum als Spur von Belagerung, Frontverlauf und Kriegsfolgen",
        link: "assets/module-images/sarajevo-grbavica.jpeg",
        tags: ["lokal", "Bildquelle"],
        selectionNote: "Diese Bildquelle ist nur für die Bildanalyse ausgewählt, nicht als Zusatzdeko.",
        didacticUse: "Direkt mit Frage 4 verknüpft.",
        imagePosition: "center center"
      },
      {
        id: "r-bosnien-bild-2",
        bucket: "Bildquelle: für Frage 4",
        type: "Bild",
        title: "Sarajevo im Mai 1996",
        focus: "Nachkriegssituation der Hauptstadt mit sichtbaren Einschlägen und Brüchen",
        link: "assets/module-images/sarajevo-may-1996.png",
        tags: ["lokal", "Bildquelle"],
        selectionNote: "Dieses Bild ergänzt Grbavica um die Nachkriegsperspektive von 1996.",
        didacticUse: "Direkt mit Frage 4 verknüpft.",
        imagePosition: "center center"
      },
    ],
    questions: [
      {
        id: "q-bosnien-1",
        type: "short-text",
        challenge: "Begriffsarbeit",
        prompt:
          "Erkläre knapp, was im Bosnienkrieg mit 'ethnischer Säuberung' gemeint ist.",
        help:
          "Die Sofortkorrektur erkennt verschiedene Formulierungen. Entscheidend ist, dass du Ziel und Mittel nennst.",
        placeholder: "Mit ethnischer Säuberung ist gemeint, dass ...",
        sourceIds: ["r-bosnien-doku-3", "r-bosnien-wiki", "r-bosnien-pdf"],
        conceptGroups: [
          {
            label: "gewaltsame Vertreibung oder Entfernung von Bevölkerung",
            variants: [
              "vertreibung",
              "zwangsumsiedlung",
              "verjagen",
              "entfernen",
              "deportation",
              "aus ihren gebieten treiben"
            ]
          },
          {
            label: "Gewalt, Terror oder Toetung als Mittel",
            variants: [
              "terror",
              "gewalt",
              "mord",
              "massaker",
              "lager",
              "vergewaltigung"
            ]
          },
          {
            label: "Ziel eines ethnisch homogenen Gebiets",
            variants: [
              "ethnisch homogen",
              "reinigen",
              "homogenes gebiet",
              "nur eine volksgruppe",
              "territoriale kontrolle",
              "homogenisierung"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Ethnische Säuberung bedeutete die gewaltsame Vertreibung unerwünschter Bevölkerungsgruppen, oft durch Terror, Lager, Mord oder sexuelle Gewalt. Ziel war die Schaffung ethnisch homogener Gebiete unter militärischer und politischer Kontrolle."
      },
      {
        id: "q-bosnien-2",
        type: "short-text",
        challenge: "Symbolverständnis",
        prompt:
          "Warum wurde die Belagerung Sarajevos zu einem Symbol des Bosnienkriegs?",
        help:
          "Verbinde Stadtraum, Zivilbevölkerung und internationale Wahrnehmung. Synonyme für Beschuss, Belagerung und Symbolraum werden erkannt.",
        placeholder: "Sarajevo wurde zum Symbol, weil ...",
        sourceIds: ["r-bosnien-doku-3", "r-bosnien-wiki", "r-bosnien-bild-1", "r-bosnien-bild-2"],
        conceptGroups: [
          {
            label: "lange Belagerung oder dauerhafter Beschuss",
            variants: [
              "belagerung",
              "jahrelang",
              "dauernder beschuss",
              "artillerie",
              "scharfschützen",
              "eingekesselt"
            ]
          },
          {
            label: "Zivilisten oder Alltag der Stadt wurden direkt getroffen",
            variants: [
              "zivilisten",
              "alltag",
              "bevölkerung",
              "kinder",
              "stadtleben",
              "zivile opfer"
            ]
          },
          {
            label: "Sarajevo stand für multiethnisches Bosnien und internationale Sichtbarkeit",
            variants: [
              "multiethnisch",
              "weltoffen",
              "hauptstadt",
              "symbol",
              "Weltöffentlichkeit",
              "internationale aufmerksamkeit"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Sarajevo wurde zum Symbol, weil die Stadt jahrelang belagert und aus den Hügeln beschossen wurde, während Zivilisten ihren Alltag unter Lebensgefahr aufrechterhalten mussten. Zugleich stand die multiethnische Hauptstadt für das Bosnien, das im Krieg zerstört wurde und weltweit sichtbar war."
      },
      {
        id: "q-bosnien-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die wichtigsten Einschnitte des Bosnienkriegs von der Unabhängigkeit bis zum Friedensschluss.",
        help:
          "Beginne mit dem Unabhängigkeitsreferendum und ende mit Dayton.",
        sourceIds: ["r-bosnien-doku-3", "r-bosnien-wiki", "r-bosnien-pdf", "r-bosnien-yt-6"],
        items: [
          {
            id: "referendum-1992",
            label: "Bosnien-Herzegowina stimmt 1992 über seine Unabhängigkeit ab.",
            detail: "Die politische Entscheidung löst eine neue Konfliktphase aus.",
            imageSrc: "assets/module-images/alija-izetbegovic.jpg",
            imageAlt: "Alija Izetbegović im Kontext der bosnischen Unabhängigkeit"
          },
          {
            id: "sarajevo-beginn-1992",
            label: "Kurz darauf beginnt die Belagerung Sarajevos.",
            detail: "Der Krieg wird an einer Hauptstadt exemplarisch sichtbar.",
            imageSrc: "assets/module-images/sarajevo-siege-shelling-destruction.jpg",
            imageAlt: "Zerstörungen in Sarajevo während der Belagerung"
          },
          {
            id: "washington-1994",
            label: "Das Washingtoner Abkommen von 1994 beendet den Krieg zwischen Bosniaken und Kroaten.",
            detail: "Ein Teilkonflikt wird damit neu geordnet.",
            imageSrc: "assets/module-images/washington-agreement-1994.jpg",
            imageAlt: "Unterzeichnung des Washingtoner Abkommens 1994"
          },
          {
            id: "srebrenica-1995",
            label: "Im Juli 1995 kommt es zum Massaker von Srebrenica.",
            detail: "Das UN-Schutzversprechen scheitert auf dramatische Weise.",
            imageSrc: "assets/module-images/srebrenica-memorial.jpg",
            imageAlt: "Gedenkstätte von Srebrenica"
          },
          {
            id: "nato-1995",
            label: "Die NATO greift 1995 mit Luftangriffen gegen bosnisch-serbische Ziele ein.",
            detail: "Erst jetzt verändert sich die militärische Dynamik deutlich.",
            imageSrc: "assets/module-images/bombing-republika-srpska.jpg",
            imageAlt: "Luftoperationen gegen bosnisch-serbische Stellungen 1995"
          },
          {
            id: "dayton-1995",
            label: "Das Dayton-Abkommen beendet Ende 1995 den Krieg.",
            detail: "Der Frieden stoppt die Kämpfe, schreibt aber ethnische Trennung fort.",
            imageSrc: "assets/module-images/dayton-agreement.jpg",
            imageAlt: "Unterzeichnung des Dayton-Abkommens 1995"
          }
        ],
        correctOrder: [
          "referendum-1992",
          "sarajevo-beginn-1992",
          "washington-1994",
          "srebrenica-1995",
          "nato-1995",
          "dayton-1995"
        ],
        explanation:
          "Die Abfolge macht deutlich, wie lange der Krieg trotz internationaler Präsenz andauerte und dass erst das Zusammenspiel aus Srebrenica, NATO-Eingriff und Verhandlungen Dayton möglich machte."
      },
      {
        id: "q-bosnien-4",
        type: "open-analysis",
        challenge: "Bilddeutung",
        prompt:
          "Deute die beiden Sarajevo-Bilder im Zusammenhang mit dem Bosnienkrieg: Was zeigen sie über Kriegsverlauf, Belagerung und die schwierige Nachkriegswirklichkeit? Beziehe die Doku und den Artikel zum Bosnienkrieg ein.",
        help:
          "Eine gute Antwort beschreibt nicht nur Zerstörung, sondern verbindet Bilddetails mit historischen Zusammenhängen und der Symbolkraft Sarajevos.",
        placeholder: "Die beiden Bilder zeigen nicht nur Schäden, sondern ...",
        teacherPrompt:
          "Lernende sollten zwischen Beschreibung, historischer Einordnung und Deutung unterscheiden.",
        commonPitfall:
          "Viele Antworten bleiben auf der Ebene des Schocks über Zerstörung stehen und verbinden die Bilder nicht mit Belagerung, Zivilbevölkerung oder Nachkriegsordnung.",
        sourceIds: ["r-bosnien-doku-3", "r-bosnien-wiki", "r-bosnien-bild-1", "r-bosnien-bild-2"],
        minWords: 130,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance"],
          targetHits: 5
        },
        sourceHints: ["sarajevo", "belagerung", "grbavica", "zivilisten", "bosnienkrieg", "1996"],
        rubric: [
          { concept: "Beschreibung konkreter Kriegsfolgen im Stadtraum", keywords: ["zerstoerung", "einschuss", "ruine", "schaeden", "front", "stadtraum"] },
          { concept: "Verbindung zur Belagerung oder Gewalt gegen Zivilisten", keywords: ["belagerung", "beschuss", "scharfschützen", "artillerie", "zivilisten", "alltag"] },
          { concept: "Vergleich beider Bilder", keywords: ["wahrend", "im vergleich", "beide", "anders", "einerseits", "andererseits"] },
          { concept: "Nachkriegswirklichkeit oder fortbestehende Brüche", keywords: ["nachkrieg", "1996", "spuren", "brueche", "trauma", "nicht vorbei"] },
          { concept: "Symbolkraft Sarajevos", keywords: ["symbol", "hauptstadt", "multiethnisch", "Weltöffentlichkeit", "bosnien", "sichtbar"] }
        ],
        modelAnswer:
          "Die Bilder zeigen Sarajevo als Stadt, in der die Belagerung noch lange nach dem Waffenstillstand sichtbar bleibt. Das Grbavica-Foto macht Zerstörung und Frontnähe sichtbar, während das Bild von 1996 die scheinbare Rückkehr des Alltags mit fortbestehenden Kriegsspuren kontrastiert. So wird Sarajevo zugleich als Symbol der Gewalt gegen Zivilisten und als Ort einer brüchigen Nachkriegswirklichkeit lesbar."
      },
      {
        id: "q-bosnien-5",
        type: "short-text",
        challenge: "Vertiefung",
        prompt:
          "Warum war das UN-Mandat in Bosnien strukturell zum Scheitern verurteilt?",
        help:
          "Gesucht ist eine knappe Strukturkritik: Auftrag, Mittel und reale Kriegslage müssen zusammenkommen.",
        placeholder: "Das UN-Mandat scheiterte strukturell, weil ...",
        sourceIds: ["r-bosnien-doku-3", "r-bosnien-wiki", "r-bosnien-pdf"],
        conceptGroups: [
          {
            label: "Mandat und Mittel passten nicht zusammen",
            variants: ["zu schwach", "zu wenig mittel", "mandat passte nicht", "unzureichend", "ohne durchsetzung", "keine machtmittel"]
          },
          {
            label: "Friedenslogik traf auf realen Krieg",
            variants: ["friedensmission", "kein frieden", "kriegsrealität", "bürgerkrieg", "gewaltlage", "realer krieg"]
          },
          {
            label: "Schutzzonen oder Zivilbevölkerung konnten nicht wirksam geschützt werden",
            variants: ["schutzzonen", "schutzversprechen", "zivilisten", "nicht schuetzen", "nicht schützen", "srebrenica"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Das UN-Mandat war strukturell überfordert, weil seine Friedenslogik nicht zur realen Kriegslage passte. Die Vereinten Nationen hatten zu wenig Mittel und konnten Schutzzonen und Zivilbevölkerung deshalb nicht wirksam schützen."
      },
      {
        id: "q-bosnien-6",
        type: "open-analysis",
        challenge: "Vertiefung",
        prompt:
          "Welche unterschiedliche Rolle spielten Karadžić und Mladić im Bosnienkrieg, besonders mit Blick auf Srebrenica? Begründe mit Materialbezügen.",
        help:
          "Unterscheide politische Führung und militärische Umsetzung. Eine gute Antwort verbindet beide Ebenen.",
        placeholder: "Karadžić und Mladić wirkten zusammen, aber ...",
        sourceIds: ["r-bosnien-doku-3", "r-bosnien-pdf", "r-bosnien-wiki"],
        minWords: 100,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance"],
          targetHits: 4
        },
        sourceHints: ["karadzic", "mladic", "srebrenica", "politisch", "militaerisch"],
        rubric: [
          { concept: "Karadžić als politische Führungsfigur", keywords: ["karadzic", "politisch", "fuehrung", "führung", "republika srpska", "planung"] },
          { concept: "Mladić als militärischer Befehlshaber", keywords: ["mladic", "militaerisch", "militärisch", "armee", "kommandeur", "operation"] },
          { concept: "Verbindung beider Ebenen bei Srebrenica", keywords: ["srebrenica", "zusammen", "politische und militaerische ebene", "umsetzung", "verantwortung"] },
          { concept: "historisches Urteil", keywords: ["deshalb", "entscheidend", "zeigt", "macht deutlich", "insgesamt"] }
        ],
        modelAnswer:
          "Karadžić stand eher für die politische Führung und ideologische Rahmung der bosnisch-serbischen Politik, Mladić für die militärische Durchführung. Mit Blick auf Srebrenica wird gerade an beiden sichtbar, dass politische Planung und militärische Umsetzung im Bosnienkrieg eng miteinander verbunden waren."
      }
    ]
  },
  {
    id: "nachkrieg",
    step: "4",
    title: "Dayton, Kosovo und schwieriger Frieden",
    era: "1995 bis heute",
    intro:
      "Die Station behandelt die Nachkriegsordnung seit 1995: Dayton, den Kosovo-Konflikt, die NATO-Intervention und offene Folgen bis heute.",
    goal:
      "Du kannst Dayton als Friedensschluss und Blockadeordnung erklären, den Kosovo-Konflikt einordnen und den Bezug zur Schweiz erläutern.",
    route:
      "Arbeite zuerst die Abfolge Dayton, Kosovo, UÇK, Repression und NATO heraus. Nutze danach die Fragen und die Textquellen zu Nachkrieg, Erinnerung und Schweiz-Bezug.",
    teacherNote:
      "Die Station ist besonders geeignet für Urteilsbildung: Frieden beenden, ohne Konflikte wirklich zu lösen, ist hier der zentrale Spannungsbogen.",
    teacherToolkit: {
      duration: "35 bis 50 Minuten",
      socialForms: [
        "Einzelarbeit mit abschließender Urteilsdiskussion",
        "Partnerarbeit zur Frage nach Dayton",
        "Plenum mit Gegenüberstellung von Notwendigkeit und Problemfolgen"
      ],
      assessmentFocus: [
        "Dayton als Friedensschluss und Blockadeordnung zugleich erfassen",
        "Kosovo nicht als Nebenschauplatz, sondern als Fortsetzung ungelöster Konflikte verstehen",
        "internationale Intervention historisch abwaegen statt nur moralisch bewerten",
        "Schweiz-Bezug über Diaspora, Fluchtmigration und SWISSCOY konkret einordnen"
      ],
      misconceptions: [
        "Mit Dayton sei der gesamte Zerfall abgeschlossen gewesen",
        "Kosovo habe mit Bosnien nichts zu tun",
        "Intervention sei entweder ganz richtig oder ganz falsch gewesen"
      ],
      product:
        "Urteilsorientierter Kurzaufsatz zur Frage, ob internationale Intervention zu spät, aber dennoch entscheidend war.",
      extension:
        "Anschlussfähig an Gegenwartsfragen von Erinnerungspolitik, EU-Perspektive und Anerkennung des Kosovo."
    },
    visual: {
      src: "assets/module-images/sarajevo-may-1996.png",
      alt: "Sarajevo im Mai 1996 als Bild einer brüchigen Nachkriegsordnung",
      sourceLabel: "Sarajevo_may_1996.png"
    },
    visualDossierTitle: "Bildquellen zu Nachkrieg und Kosovo",
    visualDossierIntro:
      "Die Bilder zeigen Dayton, Krieg im Kosovo, NATO-Angriffe und Folgen in Belgrad.",
    visualDossier: [
      {
        src: "assets/module-images/dayton-agreement.jpg",
        alt: "Unterzeichnung des Dayton-Abkommens 1995",
        title: "Unterzeichnung des Dayton-Abkommens",
        caption: "Fotografie der Unterzeichnung des Dayton-Abkommens im November 1995.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild gehört zu Frage 1 und markiert den Ausgangspunkt der Nachkriegsphase."
      },
      {
        src: "assets/module-images/war-in-kosovo-1999-2.jpg",
        alt: "Kriegsschäden im Kosovo 1999",
        title: "Krieg im Kosovo 1998/99",
        caption: "Fotografie von Kriegsschäden im Kosovo aus dem Jahr 1999.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild liefert den Konfliktkontext für die Eskalation vor dem NATO-Einsatz."
      },
      {
        src: "assets/module-images/nato-bombing-yugoslavia-1999.jpg",
        alt: "Szene aus dem Kontext der NATO-Luftangriffe 1999",
        title: "NATO-Luftangriffe 1999",
        caption: "Fotografie aus dem Kontext der NATO-Luftangriffe gegen Ziele in der Bundesrepublik Jugoslawien im Frühjahr 1999.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild markiert den militärischen Eingriff der NATO im Kosovokrieg."
      },
      {
        src: "assets/module-images/rts-belgrade-ruins-1999.jpg",
        alt: "Ruinen der serbischen Rundfunkanstalt nach den NATO-Angriffen",
        title: "RTS-Gebäude in Belgrad nach dem Angriff",
        caption: "Ruinen der serbischen Rundfunkanstalt RTS nach den NATO-Angriffen von 1999 in Belgrad.",
        whyItMatters:
          "Arbeitsnutzen: Das Bild wird für die Abwägung von Wirkung, Kosten und Legitimation der Intervention gebraucht."
      }
    ],

    textDossierTitle: "Altaras lesen: Erinnerung nach 1991",
    textDossierIntro:
      "Der Auszug aus Zagreb zeigt konkret, wie im postjugoslawischen Kroatien mit Tito und dem sozialistischen Erbe umgegangen wurde.",
    textDossier: [
      {
        title: "Der Tito-Platz in Zagreb",
        context:
          "Altaras beschreibt einen offiziellen Besuch in Zagreb in den 1990er Jahren.",
        quote:
          "„Trg Jossipa Broza Tita“. Als wir am Tito-Platz halten, malen drei uniformierte Staatskünstler auf ein großes farbiges Schild: „Trg Sveta Democracija“.",
        source: "Adriana Altaras, Titos Brille, Erinnerung an einen Zagreb-Besuch.",
        task: "Halte fest, welche Umbenennung beschrieben wird und welche politische Aussage darin steckt.",
        questionId: "mq-nachkrieg-8"
      }
    ],
    actorFocus: {
      title: "Akteure seit 1995",
      intro:
        "Im Mittelpunkt stehen Rugova, Thaçi und Milošević."
    },
    actors: [
      {
        name: "Ibrahim Rugova",
        role: "kosovo-albanischer Politiker und Vertreter einer gewaltfreien Strategie",
        lens: "Er organisierte in den 1990er Jahren Parallelstrukturen und setzte auf internationale Diplomatie statt auf bewaffneten Widerstand.",
        whyHere:
          "Er ist hier zentral, weil die Kosovo-Eskalation ohne die vorausgehende gewaltfreie Strategie unverständlich bleibt.",
        imageSrc: "assets/module-images/ibrahim-rugova.jpg",
        imageAlt: "Ibrahim Rugova vor Bücherregal und Kosovo-Flagge",
        imagePosition: "center top"
      },
      {
        name: "Hashim Thaçi",
        role: "politischer Repräsentant der UÇK und später führender Politiker im Kosovo",
        lens: "Er steht für den Übergang von bewaffnetem Widerstand der UÇK zu politischer Führung nach dem Krieg.",
        whyHere:
          "Er gehört in diese Station, weil die UÇK als militärischer Arm vieler Kosovo-Albaner sonst als anonyme Abkürzung ohne Akteure bliebe.",
        imageSrc: "assets/module-images/hashim-thaci-2020.jpg",
        imageAlt: "Hashim Thaçi im Porträt",
        imageFit: "contain",
        imagePosition: "center top",
        imageBackground: "rgba(241, 236, 228, 0.95)"
      },
      {
        name: "Slobodan Milošević",
        role: "serbischer Machthaber in der späten Zerfallsphase",
        lens: "In dieser Station steht er konkret für die Kosovo-Politik Belgrads, die Repression gegen Kosovo-Albaner und den späteren Machtverlust nach 1999.",
        whyHere:
          "Er gehört in diese Station, weil sich am Kosovo-Konflikt die Spätphase seiner Politik besonders klar verfolgen lässt.",
        imageSrc: "assets/module-images/milosevic-in-hague.jpg",
        imageAlt: "Slobodan Milošević im Gerichtssaal in Den Haag",
        imagePosition: "center top"
      }
    ],
    miniQuestions: [
      {
        id: "mq-nachkrieg-1",
        title: "Dayton doppelt lesen",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Worin lag der Doppelcharakter des Dayton-Abkommens?",
        help: "Nenne eine positive und eine problematische Seite.",
        placeholder: "Dayton beendete ..., verfestigte aber ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-bpb-afterwar", "r-nachkrieg-republik-memory", "r-nachkrieg-wiki-bosnien", "r-nachkrieg-pdf"],
        conceptGroups: [
          {
            label: "Krieg wurde beendet",
            variants: ["krieg beenden", "waffenstillstand", "frieden", "kämpfe stoppen", "gewalt stoppen", "friedensschluss"]
          },
          {
            label: "ethnische Spaltung oder Entitäten wurden festgeschrieben",
            variants: ["ethnische spaltung", "entitäten", "republika srpska", "föderation", "zementiert", "teilungslogik"]
          },
          {
            label: "komplizierte Nachkriegsordnung oder Blockaden",
            variants: ["komplizierte staatsstruktur", "blockade", "reformblockade", "schwacher staat", "kompliziert", "handlungsfähigkeit"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Dayton war doppelt: Es beendete den Krieg und schuf Frieden, schrieb aber zugleich ethnische Teilungen und eine schwerfällige Staatsordnung fest."
      },
      {
        id: "mq-nachkrieg-2",
        title: "Kosovo-Kette",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Wie lautet die zentrale Eskalationskette im Kosovo-Konflikt der 1990er Jahre?",
        help: "Ordne die Entwicklung als Kette, nicht als Einzelereignisse.",
        placeholder: "Die Eskalation verlief von ... über ... zu ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-bpb-afterwar", "r-nachkrieg-republik-memory", "r-nachkrieg-wiki", "r-nachkrieg-yt-kosovo-podcast"],
        conceptGroups: [
          {
            label: "offene Statusfrage oder Verlust der Autonomie",
            variants: ["autonomieverlust", "statusfrage", "autonomie", "kosovo", "offene frage", "belgrad"]
          },
          {
            label: "Rugovas Parallelpolitik oder gewaltfreier Kurs",
            variants: ["rugova", "parallelpolitik", "gewaltfrei", "parallelstrukturen", "friedlich", "ziviler widerstand"]
          },
          {
            label: "UÇK, serbische Repression und NATO",
            variants: ["u ck", "uçek", "uçk", "repression", "serbische gewalt", "nato"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die Eskalationskette führte vom Autonomieverlust und der offenen Statusfrage über Rugovas gewaltfreie Parallelpolitik zur UÇK, zu verstärkter serbischer Repression und schließlich zur NATO-Intervention 1999."
      },
      {
        id: "mq-nachkrieg-3",
        title: "Thaçi und die UÇK",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Wie müssen Hashim Thaçi und die UÇK in dieser Station korrekt eingeordnet werden?",
        help: "Benenne sowohl die Person als auch die Funktion der Organisation.",
        placeholder: "Hashim Thaçi war ..., die UÇK war ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-bpb-afterwar", "r-nachkrieg-republik-memory", "r-nachkrieg-wiki", "r-nachkrieg-yt-kosovo-podcast"],
        conceptGroups: [
          {
            label: "Thaçi als politischer Repräsentant der UÇK",
            variants: ["thaçi", "thaci", "politischer repräsentant", "sprecher", "politischer vertreter", "führer"]
          },
          {
            label: "UÇK als bewaffnete oder militärische Organisation",
            variants: ["militärischer arm", "bewaffnet", "guerilla", "bewaffnete organisation", "kämpfer", "militärisch"]
          },
          {
            label: "Bezug zu vielen Kosovo-Albanern",
            variants: ["kosovo albaner", "kosovarische albaner", "albanische bevölkerung", "kosovo-albaner", "unterstützung", "vertretung"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Hashim Thaçi erscheint hier als politischer Repräsentant der UÇK. Die UÇK war eine bewaffnete Organisation, die für viele Kosovo-Albaner zum militärischen Arm des Widerstands wurde."
      },
      {
        id: "mq-nachkrieg-4",
        title: "Intervention unterscheiden",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Was ist der Unterschied zwischen rechtlicher, politischer und moralischer Bewertung der NATO-Intervention?",
        help: "Unterscheide die drei Ebenen ausdrücklich.",
        placeholder: "Rechtlich ..., politisch ..., moralisch ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-bpb-afterwar", "r-nachkrieg-republik-memory", "r-nachkrieg-pdf", "r-nachkrieg-wiki"],
        conceptGroups: [
          {
            label: "rechtliche Ebene",
            variants: ["rechtlich", "völkerrecht", "mandat", "uno", "un mandat", "legality"]
          },
          {
            label: "politische Ebene",
            variants: ["politisch", "machtpolitik", "strategie", "ziel", "intervention", "wirkung"]
          },
          {
            label: "moralische Ebene",
            variants: ["moralisch", "menschen schützen", "verantwortung", "ethisch", "massengewalt", "humanitär"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Rechtlich geht es um Mandat und Völkerrecht, politisch um Ziele und Folgen der Intervention, moralisch um die Frage, ob Schutz vor weiterer Massengewalt das Eingreifen rechtfertigte."
      },
      {
        id: "mq-nachkrieg-5",
        title: "Schweiz-Bezug",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Warum hat der Kosovo-Konflikt für die Schweiz eine besondere Bedeutung?",
        help: "Nenne mindestens zwei konkrete Bezüge.",
        placeholder: "Für die Schweiz ist der Kosovo-Konflikt besonders, weil ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-bpb-afterwar", "r-nachkrieg-republik-memory", "r-nachkrieg-wiki", "r-nachkrieg-yt-kosovo-podcast", "r-nachkrieg-pdf"],
        conceptGroups: [
          {
            label: "kosovarische Diaspora oder Migration in die Schweiz",
            variants: ["diaspora", "migration", "flucht", "geflüchtete", "schweiz", "kosovarische gemeinschaft"]
          },
          {
            label: "SWISSCOY oder KFOR-Einsatz",
            variants: ["swisscoy", "kfor", "friedenseinsatz", "armee", "seit 1999", "mission"]
          },
          {
            label: "langfristige gesellschaftliche oder politische Verbindung",
            variants: ["langfristig", "gesellschaft", "familien", "politik", "gegenwart", "verbindung"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Der Kosovo-Konflikt hat für die Schweiz besondere Bedeutung wegen der großen kosovarischen Diaspora und der Fluchtmigration. Hinzu kommt der Schweizer Beitrag über SWISSCOY im KFOR-Kontext seit 1999."
      },
      {
        id: "mq-nachkrieg-6",
        title: "Langzeitfolgen",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Welche langfristigen Herausforderungen blieben nach den Kriegen bestehen?",
        help: "Nenne mehr als nur 'Frieden sichern'.",
        placeholder: "Langfristig blieben vor allem ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-bpb-afterwar", "r-nachkrieg-republik-memory", "r-nachkrieg-yt-7", "r-nachkrieg-pdf"],
        conceptGroups: [
          {
            label: "Erinnerung oder Aufarbeitung",
            variants: ["erinnerung", "aufarbeitung", "gedenken", "vergangenheit", "justiz", "verbrechen"]
          },
          {
            label: "Demokratie oder politische Stabilität",
            variants: ["demokratie", "stabilität", "staatlichkeit", "institutionen", "reformen", "politik"]
          },
          {
            label: "Anerkennung, Versöhnung oder Zusammenleben",
            variants: ["anerkennung", "versöhnung", "zusammenleben", "misstrauen", "rückkehr", "gesellschaft"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Langfristig blieben Erinnerung und Aufarbeitung, der Aufbau stabiler demokratischer Institutionen sowie Anerkennung und Versöhnung zwischen den Gesellschaften zentrale Herausforderungen."
      },
      {
        id: "mq-nachkrieg-7",
        title: "Rugova und Thaçi",
        type: "short-text",
        challenge: "Zusatzcheck",
        prompt: "Wie unterscheiden sich Rugovas und Thaçis Strategien im Kosovo-Konflikt?",
        help: "Vergleiche die beiden Akteure über ihre politischen Wege.",
        placeholder: "Rugova setzte auf ..., Thaçi dagegen auf ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-bpb-afterwar", "r-nachkrieg-republik-memory", "r-nachkrieg-wiki"],
        conceptGroups: [
          {
            label: "Rugova als gewaltfreie oder zivile Strategie",
            variants: ["rugova", "gewaltfrei", "parallelpolitik", "zivil", "friedlich", "parallelstrukturen"]
          },
          {
            label: "Thaçi mit Bezug zur UÇK oder bewaffnetem Kampf",
            variants: ["thaçi", "thaci", "uçk", "u ck", "bewaffnet", "militärisch"]
          },
          {
            label: "unterschiedliche Wege zum politischen Ziel Kosovo",
            variants: ["unterschiedliche strategie", "gleiche frage", "politisches ziel", "unabhängigkeit", "status", "zwei wege"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Rugova steht für gewaltfreie Parallelpolitik und zivilen Widerstand. Thaçi steht für den politischen Arm der UÇK und damit für den bewaffneten Weg, mit dem dieselbe Statusfrage anders verfolgt wurde."
      },
      {
        id: "mq-nachkrieg-8",
        title: "Umbenennung in Zagreb",
        type: "short-text",
        challenge: "Textarbeit",
        prompt: "Welche symbolische Änderung beschreibt Altaras in Zagreb, und wofür steht sie?",
        help: "Nenne zuerst die konkrete Änderung und dann ihre politische Aussage.",
        placeholder: "Beschrieben wird ..., das steht für ...",
        conceptGroups: [
          {
            label: "Der Tito-Platz wird umbenannt",
            variants: ["tito platz", "umbenannt", "trg jossipa broza tita", "sveta democracja", "platz"]
          },
          {
            label: "Distanzierung von Tito oder vom sozialistischen Jugoslawien",
            variants: ["distanzierung", "tito", "sozialistisches jugoslawien", "bruch mit jugoslawien", "abgrenzung", "postjugoslawisch"]
          },
          {
            label: "neue nationale oder politische Erinnerungspolitik",
            variants: ["erinnerungspolitik", "neue symbolik", "umdeutung", "neue politische ordnung", "kroatien", "national"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Altaras beschreibt die Umbenennung des Tito-Platzes in Zagreb. Das steht für die Distanzierung vom sozialistischen Jugoslawien und für eine neue nationale Erinnerungspolitik im postjugoslawischen Kroatien."
      },
      {
        id: "mq-nachkrieg-9",
        title: "Kosovokrieg im Podcast",
        type: "short-text",
        challenge: "Textarbeit",
        prompt: "Welche drei Elemente müssen zusammen genannt werden, wenn du den Kosovokrieg knapp einordnest?",
        help: "Verbinde Vorgeschichte, bewaffnete Eskalation und internationale Reaktion.",
        placeholder: "Zum Kosovokrieg gehören ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-yt-kosovo-podcast", "r-nachkrieg-wiki"],
        conceptGroups: [
          {
            label: "Autonomieverlust oder serbische Herrschaft über Kosovo",
            variants: ["autonomieverlust", "autonomie", "serbische herrschaft", "belgrad", "milosevic", "kosovo"]
          },
          {
            label: "UÇK und serbische Repression oder Vertreibung",
            variants: ["uck", "u ck", "uçk", "repression", "vertreibung", "gewalt gegen kosovo-albaner"]
          },
          {
            label: "NATO-Intervention 1999",
            variants: ["nato", "luftangriffe", "1999", "intervention", "bombardierung", "eingriff"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Zum Kosovokrieg gehören der Entzug der Autonomie und die serbische Kontrolle über Kosovo, die Eskalation mit UÇK und serbischer Repression sowie die NATO-Intervention von 1999."
      }
    ],
    resources: [
      {
        id: "r-nachkrieg-doku-3",
        bucket: "Pflichtquelle: zuerst bearbeiten",
        type: "Video",
        title: "Balkan in Flammen, Folge 3: Jugoslawien in Trümmern",
        focus: "Dayton, Operation Sturm, Kosovo, NATO-Intervention und Langzeitfolgen",
        link: "https://www.dropbox.com/scl/fi/zsqgssv5j9utgjbosmyjb/Balkan-in-Flammen-Jugoslawien-in-Tr-mmern-Staffel-1-Folge-3.mp4?rlkey=xcgmhvo7qf3x0kx0u3zxpg1pu&st=txldgppw&dl=0",
        tags: ["Dropbox", "Pflicht", "Dokumentation"],
        selectionNote: "Hauptquelle der Station.",
        didacticUse: "Für Frage 1 bis 5, danach für Frage 6."
      },
      {
        id: "r-nachkrieg-wiki",
        bucket: "Referenztext: Kosovo-Kontext",
        type: "Website",
        title: "Wikipedia: Kosovokrieg",
        focus: "Autonomieverlust, Rugova, UÇK, Vertreibung, NATO-Einsatz und umstrittenes Mandat",
        link: "https://de.wikipedia.org/wiki/Kosovokrieg",
        tags: ["Wikipedia", "Referenz"],
        selectionNote: "Diese Referenz sichert den Kosovo-Kontext mit Daten, Begriffen und Verlauf.",
        didacticUse: "Vor allem für Frage 2, 3 und 5."
      },
      {
        id: "r-nachkrieg-wiki-bosnien",
        bucket: "Referenztext: Dayton und Nachkriegsordnung",
        type: "Website",
        title: "Wikipedia: Bosnienkrieg",
        focus: "Dayton-Abkommen, Kriegsende 1995 und Folgen der bosnischen Nachkriegsordnung",
        link: "https://de.wikipedia.org/wiki/Bosnienkrieg",
        tags: ["Wikipedia", "Referenz"],
        selectionNote: "Diese Referenz bleibt für Dayton, Bosnien und die Nachkriegsordnung wichtig.",
        didacticUse: "Vor allem für Frage 1, 4 und 6."
      },
      {
        id: "r-nachkrieg-pdf",
        bucket: "Arbeitsblatt: Dayton, Kosovo, NATO",
        type: "PDF",
        title: "Arbeitsblatt Nachkrieg",
        focus: "Leitfragen zu Dayton, Kosovo, NATO und langfristigen Problemen der Nachfolgestaaten",
        link: "assets/materials/balkan-in-flammen-fragen.pdf",
        tags: ["lokal", "Reader"],
        selectionNote: "Das Arbeitsblatt ergänzt die Doku um Urteilsfragen und Langzeitfolgen.",
        didacticUse: "Vor allem für Frage 4 bis 6."
      },
      {
        id: "r-nachkrieg-yt-7",
        bucket: "Vertiefung: Nachgeschichte und Erinnerung",
        type: "Video",
        title: "YouTube-Playlist, Video 7",
        focus: "Ergänzung zu Erinnerung und offenen Nachwirkungen",
        link: "https://www.youtube.com/watch?v=l1bSS3EkWyg&list=PL8991DFCF33730589&index=7",
        tags: ["YouTube", "Vertiefung"],
        selectionNote: "Ergänzung für Erinnerung, Anerkennung und Langzeitfolgen nach 1999.",
        didacticUse: "Hilft vor allem bei Frage 4 und 6."
      },
      {
        id: "r-nachkrieg-yt-kosovo-podcast",
        bucket: "Vertiefung: Kosovokrieg",
        type: "Video",
        title: "Damals Podcast: Folge 98 - Der Kosovokrieg",
        focus: "Podcastfolge zum Verlauf des Kosovokriegs, zu UÇK, serbischer Repression und NATO-Einsatz 1999",
        link: "https://www.youtube.com/watch?v=BtZbNiT46_E",
        tags: ["YouTube", "Podcast", "Kosovo"],
        selectionNote: "Geeignet zur gezielten Sicherung des Kosovo-Blocks der Station.",
        didacticUse: "Vor allem für Frage 2, 3, 5 und Kurzfrage 9."
      },
      {
        id: "r-nachkrieg-bpb-afterwar",
        bucket: "Textquelle: Nachkrieg",
        type: "Website",
        title: "bpb: Der bosnisch-herzegowinische Nachkrieg",
        focus: "Text zu Erinnerungskonflikten und Opferkonkurrenz im bosnischen Nachkrieg",
        link: "https://www.bpb.de/shop/zeitschriften/apuz/256923/der-bosnisch-herzegowinische-nachkrieg/",
        tags: ["bpb", "Text"],
        selectionNote: "Für Fragen zu Dayton und Langzeitfolgen.",
        didacticUse: "Vor allem für Frage 1, 4 und 6."
      },
      {
        id: "r-nachkrieg-republik-memory",
        bucket: "Textquelle: Schweiz und Erinnerung",
        type: "Website",
        title: "Republik: Die eine Geschichte gibt es nicht",
        focus: "Artikel aus der Schweiz zu Erinnerung, Diaspora und dem Blick auf die postjugoslawische Region",
        link: "https://www.republik.ch/2025/10/24/die-eine-geschichte-gibt-es-nicht",
        tags: ["Republik", "Text"],
        selectionNote: "Für die Schlussfrage mit Schweiz-Bezug.",
        didacticUse: "Vor allem für Frage 6."
      },
      {
        id: "r-nachkrieg-bild",
        bucket: "Bildquelle: Frieden mit Kriegsfolgen",
        type: "Bild",
        title: "Sarajevo im Mai 1996",
        focus: "Nachkriegsbild als Ausgangspunkt für die Frage nach Frieden mit sichtbaren Spuren des Krieges",
        link: "assets/module-images/sarajevo-may-1996.png",
        tags: ["lokal", "Bildquelle"],
        selectionNote: "Die Bildquelle macht sichtbar, dass Nachkrieg nicht gleich Konfliktlösung bedeutet.",
        didacticUse: "Vor allem für Frage 1 und 4."
      },
      {
        id: "r-nachkrieg-bild-kosovo",
        bucket: "Bildquelle: Kosovo 1999",
        type: "Bild",
        title: "Kriegsschäden im Kosovo 1999",
        focus: "Bildquelle zur Eskalation im Kosovo und zum Kontext der NATO-Intervention",
        link: "assets/module-images/war-in-kosovo-1999-2.jpg",
        tags: ["lokal", "Bildquelle"],
        selectionNote: "Diese Bildquelle konkretisiert die Gewalt im Kosovo und verhindert, dass die NATO-Frage ohne Kontext bleibt.",
        didacticUse: "Vor allem für Frage 2, 3 und 5."
      },
    ],
    questions: [
      {
        id: "q-nachkrieg-1",
        type: "short-text",
        challenge: "Urteilsvorbereitung",
        prompt:
          "Warum war das Dayton-Abkommen gleichzeitig notwendig und problematisch?",
        help:
          "Nenne mindestens zwei Seiten des Abkommens. Synonyme für Kriegsende, Friedensschluss, Spaltung und Blockade werden erkannt.",
        placeholder: "Dayton war notwendig, weil ..., aber problematisch, weil ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-bpb-afterwar", "r-nachkrieg-republik-memory", "r-nachkrieg-wiki-bosnien", "r-nachkrieg-pdf"],
        conceptGroups: [
          {
            label: "Dayton beendete den Krieg",
            variants: [
              "krieg beenden",
              "waffenstillstand",
              "frieden",
              "kämpfe stoppen",
              "friedensschluss",
              "gewalt beenden"
            ]
          },
          {
            label: "ethnische Teilung oder komplizierte Staatsstruktur wurde festgeschrieben",
            variants: [
              "ethnische spaltung",
              "zementiert",
              "komplizierter staat",
              "entitäten",
              "blockade",
              "teilungslogik"
            ]
          },
          {
            label: "langfristige politische Handlungsfähigkeit blieb eingeschränkt",
            variants: [
              "schwacher staat",
              "reformblockade",
              "schwerfällig",
              "instabil",
              "handlungsunfaehig",
              "politische blockade"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Dayton war notwendig, weil es die Kämpfe stoppte und einen Friedensrahmen schuf. Problematisch war aber, dass ethnische Teilung und eine schwerfällige Staatsstruktur festgeschrieben wurden, die Bosnien politisch bis heute belastet."
      },
      {
        id: "q-nachkrieg-2",
        type: "short-text",
        challenge: "Kontextualisierung",
        prompt:
          "Warum blieb der Kosovo nach Dayton trotz Rugovas gewaltfreier Strategie ein Konfliktraum?",
        help:
          "Die Sofortkorrektur erkennt verschiedene Formulierungen. Verbinde offene Statusfrage, serbische Repression, Rugovas Politik und den späteren Strategiewechsel.",
        placeholder: "Der Kosovo blieb ein Konfliktraum, weil ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-bpb-afterwar", "r-nachkrieg-republik-memory", "r-nachkrieg-wiki", "r-nachkrieg-yt-kosovo-podcast", "r-nachkrieg-bild-kosovo", "r-nachkrieg-pdf"],
        conceptGroups: [
          {
            label: "Kosovo war in Dayton nicht wirklich gelöst",
            variants: [
              "nicht gelöst",
              "offen geblieben",
              "kein thema in dayton",
              "ungelöste frage",
              "ausgeklammert",
              "nicht befriedet"
            ]
          },
          {
            label: "Rugovas gewaltfreie oder diplomatische Strategie brachte keine politische Lösung",
            variants: [
              "rugova",
              "gewaltfrei",
              "parallelstrukturen",
              "parallelstaat",
              "diplomatie",
              "friedliche strategie"
            ]
          },
          {
            label: "serbische Repression oder eingeschränkte Autonomie",
            variants: [
              "repression",
              "autonomie entzogen",
              "unterdrückung",
              "serbische kontrolle",
              "diskriminierung",
              "gewalt gegen albaner"
            ]
          },
          {
            label: "Radikalisierung oder Auftreten der UÇK",
            variants: [
              "uck",
              "radikalisierung",
              "bewaffneter widerstand",
              "strategiewechsel",
              "gewaltspirale",
              "aufstand"
            ]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Der Kosovo blieb ein Konfliktraum, weil Dayton die Statusfrage offenließ und Rugovas gewaltfreie Strategie keine politische Lösung erreichte. Zugleich hielten serbische Repression und der seit 1989 beschnittene Autonomiestatus den Druck hoch, sodass sich Teile der Kosovo-Albaner radikalisierten und die UÇK an Bedeutung gewann."
      },
      {
        id: "q-nachkrieg-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die Kosovo-Eskalation von Dayton bis zur Schwächung Miloševićs.",
        help:
          "Beginne mit Dayton und ende mit den politischen Folgen nach dem NATO-Krieg.",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-bpb-afterwar", "r-nachkrieg-republik-memory", "r-nachkrieg-wiki", "r-nachkrieg-yt-kosovo-podcast", "r-nachkrieg-bild-kosovo", "r-nachkrieg-pdf"],
        items: [
          {
            id: "dayton-1995",
            label: "1995 beendet das Dayton-Abkommen den Bosnienkrieg.",
            detail: "Der Frieden schafft Sicherheit, aber keine einfache Lösung.",
            imageSrc: "assets/module-images/dayton-agreement.jpg",
            imageAlt: "Unterzeichnung des Dayton-Abkommens 1995"
          },
          {
            id: "rugova-strategie",
            label: "Nach Dayton setzt Rugova im Kosovo weiter auf Parallelstrukturen und gewaltfreie Politik.",
            detail: "Die Statusfrage bleibt offen, obwohl die bewaffnete Eskalation zunächst vermieden werden soll.",
            imageSrc: "assets/module-images/ibrahim-rugova.jpg",
            imageAlt: "Ibrahim Rugova als Vertreter der gewaltfreien Kosovo-Politik",
            imageFit: "contain",
            imagePosition: "center top",
            imageBackground: "rgba(241, 236, 228, 0.95)"
          },
          {
            id: "uck",
            label: "Im Kosovo gewinnt der bewaffnete Widerstand der UÇK an Bedeutung.",
            detail: "Die Konfliktlogik verschiebt sich in einen neuen Raum.",
            imageSrc: "assets/module-images/flag-kosovo-liberation-army.png",
            imageAlt: "Flagge der UÇK als Symbol des bewaffneten Widerstands im Kosovo"
          },
          {
            id: "serbische-repression-1998",
            label: "1998/99 verschärfen serbische Sicherheitskräfte Repression, Vertreibung und Gewalt im Kosovo.",
            detail: "Damit wird aus der offenen Statusfrage ein Krieg mit massiven Fluchtbewegungen.",
            imageSrc: "assets/module-images/war-in-kosovo-1999-2.jpg",
            imageAlt: "Kriegsschäden im Kosovo 1999"
          },
          {
            id: "nato-1999",
            label: "1999 greift die NATO Serbien und Montenegro ohne UN-Mandat militärisch an.",
            detail: "Die NATO erklärt den Einsatz mit dem Schutz der Kosovo-Albaner vor weiterer Gewalt und Vertreibung.",
            imageSrc: "assets/module-images/nato-bombing-yugoslavia-1999.jpg",
            imageAlt: "Szene aus dem Kontext der NATO-Luftangriffe 1999"
          },
          {
            id: "milosevic-geschwächt",
            label: "Trotz nationalistischer Mobilisierung wird Milošević durch Krieg und Bombardierung langfristig geschwächt.",
            detail: "Die Herrschaft verliert innenpolitisch an Stabilität.",
            imageSrc: "assets/module-images/milosevic-in-hague.jpg",
            imageAlt: "Slobodan Milošević in Den Haag als Symbol seines späteren Machtverlusts",
            imageFit: "contain",
            imagePosition: "center top",
            imageBackground: "rgba(241, 236, 228, 0.95)"
          }
        ],
        correctOrder: [
          "dayton-1995",
          "rugova-strategie",
          "uck",
          "serbische-repression-1998",
          "nato-1999",
          "milosevic-geschwächt"
        ],
        explanation:
          "Die Reihenfolge zeigt, dass Dayton den Zerfall nicht abschloss. Im Kosovo führte die offene Statusfrage von Rugovas gewaltfreier Politik über UÇK und serbische Repression zur NATO-Intervention und zu einer neuen Schwächung Miloševićs."
      },
      {
        id: "q-nachkrieg-4",
        type: "open-analysis",
        challenge: "Historisches Urteil",
        prompt:
          "Beurteile die Aussage: Die internationale Intervention kam auf dem Balkan zu spät, veränderte die Kriegslogik aber dennoch entscheidend. Diskutiere diese These mit Blick auf Srebrenica, NATO und Dayton.",
        help:
          "Eine tragfähige Antwort verbindet zeitliche Verspätung, politische Wirkung und bleibende Probleme der Friedensordnung.",
        placeholder: "Die internationale Intervention kam tatsächlich spät, aber ...",
        teacherPrompt:
          "Achte darauf, dass die Lernenden ein begründetes Urteil formulieren und nicht bei moralischer Zustimmung oder Ablehnung stehen bleiben.",
        commonPitfall:
          "Oft wird entweder nur die Verspätung betont oder nur die Wirksamkeit später Intervention. Historisch relevant ist gerade die Spannung zwischen beidem.",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-bpb-afterwar", "r-nachkrieg-republik-memory", "r-nachkrieg-wiki-bosnien", "r-nachkrieg-wiki", "r-nachkrieg-pdf", "r-nachkrieg-yt-7"],
        minWords: 140,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["srebrenica", "nato", "dayton", "kosovo", "intervention", "sarajevo"],
        rubric: [
          { concept: "Verspätung internationaler Reaktion", keywords: ["spät", "zu spät", "verzögert", "untätig", "srebrenica", "un mandats"] },
          { concept: "militärische oder politische Wirkung später Intervention", keywords: ["nato", "luftangriffe", "wendepunkt", "druck", "veränderte", "krieg"] },
          { concept: "Dayton als Ergebnis und Begrenzung", keywords: ["dayton", "frieden", "abkommen", "spaltung", "notwendig", "problematisch"] },
          { concept: "Abwägung von Nutzen und Kosten", keywords: ["zivile opfer", "ambivalent", "umstritten", "einerseits", "andererseits", "zugleich"] },
          { concept: "langfristige Folgen", keywords: ["versöhnung", "demokratie", "anerkennung", "erinnerung", "heute", "nachwirkt"] }
        ],
        modelAnswer:
          "Die Intervention kam in Bosnien eindeutig zu spät, was sich am Scheitern der UN und an Srebrenica zeigt. Dennoch veränderten NATO-Druck und Dayton die Kriegslogik entscheidend, weil sie die Kämpfe stoppten und neue Machtverhaeltnisse schufen. Das Ergebnis blieb aber ambivalent, da Frieden erreicht wurde, ohne ethnische Spaltung und langfristige Instabilitaet wirklich zu überwinden."
      },
      {
        id: "q-nachkrieg-5",
        type: "short-text",
        challenge: "Vertiefung",
        prompt:
          "Warum griff die NATO 1999 im Kosovokonflikt ein, und wie rechtfertigten die NATO-Staaten das trotz fehlendem UN-Mandat?",
        help:
          "Gesucht ist der Zusammenhang aus Kosovo-Gewalt und politischer Begründung, nicht dein eigenes Urteil. Synonyme für Repression, Vertreibung, humanitären Schutz und fehlendes Mandat werden erkannt.",
        placeholder: "Die NATO-Staaten rechtfertigten den Einsatz damit, dass ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-bpb-afterwar", "r-nachkrieg-republik-memory", "r-nachkrieg-wiki", "r-nachkrieg-bild-kosovo", "r-nachkrieg-pdf"],
        conceptGroups: [
          {
            label: "Gewalt, Repression oder Vertreibung im Kosovo",
            variants: ["kosovo", "vertreibung", "repression", "gewalt gegen albaner", "flucht", "menschenrechtsverletzungen"]
          },
          {
            label: "Schutz von Zivilisten oder humanitäre Begründung",
            variants: ["humanitär", "humanitär", "zivilisten schuetzen", "zivilisten schützen", "menschen schuetzen", "menschen schützen"]
          },
          {
            label: "Verhinderung weiterer Gewalt oder Vertreibung",
            variants: ["vertreibung stoppen", "gewalt verhindern", "eskalation stoppen", "massaker verhindern", "ethnische saeuberung", "ethnische säuberung"]
          },
          {
            label: "Intervention wurde als notwendig dargestellt",
            variants: ["notwendig", "letztes mittel", "eingreifen", "intervention", "ohne un mandat", "politisch gerechtfertigt"]
          }
        ],
        successThreshold: 2,
        modelAnswer:
          "Die NATO griff 1999 vor dem Hintergrund von Repression, Vertreibung und eskalierender Gewalt im Kosovo ein. Die NATO-Staaten rechtfertigten den Einsatz vor allem humanitär: Sie behaupteten, weitere Gewalt und massive Menschenrechtsverletzungen verhindern zu müssen, obwohl ein UN-Mandat fehlte."
      },
      {
        id: "q-nachkrieg-6",
        type: "open-analysis",
        challenge: "Vertiefung",
        prompt:
          "Welche langfristigen Herausforderungen bestehen für die Staaten des ehemaligen Jugoslawiens bis heute im Blick auf Erinnerung, Demokratie und internationale Anerkennung, und warum spielt die Schweiz im Kosovo-Kontext eine besondere Rolle? Begründe mit Materialbezügen.",
        help:
          "Eine starke Antwort verbindet Nachkriegspolitik, Erinnerungskonflikte, Gegenwartsprobleme und den Schweiz-Bezug über Diaspora und SWISSCOY.",
        placeholder: "Bis heute bestehen Herausforderungen, weil ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-bpb-afterwar", "r-nachkrieg-republik-memory", "r-nachkrieg-wiki-bosnien", "r-nachkrieg-wiki", "r-nachkrieg-pdf", "r-nachkrieg-yt-7"],
        minWords: 120,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["erinnerung", "anerkennung", "demokratie", "kosovo", "dayton", "versöhnung", "schweiz", "diaspora", "swisscoy"],
        rubric: [
          { concept: "Erinnerungskonflikte oder Deutungskämpfe", keywords: ["erinnerung", "gedenken", "deutung", "geschichtspolitik", "srebrenica", "vergangenheit"] },
          { concept: "demokratische oder institutionelle Probleme", keywords: ["demokratie", "institutionen", "korruption", "staat", "dayton", "blockade"] },
          { concept: "Fragen internationaler Anerkennung", keywords: ["anerkennung", "kosovo", "international", "eu", "völkerrecht", "status"] },
          { concept: "Versöhnung als unvollendete Aufgabe", keywords: ["versöhnung", "trauma", "vertrauen", "gesellschaft", "nachwirkt", "konfliktfolgen"] },
          { concept: "besondere Rolle der Schweiz", keywords: ["schweiz", "diaspora", "swisscoy", "kfor", "fluchtmigration", "kosovo-albaner"] },
          { concept: "historisches Urteil", keywords: ["insgesamt", "deshalb", "entscheidend", "zeigt", "schlussendlich"] }
        ],
        modelAnswer:
          "Die Nachfolgestaaten stehen bis heute vor Erinnerungskonflikten, institutionellen Problemen und offenen Fragen internationaler Anerkennung, besonders im Fall Kosovo. Zugleich bleibt Versöhnung schwierig, weil Kriegserfahrungen, konkurrierende Geschichtsbilder und politische Blockaden weiter nachwirken. Für die Schweiz ist der Kosovo-Kontext besonders wichtig, weil hier eine große kosovarische Diaspora lebt und die Schweiz sich seit 1999 mit der SWISSCOY an der KFOR-Mission beteiligt."
      }
    ]
  }
];

window.YUGOSLAVIA_MODULES = MODULES;
