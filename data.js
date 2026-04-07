const MODULES = [
  {
    id: "vorgeschichte",
    step: "1",
    title: "Pulverfass Jugoslawien",
    era: "1914 bis 1989",
    intro:
      "Diese Auftaktstation rekonstruiert die langen historischen Linien des späteren Zerfalls: imperiale Altlasten, Gewalt im Zweiten Weltkrieg, Titos Herrschaft, föderale Spannungen und den Aufstieg nationalistischer Politik.",
    goal:
      "Du kannst erklären, warum Jugoslawien unter Tito stabil wirkte, aber zugleich innere Konflikte, regionale Ungleichheit und unterdrückte Nationalismen weitertrug.",
    route:
      "Sieh zuerst die erste Dokumentationsfolge, arbeite dann mit dem PDF-Fragenkatalog und nutze die beiden Playlist-Videos für Wiederholung oder Verdichtung. Sichere zunächst Begriffe, dann Ursachenketten, dann Deutungen.",
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
        "Titos Herrschaft nicht mit echter Konfliktloesung verwechseln",
        "Foederale Ordnung als spannungsreiche Konstruktion erkennen",
        "Historische Langzeitlinien und aktuelle politische Instrumentalisierung verbinden"
      ],
      misconceptions: [
        "Jugoslawien sei erst 1991 ploetzlich instabil geworden",
        "Ethnische Unterschiede allein erklaerten den Krieg",
        "Titos Staat sei ein harmonischer Vielvölkerstaat gewesen"
      ],
      product:
        "Begriffsnetz zu Stabilisierung und Zerfall oder ein begründeter Kurzkommentar zur Vorgeschichte.",
      extension:
        "Mit einer Debattenfrage arbeiten: War Jugoslawien unter Tito ein tragfaehiger Staat oder nur ein eingefrorener Konfliktraum?"
    },
    visual: {
      src: "assets/module-images/sarajevo-may-1996.png",
      alt: "Skyline von Sarajevo mit sichtbaren Kriegsschaeden im Mai 1996",
      sourceLabel: "Sarajevo_may_1996.png"
    },
    visualDossierTitle: "Vier Bilder für die Vorgeschichte des Zerfalls",
    visualDossierIntro:
      "Die Bilder dieser Station sind nicht Dekoration, sondern historische Verdichtungen: Sie zeigen, welche Langzeitlinien später von Nationalisten wieder aktiviert wurden.",
    visualDossier: [
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Assassination_at_Sarajevo.jpg?width=1200",
        alt: "Historische Darstellung des Attentats von Sarajevo 1914",
        title: "Sarajevo 1914",
        caption: "Das Attentat ist hier nicht bloß Auftakt des Ersten Weltkriegs, sondern ein Symbol dafür, wie der Balkan früh als Krisenraum Europas gelesen wurde.",
        whyItMatters:
          "Das Bild gehört in diese Station, weil es zeigt, dass die Region lange vor 1991 mit Fragen von Nationalismus, Gewalt und internationaler Machtpolitik verknüpft war."
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jasenovac_prisoners_enter_the_camp.jpg?width=1200",
        alt: "Historische Aufnahme aus dem Kontext des Lagers Jasenovac",
        title: "Ustascha-Terror und Kriegsgewalt",
        caption: "Das Foto steht für die Gewalt- und Opfererfahrungen des Zweiten Weltkriegs, die später politisch immer wieder aufgerufen wurden.",
        whyItMatters:
          "Es ist für die Station zentral, weil der Zerfall Jugoslawiens nicht verstanden werden kann, ohne diese traumatischen Erinnerungshorizonte mitzudenken."
      },
      {
        src: "assets/module-images/josip-broz-tito-uniform-portrait.jpg",
        alt: "Josip Broz Tito im Uniformporträt",
        title: "Tito als Stabilisierungsmacht",
        caption: "Das Porträt verdichtet den autoritären Kern des jugoslawischen Modells: Einheit wurde politisch organisiert und notfalls repressiv gesichert.",
        whyItMatters:
          "Das Bild ist hier sinnvoll, weil es die Leitfrage der Station bündelt: Warum wirkte Jugoslawien stabil, obwohl die Konflikte unter der Oberfläche fortbestanden?"
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gazimestan_Monument.jpg?width=1200",
        alt: "Gazimestan-Denkmal auf dem Amselfeld",
        title: "Amselfeld als politischer Erinnerungsort",
        caption: "Nicht das Denkmal selbst löste den Zerfall aus, sondern seine politische Aufladung in der späten Phase Jugoslawiens.",
        whyItMatters:
          "Das Bild zeigt, wie Geschichte als Ressource für gegenwärtige Mobilisierung benutzt wurde und damit direkt in die Zerfallsphase hineinragt."
      }
    ],
    actorFocus: {
      title: "Schlüsselfigur dieser Station",
      intro:
        "In der Vorgeschichte steht nicht ein ganzes Personalensemble im Mittelpunkt, sondern Tito als Stabilisierungsmacht. An ihm lässt sich erkennen, wie Jugoslawien zusammengehalten wurde, ohne seine Konflikte wirklich zu lösen."
    },
    actors: [
      {
        name: "Josip Broz Tito",
        role: "kommunistischer Staatsführer Jugoslawiens",
        lens: "Er verkörpert die autoritäre Einheitsformel des Staates.",
        whyHere:
          "Diese Station fragt nach der Stabilität vor dem Zerfall. Tito ist deshalb zentral, weil seine Herrschaft Konflikte kontrollierte, aber nicht dauerhaft bearbeitete.",
        imageSrc: "assets/module-images/josip-broz-tito-uniform-portrait.jpg",
        imageAlt: "Josip Broz Tito im Uniformporträt"
      }
    ],
    prompts: [
      "Achte darauf, wie die Doku Stabilitaet und Repression gleichzeitig beschreibt.",
      "Notiere, welche historischen Altlasten vor 1990 immer wieder aktiviert wurden.",
      "Unterscheide zwischen föderaler Form, realer Machtverteilung und nationalistischer Mobilisierung.",
      "Halte fest, warum 1989/90 auf bereits bestehende Konfliktlinien zurückgegriffen werden konnte."
    ],
    resources: [
      {
        id: "r-vorgeschichte-doku-1",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Balkan in Flammen, Folge 1: Pulverfass Jugoslawien",
        focus: "Vorgeschichte, Tito, föderale Ordnung, Nationalismus und Aufstieg Milosevics",
        link: "https://www.dropbox.com/scl/fi/mbvt6nif4o3njrb2noijk/Balkan-in-Flammen-Pulverfass-Jugoslawien-Staffel-1-Folge-1.mp4?rlkey=5glwor40fqn3j8hcfpz0yzpwo&st=tj8dx0a7&dl=0",
        tags: ["Dropbox", "Pflicht", "Dokumentation"]
      },
      {
        id: "r-vorgeschichte-pdf",
        bucket: "Reader und Fragen",
        type: "PDF",
        title: "Balkan in Flammen: Fragenheft",
        focus: "Dreiteiliger Fragenreader mit Leitfragen zu Vorgeschichte, Krieg und Nachordnung",
        link: "assets/materials/balkan-in-flammen-fragen.pdf",
        tags: ["lokal", "Reader", "Fragen"]
      },
      {
        id: "r-vorgeschichte-yt-1",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "YouTube-Playlist, Video 1",
        focus: "zusätzlicher Impuls zur historischen Einordnung des Zerfalls",
        link: "https://www.youtube.com/watch?v=_HGCHTueg-Q&list=PL8991DFCF33730589",
        tags: ["YouTube", "Vertiefung"]
      },
      {
        id: "r-vorgeschichte-yt-2",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "YouTube-Playlist, Video 2",
        focus: "ergänzende Perspektive auf Nationalismus, Krise und politische Radikalisierung",
        link: "https://www.youtube.com/watch?v=q8uG0o0b4wQ&list=PL8991DFCF33730589&index=2",
        tags: ["YouTube", "Vertiefung"]
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
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-pdf"],
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
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-pdf", "r-vorgeschichte-yt-2"],
        conceptGroups: [
          {
            label: "Stabilitaet war teilweise nur politisch erzwungen",
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
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-pdf", "r-vorgeschichte-yt-1"],
        items: [
          {
            id: "sarajevo-1914",
            label: "Das Attentat von Sarajevo macht den Balkan zum Auslöser einer gesamteuropäischen Krise.",
            detail: "1914 wird die Region zum Schauplatz eines weltpolitischen Umbruchs.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Assassination_at_Sarajevo.jpg?width=900",
            imageAlt: "Historische Aufnahme zum Attentat von Sarajevo 1914"
          },
          {
            id: "ustasa-ww2",
            label: "Im Zweiten Weltkrieg verstaerken Ustascha-Terror und Besatzung die interethnischen Traumata.",
            detail: "Gewalterfahrungen prägen das kollektive Gedächtnis über Jahrzehnte.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Jasenovac_prisoners_enter_the_camp.jpg?width=900",
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
            detail: "1948 veraendert sich die internationale Stellung des Staates grundlegend.",
            imageSrc: "assets/module-images/josip-broz-tito-uniform-portrait.jpg",
            imageAlt: "Josip Broz Tito als Symbol des Bruchs mit Stalin"
          },
          {
            id: "amselfeld-1989",
            label: "Milosevic mobilisiert 1989 mit nationaler Symbolpolitik auf dem Amselfeld.",
            detail: "Geschichte wird offen für gegenwaertige Machtpolitik instrumentalisiert.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Gazimestan_Monument.jpg?width=900",
            imageAlt: "Gazimestan-Denkmal auf dem Amselfeld"
          },
          {
            id: "zagreb-1990",
            label: "Das Fussballspiel Dinamo Zagreb gegen Roter Stern Belgrad wird 1990 zum Symbol der Eskalation.",
            detail: "Die gesellschaftliche Polarisierung schlaegt sichtbar in offene Konfrontation um.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Stadion_Maksimir_2011.jpg?width=900",
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
          "Wichtig ist eine klare These: historische Altlasten allein reichen nicht als Erklärung, aber sie duerfen auch nicht ausgeblendet werden.",
        placeholder: "Die Vorgeschichte schuf Voraussetzungen, doch ...",
        teacherPrompt:
          "Achte darauf, dass Lernende zwischen Strukturbedingungen und politischer Zuspitzung unterscheiden.",
        commonPitfall:
          "Haefig wird nur auf uralte Feindschaften verwiesen, ohne die Rolle von Propaganda, Machtkampf und Krisenpolitik zu gewichten.",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-pdf", "r-vorgeschichte-yt-1", "r-vorgeschichte-yt-2"],
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
          { concept: "Abwaegung zwischen Struktur und Handlung", keywords: ["nicht automatisch", "nicht zwangsläufig", "einerseits", "andererseits", "zugleich", "während"] },
          { concept: "historisches Urteil", keywords: ["deshalb", "entscheidend", "insgesamt", "meine these", "ich bewerte"] }
        ],
        modelAnswer:
          "Die Vorgeschichte machte Gewalt moeglich, aber nicht unausweichlich. Titos Staat hielt Konflikte durch Repression und Balancepolitik zusammen, ohne sie zu lösen. Erst als politische Akteure wie Milosevic historische Traumata und nationalistische Symbole bewusst mobilisierten, wurden alte Konfliktlinien in konkrete Kriegspolitik übersetzt."
      },
      {
        id: "q-vorgeschichte-5",
        type: "short-text",
        challenge: "Fragenheft integriert",
        prompt:
          "Erkläre knapp, was das Beispiel Goli Otok über Titos Repressionsapparat zeigt.",
        help:
          "Gesucht ist keine Lagergeschichte im Detail, sondern die politische Aussage dieses Beispiels über Herrschaft und Abschreckung.",
        placeholder: "Goli Otok zeigt, dass ...",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-pdf"],
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
        challenge: "Fragenheft integriert",
        prompt:
          "Warum war Titos Bruch mit Stalin 1948 weltpolitisch bedeutsam, und welche Folgen hatte er für Jugoslawiens Sonderstellung? Begründe mit Materialbezügen.",
        help:
          "Eine gute Antwort verbindet den Ost-West-Konflikt mit der besonderen internationalen Stellung Jugoslawiens.",
        placeholder: "Der Bruch mit Stalin war weltpolitisch bedeutsam, weil ...",
        sourceIds: ["r-vorgeschichte-doku-1", "r-vorgeschichte-pdf", "r-vorgeschichte-yt-1"],
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
      "Diese Station verfolgt den Übergang von Krise zu offener Gewalt. Im Zentrum stehen Machtpolitik, Medienpropaganda, die Kriege in Slowenien und Kroatien sowie die Frage, warum Europa so spät und so uneinheitlich reagierte.",
    goal:
      "Du kannst erklären, wie politische Führungen, mediale Feindbilder und militärische Entscheidungen aus einer Staatskrise bewaffnete Konflikte machten.",
    route:
      "Arbeite zuerst mit Folge 2 der Doku, sichere dann die Kernbegriffe mit den kurzen Antworten und ordne anschließend die Zuspitzung 1990 bis 1992. Die Transferfrage verlangt eine Gewichtung der internationalen Reaktion.",
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
        "Der Krieg sei ploetzlich ausgebrochen",
        "Medien seien nur Begleitung und nicht Teil der Eskalation gewesen",
        "Europa habe gar keine Handlungsoptionen gehabt"
      ],
      product:
        "Kurzkommentar zur Frage, ob politisches Zögern oder vorschnelle Anerkennung schwerer wog.",
      extension:
        "Die Station laesst sich gut mit einer Kartenarbeit zu Slowenien, Kroatien und Bosnien verbinden."
    },
    visualDossierTitle: "Bilder der politischen und militärischen Zuspitzung",
    visualDossierIntro:
      "Diese Auswahl zeigt, wie der Zerfall vom politischen Projekt in sichtbare Eskalation überging: Führungsfiguren, symbolische Schauplätze und zerstörte Städte gehören hier zusammen.",
    visualDossier: [
      {
        src: "assets/module-images/milosevic-in-hague.jpg",
        alt: "Slobodan Milošević im Gerichtssaal in Den Haag",
        title: "Milošević als politische Zuspitzungsfigur",
        caption: "Das Bild aus Den Haag verweist bewusst auf die spätere juristische Aufarbeitung und rahmt seine Rolle nicht neutral, sondern als historisch verantwortete Politik.",
        whyItMatters:
          "Es gehört hierher, weil diese Station erklärt, wie Nationalismus, Machtgewinn und Medienpolitik zusammenwirkten."
      },
      {
        src: "assets/module-images/franjo-tudjman-1995.jpg",
        alt: "Franjo Tuđman im Jahr 1995",
        title: "Tuđman und das kroatische Staatsprojekt",
        caption: "Das Porträt steht nicht einfach für Kroatien, sondern für die politische Logik einer nationalen Staatsgründung in der Zerfallskrise.",
        whyItMatters:
          "Es ist hier relevant, weil Lernende die Gegenüberstellung unterschiedlicher Führungsprojekte verstehen sollen, statt den Krieg als diffusen Ethnienkonflikt zu lesen."
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Stadion_Maksimir_2011.jpg?width=1200",
        alt: "Stadion Maksimir in Zagreb",
        title: "Maksimir als Erinnerungsort der Eskalation",
        caption: "Das heutige Stadionbild steht für den symbolischen Ort, an dem gesellschaftliche Polarisierung 1990 in offene Gewalt umschlug.",
        whyItMatters:
          "Es hilft, den berüchtigten Fußballmoment als gesellschaftliches Warnsignal und nicht als isolierte Anekdote zu deuten."
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vukovar_water_tower.jpg?width=1200",
        alt: "Wasserturm von Vukovar",
        title: "Vukovar als Bild des Krieges",
        caption: "Der Wasserturm wurde zum internationalen Symbol für Belagerung, Zerstörung und die Radikalisierung des Kroatienkriegs.",
        whyItMatters:
          "Dieses Bild verdichtet die Leitfrage der Station: Wann wird aus nationalistischer Politik ein Krieg, der international nicht mehr übersehen werden kann?"
      }
    ],
    actorFocus: {
      title: "Akteurskonstellation dieser Eskalationsphase",
      intro:
        "Hier stehen die Führungsfiguren des Zerfalls im Zentrum. Nicht irgendeine Personensammlung ist wichtig, sondern die politische Gegenüberstellung von Milošević und Tuđman als konkurrierende Nationalstaatsprojekte."
    },
    actors: [
      {
        name: "Slobodan Milošević",
        role: "serbischer Machtpolitiker und zentraler Akteur der Zentralisierungs- und Nationalismuspolitik",
        lens: "Er steht in dieser Station für Machtgewinn durch serbische Mobilisierung und historische Symbolpolitik.",
        whyHere:
          "Sein Porträt gehört hierher, weil die Station erklärt, wie aus Staatskrise und Medienpropaganda konkrete Eskalationspolitik wurde.",
        imageSrc: "assets/module-images/milosevic-in-hague.jpg",
        imageAlt: "Slobodan Milošević im Gerichtssaal in Den Haag"
      },
      {
        name: "Franjo Tuđman",
        role: "kroatischer Präsident und Führungsfigur des kroatischen Staatsprojekts",
        lens: "Er steht für die Gegenlogik einer nationalen Staatsgründung auf kroatischer Seite.",
        whyHere:
          "Sein Porträt ist in dieser Station sinnvoll, weil Lernende hier die politische Zuspitzung als Konkurrenz von Projekten und nicht als anonymen 'Ethnienkonflikt' verstehen sollen.",
        imageSrc: "assets/module-images/franjo-tudjman-1995.jpg",
        imageAlt: "Franjo Tuđman im Jahr 1995"
      }
    ],
    prompts: [
      "Achte auf Unterschiede zwischen Milosevics und Tudjmans Politikzielen.",
      "Notiere Beispiele dafür, wie Fernsehen und Propaganda Feindbilder verdichteten.",
      "Unterscheide zwischen Slowenien, Kroatien und Bosnien: Nicht jeder Konflikt folgte derselben Logik.",
      "Halte fest, wo europäische Diplomatie zögerte und wo sie durch Entscheidungen neue Folgen auslöste.",
      "Nutze die Porträts von Milošević und Tuđman, um Führungsfiguren des Zerfalls konkreter zu verorten."
    ],
    resources: [
      {
        id: "r-zerfall-doku-2",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Balkan in Flammen, Folge 2: Ein Land zerfaellt",
        focus: "Nationalismus, Propaganda, Kroatienkrieg, Bosnien und internationale Reaktionen",
        link: "https://www.dropbox.com/scl/fi/euklg1q25mcmsqurroa9n/Balkan-in-Flammen-Ein-Land-zerf-llt-Staffel-1-Folge-2.mp4?rlkey=480olq20vrdtf0g3a5fnomrmr&st=69p85xwk&dl=0",
        tags: ["Dropbox", "Pflicht", "Dokumentation"]
      },
      {
        id: "r-zerfall-pdf",
        bucket: "Reader und Fragen",
        type: "PDF",
        title: "Balkan in Flammen: Fragenheft",
        focus: "Leitfragen zu Propaganda, Kriegsausbruch, Voelkerarmee, Vukovar und Bosnien",
        link: "assets/materials/balkan-in-flammen-fragen.pdf",
        tags: ["lokal", "Reader"]
      },
      {
        id: "r-zerfall-yt-3",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "YouTube-Playlist, Video 3",
        focus: "ergänzender Erklärimpuls zur Staatskrise 1990/91",
        link: "https://www.youtube.com/watch?v=Fm-pdnVz8EY&list=PL8991DFCF33730589&index=3",
        tags: ["YouTube", "Vertiefung"]
      },
      {
        id: "r-zerfall-yt-4",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "YouTube-Playlist, Video 4",
        focus: "zusätzliche Perspektive auf Kriegsausbruch und internationale Politik",
        link: "https://www.youtube.com/watch?v=sT_09hb1kzQ&list=PL8991DFCF33730589&index=4",
        tags: ["YouTube", "Vertiefung"]
      },
    ],
    questions: [
      {
        id: "q-zerfall-1",
        type: "short-text",
        challenge: "Akteursanalyse",
        prompt:
          "Erkläre knapp, wie sich Milosevic und Tudjman in Zielen und politischer Strategie unterschieden.",
        help:
          "Die Sofortkorrektur erwartet keine Biographien, sondern einen historischen Vergleich ihrer Politik.",
        placeholder: "Milosevic und Tudjman unterschieden sich vor allem darin, dass ...",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-pdf"],
        conceptGroups: [
          {
            label: "serbische Zentralisierung oder Großserbien bei Milosevic",
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
            label: "kroatische Unabhängigkeit oder Staatsgründung bei Tudjman",
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
          "Milosevic verfolgte eine serbisch dominierte Zentralisierung beziehungsweise großserbische Politik, während Tudjman auf einen eigenständigen kroatischen Nationalstaat zielte. Beide arbeiteten mit historischer Symbolpolitik und nationaler Mobilisierung."
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
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-pdf", "r-zerfall-yt-4"],
        conceptGroups: [
          {
            label: "Feindbilder und Angst wurden verstaerkt",
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
              "unterstuetzung für krieg",
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
          "Die Propaganda verstaerkte Angst und Feindbilder, polarisierte die Gesellschaft in nationale Lager und schuf Zustimmung für Gewalt. Fernsehen wirkte dabei nicht nur informierend, sondern mobilisierend und legitimierend."
      },
      {
        id: "q-zerfall-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die Zuspitzung des Zerfalls von 1990 bis 1992 in eine schluessige Reihenfolge.",
        help:
          "Beginne mit dem Fussballspiel von Zagreb und ende mit dem Beginn der Belagerung Sarajevos.",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-pdf", "r-zerfall-yt-3"],
        items: [
          {
            id: "zagreb-1990",
            label: "Das Fussballspiel in Zagreb im Mai 1990 wird zum Symbol der eskalierenden Polarisierung.",
            detail: "Gesellschaftliche Gewalt ist bereits vor dem offenen Krieg sichtbar.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Stadion_Maksimir_2011.jpg?width=900",
            imageAlt: "Stadion Maksimir in Zagreb"
          },
          {
            id: "slowenien-1991",
            label: "Der Zehn-Tage-Krieg in Slowenien zeigt 1991 die militärische Krise des Bundesstaats.",
            detail: "Der schnelle Konflikt legt Schwachstellen der jugoslawischen Volksarmee offen.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Slovenian_war_map_(cropped).jpg?width=900",
            imageAlt: "Darstellung des Zehn-Tage-Kriegs in Slowenien"
          },
          {
            id: "vukovar-1991",
            label: "Die Belagerung und Zerstörung Vukovars radikalisiert den Kroatienkrieg im Herbst 1991.",
            detail: "Das Bild des Krieges veraendert sich international deutlich.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Vukovar_water_tower.jpg?width=900",
            imageAlt: "Wasserturm von Vukovar als Symbol der Zerstörung"
          },
          {
            id: "anerkennung-1991",
            label: "Deutschland und weitere Staaten erkennen Kroatien und Slowenien Ende 1991 beziehungsweise Anfang 1992 an.",
            detail: "Aussenpolitik greift nun offen in die Zerfallslage ein.",
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
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Sarajevo_Siege_ShellingDestruction.jpg?width=900",
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
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-pdf", "r-zerfall-yt-3", "r-zerfall-yt-4"],
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
        challenge: "Fragenheft integriert",
        prompt:
          "Warum blieb die europäische Staatengemeinschaft zu Beginn des Zerfalls zunächst weitgehend untätig?",
        help:
          "Gesucht sind politische Gründe, nicht bloß ein moralisches Urteil. Synonyme für Uneinigkeit, Fehleinschätzung und fehlende Eingriffsbereitschaft werden erkannt.",
        placeholder: "Europa blieb zunächst untätig, weil ...",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-pdf", "r-zerfall-yt-4"],
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
        challenge: "Fragenheft integriert",
        prompt:
          "Warum wurde Vukovar zu einem internationalen Symbol des Kroatienkriegs, und was änderte dieses Bild an der Wahrnehmung des Konflikts? Begründe mit Materialbezügen.",
        help:
          "Verbinde militärische Gewalt, mediale Wirkung und internationale Wahrnehmung.",
        placeholder: "Vukovar wurde zum Symbol, weil ...",
        sourceIds: ["r-zerfall-doku-2", "r-zerfall-pdf"],
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
      "Im Zentrum dieser Station steht der Bosnienkrieg als radikalste Phase des Zerfalls. Behandelt werden ethnische Säuberungen, die Belagerung Sarajevos, das Versagen der UN und der Einschnitt von Srebrenica.",
    goal:
      "Du kannst zentrale Formen der Gewalt im Bosnienkrieg erklären, Sarajevo als Symbolraum deuten und Srebrenica als Wendepunkt internationaler Wahrnehmung einordnen.",
    route:
      "Nutze Folge 3 der Doku als Hauptquelle, arbeite den Wikipedia-Artikel zum Bosnienkrieg gezielt mit und verwende die beiden Sarajevo-Bilder für visuelle Deutungen. Die Transferfrage verbindet Bildanalyse mit Kriegsverlauf und Nachkriegsrealitaet.",
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
        "UN-Versagen, Srebrenica und NATO-Intervention miteinander verknuepfen"
      ],
      misconceptions: [
        "Bosnienkrieg sei nur ein chaotischer Buergerkrieg ohne Planung gewesen",
        "Srebrenica sei ein isoliertes Einzelereignis",
        "Sarajevo stehe nur für Zerstörung und nicht auch für multiethnisches Zusammenleben"
      ],
      product:
        "Bildgestuetzte Transferantwort oder kommentierte Chronologie der Eskalation 1992 bis 1995.",
      extension:
        "Mit einer Zusatzfrage arbeiten: Warum wurde gerade Sarajevo weltweit zu einem Bild des Krieges?"
    },
    visual: {
      src: "assets/module-images/sarajevo-grbavica.jpeg",
      alt: "Zerstörte Gebäude im Sarajevoer Stadtteil Grbavica nach dem Krieg",
      sourceLabel: "Sarajevo_Grbavica.jpeg"
    },
    visualDossierTitle: "Bosnienkrieg als Bild- und Gewaltraum",
    visualDossierIntro:
      "Die Bilder dieser Station zeigen nicht nur Zerstörung, sondern verschiedene Ebenen des Krieges: politische Führung, militärische Gewalt, Stadtraum und die Erinnerung an Srebrenica.",
    visualDossier: [
      {
        src: "assets/module-images/alija-izetbegovic.jpg",
        alt: "Alija Izetbegović im Porträt",
        title: "Izetbegović und der bosnische Staat",
        caption: "Das Porträt markiert die politische Perspektive des international anerkannten bosnischen Staates.",
        whyItMatters:
          "Es ist hier wichtig, weil der Bosnienkrieg nicht nur als Tätergeschichte erzählt werden darf, sondern auch als Verteidigung eines angegriffenen Staates."
      },
      {
        src: "assets/module-images/ratko-mladic-1993.jpg",
        alt: "Ratko Mladić im Jahr 1993",
        title: "Militärische Gewaltlogik",
        caption: "Mladić steht in dieser Station für die operative Umsetzung von Belagerung, Gewalt gegen Zivilisten und Srebrenica.",
        whyItMatters:
          "Das Bild gehört hierher, weil es die militärische Dimension des Krieges personifiziert, die in der Doku immer wieder sichtbar wird."
      },
      {
        src: "assets/module-images/sarajevo-grbavica.jpeg",
        alt: "Zerstörte Gebäude im Stadtteil Grbavica in Sarajevo",
        title: "Sarajevo als zerstörter Stadtraum",
        caption: "Dieses Foto zeigt Sarajevo nicht abstrakt, sondern als konkreten Lebensraum, in dem Krieg den Alltag eingeschrieben hat.",
        whyItMatters:
          "Es trägt die Station, weil Sarajevo zum globalen Symbol für Belagerung, Zivilopfer und die Zerstörung eines multiethnischen Stadtlebens wurde."
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Srebrenica-memorial.jpg?width=1200",
        alt: "Gedenkstätte von Srebrenica",
        title: "Srebrenica als Erinnerungsort",
        caption: "Das Bild verschiebt den Blick von der Ereignischronologie zur Frage, wie Genozid erinnert und politisch aufgearbeitet wird.",
        whyItMatters:
          "Es ist hier sinnvoll, weil diese Station zeigen soll, dass Srebrenica nicht nur Wendepunkt, sondern auch dauerhafte Erinnerung und offene Wunde ist."
      }
    ],
    actorFocus: {
      title: "Akteur*innen des Bosnienkriegs",
      intro:
        "In dieser Station werden Porträts nicht als Sammelalbum verwendet, sondern als politische und militärische Rollenkarte. Die Auswahl zeigt, wer Bosnien verteidigte, wer die bosnisch-serbische Politik prägte und wer die Gewalt organisatorisch trug."
    },
    actors: [
      {
        name: "Alija Izetbegović",
        role: "Präsident von Bosnien-Herzegowina",
        lens: "Er steht für den international anerkannten bosnischen Staat und seine politische Selbstbehauptung.",
        whyHere:
          "Sein Porträt ist hier sinnvoll, weil diese Station nicht nur Täterperspektiven, sondern auch die politische Führung des angegriffenen Staates sichtbar machen muss.",
        imageSrc: "assets/module-images/alija-izetbegovic.jpg",
        imageAlt: "Alija Izetbegović im Porträt"
      },
      {
        name: "Radovan Karadžić",
        role: "politischer Führer der bosnischen Serben",
        lens: "Er steht für die politische Planung der Abspaltung und ethnischen Homogenisierung.",
        whyHere:
          "Karadžić gehört in diese Station, weil Lernende die Verbindung von politischer Programmatik, Belagerung und ethnischer Säuberung nachvollziehen sollen.",
        imageSrc: "assets/module-images/radovan-karadzic-1994.jpg",
        imageAlt: "Radovan Karadžić im März 1994"
      },
      {
        name: "Ratko Mladić",
        role: "militärischer Kommandeur der bosnisch-serbischen Kräfte",
        lens: "Er steht für die operative Gewaltlogik des Krieges, von der Belagerung bis zu Srebrenica.",
        whyHere:
          "Sein Bild ist hier didaktisch sinnvoll, weil die Station ausdrücklich nach militärischer Strategie, Gewalt gegen Zivilisten und der Rolle von Srebrenica fragt.",
        imageSrc: "assets/module-images/ratko-mladic-1993.jpg",
        imageAlt: "Ratko Mladić im Jahr 1993"
      },
      {
        name: "Biljana Plavšić",
        role: "führende Politikerin der Republika Srpska",
        lens: "Sie macht sichtbar, dass politische Radikalisierung und Kriegsführung nicht auf einzelne Männer reduziert werden dürfen.",
        whyHere:
          "Ihr Porträt bleibt hier, weil es die politische Breite der bosnisch-serbischen Führung zeigt und die Station dadurch differenzierter wird.",
        imageSrc: "assets/module-images/biljana-plavsic.jpeg",
        imageAlt: "Biljana Plavšić im Porträt"
      }
    ],
    prompts: [
      "Achte auf die Verbindung von militärischer Strategie und Gewalt gegen Zivilisten.",
      "Notiere, warum Sarajevo weltweit zu einem Symbol des Bosnienkriegs wurde.",
      "Arbeite heraus, was mit ethnischer Säuberung konkret gemeint ist.",
      "Halte fest, warum Srebrenica und das Scheitern der UN später politischen Druck auf die NATO erhoehten.",
      "Ordne die Akteur*innenporträts ihren politischen und militärischen Rollen im Bosnienkrieg zu."
    ],
    resources: [
      {
        id: "r-bosnien-doku-3",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Balkan in Flammen, Folge 3: Jugoslawien in Trümmern",
        focus: "Bosnienkrieg, Srebrenica, NATO, Dayton, Kosovo und Langzeitfolgen",
        link: "https://www.dropbox.com/scl/fi/zsqgssv5j9utgjbosmyjb/Balkan-in-Flammen-Jugoslawien-in-Tr-mmern-Staffel-1-Folge-3.mp4?rlkey=xcgmhvo7qf3x0kx0u3zxpg1pu&st=txldgppw&dl=0",
        tags: ["Dropbox", "Pflicht", "Dokumentation"]
      },
      {
        id: "r-bosnien-wiki",
        bucket: "Artikel und Referenz",
        type: "Website",
        title: "Wikipedia: Bosnienkrieg",
        focus: "Daten, Kriegsparteien, Verlauf, Belagerung Sarajevos, Srebrenica und Dayton",
        link: "https://de.wikipedia.org/wiki/Bosnienkrieg",
        tags: ["Wikipedia", "Referenz"]
      },
      {
        id: "r-bosnien-pdf",
        bucket: "Reader und Fragen",
        type: "PDF",
        title: "Balkan in Flammen: Fragenheft",
        focus: "Fragen zu Sarajevo, Omarska, sexueller Gewalt, Srebrenica und internationaler Reaktion",
        link: "assets/materials/balkan-in-flammen-fragen.pdf",
        tags: ["lokal", "Reader"]
      },
      {
        id: "r-bosnien-yt-5",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "YouTube-Playlist, Video 5",
        focus: "ergänzender Impuls zum Bosnienkrieg und seiner Gewaltlogik",
        link: "https://www.youtube.com/watch?v=Koy2LRZCT3Y&list=PL8991DFCF33730589&index=5",
        tags: ["YouTube", "Vertiefung"]
      },
      {
        id: "r-bosnien-yt-6",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "YouTube-Playlist, Video 6",
        focus: "zusätzliche Perspektive auf internationale Intervention und Kriegswende",
        link: "https://www.youtube.com/watch?v=2Imx42AjXj0&list=PL8991DFCF33730589&index=6",
        tags: ["YouTube", "Vertiefung"]
      },
      {
        id: "r-bosnien-bild-1",
        bucket: "Bildquellen",
        type: "Bild",
        title: "Sarajevo Grbavica",
        focus: "Zerstörter Stadtraum als Spur von Belagerung, Frontverlauf und Kriegsfolgen",
        link: "assets/module-images/sarajevo-grbavica.jpeg",
        tags: ["lokal", "Bildquelle"]
      },
      {
        id: "r-bosnien-bild-2",
        bucket: "Bildquellen",
        type: "Bild",
        title: "Sarajevo im Mai 1996",
        focus: "Nachkriegssituation der Hauptstadt mit sichtbaren Einschlägen und Brüchen",
        link: "assets/module-images/sarajevo-may-1996.png",
        tags: ["lokal", "Bildquelle"]
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
            detail: "Die politische Entscheidung loest eine neue Konfliktphase aus.",
            imageSrc: "assets/module-images/alija-izetbegovic.jpg",
            imageAlt: "Alija Izetbegović im Kontext der bosnischen Unabhängigkeit"
          },
          {
            id: "sarajevo-beginn-1992",
            label: "Kurz darauf beginnt die Belagerung Sarajevos.",
            detail: "Der Krieg wird an einer Hauptstadt exemplarisch sichtbar.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Sarajevo_Siege_ShellingDestruction.jpg?width=900",
            imageAlt: "Zerstörungen in Sarajevo während der Belagerung"
          },
          {
            id: "washington-1994",
            label: "Das Washingtoner Abkommen von 1994 beendet den Krieg zwischen Bosniaken und Kroaten.",
            detail: "Ein Teilkonflikt wird damit neu geordnet.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bosnian_President_Alija_Izetbegovic_and_Croatian_President_Franjo_Tudjman_sign_the_Croat-Muslim_Federation_Peace_Agreement_-_Flickr_-_The_Central_Intelligence_Agency.jpg?width=900",
            imageAlt: "Unterzeichnung des Washingtoner Abkommens 1994"
          },
          {
            id: "srebrenica-1995",
            label: "Im Juli 1995 kommt es zum Massaker von Srebrenica.",
            detail: "Das UN-Schutzversprechen scheitert auf dramatische Weise.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Srebrenica-memorial.jpg?width=900",
            imageAlt: "Gedenkstätte von Srebrenica"
          },
          {
            id: "nato-1995",
            label: "Die NATO greift 1995 mit Luftangriffen gegen bosnisch-serbische Ziele ein.",
            detail: "Erst jetzt veraendert sich die militärische Dynamik deutlich.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bombing_republika_srpska.jpg?width=900",
            imageAlt: "Luftoperationen gegen bosnisch-serbische Stellungen 1995"
          },
          {
            id: "dayton-1995",
            label: "Das Dayton-Abkommen beendet Ende 1995 den Krieg.",
            detail: "Der Frieden stoppt die Kämpfe, schreibt aber ethnische Trennung fort.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/DaytonAgreement.jpg?width=900",
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
        placeholder: "Die beiden Bilder zeigen nicht nur Schaeden, sondern ...",
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
        challenge: "Fragenheft integriert",
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
            variants: ["friedensmission", "kein frieden", "kriegsrealitaet", "bürgerkrieg", "gewaltlage", "realer krieg"]
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
        challenge: "Fragenheft integriert",
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
      "Die letzte Station fragt nach den Folgen des Krieges: Warum war Dayton zugleich notwendig und problematisch? Weshalb verlagerte sich die Gewalt später in den Kosovo? Und welche Herausforderungen prägen die Staaten des ehemaligen Jugoslawiens bis heute?",
    goal:
      "Du kannst Frieden als ambivalente Ordnung erklären, den Kosovo-Konflikt in die Zerfallsgeschichte einordnen und langfristige Probleme von Versöhnung, Demokratie und Anerkennung benennen.",
    route:
      "Nutze die dritte Dokumentationsfolge für Dayton und Kosovo, sichere die Leitbegriffe mit den kurzen Antworten und ordne danach die späten Entwicklungen. Die Transferfrage verlangt ein historisches Urteil über internationale Intervention.",
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
        "internationale Intervention historisch abwaegen statt nur moralisch bewerten"
      ],
      misconceptions: [
        "Mit Dayton sei der gesamte Zerfall abgeschlossen gewesen",
        "Kosovo habe mit Bosnien nichts zu tun",
        "Intervention sei entweder ganz richtig oder ganz falsch gewesen"
      ],
      product:
        "Urteilsorientierter Kurzaufsatz zur Frage, ob internationale Intervention zu spät, aber dennoch entscheidend war.",
      extension:
        "Anschlussfaehig an Gegenwartsfragen von Erinnerungspolitik, EU-Perspektive und Anerkennung des Kosovo."
    },
    visual: {
      src: "assets/module-images/sarajevo-may-1996.png",
      alt: "Sarajevo im Mai 1996 als Bild einer brüchigen Nachkriegsordnung",
      sourceLabel: "Sarajevo_may_1996.png"
    },
    visualDossierTitle: "Bilder des schwierigen Friedens",
    visualDossierIntro:
      "Diese Bilder markieren den Übergang von Kriegsende zu ungelösten Nachkonflikten: Friedensvertrag, sichtbare Spuren des Krieges, Kosovo und die Gewalt der NATO-Intervention.",
    visualDossier: [
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/DaytonAgreement.jpg?width=1200",
        alt: "Unterzeichnung des Dayton-Abkommens 1995",
        title: "Dayton als notwendiger Friedensschluss",
        caption: "Das Bild zeigt den diplomatischen Erfolg, der die Kämpfe beendete, aber noch nichts über die Qualität des Friedens sagt.",
        whyItMatters:
          "Es gehört hierher, weil diese Station klären soll, warum Dayton zugleich Lösung und Problem war."
      },
      {
        src: "assets/module-images/ibrahim-rugova.jpg",
        alt: "Ibrahim Rugova vor Bücherregal und Kosovo-Flagge",
        title: "Rugova und die nichtmilitärische Kosovo-Strategie",
        caption: "Rugova steht in dieser Station für die oft übersehene politische Alternative zur späteren bewaffneten Eskalation.",
        whyItMatters:
          "Das Bild ist hier sinnvoll, weil es zeigt, dass der Kosovo-Konflikt vor der UÇK auch als Frage von Diplomatie, Parallelstrukturen und gewaltfreiem Widerstand gelesen werden kann."
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/NATO_bombing_of_Yugoslavia_1999_(13810195285).jpg?width=1200",
        alt: "Szene aus dem Kontext der NATO-Luftangriffe 1999",
        title: "Intervention ohne UN-Mandat",
        caption: "Die NATO-Luftangriffe markieren einen Wendepunkt, bleiben aber rechtlich und politisch hoch umstritten.",
        whyItMatters:
          "Dieses Bild gehört hierher, weil die Station eine Urteilsbildung verlangt, die Wirksamkeit und Problemkosten von Intervention zusammendenkt."
      },
      {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ruins_of_the_Radio_Television_of_Serbia,_destroyed_during_1999_NATO_aggression_2007.jpg?width=1200",
        alt: "Ruinen der serbischen Rundfunkanstalt nach den NATO-Angriffen",
        title: "Kosten des Eingriffs",
        caption: "Das Bild hält fest, dass militärische Intervention nicht nur Entscheidungen auf Regierungsebene, sondern reale Zerstörung und zivile Folgen bedeutet.",
        whyItMatters:
          "Es ist didaktisch zentral, weil die Station nicht bei der Formel 'zu spät, aber nötig' stehen bleiben soll."
      }
    ],
    actorFocus: {
      title: "Akteure des schwierigen Friedens",
      intro:
        "In der Nachkriegsstation geht es nicht mehr um möglichst viele Gesichter, sondern um zwei gegensätzliche politische Logiken: Rugovas gewaltfreie Kosovo-Strategie und Miloševićs fortgesetzte Machtpolitik."
    },
    actors: [
      {
        name: "Ibrahim Rugova",
        role: "kosovo-albanischer Politiker und Vertreter einer gewaltfreien Strategie",
        lens: "Er steht für den Versuch, den Kosovo-Konflikt politisch und diplomatisch statt militärisch zu führen.",
        whyHere:
          "Rugova ist für diese Station sinnvoll, weil er zeigt, dass der Weg zur späteren Eskalation im Kosovo nicht von Anfang an militärisch festgelegt war.",
        imageSrc: "assets/module-images/ibrahim-rugova.jpg",
        imageAlt: "Ibrahim Rugova vor Bücherregal und Kosovo-Flagge"
      },
      {
        name: "Slobodan Milošević",
        role: "serbischer Machthaber in der späten Zerfallsphase",
        lens: "Er steht hier nicht mehr für den Aufstieg, sondern für Repression, Kriegsausweitung und späteren Machtverlust.",
        whyHere:
          "Sein Bild taucht in dieser Station erneut auf, weil sich am Kosovo-Konflikt und an der NATO-Intervention die Spätphase seiner Politik besonders klar lesen lässt.",
        imageSrc: "assets/module-images/milosevic-in-hague.jpg",
        imageAlt: "Slobodan Milošević im Gerichtssaal in Den Haag"
      }
    ],
    prompts: [
      "Achte auf den Doppelcharakter von Dayton: Frieden schaffen und Spaltung verfestigen.",
      "Notiere, warum Kosovo nach 1995 nicht befriedet war.",
      "Unterscheide zwischen legaler, politischer und moralischer Bewertung internationaler Intervention.",
      "Halte langfristige Herausforderungen fest: Erinnerung, Demokratie, Anerkennung und Versöhnung.",
      "Nutze das Porträt Ibrahim Rugovas, um die Kosovo-Frage auch aus der Perspektive politischer und gewaltfreier Strategie zu betrachten."
    ],
    resources: [
      {
        id: "r-nachkrieg-doku-3",
        bucket: "Pflichtvideos",
        type: "Video",
        title: "Balkan in Flammen, Folge 3: Jugoslawien in Trümmern",
        focus: "Dayton, Operation Sturm, Kosovo, NATO-Intervention und Langzeitfolgen",
        link: "https://www.dropbox.com/scl/fi/zsqgssv5j9utgjbosmyjb/Balkan-in-Flammen-Jugoslawien-in-Tr-mmern-Staffel-1-Folge-3.mp4?rlkey=xcgmhvo7qf3x0kx0u3zxpg1pu&st=txldgppw&dl=0",
        tags: ["Dropbox", "Pflicht", "Dokumentation"]
      },
      {
        id: "r-nachkrieg-wiki",
        bucket: "Artikel und Referenz",
        type: "Website",
        title: "Wikipedia: Bosnienkrieg",
        focus: "Friedensschluss 1995, Folgen der Kriegsphase und Kontext für die Nachordnung",
        link: "https://de.wikipedia.org/wiki/Bosnienkrieg",
        tags: ["Wikipedia", "Referenz"]
      },
      {
        id: "r-nachkrieg-pdf",
        bucket: "Reader und Fragen",
        type: "PDF",
        title: "Balkan in Flammen: Fragenheft",
        focus: "Leitfragen zu Dayton, Kosovo, NATO und langfristigen Problemen der Nachfolgestaaten",
        link: "assets/materials/balkan-in-flammen-fragen.pdf",
        tags: ["lokal", "Reader"]
      },
      {
        id: "r-nachkrieg-yt-7",
        bucket: "Ergänzende Videos",
        type: "Video",
        title: "YouTube-Playlist, Video 7",
        focus: "zusätzlicher Impuls zu Nachgeschichte, Erinnerung und offenen Konfliktfolgen",
        link: "https://www.youtube.com/watch?v=l1bSS3EkWyg&list=PL8991DFCF33730589&index=7",
        tags: ["YouTube", "Vertiefung"]
      },
      {
        id: "r-nachkrieg-bild",
        bucket: "Bildquelle",
        type: "Bild",
        title: "Sarajevo im Mai 1996",
        focus: "Nachkriegsbild als Ausgangspunkt für die Frage nach Frieden mit sichtbaren Spuren des Krieges",
        link: "assets/module-images/sarajevo-may-1996.png",
        tags: ["lokal", "Bildquelle"]
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
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-wiki", "r-nachkrieg-pdf"],
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
          "Warum blieb der Kosovo nach Dayton ein Konfliktraum?",
        help:
          "Die Sofortkorrektur erkennt verschiedene Formulierungen. Verbinde ungeloste politische Fragen mit Repression und Strategiewechsel.",
        placeholder: "Der Kosovo blieb ein Konfliktraum, weil ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-pdf", "r-nachkrieg-yt-7"],
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
            label: "Radikalisierung oder Auftreten der UCK",
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
          "Der Kosovo blieb offen, weil Dayton die Frage nicht löste. Serbische Repression und der Verlust von Autonomie steigerten den Druck, sodass sich Teile der albanischen Bevölkerung radikalisierten und die UCK an Bedeutung gewann."
      },
      {
        id: "q-nachkrieg-3",
        type: "drag-order",
        challenge: "Chronologie",
        prompt:
          "Ordne die spätere Zerfallsphase von Dayton bis zur Schwachstellung Milosevics.",
        help:
          "Beginne mit Dayton und ende mit den politischen Folgen nach dem NATO-Krieg.",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-pdf", "r-nachkrieg-yt-7"],
        items: [
          {
            id: "dayton-1995",
            label: "1995 beendet das Dayton-Abkommen den Bosnienkrieg.",
            detail: "Der Frieden schafft Sicherheit, aber keine einfache Lösung.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/DaytonAgreement.jpg?width=900",
            imageAlt: "Unterzeichnung des Dayton-Abkommens 1995"
          },
          {
            id: "sarajevo-1996",
            label: "1996 zeigt das Nachkriegsbild Sarajevos die sichtbaren Spuren eines formal beendeten Krieges.",
            detail: "Frieden und Zerstörung existieren nebeneinander.",
            imageSrc: "assets/module-images/sarajevo-may-1996.png",
            imageAlt: "Sarajevo im Mai 1996"
          },
          {
            id: "uck",
            label: "Im Kosovo gewinnt der bewaffnete Widerstand der UCK an Bedeutung.",
            detail: "Die Konfliktlogik verschiebt sich in einen neuen Raum.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_Kosovo_Liberation_Army.png?width=900",
            imageAlt: "Flagge der UCK als Symbol des bewaffneten Widerstands im Kosovo"
          },
          {
            id: "nato-1999",
            label: "1999 greift die NATO Serbien und Montenegro ohne UN-Mandat militärisch an.",
            detail: "Die Intervention bleibt bis heute rechtlich und politisch umstritten.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/NATO_bombing_of_Yugoslavia_1999_(13810195285).jpg?width=900",
            imageAlt: "Szene aus dem Kontext der NATO-Luftangriffe 1999"
          },
          {
            id: "zivile-opfer",
            label: "Die Bombardierung verursacht zivile Opfer und schwere gesellschaftliche Schaeden.",
            detail: "Intervention bedeutet keinen konfliktfreien Eingriff.",
            imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Ruins_of_the_Radio_Television_of_Serbia,_destroyed_during_1999_NATO_aggression_2007.jpg?width=900",
            imageAlt: "Zerstörungen an der serbischen Rundfunkanstalt nach den NATO-Angriffen"
          },
          {
            id: "milosevic-geschwaecht",
            label: "Trotz nationalistischer Mobilisierung wird Milosevic durch Krieg und Bombardierung langfristig geschwaecht.",
            detail: "Die Herrschaft verliert innenpolitisch an Stabilitaet.",
            imageSrc: "assets/module-images/milosevic-in-hague.jpg",
            imageAlt: "Slobodan Milošević in Den Haag als Symbol seines späteren Machtverlusts"
          }
        ],
        correctOrder: [
          "dayton-1995",
          "sarajevo-1996",
          "uck",
          "nato-1999",
          "zivile-opfer",
          "milosevic-geschwaecht"
        ],
        explanation:
          "Die Reihenfolge zeigt, dass Dayton den Zerfall nicht abschloss. Der Kosovo-Konflikt, die NATO-Intervention und ihre Folgen gehoeren zur späten, aber entscheidenden Phase der Jugoslawienkriege."
      },
      {
        id: "q-nachkrieg-4",
        type: "open-analysis",
        challenge: "Historisches Urteil",
        prompt:
          "Beurteile die Aussage: Die internationale Intervention kam auf dem Balkan zu spät, veraenderte die Kriegslogik aber dennoch entscheidend. Diskutiere diese These mit Blick auf Srebrenica, NATO und Dayton.",
        help:
          "Eine tragfaehige Antwort verbindet zeitliche Verspätung, politische Wirkung und bleibende Probleme der Friedensordnung.",
        placeholder: "Die internationale Intervention kam tatsächlich spät, aber ...",
        teacherPrompt:
          "Achte darauf, dass die Lernenden ein begründetes Urteil formulieren und nicht bei moralischer Zustimmung oder Ablehnung stehen bleiben.",
        commonPitfall:
          "Oft wird entweder nur die Verspätung betont oder nur die Wirksamkeit später Intervention. Historisch relevant ist gerade die Spannung zwischen beidem.",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-wiki", "r-nachkrieg-pdf", "r-nachkrieg-yt-7"],
        minWords: 140,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "nuance", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["srebrenica", "nato", "dayton", "kosovo", "intervention", "sarajevo"],
        rubric: [
          { concept: "Verspätung internationaler Reaktion", keywords: ["spät", "zu spät", "verzögert", "untätig", "srebrenica", "un mandats"] },
          { concept: "militärische oder politische Wirkung später Intervention", keywords: ["nato", "luftangriffe", "wendepunkt", "druck", "veraenderte", "krieg"] },
          { concept: "Dayton als Ergebnis und Begrenzung", keywords: ["dayton", "frieden", "abkommen", "spaltung", "notwendig", "problematisch"] },
          { concept: "Abwaegung von Nutzen und Kosten", keywords: ["zivile opfer", "ambivalent", "umstritten", "einerseits", "andererseits", "zugleich"] },
          { concept: "langfristige Folgen", keywords: ["versöhnung", "demokratie", "anerkennung", "erinnerung", "heute", "nachwirkt"] }
        ],
        modelAnswer:
          "Die Intervention kam in Bosnien eindeutig zu spät, was sich am Scheitern der UN und an Srebrenica zeigt. Dennoch veraenderten NATO-Druck und Dayton die Kriegslogik entscheidend, weil sie die Kämpfe stoppten und neue Machtverhaeltnisse schufen. Das Ergebnis blieb aber ambivalent, da Frieden erreicht wurde, ohne ethnische Spaltung und langfristige Instabilitaet wirklich zu überwinden."
      },
      {
        id: "q-nachkrieg-5",
        type: "short-text",
        challenge: "Fragenheft integriert",
        prompt:
          "Wie rechtfertigten die NATO-Staaten 1999 ihren Einsatz trotz fehlendem UN-Mandat?",
        help:
          "Gesucht ist die politische Begründung, nicht dein eigenes Urteil. Synonyme für humanitären Schutz, Verhinderung weiterer Gewalt und Intervention werden erkannt.",
        placeholder: "Die NATO-Staaten rechtfertigten den Einsatz damit, dass ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-pdf", "r-nachkrieg-yt-7"],
        conceptGroups: [
          {
            label: "Schutz von Zivilisten oder humanitäre Begründung",
            variants: ["humanitaer", "humanitär", "zivilisten schuetzen", "zivilisten schützen", "menschen schuetzen", "menschen schützen"]
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
          "Die NATO-Staaten rechtfertigten den Einsatz vor allem humanitär: Sie behaupteten, weitere Gewalt, Vertreibung und massive Menschenrechtsverletzungen verhindern zu müssen. Der Eingriff wurde also als politisch notwendig dargestellt, obwohl ein UN-Mandat fehlte."
      },
      {
        id: "q-nachkrieg-6",
        type: "open-analysis",
        challenge: "Fragenheft integriert",
        prompt:
          "Welche langfristigen Herausforderungen bestehen für die Staaten des ehemaligen Jugoslawiens bis heute im Blick auf Erinnerung, Demokratie und internationale Anerkennung? Begründe mit Materialbezügen.",
        help:
          "Eine starke Antwort verbindet Nachkriegspolitik, Erinnerungskonflikte und Gegenwartsprobleme.",
        placeholder: "Bis heute bestehen Herausforderungen, weil ...",
        sourceIds: ["r-nachkrieg-doku-3", "r-nachkrieg-wiki", "r-nachkrieg-pdf", "r-nachkrieg-yt-7"],
        minWords: 120,
        structureExpectations: {
          mandatory: ["thesis", "evidence", "comparison", "conclusion"],
          targetHits: 5
        },
        sourceHints: ["erinnerung", "anerkennung", "demokratie", "kosovo", "dayton", "versöhnung"],
        rubric: [
          { concept: "Erinnerungskonflikte oder Deutungskämpfe", keywords: ["erinnerung", "gedenken", "deutung", "geschichtspolitik", "srebrenica", "vergangenheit"] },
          { concept: "demokratische oder institutionelle Probleme", keywords: ["demokratie", "institutionen", "korruption", "staat", "dayton", "blockade"] },
          { concept: "Fragen internationaler Anerkennung", keywords: ["anerkennung", "kosovo", "international", "eu", "völkerrecht", "status"] },
          { concept: "Versöhnung als unvollendete Aufgabe", keywords: ["versöhnung", "trauma", "vertrauen", "gesellschaft", "nachwirkt", "konfliktfolgen"] },
          { concept: "historisches Urteil", keywords: ["insgesamt", "deshalb", "entscheidend", "zeigt", "schlussendlich"] }
        ],
        modelAnswer:
          "Die Nachfolgestaaten stehen bis heute vor Erinnerungskonflikten, institutionellen Problemen und offenen Fragen internationaler Anerkennung, besonders im Fall Kosovo. Zugleich bleibt Versöhnung schwierig, weil Kriegserfahrungen, konkurrierende Geschichtsbilder und politische Blockaden weiter nachwirken."
      }
    ]
  }
];

window.YUGOSLAVIA_MODULES = MODULES;
